import React from 'react';
import BrandLogo from './BrandLogo';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onScrollToSection, onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 border-t border-[#c5e1f3] text-xs sm:text-sm">
      {/* Top Banner in User's #5096ca Sky Blue */}
      <div className="bg-[#5096ca] text-white py-3.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 font-bold text-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
          <span>Class 6 Admissions 2026-27 Batches Now Enrolling!</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand Info & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="large" inverted={false} showTagline={true} />
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mt-3">
              Inspire Institute is India’s specialized premier coaching academy dedicated exclusively to Class 6 entrance examinations for Sainik Schools, Jawahar Navodaya Vidyalayas, Banasthali Vidyapith, and Ramakrishna Mission Vidyapiths.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#f0f7fc] border border-[#c5e1f3] text-xs text-[#285375] flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#5096ca]" />
              <span>Tagline: <strong>"One Inspires Many"</strong></span>
            </div>
          </div>

          {/* Column 2: 5 Class 6 Entrance Tracks */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">
              5 Key Preparation Tracks
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('courses')}
                  className="hover:text-[#5096ca] text-left transition-colors"
                >
                  RK Mission Vidyapith Prep
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('courses')}
                  className="hover:text-[#5096ca] text-left transition-colors"
                >
                  Banasthali Vidyapith (Girls)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('courses')}
                  className="hover:text-[#5096ca] text-left transition-colors"
                >
                  Jawahar Navodaya (JNVST)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('courses')}
                  className="hover:text-[#5096ca] text-left transition-colors"
                >
                  Sainik School (AISSEE)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('courses')}
                  className="hover:text-[#5096ca] text-left transition-colors"
                >
                  Rashtriya Military School (RMS)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Tools */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">
              Student & Parent Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('eligibility')}
                  className="hover:text-[#5096ca] text-left transition-colors"
                >
                  Class 6 Age Eligibility Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('comparison')}
                  className="hover:text-[#5096ca] text-left transition-colors"
                >
                  Exam Pattern Comparison Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('faq')}
                  className="hover:text-[#5096ca] text-left transition-colors"
                >
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions & Helpline */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">
              Admissions Helpline
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#5096ca] shrink-0 mt-0.5" />
                <a href="tel:+917004756532" className="hover:text-[#5096ca] transition-colors font-medium">
                  +91 70047 56532
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#5096ca] shrink-0 mt-0.5" />
                <a href="mailto:aalekhkumar74@gmail.com" className="hover:text-[#5096ca] transition-colors">
                  aalekhkumar74@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <span className="w-4 h-4 flex items-center justify-center text-[#5096ca] font-bold shrink-0 mt-0.5">✦</span>
                <span>Lead Mentor: <strong>Aalekh Kumar</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5096ca] shrink-0 mt-0.5" />
                <span>Anwarpur Chowk, Hajipur, Vaishali, Bihar, 844101</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f0f7fc] hover:bg-[#e1eff9] text-[#285375] font-semibold text-xs border border-[#c5e1f3] transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Back to Top
              </button>
            </div>
          </div>

        </div>

        {/* Prototype Status Note & Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5096ca]" />
            <span>Interactive Front-End Prototype • Client-Side Reactive State (No Database Required)</span>
          </div>

          <div>
            © {new Date().getFullYear()} Inspire Institute. All Rights Reserved. Tagline: "One Inspires Many".
          </div>
        </div>

      </div>
    </footer>
  );
}
