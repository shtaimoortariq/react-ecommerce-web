import { useContext } from "react";
import { ProductsContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {

    const { products } = useContext(ProductsContext);
    console.log(products);
    return (
        <div className="products-container">
            {
                products.map((product) => (<ProductCard key={product.id} product={product} />))
            }
        </div>
    )
}


export default Shop;