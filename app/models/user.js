/**
 * Project's model#user
 */

import {
    uniqueID
} from '../helpers';

/**
 * 
 */
export function mUser(data = {}) {
    return {
        id: data['id'] || uniqueID(),
        firstname: (typeof data['firstname'] === 'string') ? data['firstname'] : '',
        lastname: (typeof data['lastname'] === 'string') ? data['lastname'] : '',
    };
}