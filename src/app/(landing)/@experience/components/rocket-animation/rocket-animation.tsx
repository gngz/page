import Image from 'next/image';
export function RocketAnimation() {
  return (
    <picture>
      <source srcSet='/rocket.webp' type='image/webp' />
      <Image
        src='/rocket.gif'
        width={40}
        height={40}
        className='p-1 pointer-events-none'
        quality={100}
        alt='🚀'
        priority
      />
    </picture>
  );
}
