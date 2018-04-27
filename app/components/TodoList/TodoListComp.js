import React, { PureComponent } from 'react';
import {
    AsyncStorage,
    ScrollView,
    View,
    // Image,
    ImageBackground,
    Text,
    TextInput,
    Switch,
    TouchableOpacity
} from 'react-native';
//
// import TodoInput from '../TodoInput';
// import TodoFooter from '../TodoFooter';
//
import styles from '../styles';

/**
 * @class TodoListComponent
 */
export default class TodoListComp extends PureComponent {
    /**
     * 
     */
    constructor(props) {
        super(props);
    }

    /**
     * 
     */
    render() {
        const todolist = this.props.todolist || [];
        // +++
        const { filter } = this.props;
        // +++
        let count = 0;
        // console.log('render#todolist: ', todolist);
        // console.log('render#count: ', count);
        return (
            <View style={styles.box}>
                <Text style={styles.header}>todos</Text>
                { /* <TodoInput 
                    // ImgBgProps={{}}
                    placeholder='What needs to be done?'
                    // defaultValue=''
                    refTextInput={ref => { this.refTextInput = ref; }}
                    onChangeText={(text => { this._inputs.text = text; })}
                    onSubmitEditing={this.props.handleSubmitEditing}
                /> */ }
                <ScrollView style={styles.todolist}>
                {todolist.map((todo) => {
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
                        <View key={todo.id} style={styles.todoitem}>
                            <Switch
                                // ref={ref => { todo.refSwitch = ref; }}
                                onValueChange={evt => this.props.handleValueChange(todo, evt)}
                                value={todo.done}
                            />
                            <View style={styles.todoitemItem}>
                                <Text style={styles.todoitemText}>{todo.text}</Text>
                                <TouchableOpacity onPress={() => this.props.handleRemove(todo)}>
                                    <Text style={styles.todoitemIconText}>[x]</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}
                </ScrollView>
                { /* <TodoFooter
                    count={count}
                    mode={filter}
                    onSwitchMode={this.props.handleSwitchMode}
                /> */ }
            </View>
        );
    }
}