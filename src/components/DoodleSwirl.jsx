import React from 'react';

export default function DoodleSwirl({ className = "" }) {
  return (
    <svg
      viewBox="0 0 280 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Hand-drawn whimsical yellow ribbon/swirl trailing from 'choice' upward into corner matching Framer reference image 3 */}
      <path
        d="M 60 190 C 20 185, 15 140, 55 130 C 110 120, 160 145, 175 120 C 195 90, 170 50, 210 35 C 245 20, 270 40, 260 70 C 250 100, 205 135, 175 160 C 145 185, 130 225, 125 240"
        stroke="#fde047"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}
