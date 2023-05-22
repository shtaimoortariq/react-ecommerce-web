import {useSelector, useDispatch} from 'react-redux';
// import { useContext } from 'react';

import {selectIsCartOpen, selectCartCount} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

// import { CartContext } from '../../context/cart.context';
import {CartIconContainer,ItemCount,ShoppingIcon} from './cart-icon.styles'
const CartIcon = () => {

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();
    // const {setIsCartOpen, isCartOpen, cartCount} = useContext(CartContext)

    const toggleCartOpen = () => {
        console.log(isCartOpen);
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;