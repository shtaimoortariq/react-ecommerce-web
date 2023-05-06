import { Fragment } from "react";
import { useSelector } from "react-redux";
// import { CategoriesContext } from '../../context/categories.context';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const categoryMap = useSelector(selectCategoriesMap); 
    // const { categoryMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoryMap).map((title) => {
                    const products = categoryMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </Fragment>
    )
}


export default CategoriesPreview;