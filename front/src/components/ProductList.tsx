import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';

type ProductListProps = ComponentProps<'div'>;

export function ProductList({ className }: ProductListProps) {
	return (
		<Link href={``} className={className} prefetch={false}>
			<div className='bg-gradient-to-b h-[696px] from-green-custom to-purple-custom rounded-[8px] relative overflow-hidden flex items-center justify-center group'>
				<Image
					src='/1.png'
					width={520}
					height={480}
					alt=''
					className=' object-cover'
				/>
				<footer className='flex items-center justify-between bg-gray-700/90 absolute bottom-1 right-1 left-1 p-8 rounded-md translate-y-[110%] group-hover:translate-y-[0%] transition-all ease-in-out duration-200'>
					<p className='text-gray-100 text-xl font-bold'>
						Camiseta Beyond The Limits
					</p>
					<span className='text-green-300 text-2xl font-bold'>R$ 79,900</span>
				</footer>
			</div>
		</Link>
	);
}
