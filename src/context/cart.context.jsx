import { createContext, useState, useEffect } from "react";

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

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === productToRemove.id);
    
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== productToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === productToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem
        )
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemToCart: () => { },
    cartCount: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total , cartItem) =>  total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart };
    return (

        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}