import { fetchProduct } from '@/app/api/get-product';
import Image from 'next/image';

type Params = { id: string };

export async function generateMetadata(props: { params: Promise<Params> }) {
	const { id } = await props.params;
	const product = await fetchProduct(id);
	return {
		title: `${product.name}`,
	};
}

export default async function ProductPage(props: { params: Promise<Params> }) {
	try {
		const { id } = await props.params;
		const product = await fetchProduct(id);
		return (
			<div className='w-full max-w-[1180px] mx-auto flex gap-[72px] h-[656px]'>
				<div className='bg-gradient-to-b from-green-custom to-purple-custom rounded-[8px] h-full flex items-center justify-center'>
					<Image
						src={`${process.env.NEXT_PUBLIC_API_URL}${product.image.url}`}
						width={520}
						height={520}
						alt={product.name}
						className='object-cover flex items-center justify-center'
						loading='lazy'
					/>
				</div>

				<div className='flex flex-col justify-between h-full'>
					<div className=''>
						<h1 className='text-gray-300 text-3xl font-bold mb-4'>
							{product.name}
						</h1>
						<span className='mb-10 block text-green-300 text-3xl'>
							{new Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							}).format(Number(product.price) / 100)}
						</span>
						<p className='text-gray-300 text-xl'>{product.description}</p>
					</div>
					<button className='w-full py-5 inline-flex justify-center items-center bg-green-500 hover:bg-green-300 transition-colors duration-200 cursor-pointer rounded-[8px]'>
						Comprar agora
					</button>
				</div>
			</div>
		);
	} catch (error) {
		console.log(error);
	}
}
