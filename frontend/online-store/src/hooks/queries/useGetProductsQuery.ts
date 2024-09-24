import {useQuery} from '@tanstack/react-query'
import { getProducts } from '../../api/paths.ts';
import {Product} from "../../types/Product";

type ProductsResponse = {
    products: Product[];
}

export const useGetProductsQuery = () => {

    // Queries
    return useQuery<ProductsResponse>({
        queryKey: ['products'],
        queryFn: getProducts,
    });
}