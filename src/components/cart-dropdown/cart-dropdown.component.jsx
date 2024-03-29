import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button, { BUTTON_TYPE_CLASS } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';
import {CartDropdownContainer,CartItems,EmptyMessage} from  './cart-dropdown.styles.jsx';

const CartDropdown = () => {

  const  cartItems  = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;