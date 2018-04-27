/**
 * 
 */
//
import {
    FILTER_SET,
    FILTER_MODE_ALL,
    FILTER_MODE_ACTIVE,
    FILTER_MODE_COMPLETED
} from '../actions/constants';

//
const modes = [
    FILTER_MODE_ALL,
    FILTER_MODE_ACTIVE,
    FILTER_MODE_COMPLETED
];

/**
 * 
 */
export default function filter(state = FILTER_MODE_ALL, action) {
    switch (action.type) {
        // FILTER_SET
        case FILTER_SET:
            if (action.filter && modes.indexOf(action.filter) >= 0) {
                state = action.filter;
            }
        break;
        default:
    }
    return state;
}