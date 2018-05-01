/**
 * 
 */
import {
    AUTH_SET,
    AUTH_CLR,
} from '../actions/constants';

let auth = null; // default data

/**
 * 
 */ 
export default function auth(state = auth, action) {
    switch (action.type) {
        // AUTH_SET
        case AUTH_SET:
            state = action.auth;
            console.log('AUTH_SET: ', state);
        break; // #end
        // AUTH_CLR
        case AUTH_CLR:
            state = null;
            console.log('AUTH_CLR: ', state);
        break; // #end
        default:
    }
    return state;
}
