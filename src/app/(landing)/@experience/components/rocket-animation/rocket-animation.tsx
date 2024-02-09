import Image from 'next/image';
export function RocketAnimation() {
  return (
    <Image
      src='/rocket.webp'
      width={40}
      height={40}
      className='p-1 pointer-events-none'
      quality={100}
      alt='🚀'
      priority
    />
  );
}
