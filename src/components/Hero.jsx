import React from 'react';
import BrandLogo from './BrandLogo';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Compass, BookOpen, Calculator, Trophy, Star } from 'lucide-react';
import { STATS } from '../data/coursesData';

export default function Hero({ onOpenInquiry, onScrollToSection }) {
  const targetSchoolsList = [
    { name: 'RK Mission Vidyapith', color: 'bg-orange-500/10 text-orange-700 border-orange-200' },
    { name: 'Banasthali Vidyapith', color: 'bg-rose-500/10 text-rose-700 border-rose-200' },
    { name: 'Jawahar Navodaya (JNV)', color: 'bg-blue-500/10 text-blue-700 border-blue-200' },
    { name: 'Sainik School (AISSEE)', color: 'bg-emerald-500/10 text-emerald-700 border-emerald-200' },
    { name: 'Rashtriya Military (RMS)', color: 'bg-indigo-500/10 text-indigo-700 border-indigo-200' }
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Solar & Earth Aurora Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-amber-500/20 via-orange-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="tracking-wide uppercase font-bold text-amber-400">Our Sacred Creed:</span>
            <span className="italic font-serif text-white">"One Inspires Many"</span>
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
            🎯 100% Focused on Class 6 Entrance Exams
          </span>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            Awaken the Future Leader in Your Child at{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Inspire Institute
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-500 opacity-80" viewBox="0 0 250 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C50 2 150 2 247 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            India's most trusted preparatory ecosystem designed exclusively for young minds (Ages 10-12) aspiring for admission into the nation’s top residential and military schools.
          </p>

          {/* 5 Targeted Schools Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1">
              Top Class 6 Targets:
            </span>
            {targetSchoolsList.map((item, idx) => (
              <span
                key={idx}
                className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border backdrop-blur-sm transition-all hover:scale-105 shadow-sm ${item.color}`}
              >
                {item.name}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onScrollToSection('courses')}
              className="px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 transition-all duration-200 active:scale-95 flex items-center gap-2 group"
            >
              <span>Explore 5 Class 6 Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onScrollToSection('eligibility')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all duration-200 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>Check Class 6 Age Limit</span>
            </button>

            <button
              onClick={() => onScrollToSection('quiz')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-amber-200 bg-amber-950/60 hover:bg-amber-900/60 border border-amber-600/40 transition-all duration-200 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Take Free Demo Quiz</span>
            </button>
          </div>
        </div>

        {/* Brand Emblem & Philosophy Featurette Card */}
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-slate-800/80 via-slate-850/80 to-slate-900/80 border border-slate-700/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Logo Motif Display */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950/60 border border-amber-500/30 text-center">
              <BrandLogo size="large" showTagline={false} inverted={true} />
              <div className="mt-3 text-center">
                <span className="font-bold text-base text-white font-serif tracking-wide block">Inspire Institute</span>
                <span className="text-amber-400 text-xs italic font-medium">"One Inspires Many"</span>
              </div>
              <div className="mt-2 text-[11px] text-slate-400 max-w-[200px]">
                Earth represents rooted character; the Rising Sun symbolizes dawn of intellect.
              </div>
            </div>

            {/* Why Exclusive to Class 6 description */}
            <div className="md:col-span-8 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Why We Specialize Exclusively in Class 6</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                The Foundation Years Where Mentorship Shapes a Lifetime
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                At ages 10 to 12, a child transitions from memorization to logical conceptual reasoning. Admissions into institutions like <strong className="text-white">RK Mission, Banasthali Vidyapith, Navodaya, and Sainik Schools</strong> demand unmatched OMR speed, mental figure reasoning, and disciplined writing habits.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>OMR Sheet & Speed Math Drills</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Personalized Interview Readiness</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Girls Track for Banasthali & AISSEE</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Character & Value Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-sm text-center hover:border-amber-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-1 font-bold text-xs sm:text-sm text-white">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
