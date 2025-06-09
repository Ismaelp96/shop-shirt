import { Product } from '@/interfaces/product';
import api from '@/lib/api';

export async function fetchProduct(id: string) {
	const res = await api.get(`/products/${id}?populate=image`);
	const { data } = res.data;
	const product: Product = {
		id: data.id,
		name: data.name,
		price: data.price,
		description: data.description,
		slug: data.slug,
		documentId: data.documentId,
		image: {
			url: data.image.url || '',
		},
	};

	return product;
}
