import { CART_ACTION_TYPES } from './cart.type';
import { createAction } from "../../utils/reducer/reducer.utils";


const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } :
        cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(item => item.id !== cartItemToClear.id);

export const setIsCartOpen = (boolean) =>{debugger; return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)};


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems);
}

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM,  newCartItems);
}

export const clearItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = clearCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM,  newCartItems);
}

