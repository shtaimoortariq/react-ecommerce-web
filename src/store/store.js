import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleware = [logger];

const composedEnhansment = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhansment);