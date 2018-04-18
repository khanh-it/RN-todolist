import React, { PureComponent, Component } from 'react';
import {
    AsyncStorage,
    ScrollView,
    View,
    Image,
    ImageBackground,
    Text,
    TextInput,
    Switch,
    TouchableOpacity
} from 'react-native';
//
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
//
import styles from './styles';

/**
 * 
 */
export default class TodoList extends Component {
    constructor(props) {
        super(props);

        // init state
        const todolist = [];
        /* for (let i = 0; i < 25; i++) {
            todolist.push({
                "done": false,
                "id": new String(Date.now() + Math.random()).trim(),
                "text": i
            });
        } */
        this.state = {
            todolist,
            mode: 0
        };

        // bind events
        this.handleSubmitEditing = this.handleSubmitEditing.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSwitchMode = this.handleSwitchMode.bind(this);

        // init data
        this._inputs = {};
    }

    /**
     * 
     */
    componentDidMount() {
        this.getStateAsync()
            .then(state => {
                // console.log('componentDidMount#state: ', state);
                state && this.setState(state);
            })
            .catch(alert)
        ;
    }

    /**
     * Overwrite method
     */
    setState(state, cb) {
        // console.log('setState called!');
        return super.setState(state, () => {
            // console.log('setState callback fired!');
            // Save state
            this.saveStateAsync();
            // Fire callback?
            (typeof cb === 'function') && cb();
        });
    }

    /**
     * 
     */
    async getStateAsync() {
        let state = null;
        try {
            state = await AsyncStorage.getItem('@AirTrip#todolist');
            // console.log('state raw: ', state);
            state = JSON.parse(state);
            // console.log('state parsed: ', state);
        }
        catch (e) {
            // Handle exceptions
            // ...
            console.log('getStateAsync error', e);
        }
        return state;
    }

    /**
     * 
     */
    async saveStateAsync() {
        try {
            let state = JSON.stringify(this.state);
            // console.log('saveStateAsync: ', state);
            await AsyncStorage.setItem('@AirTrip#todolist', state);
        } catch (error) {
            // Error saving data
            console.log(error.message);
        }
    }

    /**
     * 
     */
    _todoAdd(text, id = null) {
        id = new String(id || (Date.now() + Math.random())).trim();
        let todo = {
            id,
            text,
            done: false
        };
        //
        let todolist = (this.state.todolist || []).concat([]); // <-- new memory
        todolist.push(todo);
        this.setState(() => ({ todolist }));
        // console.log('_todoAdd: ', todolist, this.state.todolist === todolist);
    }

    /**
     * 
     */
    handleSubmitEditing(evt) {
        // console.log('handleSubmitEditing: ', this._inputs);
        let text = new String(this._inputs.text).trim();
        if (text) {
            this._todoAdd(text);
            // clear input text
            this.refTextInput.clear();
        }
    }

    /**
     * 
     */
    handleValueChange(todo, evt) {
        let todolist = (this.state.todolist || []).concat([]); // <-- new memory
        todo.done = !todo.done
        this.setState(() => ({ todolist }));
        // console.log('handleValueChange: ', todolist, todolist === this.state.todolist);
    }

    /**
     * 
     * @param {*} newMode 
     */
    handleSwitchMode(mode) {
        this.setState(() => ({ mode }));
    }

    /**
     * 
     * @param {*} todo 
     */
    handleRemove(todo) {
        let todolist = (this.state.todolist || []).concat([]); // <-- new memory
        const idx = todolist.findIndex(_td => todo === _td);
        todolist.splice(idx, 1);
        this.setState(() => ({ todolist }));
        // console.log('handleValueChange: ', todolist, todolist === this.state.todolist);
    }

    /**
     * 
     */
    render() {
        const todolist = this.state.todolist || [];
        // +++
        const { mode } = this.state;
        // +++
        let count = 0;
        // console.log('render#todolist: ', todolist);
        console.log('render#count: ', count);
        return (
            <View style={styles.box}>
                <Text style={styles.header}>todos</Text>
                <TodoInput 
                    // ImgBgProps={{}}
                    placeholder='What needs to be done?'
                    // defaultValue=''
                    refTextInput={ref => { this.refTextInput = ref; }}
                    onChangeText={(text => { this._inputs.text = text; })}
                    onSubmitEditing={this.handleSubmitEditing}
                />
                <ScrollView style={styles.todolist}>
                {todolist.map((todo) => {
                    if (!todo.done) { // Active
                        count += 1;
                    }
                    if (2 === mode && todo.done) { // Completed
                        return;
                    }
                    if (3 === mode && !todo.done) { // Active
                        return;
                    }
                    return (
                        <View key={todo.id} style={styles.todoitem}>
                            <Switch
                                // ref={ref => { todo.refSwitch = ref; }}
                                onValueChange={evt => this.handleValueChange(todo, evt)}
                                value={todo.done}
                            />
                            <View style={styles.todoitemItem}>
                                <Text style={styles.todoitemText}>{todo.text}</Text>
                                <TouchableOpacity onPress={() => this.handleRemove(todo)}>
                                    <Text style={styles.todoitemIconText}>[x]</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}
                </ScrollView>
                <TodoFooter
                    count={count}
                    mode={this.state.mode}
                    onSwitchMode={this.handleSwitchMode}
                />
            </View>
        );
    }
}