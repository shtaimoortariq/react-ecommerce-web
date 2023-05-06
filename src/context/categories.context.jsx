import { createContext, useState, useEffect } from 'react';
import {addCollectinAndDocuments, getCategoriesAndCollection} from '../utils/firebase/firebase.utils';
import { SHOP_DATA } from '../shop-data.js';
export const CategoriesContext = createContext({
    categoryMap: {}
})

export const CategoriesProvider = ({ children }) => {
    const [categoryMap, setCategoryMap] = useState({});
    
     
    // useEffect(() => {
    //     addCollectinAndDocuments('categories', SHOP_DATA);
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndCollection();
            setCategoryMap(categoryMap)
        };   
        getCategoriesMap();
    }, [])

    const value = { categoryMap };
    return (
        <CategoriesContext.Provider value={value}>  {children} </CategoriesContext.Provider>
    )
}