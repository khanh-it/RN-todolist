/**
 * Project's model#todo
 */

import * as helpers from '../helpers';

/**
 * 
 */
export function mTodo(data = {}) {
    return {
        id: data['id'] || helpers.uniqueID(),
        text: helpers.isString(data['text'], ''),
        done: helpers.isBoolean(typeof data['done'], false),
        info: helpers.isString(data['info'], ''),
        user_id: helpers.isString(data['user_id'], '')
    };
}