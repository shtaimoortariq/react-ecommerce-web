import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {rootReducer} from './root-reducer';

import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

//root reducer


const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        next(action);
    }

    console.log('type :', action.type);
    console.log('payload :', action.payload);
    console.log('current state :', store.getState());

    next(action);

    console.log('next state :', store.getState());
}

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistReducers = persistReducer(persistConfig, rootReducer);
const middlewares = [loggerMiddleware];
const composedEnhanser = compose(applyMiddleware(...middlewares));

export const store = createStore(persistReducers, undefined, composedEnhanser);
export const persistor = persistStore(store);
