import { useDispatch  } from 'react-redux';
import Button, {BUTTON_TYPE_CLASS} from '../button/button.component';
import './product-card.styles.scss';
import { addItemToCart } from '../../store/cart/cart.reducer';


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    // const addItemToCart = useContext(CartContext);
    
    const dispatch = useDispatch();
    const addProductToCart = () => dispatch(addItemToCart(product))
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