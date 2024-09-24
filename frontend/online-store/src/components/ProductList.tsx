import {useState} from 'react';
import type {Product} from "../types/Product.ts";
import {ProductItem } from "./ProductItem/ProductItem.tsx";
import {ProductViewer} from "./ProductViewer/ProductViewer.tsx";
import classes from './ProductList.module.css';

export type ProductListProps = {
    products: Product[];
}
export const ProductList = ({products}: ProductListProps) => {
    const [currentProduct, setCurrentProduct] = useState<Product>(products[0]);
    const indexOfCurrentProduct = products.indexOf(currentProduct);
    
    const handleClickLeft = () => {
        const nextLeftProduct = products[indexOfCurrentProduct - 1];
        setCurrentProduct(nextLeftProduct);
    }

    const handleClickRight = () => {
        const nextRightProduct = products[indexOfCurrentProduct + 1];
        setCurrentProduct(nextRightProduct);
    }

    return <div className={classes.productListContainer}>
        <h1>{'All products'}</h1>
        <ProductViewer
            disableLeft={!products[indexOfCurrentProduct - 1]}
            disableRight={!products[indexOfCurrentProduct + 1]}
            onClickLeftButton={handleClickLeft}
            onClickRightButton={handleClickRight}>
            <ProductItem product={currentProduct}/>
        </ProductViewer>
        <div>
            {`Product # ${indexOfCurrentProduct + 1} of total ${products.length}`}
        </div>
    </div>
};