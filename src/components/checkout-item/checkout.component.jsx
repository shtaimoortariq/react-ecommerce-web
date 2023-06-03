
import { useDispatch } from 'react-redux';

import { addItemToCart, removeItemToCart, clearItemFromCart } from '../../store/cart/cart.reducer';

import './checkout.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    
    const dispatch = useDispatch();
    

    

    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemToCart(cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;