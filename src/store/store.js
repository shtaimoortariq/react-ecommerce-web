import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "../middleware/logger";
import createSagaMiddleware from "@redux-saga/core";
//root reducer

import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composedEnhanser =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  //   blacklist: ["user"],
  whitelist: ["cart"],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

// const middlewares = [loggerMiddleware];

const composedEnhansers = composedEnhanser(applyMiddleware(...middlewares));

export const store = createStore(persistReducers, undefined, composedEnhansers);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
