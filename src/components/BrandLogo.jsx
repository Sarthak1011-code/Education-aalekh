import React from 'react';

export default function BrandLogo({ size = 'default', showTagline = true, inverted = false }) {
  const isLarge = size === 'large';
  const isCompact = size === 'compact';

  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      {/* Little Generated Earth & Rising Sun Logo Badge */}
      <div className={`relative flex items-center justify-center shrink-0 rounded-full overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 border ${
        inverted ? 'border-white/30 bg-white' : 'border-[#c5e1f3] bg-white'
      } ${
        isLarge ? 'w-11 h-11' : isCompact ? 'w-8 h-8' : 'w-9 h-9'
      }`}>
        <img
          src="/inspire-logo.png"
          alt="Inspire Institute Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-tight font-serif ${
            isLarge ? 'text-xl' : isCompact ? 'text-sm' : 'text-base'
          } ${inverted ? 'text-white' : 'text-slate-900'}`}>
            Inspire
          </span>
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
            inverted 
              ? 'bg-white/20 text-white border border-white/30' 
              : 'bg-[#e1eff9] text-[#285375] border border-[#c5e1f3]'
          }`}>
            Institute
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5096ca]" />
            <span className={`italic font-medium text-[11px] tracking-wide ${
              inverted ? 'text-[#c5e1f3]' : 'text-slate-600'
            }`}>
              One Inspires Many
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
