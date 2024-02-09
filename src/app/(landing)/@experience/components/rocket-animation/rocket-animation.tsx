import Image from 'next/image';
export function RocketAnimation() {
  return (
    <picture>
      <source srcSet='/rocket.webp' type='image/webp' />
      <Image
        src='/rocket.gif'
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-full p-1 pointer-events-none'
        quality={100}
        alt='🚀'
        priority
      />
    </picture>
  );
}
