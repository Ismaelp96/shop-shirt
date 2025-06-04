import Image from 'next/image';

export function Header() {
	return (
		<header className='pt-10 pb-8 w-full max-w-[1180px] mx-auto my-0'>
			<Image src='/logo-ignite.svg' alt='' width={130} height={40} />
		</header>
	);
}
