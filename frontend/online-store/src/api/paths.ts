import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Product} from "../types/Product";

export async function get<T = any>(url: string, options?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse = await axios.get<T>(url, options || undefined);
    return response.data ? response.data : null;
}

export const getProducts = () => get<{products: Product[]}>('https://dummyjson.com/products');