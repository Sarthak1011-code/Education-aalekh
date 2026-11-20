import React from 'react';
import { SUCCESS_STORIES, TESTIMONIALS } from '../data/coursesData';
import { Trophy, Star, Award } from 'lucide-react';

export default function ResultsSection({ onOpenInquiry }) {
  return (
    <section id="results" className="py-20 bg-white text-slate-900 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e1eff9] text-[#285375] text-xs font-bold uppercase tracking-wider mb-2 border border-[#c5e1f3]">
            <Trophy className="w-3.5 h-3.5 text-[#5096ca]" />
            Class 6 Hall of Fame
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Young Champions Who Inspired A Nation
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Every year, students trained at Inspire Institute secure top single-digit ranks in Sainik Schools, Navodaya Vidyalayas, Banasthali, and RK Mission Vidyapiths.
          </p>
        </div>

        {/* 4 Featured Top Rankers Grid in White & #5096ca */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUCCESS_STORIES.map((student, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#c5e1f3] overflow-hidden flex flex-col justify-between hover:border-[#5096ca] transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-lg"
            >
              {/* Photo & Rank Badge */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#5096ca] text-white text-xs font-black tracking-wide shadow-md flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {student.rank}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-lg font-bold text-white">{student.name}</div>
                  <div className="text-xs text-[#99caeb] font-semibold">{student.exam}</div>
                </div>
              </div>

              {/* Student Quote & Score */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold px-2 py-1 rounded-lg bg-[#f0f7fc] text-[#285375] border border-[#c5e1f3] inline-block mb-3">
                    Score: {student.score}
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{student.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Batch of {student.year}</span>
                  <span className="text-emerald-700 font-bold">Verified Admit</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Parent Testimonials */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              What Parents Say About Our Class 6 Mentorship
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real feedback from guardians whose 10-year-olds achieved residential boarding dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#f0f7fc] border border-[#c5e1f3] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#5096ca] mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#5096ca] text-[#5096ca]" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.content}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#c5e1f3]">
                  <div className="font-bold text-sm text-slate-900">{t.parentName}</div>
                  <div className="text-xs text-[#5096ca] font-semibold">{t.studentName}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{t.achievement}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Callout in #5096ca */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#285375] via-[#3b7db2] to-[#5096ca] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#c5e1f3] uppercase tracking-widest">
              Our Core Philosophy
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-black text-white">
              "One Inspires Many" — The Mentorship Chain
            </h4>
            <p className="text-xs sm:text-sm text-white/90 max-w-2xl">
              When one child from a town or village cracks Sainik School or Navodaya, it ignites the aspirations of 50 other families. We nurture that ripple effect every single day.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Book Free Diagnostic & Strategy Call')}
            className="shrink-0 px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-[#285375] font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            Start Your Child's Journey
          </button>
        </div>

      </div>
    </section>
  );
}
