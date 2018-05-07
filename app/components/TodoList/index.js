import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    View
} from 'react-native';
// Actions(s)
import {
    todoAdd,
    todoDone,
    todoDel,
    filterSet
} from '../../actions';
//
import TodoListComp from './TodoListComp';
//
import styles from './styles';

/**
 * 
 */
function visibleTodos({ todos, filter, auth }) {
    let todosOfUser = [];
    console.log('todos: ', todos, auth);
    if (auth) {
        todosOfUser = todos.filter(todo => (todo.user_id === auth.id));
    }
    return todosOfUser;
}

/**
 * @class TodoList
 */
const TodoList = connect(
    (state) => {
        let { filter, auth } = state;
        return { todos: visibleTodos(state), filter, auth };
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
            },
            /**
             * 
             * @param {*} todo 
             */
            todoFilter: (filter)  => {
                dispatch(filterSet(filter));
            }
        };
    },
)(TodoListComp);
// export default
export default TodoList;
