import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {CartIconContainer,ItemCount,ShoppingIcon} from './cart-icon.styles'
const CartIcon = () => {
    const {setIsCartOpen, isCartOpen, cartCount} = useContext(CartContext)

    const toggleCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;