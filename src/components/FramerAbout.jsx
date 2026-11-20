import React from 'react';
import GreenStarburst from './GreenStarburst';
import FloatingGreenLogos from './FloatingGreenLogos';
import { User, BarChart2, Heart, Shield, Puzzle } from 'lucide-react';

export default function FramerAbout({ onOpenInquiry }) {
  const tickerItems = [
    'Where growth begins',
    'One Inspires Many',
    'Class 6 Entrance Excellence',
    'Where growth begins',
    'Sainik & Navodaya Pioneers',
    'RK Mission & Banasthali Mastery',
    'Where growth begins',
    'Nurturing Young Champions'
  ];

  return (
    <section id="about" className="relative bg-white text-slate-900 overflow-hidden">
      {/* Top Marquee Ticker in User's Signature #5096ca Blue */}
      <div className="bg-[#5096ca] text-white py-3.5 border-y border-[#3b7db2] overflow-hidden select-none shadow-sm">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
          {tickerItems.concat(tickerItems).map((text, idx) => (
            <div key={idx} className="flex items-center gap-4 text-base sm:text-lg font-bold tracking-tight">
              <GreenStarburst className="w-5 h-5 shrink-0" color="#ffffff" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Logos in #5096ca that move smoothly on scroll */}
      <FloatingGreenLogos />

      {/* Main Section Content on Crisp White */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-20 pb-28">
        
        {/* Top Split: Left "✦ ABOUT US" and Right Big Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5096ca]">
              <span>✦</span>
              <span>ABOUT US</span>
            </div>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.25] tracking-tight">
              A warm space for growing minds filled with care, nature, and discovery, where play becomes learning{' '}
              <span className="inline-flex items-center gap-1.5 align-middle mx-1">
                {/* 3 Circular Badges in White & #5096ca Blue Palette */}
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#5096ca] text-white inline-flex items-center justify-center shadow-sm">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                </span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2f6591] text-white inline-flex items-center justify-center shadow-sm">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                </span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#99caeb] text-slate-900 inline-flex items-center justify-center shadow-sm">
                  <Puzzle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#254662]" />
                </span>
              </span>
            </h2>
          </div>
        </div>

        {/* Key Metrics Strip on White */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200 grid grid-cols-2 max-w-xl gap-4 sm:gap-8 text-left">
          <div className="pr-4 sm:pr-6 border-r border-slate-200">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#5096ca] tracking-tight">
              100+
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Total learning hours
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#5096ca] tracking-tight">
              98%
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Parent satisfaction built
            </div>
          </div>
        </div>

        {/* 3-Card Grid with Full Photo & Overlaid Text */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Boy Cadet Photo (Sainik School Qualified) */}
          <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[540px] flex flex-col justify-between p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-200/80">
            {/* Background Image filling whole card - High Visibility & Vibrancy */}
            <img
              src="/student-sainik-boy.jpg?v=3"
              alt="Sainik School Qualified Cadet 2025"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient Overlays for high photo visibility while protecting text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 shadow-md border border-white/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Sainik School 2025 Qualified</span>
              </div>
            </div>

            {/* Bottom Overlaid Text with text shadow */}
            <div className="relative z-10 space-y-2 text-white">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none drop-shadow-lg">
                100+
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                happy children
              </div>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal pt-1 drop-shadow-md">
                Nurturing foundational thinking, creative spark, and joyful curiosity every day.
              </p>
            </div>
          </div>

          {/* Card 2: Lead Educator & Mentor Photo */}
          <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[540px] flex flex-col justify-between p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-200/80">
            {/* Background Image filling whole card - High Visibility & Vibrancy */}
            <img
              src="/teacher-mentor.jpg?v=3"
              alt="Inspire Institute Mentor & Educator"
              className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient Overlays for high photo visibility while protecting text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none" />

            {/* Top Badges */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3 py-1.5 rounded-full bg-[#5096ca]/95 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-md border border-white/25">
                <span>Lead Educator: Aalekh Kumar</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                <GreenStarburst className="w-5 h-5" color="#5096ca" />
              </div>
            </div>

            {/* Bottom Overlaid Text with text shadow */}
            <div className="relative z-10 space-y-2 text-white">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none drop-shadow-lg">
                Expert Mentorship
              </div>
              <div className="text-lg sm:text-xl font-bold text-[#99caeb] tracking-tight drop-shadow-md">
                Personalized Coaching
              </div>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal pt-1 drop-shadow-md">
                Dedicated home tutoring and rigorous entrance exam coaching built on individual attention.
              </p>
            </div>
          </div>

          {/* Card 3: Girl Scholar Photo (Banasthali Qualified) */}
          <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[540px] flex flex-col justify-between p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-200/80 md:col-span-2 lg:col-span-1">
            {/* Background Image filling whole card - High Visibility & Vibrancy */}
            <img
              src="/student-banasthali-girl.jpg?v=3"
              alt="Banasthali Vidyapith Qualified 2025"
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient Overlays for high photo visibility while protecting text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3 py-1.5 rounded-full bg-[#5096ca]/95 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-md border border-white/25">
                <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
                <span>Banasthali 2025 Qualified</span>
              </div>
            </div>

            {/* Bottom Overlaid Text with text shadow */}
            <div className="relative z-10 space-y-2 text-white">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none drop-shadow-lg">
                85%
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                learning progress
              </div>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal pt-1 drop-shadow-md">
                Measurable mental arithmetic, reading speed, and non-verbal pattern cognitive jump.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
