import { Product } from '@/interfaces/product';
import api from '@/lib/api';

export interface fetchProductBySlugResponse {
	data: Product;
}

export async function fetchProductBySlug(slug: string) {
	try {
		const res = await api.get<fetchProductBySlugResponse>(
			`/products?filters[slug][$eq]=${slug}&populate=image`,
		);
		const data = res.data.data;
		console.log('produto', data);
	} catch (error) {
		console.error('Erro ao buscar produto por slug:', error);
		return null;
	}
}
