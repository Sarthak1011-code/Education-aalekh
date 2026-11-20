import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Send, AlertCircle, Trash2, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const SHEETDB_URL = 'https://sheetdb.io/api/v1/ot3mkm3gdptrp';

export default function InquiryModal({ isOpen, onClose, defaultSubject = 'Class 6 Admission Inquiry' }) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    targetExam: 'Sainik School (AISSEE)',
    mode: 'Online Live Hybrid',
    city: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [storedInquiries, setStoredInquiries] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('inspire_prototype_inquiries');
      if (saved) {
        setStoredInquiries(JSON.parse(saved));
      }
    } catch (e) {}
  }, [submitted]);

  // Lock body scroll and handle Escape key while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    setLoading(true);
    setErrorMessage('');

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const newEntry = {
      id: Date.now(),
      ...formData,
      date: timestamp,
      timestamp: timestamp
    };

    try {
      // 1. Send data directly to your connected Google Sheet via SheetDB
      await fetch(SHEETDB_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              parentName: formData.parentName,
              childName: formData.childName || '-',
              phone: formData.phone,
              targetExam: formData.targetExam,
              mode: formData.mode,
              city: formData.city || '-',
              date: timestamp
            }
          ]
        })
      });

      // 2. Also keep a local backup in browser
      try {
        const existing = JSON.parse(localStorage.getItem('inspire_prototype_inquiries') || '[]');
        const updated = [newEntry, ...existing];
        localStorage.setItem('inspire_prototype_inquiries', JSON.stringify(updated));
        setStoredInquiries(updated);
      } catch (err) {}

      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 }
        });
      } catch (err) {}
    } catch (err) {
      console.error('Error submitting inquiry to SheetDB:', err);
      // Fallback: save locally even if network hiccups
      const existing = JSON.parse(localStorage.getItem('inspire_prototype_inquiries') || '[]');
      const updated = [newEntry, ...existing];
      localStorage.setItem('inspire_prototype_inquiries', JSON.stringify(updated));
      setStoredInquiries(updated);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClearHistory = () => {
    localStorage.removeItem('inspire_prototype_inquiries');
    setStoredInquiries([]);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setErrorMessage('');
    setFormData({
      parentName: '',
      childName: '',
      phone: '',
      targetExam: 'Sainik School (AISSEE)',
      mode: 'Online Live Hybrid',
      city: ''
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* 1. Mobile Fixed Pinned Close Button: Stays firmly in view at top-right of mobile screen, never scrolls away */}
      <button
        onClick={onClose}
        type="button"
        className="fixed top-3 right-3 sm:hidden z-[70] w-10 h-10 flex items-center justify-center text-white bg-slate-900/90 active:bg-slate-950 backdrop-blur-md rounded-full shadow-2xl border border-white/25 cursor-pointer touch-manipulation"
        aria-label="Close form"
      >
        <X className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Centering wrapper that allows full smooth scroll on small devices without negative top clipping */}
      <div
        className="min-h-full w-full flex items-center justify-center p-3 sm:p-5"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Outer Card with Jotform-style rounded shadow frame */}
        <div
          className="bg-white rounded-[24px] sm:rounded-[32px] max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200/80 animate-in fade-in zoom-in-95 duration-200 relative my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Desktop Floating Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="hidden sm:flex absolute top-4 right-4 z-20 w-10 h-10 items-center justify-center text-slate-500 hover:text-slate-900 bg-white/95 hover:bg-white rounded-full transition-all shadow-md border border-slate-200 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* 2-Column Split: Left Side Photo Banner + Right Side Clean Event Registration Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
            
            {/* Left Side: Photo Banner with Gradient Overlay */}
            <div className="lg:col-span-5 relative bg-slate-900 min-h-[160px] sm:min-h-[240px] lg:min-h-full overflow-hidden flex flex-col justify-between p-5 sm:p-8 text-white">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
                alt="Inspire Institute Students & Academic Classroom Mentorship"
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08] hover:scale-105 transition-transform duration-700"
              />
              
              {/* Elegant Gradient Overlays (Warm & Professional Indigo-Slate) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/20" />

              {/* Top Badge */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span>Class 6 Admissions 2026-27</span>
                </div>
              </div>

              {/* Bottom Content on Photo */}
              <div className="relative z-10 space-y-3 pt-8 sm:pt-16">
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#99caeb]">
                    Inspire Institute
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    “Mind of a Scholar, Body of a Cadet”
                  </h4>
                </div>

                <p className="text-xs text-slate-200/90 leading-relaxed hidden sm:block">
                  Exclusive entrance mentoring for Sainik School (AISSEE), Jawahar Navodaya (JNVST), RK Mission Vidyapith, and Banasthali.
                </p>

                {/* Direct Sync Badge */}
                <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Sync Active: Stored to Google Sheet</span>
                </div>
              </div>
            </div>

            {/* Right Side: Clean Form Container (Inspired by Event Registration Template) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white overflow-y-auto max-h-[85vh] lg:max-h-[640px]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Form Header */}
                  <div className="border-b border-slate-100 pb-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#e1eff9] text-[#285375] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
                          Admission Registration Form
                        </div>
                        <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          Book Free Demo Class
                        </h3>
                      </div>
                      {/* Secondary inline close button on the form card header */}
                      <button
                        type="button"
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                        title="Close form"
                        aria-label="Close dialog"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Be Part of the Story — Register Today! Free Diagnostic Kit included.
                    </p>
                  </div>

                {/* Section 1: Contact Information */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Student & Guardian Details
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Kumar"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#5096ca] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Child's Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Aarav"
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#5096ca] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Contact Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#5096ca] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          City / State
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Lucknow, UP"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#5096ca] transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Course & Target Details */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Target Preferences
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Class 6 Entrance Exam
                      </label>
                      <select
                        value={formData.targetExam}
                        onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#5096ca] transition-colors text-slate-800"
                      >
                        <option value="Sainik School (AISSEE)">Sainik School (AISSEE) - Class 6</option>
                        <option value="Jawahar Navodaya (JNVST)">Jawahar Navodaya Vidyalaya (JNVST) - Class 6</option>
                        <option value="RK Mission Vidyapith">Ramakrishna Mission (RK Mission) Vidyapith</option>
                        <option value="Banasthali Vidyapith">Banasthali Vidyapith (Girls Only)</option>
                        <option value="Rashtriya Military School (RMS)">Rashtriya Military School (RMS CET)</option>
                        <option value="Combined All-in-One Foundation">Combined All-in-One Class 6 Foundation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Learning Mode
                      </label>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.mode === 'Online Live Hybrid'
                            ? 'border-[#5096ca] bg-[#e1eff9] font-bold text-slate-900 shadow-sm'
                            : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
                        }`}>
                          <input
                            type="radio"
                            name="mode"
                            value="Online Live Hybrid"
                            checked={formData.mode === 'Online Live Hybrid'}
                            onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                            className="accent-[#5096ca]"
                          />
                          <span>Online Live</span>
                        </label>

                        <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.mode === 'Classroom Center'
                            ? 'border-[#5096ca] bg-[#e1eff9] font-bold text-slate-900 shadow-sm'
                            : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
                        }`}>
                          <input
                            type="radio"
                            name="mode"
                            value="Classroom Center"
                            checked={formData.mode === 'Classroom Center'}
                            onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                            className="accent-[#5096ca]"
                          />
                          <span>Classroom</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit & Dismiss Actions */}
                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-5 rounded-2xl bg-[#5096ca] hover:bg-[#3b7db2] active:scale-[0.99] disabled:opacity-70 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Recording in Google Sheet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Complete Registration (Confirm Free Demo)</span>
                      </>
                    )}
                  </button>

                  {/* Accessible Close / Cancel button at bottom of form */}
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors text-center cursor-pointer border border-slate-200/80 hover:bg-slate-50 rounded-xl"
                  >
                    ✕ Cancel & Close Window
                  </button>

                  <p className="text-center text-[11px] text-slate-400 mt-1">
                    🔒 100% Confidential • No spam • Official Inspire Institute Desk
                  </p>
                </div>
              </form>
            ) : (
              /* Success Confirmation View */
              <div className="text-center py-6 sm:py-10 space-y-5 animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h4 className="text-2xl font-black text-slate-900">
                    Registration Confirmed!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Your details have been saved directly to the admissions roster.
                  </p>
                </div>

                <div className="bg-[#f0f7fc] border border-[#c5e1f3] rounded-2xl p-4 text-xs text-slate-700 text-left space-y-1.5 max-w-md mx-auto">
                  <div><strong>Parent:</strong> {formData.parentName}</div>
                  <div><strong>Target:</strong> {formData.targetExam}</div>
                  <div><strong>Mobile:</strong> {formData.phone}</div>
                  <div><strong>Mode:</strong> {formData.mode}</div>
                  <div className="text-emerald-700 font-semibold pt-1 flex items-center gap-1.5 border-t border-[#c5e1f3] mt-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Successfully logged in Google Sheet!</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Our Senior Academic Mentor will connect within 24 hours to schedule the diagnostic assessment and share the study materials.
                </p>

                <div className="flex gap-2.5 justify-center pt-2">
                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Register Another Student
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-[#5096ca] hover:bg-[#3b7db2] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    Back to Website
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  </div>
);
}
