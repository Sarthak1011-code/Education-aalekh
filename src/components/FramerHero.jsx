import React, { useState, useEffect } from 'react';
import DoodleOval from './DoodleOval';
import GreenStarburst from './GreenStarburst';
import { ArrowRight, Menu, X, Calculator, GraduationCap, Sparkles } from 'lucide-react';

export default function FramerHero({ onOpenInquiry, onScrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between bg-slate-950 text-white">
      {/* 16:9 Ultra-HD Panoramic Expanded Background (Approach 2) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/officer-panorama-hd.jpg?v=1"
          alt="Inspire Institute Officer Cadet on Academy Parade Ground"
          className="w-full h-full object-cover object-right md:object-center transform scale-[1.01] transition-transform duration-1000"
        />

        {/* Left Vignette for crisp text contrast, keeping the officer & golden morning sun vivid on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
      </div>

      {/* Top Notch / Dynamic Island Navbar (Option 2: Smart Adaptive Frosted Glass) */}
      <div className={`fixed inset-x-0 z-50 flex items-start justify-center pointer-events-none transition-all duration-300 ${
        isScrolled ? 'top-3 sm:top-4 px-3 sm:px-6' : 'top-0'
      }`}>
        {/* Left continuous top bar (fades away when scrolling past hero) */}
        <div className={`hidden lg:block flex-1 h-3 pointer-events-auto transition-opacity duration-300 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'bg-slate-950/80 backdrop-blur-md opacity-100'
        }`} />

        {/* Left concave inverted fillet wing (fades away when scrolling past hero) */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`hidden lg:block shrink-0 -mr-[1px] fill-current pointer-events-auto select-none transition-opacity duration-300 ${
            isScrolled ? 'opacity-0 pointer-events-none text-transparent' : 'text-slate-950/80 opacity-100'
          }`}
        >
          <path d="M 0 0 C 14 0, 24 10, 24 24 V 0 H 0 Z" />
        </svg>

        {/* Center Notch Island Body (Adaptive Frosted Glass) */}
        <div className={`px-4 sm:px-7 py-2 sm:py-3 shadow-2xl flex items-center justify-between gap-3 sm:gap-8 pointer-events-auto w-[94%] max-w-5xl sm:w-auto transition-all duration-300 backdrop-blur-xl ${
          isScrolled
            ? 'rounded-full bg-white/85 text-slate-800 border border-slate-200/90 shadow-xl shadow-slate-900/10'
            : 'rounded-2xl sm:rounded-b-[24px] sm:rounded-t-none bg-slate-950/85 text-white border sm:border-t-0 border-white/15'
        }`}>
          
          {/* Logo: Glossy Blue Squircle Badge + Bold Title */}
          <div
            onClick={() => onScrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            {/* Glossy Apple-style Blue Squircle Badge */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#38bdf8] via-[#5096ca] to-[#1e40af] p-0.5 shadow-md shadow-blue-500/30 flex items-center justify-center border border-white/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[10px] bg-gradient-to-t from-black/20 to-transparent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white fill-white" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className={`font-extrabold text-base tracking-tight font-sans leading-none transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Inspire
              </span>
              <span className={`text-[10px] font-medium tracking-wider uppercase mt-0.5 transition-colors duration-300 ${
                isScrolled ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Institute
              </span>
            </div>
          </div>

          {/* Center Navigation Links (Clean & Muted) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs sm:text-sm font-medium">
            <button
              onClick={() => onScrollToSection('courses')}
              className={`transition-colors duration-300 cursor-pointer ${
                isScrolled ? 'text-slate-600 hover:text-[#5096ca]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => onScrollToSection('eligibility')}
              className={`transition-colors duration-300 cursor-pointer ${
                isScrolled ? 'text-slate-600 hover:text-[#5096ca]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Age Checker
            </button>
            <button
              onClick={() => onScrollToSection('why-us')}
              className={`transition-colors duration-300 cursor-pointer ${
                isScrolled ? 'text-slate-600 hover:text-[#5096ca]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Why Us
            </button>
            <button
              onClick={() => onScrollToSection('comparison')}
              className={`transition-colors duration-300 cursor-pointer ${
                isScrolled ? 'text-slate-600 hover:text-[#5096ca]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Exam Matrix
            </button>
            <button
              onClick={() => onScrollToSection('faq')}
              className={`transition-colors duration-300 cursor-pointer ${
                isScrolled ? 'text-slate-600 hover:text-[#5096ca]' : 'text-slate-300 hover:text-white'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Right Uiverse CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry('Top Notch Apply Now')}
              className={`cta-btn ${isScrolled ? '' : 'cta-btn-dark'}`}
            >
              <span>Apply Now</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Right concave inverted fillet wing (fades away when scrolling past hero) */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`hidden lg:block shrink-0 -ml-[1px] fill-current pointer-events-auto select-none transition-opacity duration-300 ${
            isScrolled ? 'opacity-0 pointer-events-none text-transparent' : 'text-slate-950/80 opacity-100'
          }`}
        >
          <path d="M 24 0 C 10 0, 0 10, 0 24 V 0 H 24 Z" />
        </svg>

        {/* Right continuous top bar (fades away when scrolling past hero) */}
        <div className={`hidden lg:block flex-1 h-3 pointer-events-auto transition-opacity duration-300 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'bg-slate-950/80 backdrop-blur-md opacity-100'
        }`} />
      </div>

      {/* Mobile Drawer (Adaptive Glass when opened) */}
      {mobileMenuOpen && (
        <div className={`md:hidden fixed inset-x-3 z-50 rounded-3xl p-6 border space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 backdrop-blur-2xl ${
          isScrolled
            ? 'top-[70px] bg-white/95 text-slate-800 border-slate-200 shadow-slate-900/15'
            : 'top-[68px] bg-slate-950/95 text-white border-white/15'
        }`}>
          <button
            onClick={() => { setMobileMenuOpen(false); onScrollToSection('courses'); }}
            className={`block text-left w-full text-base font-semibold py-1 transition-colors ${
              isScrolled ? 'text-slate-800 hover:text-[#5096ca]' : 'text-white hover:text-slate-200'
            }`}
          >
            5 Class 6 Preparation Tracks
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onScrollToSection('eligibility'); }}
            className={`block text-left w-full text-base font-semibold py-1 transition-colors ${
              isScrolled ? 'text-slate-800 hover:text-[#5096ca]' : 'text-white hover:text-slate-200'
            }`}
          >
            Class 6 Age Eligibility Calculator
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onScrollToSection('why-us'); }}
            className={`block text-left w-full text-base font-semibold py-1 transition-colors ${
              isScrolled ? 'text-slate-800 hover:text-[#5096ca]' : 'text-white hover:text-slate-200'
            }`}
          >
            Why Choose Us
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onScrollToSection('comparison'); }}
            className={`block text-left w-full text-base font-semibold py-1 transition-colors ${
              isScrolled ? 'text-slate-800 hover:text-[#5096ca]' : 'text-white hover:text-slate-200'
            }`}
          >
            Exam Pattern Matrix
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onScrollToSection('faq'); }}
            className={`block text-left w-full text-base font-semibold py-1 transition-colors ${
              isScrolled ? 'text-slate-800 hover:text-[#5096ca]' : 'text-white hover:text-slate-200'
            }`}
          >
            Frequently Asked Questions
          </button>
          
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenInquiry('Mobile Apply Now'); }}
              className={`cta-btn w-full justify-center ${isScrolled ? '' : 'cta-btn-dark'}`}
            >
              <span>Apply for Class 6 Batch</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Hero Content (Left-aligned over the open drill ground) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 pb-20 pt-32 sm:pt-40 flex flex-col justify-end">
        <div className="max-w-xl lg:max-w-2xl text-left space-y-6">
          
          {/* Quote Badge from Cadet Photo */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/85 border border-white/20 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-md text-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#5096ca] animate-pulse" />
            <span>“Mind of a Scholar, Body of a Cadet”</span>
          </div>

          {/* Headline matching image */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Transforming students <br />
            <span className="relative inline-block mt-1">
              <span className="relative z-10">into future officers</span>
              <DoodleOval className="absolute -inset-x-3 -inset-y-2 sm:-inset-x-5 sm:-inset-y-3.5 w-[115%] sm:w-[124%] h-[140%] sm:h-[155%]" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-200/95 leading-relaxed font-normal max-w-lg">
            Premier Class 6 preparation for Sainik School, RK Mission, Jawahar Navodaya & RMS. Cultivating razor-sharp academic intellect, physical endurance, and disciplined character.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              onClick={() => onOpenInquiry('Hero Enroll Now')}
              className="bg-white text-slate-900 hover:bg-slate-100 rounded-full pl-6 pr-2 py-2 font-bold text-sm sm:text-base flex items-center justify-between sm:justify-start gap-4 shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 group cursor-pointer w-full sm:w-auto"
            >
              <span>Enroll now</span>
              <div className="w-9 h-9 rounded-full bg-[#5096ca] text-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onScrollToSection('eligibility')}
              className="bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md text-white border border-white/25 rounded-full px-5 py-3 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <Calculator className="w-4 h-4 text-[#5096ca]" />
              <span>Check Age Limit</span>
            </button>
          </div>

          {/* Quick Metrics Badges */}
          <div className="pt-4 flex items-center justify-between sm:justify-start gap-4 sm:gap-6 text-[11px] sm:text-sm text-slate-300 border-t border-white/10 max-w-xs">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#5096ca] font-bold text-sm sm:text-base">100+</span>
              <span>Learning Hours</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#5096ca] font-bold text-sm sm:text-base">98%</span>
              <span>Parent Trust</span>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Starburst Accent */}
      <div className="absolute -bottom-10 -right-8 z-10 pointer-events-none">
        <GreenStarburst className="w-36 h-36 sm:w-44 sm:h-44 opacity-80 animate-spin-slow" color="#5096ca" />
      </div>
    </section>
  );
}
