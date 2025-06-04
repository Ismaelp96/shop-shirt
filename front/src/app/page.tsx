'use client';
import { Header } from '@/components/Header';
import { ProductList } from '@/components/ProductList';
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 1.7,
			spacing: 48,
		},
	});
	return (
		<>
			<Header />

			<div
				className='keen-slider max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto'
				ref={sliderRef}>
				<ProductList className='keen-slider__slide' />
				<ProductList className='keen-slider__slide' />
				<ProductList className='keen-slider__slide' />
			</div>
		</>
	);
}
