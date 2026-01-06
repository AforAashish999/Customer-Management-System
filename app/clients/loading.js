"use client";

import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false } // disable server-side rendering
);

export default function loading() {
  return (
    <div className='loading-section h-screen flex justify-center items-center'>
        <Player 
        autoplay
        loop 
        src="/animations/loading.json"
        style={{ height: '300px', width: '300px' }}
        />
    </div>
  )
}
