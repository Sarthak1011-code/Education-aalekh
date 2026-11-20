import React, { useEffect, useState } from 'react';
import GreenStarburst from './GreenStarburst';

export default function FloatingGreenLogos() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Logo 1: Top Right */}
      <div
        className="absolute top-12 right-10 sm:right-24 transition-transform duration-700 ease-out"
        style={{ transform: `translateY(${Math.sin(scrollY * 0.003) * 16}px) rotate(${scrollY * 0.08}deg)` }}
      >
        <div className="animate-bounce-slow">
          <GreenStarburst className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-md opacity-85 hover:opacity-100" color="#5096ca" />
        </div>
      </div>

      {/* Floating Logo 2: Middle Left */}
      <div
        className="absolute top-1/3 left-6 sm:left-14 transition-transform duration-700 ease-out"
        style={{ transform: `translateY(${Math.cos(scrollY * 0.003) * -18}px) rotate(${-scrollY * 0.06}deg)` }}
      >
        <div className="animate-float">
          <GreenStarburst className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-md opacity-75" color="#99caeb" />
        </div>
      </div>

      {/* Floating Logo 3: Bottom Right near cards */}
      <div
        className="absolute bottom-20 right-8 sm:right-16 transition-transform duration-700 ease-out"
        style={{ transform: `translateY(${Math.sin(scrollY * 0.004 + 1) * 20}px) rotate(${scrollY * 0.1}deg)` }}
      >
        <div className="animate-pulse-slow">
          <GreenStarburst className="w-14 h-14 sm:w-20 sm:h-20 drop-shadow-lg opacity-80" color="#3b7db2" />
        </div>
      </div>

      {/* Floating Logo 4: Bottom Center-Left */}
      <div
        className="absolute bottom-10 left-1/4 transition-transform duration-700 ease-out hidden md:block"
        style={{ transform: `translateY(${Math.cos(scrollY * 0.003 + 2) * 15}px) rotate(${scrollY * 0.04}deg)` }}
      >
        <div className="animate-float">
          <GreenStarburst className="w-8 h-8 drop-shadow-sm opacity-60" color="#6bafe0" />
        </div>
      </div>
    </div>
  );
}
