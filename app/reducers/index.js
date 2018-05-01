/**
 * Project's reducers
 */
import { combineReducers } from 'redux';
//
import filter from './filter';
import todos from './todos';
import users from './users';
import auth from './auth';

// export default
const reducers = combineReducers({
    filter,
    todos,
    users,
    auth
});
export default reducers;
