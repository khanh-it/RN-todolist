/**
 * Define project's actions#todo
 */
//
import {
    TODO_ADD,
    TODO_DEL,
    TODO_EDIT,
    TODO_SORT,
    TODO_DONE
} from './constants';

/**
 * 
 */
export function todoAdd(text, done = false, id = null) {
    return (dispatch, getState) => {
        let { auth } = getState();
        dispatch({ type: TODO_ADD, id, text, done, user_id: auth.id });
    };
}

/**
 * Delete (remove) todo item
 * @param {String} id 
 * @return {Object}
 */
export function todoDel(id) {
    return { type: TODO_DEL, id };
}

/**
 * Mark todo is done or undone
 * @param {String} id 
 * @return {Object}
 */
export function todoDone(id, done = true) {
    return { type: TODO_DONE, id, done };
}

/**
 * Edit todo item
 * @param {String} id 
 * @return {Object}
 */
export function todoEdit(id, text) {
    return { type: TODO_EDIT, id, text };
}

/**
 * Sort todo items
 * @param {String} id 
 * @param {String} previous id 
 * @return {Object}
 */
export function todoSort(id, prevId) {
    return { type: TODO_SORT, id, prevId };
}

