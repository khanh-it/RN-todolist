/**
 * 
 */
import {
    TODO_ADD,
    TODO_DEL,
    TODO_DONE
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
        case TODO_ADD: {
            let todo = mTodo(action);
            console.log('TODO_ADD: ', todo);
            state = state.concat([todo]);
        } break; // #end
        // TODO_DEL
        case TODO_DEL: {
            let todoIndex = state.findIndex(todo => todo.id === action.id);
            if (todoIndex >= 0) {
                state = state.slice();
                state.splice(todoIndex, 1);
            }
        } break; // #end
        // TODO_DONE
        case TODO_DONE: {
            let foundTodo = state.find(todo => todo.id === action.id);
            if (foundTodo) {
                foundTodo.done = action.done;
                state = state.slice();
            }
        } break; // #end
        default:
    }
    return state;
}
