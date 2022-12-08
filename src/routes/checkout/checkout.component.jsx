import { useContext } from 'react';
import {CartContext} from '../../context/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
    const {cartItems, addItemToCart, removeItemToCart} = useContext(CartContext);
    return (
        <div>
            {
                cartItems.map( items => {
                    const {id, name, quantity} =  items;
                    return <div key={id}>
                        <h2>{name}</h2>
                        <br />
                        <span>{quantity}</span>
                        <br />
                        <span onClick={() => addItemToCart(items)}>Increment</span>
                        <br />
                        <span onClick={() => removeItemToCart(items)}>Decrement</span>

                    </div>
                })
            }
        </div>     
    )
}

export default Checkout;