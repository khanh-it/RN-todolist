import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
// https://github.com/rt2zz/redux-persist
import {
    persistStore,
    persistReducer
} from 'redux-persist';
// https://github.com/robwalkerco/redux-persist-filesystem-storage
import storage from 'redux-persist-filesystem-storage';
// import RNFetchBlob from 'react-native-fetch-blob';
// import FilesystemStorage from 'redux-persist-filesystem-storage';
// #end
// project's reducers
import rootReducer from '../reducers';

// Create storage???
/* const storage = FilesystemStorage.config(
    { storagePath: `${RNFetchBlob.fs.dirs.DocumentDir}/persistStore` }
); */
// console.log('storage: ', storage);

// Create persisted root reducer
const persistConfig = {
    key: 'rn_todolist',
    storage,
    blacklist: ['navigation'] // navigation will not be persisted
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create persisted redux store
const store = createStore(
    persistedReducer, // rootReducer,
    applyMiddleware(thunk)
);

// Create store persistor
const persistor = persistStore(store);

// export default
export default store;

// common export
export {
    store, persistor
};
