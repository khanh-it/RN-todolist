import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
// project's reducers
import reducers from '../reducers';

console.log('reducers: ', reducers);

// 
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

// export default
export default store;

// common export
export {
    store
};
