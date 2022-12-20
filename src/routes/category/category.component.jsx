import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

const Category = () => {
    const { category } = useParams();
    const { categoryMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoryMap[category]);

    useEffect(() => {
        setProducts(categoryMap[category])
    }, [category, categoryMap])

    console.log(category);
    return (
        <div className="category-container">
            {products && 
                products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    )
}

export default Category;