'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useKeenSlider } from 'keen-slider/react';

import { Product } from '@/interfaces/product';

import { fetchProducts } from '@/app/api/get-products';

import 'keen-slider/keen-slider.min.css';

export function ProductList() {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 1.7,
			spacing: 48,
		},
	});
	const [listProducts, setListProducts] = useState<Product[]>([]);
	useEffect(() => {
		async function loadProducts() {
			const products = await fetchProducts();
			setListProducts(products);
		}

		loadProducts();
	}, []);

	return (
		<div ref={sliderRef} className='keen-slider'>
			{listProducts.map((product) => {
				const getImageUrl = (product: Product) => {
					const baseUrl = process.env.NEXT_PUBLIC_API_URL;
					const imageUrl = `${baseUrl}${product.image.url}`;
					return imageUrl;
				};
				return (
					<div key={product.documentId} className=' keen-slider__slide'>
						<Link
							href={`/product/${product.slug}`}
							prefetch={false}
							className='bg-gradient-to-b from-green-custom to-purple-custom rounded-[8px] relative overflow-hidden flex items-center justify-center group '>
							<Image
								src={getImageUrl(product)}
								width={520}
								height={480}
								alt={product.name}
								className=' object-cover'
							/>
							<footer className='flex items-center justify-between bg-gray-700/90 absolute bottom-1 right-1 left-1 p-8 rounded-md translate-y-[110%] group-hover:translate-y-[0%] transition-all ease-in-out duration-200'>
								<p className='text-gray-100 text-xl font-bold'>
									{product.name}
								</p>
								<span className='text-green-300 text-2xl font-bold'>
									{new Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: 'BRL',
									}).format(Number(product.price) / 100)}
								</span>
							</footer>
						</Link>
					</div>
				);
			})}
		</div>
	);
}
