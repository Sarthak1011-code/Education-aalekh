import React, { useState } from 'react';
import { FAQS } from '../data/coursesData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export default function FaqSection({ onOpenInquiry }) {
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(f => 
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e1eff9] text-[#285375] text-xs font-bold uppercase tracking-wider mb-2 border border-[#c5e1f3]">
            <HelpCircle className="w-3.5 h-3.5 text-[#5096ca]" />
            Clear Guidance For Parents
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Have questions about Class 6 entrance rules, syllabus patterns, or hostel admissions? Find answers below.
          </p>

          {/* Search Bar for FAQs */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. age limit, Sainik School girls, RK Mission interview..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#c5e1f3] bg-[#f0f7fc] text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#5096ca] focus:bg-white shadow-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#c5e1f3] bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#5096ca] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#5096ca]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-[#f0f7fc]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-500 text-sm">
              No matching questions found. Feel free to contact our admissions desk directly!
            </div>
          )}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-8 rounded-3xl bg-[#f0f7fc] border border-[#c5e1f3] shadow-sm text-center">
          <h4 className="font-bold text-base text-slate-900">
            Still Have Questions About Your Child's Class 6 Preparation?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Our expert entrance mentors are available for a 1-on-1 personalized academic roadmap discussion.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenInquiry('Parent FAQ Guidance Call')}
              className="px-5 py-2.5 rounded-xl bg-[#5096ca] hover:bg-[#3b7db2] text-white font-bold text-xs shadow-sm transition-all"
            >
              Request Free Academic Consultation
            </button>
            <a
              href="tel:+917004756532"
              className="px-5 py-2.5 rounded-xl border border-[#c5e1f3] bg-white text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
            >
              Call Helpline: +91 70047 56532
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
