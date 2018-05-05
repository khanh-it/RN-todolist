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
        username: (typeof data['username'] === 'string') ? data['username'] : '',
        password: (typeof data['password'] === 'string') ? data['password'] : '',
        email: (typeof data['email'] === 'string') ? data['email'] : '',
        firstname: (typeof data['firstname'] === 'string') ? data['firstname'] : '',
        lastname: (typeof data['lastname'] === 'string') ? data['lastname'] : '',
    };
}