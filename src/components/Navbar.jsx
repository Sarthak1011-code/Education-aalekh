import React, { useState } from 'react';
import BrandLogo from './BrandLogo';
import { Phone, BookOpen, Sparkles, HelpCircle, Menu, X, Award, CheckCircle2, Calendar } from 'lucide-react';

export default function Navbar({ onOpenInquiry, onScrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Class 6 Courses', id: 'courses' },
    { name: 'Eligibility Checker', id: 'eligibility' },
    { name: 'Demo Quiz', id: 'quiz' },
    { name: 'Exam Comparison', id: 'comparison' },
    { name: 'Study Material', id: 'materials' },
    { name: 'Results', id: 'results' },
    { name: 'FAQ', id: 'faq' }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (onScrollToSection) {
      onScrollToSection(id);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3" /> New Batch
            </span>
            <span className="text-slate-200">
              Target 2026-27 Class 6 Entrances: RK Mission • Banasthali • Navodaya (JNV) • Sainik School • RMS
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a href="tel:+917004756532" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Admissions: +91 70047 56532</span>
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Focused on Class 6
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div onClick={() => handleNavClick('hero')}>
            <BrandLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('quiz')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              Free Demo Test
            </button>
            
            <button
              onClick={() => onOpenInquiry('General Class 6 Admission Counseling')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Free Demo Class
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-amber-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left px-3 py-2 text-base font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-600 rounded-md"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry('Free Demo Class Request (Mobile)');
                }}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm shadow hover:bg-amber-400"
              >
                Book Free Class 6 Demo Session
              </button>
              <a
                href="tel:+917004756532"
                className="w-full text-center py-2.5 px-4 rounded-lg border border-slate-300 text-slate-700 font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                Call +91 70047 56532
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
