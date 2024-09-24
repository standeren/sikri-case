import classes from './Product.module.css';
import { Product } from '../../types/Product.ts';

type ProductPros = {
    product: Product;
}

export const ProductItem = ({product}: ProductPros) => {
    return <div className={classes.productContainer}>
        <img className={classes.image} src={product.thumbnail} alt={''}/>
        <h2>{product.title}</h2>
        <span>{product.description}</span>
        {renderPrice(product.price)}
    </div>
}


const renderPrice = (price: number) => {
    return <div className={classes.priceContainer}>
        {price}
    </div>
}