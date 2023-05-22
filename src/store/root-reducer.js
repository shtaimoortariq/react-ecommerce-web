import {combineReducers} from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';
export const rootReducer = combineReducers({
  //name of the reducer slice: reducer function
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer
})