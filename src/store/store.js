import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

import { persistReducer, persistStore } from "redux-persist";
import { loggerMiddleware } from "./middleware/logger";
import storage from "redux-persist/lib/storage";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistReducers = persistReducer(persistConfig, rootReducer);
const composedEnhansers = composeEnhancer(applyMiddleware(...middleWares));
// const middlewares = [loggerMiddleware];

export const store = createStore(persistReducers, undefined, composedEnhansers);
export const persistor = persistStore(store);
