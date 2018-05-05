import React, { PureComponent } from 'react';
import {
    StatusBar, View
} from 'react-native';
import {
    Container, Header,
    Title, Left,
    Icon, Right,
    Button, Body,
    Content, Text,
    Card, CardItem,
    List, ListItem,
    Form, Item,
    Input, CheckBox
} from "native-base";

//
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
        // Bind method(s)
        this.onSubmit = this.onSubmit.bind(this);
    }

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
    onSubmit(evt) {
        let text = this._inputs.text.trim();
        if (text) {
            this.props.todoAdd(text);
        }
    }

    /**
     * 
     */
    render() {
        //
        const { todos, filter } = this.props;
        // +++
        let index = 0;
        let count = 0;
        // console.log('render#todos: ', todos, 'render#count: ', count);
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>todos</Title>
                    </Body>
                    <Right />
                </Header>
                <Header>
                    <Body>
                        <Form style={[styles.form]}>
                            <Item regular>
                                <Input
                                    blurOnSubmit={true}
                                    placeholder='What needs to be done?'
                                    onChangeText={(text => { this._inputs.text = text; })}
                                    onSubmitEditing={this.onSubmit}
                                />
                            </Item>
                        </Form>
                    </Body>
                </Header>
                <Content style={[styles.content]}>
                    <View style={[styles.list]}>
                    {todos.map((todo) => {
                        if (!todo.done) { // Active
                            count += 1;
                        }
                        if (2 === filter && todo.done) { // Completed
                            return;
                        }
                        if (3 === filter && !todo.done) { // Active
                            return;
                        }
                        return (
                            <Card>
                                <CardItem>
                                    <CheckBox
                                        onPress={evt => this.props.handleValueChange(todo, evt)}
                                        checked={todo.done}
                                    />
                                    <Text>{todo.text}</Text>
                                    <Right>
                                        <Icon name='close-circle' />
                                    </Right>
                                </CardItem>
                            </Card>
                        );
                        ++index;
                    })}
                    </View>
                </Content>
                <TodoFooterComp
                    count={count}
                    mode={filter}
                    onSwitchMode={this.props.handleSwitchMode}
                />
            </Container>
        );
    }
}