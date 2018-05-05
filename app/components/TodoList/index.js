import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    View
} from 'react-native';
// Actions(s)
import {
    todoAdd,
    todoDone,
    todoDel
} from '../../actions';
//
import TodoListComp from './TodoListComp';
//
import styles from './styles';

/**
 * 
 */
function visibleTodos(todos, filter) {
    return todos;
}

/**
 * @class TodoList
 */
const TodoList = connect(
    ({ todos, filter }) => {
        console.log('todos: ', todos);
        return {
            todos: visibleTodos(todos, filter)
        };
    },
    (dispatch) => {
        return {
            /**
             * 
             */
            todoAdd: (text, id = null) => {
                dispatch(todoAdd(text, id));
            },
            /**
             * 
             */
            todoDone: (id, done) => {
                dispatch(todoDone(id, done));
            },
            /**
             * 
             * @param {*} todo 
             */
            todoDel: (id)  => {
                dispatch(todoDel(id));
            }
        };
    },
)(TodoListComp);
// export default
export default TodoList;
