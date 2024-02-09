'use client';

import Lottie from 'lottie-react';
import rocketAnimation from './animation.json';

export function RocketAnimation() {
  return <Lottie className='p-1' animationData={rocketAnimation} />;
}
