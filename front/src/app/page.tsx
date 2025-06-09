import { ProductList } from '@/components/ProductList';

export default async function Home() {
	return (
		<div className='max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto'>
			<ProductList />
		</div>
	);
}
