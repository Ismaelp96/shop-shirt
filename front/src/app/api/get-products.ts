import { Product } from '@/interfaces/product';
import api from '@/lib/api';

export interface FetchProductsResponse {
	data: Product[];
}

export async function fetchProducts() {
	const res = await api.get<FetchProductsResponse>(`/products?populate=image`);
	return res.data.data;
}
