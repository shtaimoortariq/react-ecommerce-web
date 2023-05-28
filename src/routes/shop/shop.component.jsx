import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import { fetchCategoriesStartAsync } from '../../store/categories/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component';
import './shop.styles.scss';

const Shop = () => {
    const dispatch = useDispatch();    
    useEffect(() => {
        dispatch(fetchCategoriesStartAsync());
      }, []);

    return (
        <div>
            <Routes>
                <Route index element={ <CategoriesPreview /> } />
                <Route path=":category" element={ <Category /> } />
            </Routes>
        </div>
    )
}


export default Shop;