import api from './api';

export async function Strapi() {
	const res = await api.get('/products');
	return res.data.data;
}
