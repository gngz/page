import Image from 'next/image';
export function RocketAnimation() {
  return (
    <Image
      src='/rocket.webp'
      width={40}
      height={40}
      className='pointer-events-none p-1'
      quality={100}
      alt='🚀'
      priority
    />
  );
}
