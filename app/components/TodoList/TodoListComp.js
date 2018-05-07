import React, { PureComponent } from 'react';
import {
    StatusBar, View, ListView
} from 'react-native';
import {
    Container, Header,
    Title, Left,
    Icon, Right,
    Button, Body,
    Content, Text,
    Card, CardItem,
    List, ListItem,
    Item, Input, CheckBox
} from "native-base";

//
import TodoHeaderComp from './TodoHeaderComp';
import TodoFooterComp from './TodoFooterComp';
//
import styles from './styles';

/**
 * @class TodoListComponent
 */
export default class TodoListComp extends PureComponent {
    /**
     * 
     */
    constructor(props) {
        super(props);
        // Init state
        this.state = {
            searchText: ''
        };
        // Bind method(s)
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onDoneTodo = this.onDoneTodo.bind(this);
        this.onDelTodo = this.onDelTodo.bind(this);
        this.onFilterTodo = this.onFilterTodo.bind(this);
    }

    /**
     * 
     * @memberof TodoListComp
     */
    _ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    /**
     * 
     * @var {Object}
     * @memberof TodoListComp
     */
    _inputs = {
        text: ''
    }

    /**
     * 
     * 
     * @memberof TodoListComp
     */
    onAddTodo(text) {
        if ('[object String]' === Object.prototype.toString.call(text)) {
            this.props.todoAdd(text.trim());
        }
    }

    /**
     * 
     * 
     * @memberof TodoListComp
     */
    onDoneTodo(todo) {
        this.props.todoDone(todo.id, !todo.done);
    }

    /**
     * 
     * 
     * @memberof TodoListComp
     */
    onDelTodo(todo) {
        this.props.todoDel(todo.id);
    }

    /**
     * 
     * 
     * @memberof TodoListComp
     */
    onFilterTodo(filter) {
        this.props.todoFilter(filter);
    }

    /**
     * 
     * @memberof TodoListComp
     */
    _calCounts() {
        const { todos, filter } = this.props;
        let counts = {
            1: todos.length,
            2: 0, // active
            3: 0  // completed
        };
        //
        todos.map(todo => {
            if (!todo.done) { // Active
                counts[2] += 1;
            } else { // Completed
                counts[3] += 1;
            }
        });
        return counts;
    }

    /**
     * 
     */
    render() {
        //
        const { todos, filter } = this.props;
        let { searchText } = this.state;
        let lcSearchText = (searchText ? searchText : '').toLowerCase();
        // +++
        let counts = this._calCounts();
        // console.log('render#todos: ', todos, 'render#count: ', count);
        return (
            <Container>
                <TodoHeaderComp
                    onChangeTextSearch={(text, nbRef) => {
                        this.setState(() => ({ searchText: text }));
                    }}
                    onSubmitInputTodo={(text, nbRef) => {
                        this.onAddTodo(text);
                        nbRef._root.clear();
                    }}
                />
                <Content style={[styles.content]}>
                    <List
                        style={[styles.list]}
                        dataSource={this._ds.cloneWithRows(todos)}
                        renderRow={todo => {
                            // Search by text ?
                            if (lcSearchText) {
                                let lcTodoText = todo.text.toLowerCase();
                                if (lcTodoText.indexOf(lcSearchText) < 0) {
                                    return;
                                }
                            }
                            if (2 === filter && todo.done) { // Completed
                                return;
                            }
                            if (3 === filter && !todo.done) { // Active
                                return;
                            }
                            return (
                                <ListItem style={[styles.listItem]}>
                                    <CheckBox
                                        onPress={evt => this.onDoneTodo(todo)}
                                        checked={todo.done}
                                    />
                                    <Body>
                                        <Text style={[styles.listItemText, todo.done ? styles.listItemTextDone : undefined]}>{todo.text}</Text>
                                    </Body>
                                </ListItem>
                            );
                        }}
                        renderLeftHiddenRow={todo => (
                            <Button info onPress={() => alert('info')}>
                                <Icon active name="information-circle" />
                            </Button>
                        )}
                        renderRightHiddenRow={(todo, secId, rowId, rowMap) => (
                            <Button full danger onPress={evt => this.onDelTodo(todo)}>
                                <Icon active name="trash" />
                            </Button>
                        )}
                        leftOpenValue={70}
                        rightOpenValue={-70}
                    />
                </Content>
                <TodoFooterComp
                    counts={counts}
                    filter={filter}
                    onSwitchMode={this.onFilterTodo}
                />
            </Container>
        );
    }
} 