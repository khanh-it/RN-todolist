/**
 * Project's reducers
 */
import { combineReducers } from 'redux';
//
import todos from './todos'
import filter from './filter'

// export default
const reducers = combineReducers({
    todos,
    filter
});
export default reducers;
