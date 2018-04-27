/**
 * Project's model#todo
 */

import {
    uniqueID
} from '../helpers';

/**
 * 
 */
export function mTodo(data = {}) {
    return {
        id: data['id'] || uniqueID(),
        text: (typeof data['text'] === 'string') ? data['text'] : '',
        done: (typeof data['done'] === 'boolean') ? data['done'] : false
    };
}