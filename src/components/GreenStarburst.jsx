import React from 'react';

export default function GreenStarburst({ className = "w-6 h-6", color = "#5096ca", spin = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${spin ? 'animate-spin-slow' : ''}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 8-pointed rounded petal starburst in user's signature blue #5096ca */}
      <g fill={color}>
        {/* Vertical petal */}
        <rect x="42" y="5" width="16" height="90" rx="8" />
        {/* Horizontal petal */}
        <rect x="5" y="42" width="90" height="16" rx="8" />
        {/* 45 degree petal */}
        <rect x="42" y="5" width="16" height="90" rx="8" transform="rotate(45 50 50)" />
        {/* -45 degree petal */}
        <rect x="42" y="5" width="16" height="90" rx="8" transform="rotate(-45 50 50)" />
      </g>
    </svg>
  );
}
