import React from 'react';

export default function DoodleOval({ className = "" }) {
  return (
    <svg
      viewBox="0 0 340 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      preserveAspectRatio="none"
    >
      {/* Hand-drawn organic yellow oval loop matching Framer reference image 1 */}
      <path
        d="M 28 54 C 20 28, 90 12, 175 14 C 265 16, 325 32, 322 58 C 319 82, 235 92, 145 90 C 65 88, 12 75, 18 48 C 22 28, 80 16, 160 16"
        stroke="#f59e0b"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
        fill="none"
      />
    </svg>
  );
}
