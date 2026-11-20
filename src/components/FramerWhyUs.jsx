import React, { useEffect, useRef, useState } from 'react';
import DoodleSwirl from './DoodleSwirl';
import GreenStarburst from './GreenStarburst';
import { Maximize2, X, Sparkles, CheckCircle2 } from 'lucide-react';

const mainPhoto = {
  url: '/students/student-1.jpg',
  title: 'Happy Learners Classroom',
  badge: 'Inspire Classroom Hub',
  tag: 'Daily OMR Drills & Peer Study',
  objectPos: 'object-[center_28%]'
};

export default function FramerWhyUs({ onOpenInquiry }) {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height * 0.5), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle natural elevation scale on scroll
  const scale = 0.94 + Math.min(scrollProgress * 0.1, 0.1);
  const translateY = 24 - Math.min(scrollProgress * 28, 28);
  const shadowSpread = Math.min(scrollProgress * 30, 30);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative bg-white text-slate-900 py-20 sm:py-28 overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Single Premium Landscape Classroom Showcase (lg:col-span-7) */}
          <div className="lg:col-span-7 relative flex flex-col items-center">
            
            {/* Ambient Sky Blue Glow */}
            <div
              className="absolute -inset-4 rounded-[36px] bg-[#5096ca]/15 blur-3xl transition-opacity duration-700 pointer-events-none"
              style={{ opacity: scrollProgress * 0.9 }}
            />

            {/* The Landscape Photo Showcase Card */}
            <div
              className="relative w-full max-w-2xl rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#c5e1f3] transition-all duration-500 ease-out will-change-transform select-none group bg-slate-950 shadow-2xl"
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                boxShadow: `0 ${shadowSpread + 8}px ${shadowSpread * 2 + 10}px -12px rgba(80, 150, 202, 0.38)`
              }}
            >
              {/* Photo Container - 16:10 Cinematic Landscape Frame */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] bg-slate-950 overflow-hidden">
                <img
                  src={mainPhoto.url}
                  alt={mainPhoto.title}
                  className={`w-full h-full object-cover ${mainPhoto.objectPos} filter brightness-105 contrast-105 group-hover:scale-102 transition-transform duration-700`}
                />

                {/* Subtle Cinematic Overlays for Text & Badge Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Top Floating Badge & Fullscreen Button */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md">
                    <Sparkles className="w-3 h-3 text-[#5096ca]" />
                    <span>Real Inspire Institute Classrooms</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white/90 hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                    title="View Fullscreen"
                    aria-label="View Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Overlaid Bottom Glass Banner */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/15 shadow-xl flex flex-wrap items-center justify-between gap-3 text-white">
                    <div className="space-y-0.5">
                      <div className="text-sm sm:text-base font-extrabold text-white tracking-tight flex items-center gap-2">
                        <span>{mainPhoto.title}</span>
                        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="text-[11px] text-[#99caeb] font-medium">
                        {mainPhoto.tag}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold bg-[#5096ca] text-white px-3 py-1 rounded-full shadow-sm">
                        {mainPhoto.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Heading, Swirl, Features & Uiverse Button (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-7 relative">
            
            {/* Small Label in #5096ca */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5096ca]">
              <span>✦</span>
              <span>WHY CHOOSE US</span>
            </div>

            {/* Main Heading with Yellow Hand-Drawn Swirl Doodle */}
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.16]">
                What makes us <br />
                <span className="relative inline-block mt-1">
                  <span>the right </span>
                  <span className="relative inline-block">
                    choice
                    <DoodleSwirl className="absolute -top-10 -right-12 sm:-top-12 sm:-right-20 w-24 h-24 sm:w-36 sm:h-36 pointer-events-none" />
                  </span>
                </span>
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We create a nurturing, disciplined environment where children build academic confidence, master mental speed, and prepare for premier residential schools through joyful daily mentorship.
            </p>

            {/* Divider with Sky-Blue Starburst in the center */}
            <div className="relative py-1 flex items-center justify-center">
              <div className="w-full border-t border-slate-200" />
              <div className="absolute bg-white px-3 flex items-center justify-center">
                <GreenStarburst className="w-6 h-6 animate-spin-slow" color="#5096ca" />
              </div>
            </div>

            {/* 2-Column Features: Caring Space & Fun Learning */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
              <div className="space-y-1.5 p-3.5 rounded-2xl bg-[#f0f7fc] border border-[#c5e1f3]/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5096ca]" />
                  <h4 className="text-base font-bold text-slate-900">
                    Caring space
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Safe, high-trust mentorship where every 10-to-12-year-old child feels valued, disciplined, and encouraged.
                </p>
              </div>

              <div className="space-y-1.5 p-3.5 rounded-2xl bg-[#f0f7fc] border border-[#c5e1f3]/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5096ca]" />
                  <h4 className="text-base font-bold text-slate-900">
                    Concept Mastery
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Daily simulated OMR tests, Vedic speed arithmetic, and interview grooming that turn anxiety into confidence.
                </p>
              </div>
            </div>

            {/* Custom Uiverse CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry('Why Choose Us Contact')}
                className="cta-btn"
              >
                <span>Contact Us</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Fullscreen HD Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={mainPhoto.url}
              alt={mainPhoto.title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-bold">{mainPhoto.title}</h3>
              <p className="text-xs text-slate-300">{mainPhoto.tag} • {mainPhoto.badge}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
