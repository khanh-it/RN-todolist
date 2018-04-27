/**
 * 
 */
import {
    TODO_ADD
} from '../actions/constants';

let todos = []; // default data

// Models
import {
    mTodo
} from '../models';

/**
 * 
 */ 
export default function todos(state = todos, action) {
    switch (action.type) {
        // TODO_ADD
        case TODO_ADD:
            let todo = mTodo(action);
            console.log('TODO_ADD: ', todo);
            state = state.concat([todo]);
        break; // #end
        default:
    }
    return state;
}
