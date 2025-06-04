import { Header } from '@/components/Header';
import { ProductList } from '@/components/ProductList';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
	return (
		<>
			<Header />
			<div className='max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto'>
				<ProductList />
			</div>
		</>
	);
}
