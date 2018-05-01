/**
 * 
 */
import {
    USER_ADD,
    USER_LOGIN,
} from '../actions/constants';

let user = null; // default data

// Models
import {
    mUser
} from '../models';

/**
 * 
 */ 
export default function users(state = user, action) {
    switch (action.type) {
        // USER_ADD
        case USER_ADD:
            let user = mUser(action);
            console.log('USER_ADD: ', user);
            state = state.concat([user]);
        break; // #end
        default:
    }
    return state;
}
