import { useDispatch, useSelector } from 'react-redux';
import Button, {BUTTON_TYPE_CLASS} from '../button/button.component';
import './product-card.styles.scss';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    // const addItemToCart = useContext(CartContext);
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;