import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Sparkles, Check } from 'lucide-react';

export default function StudyMaterialSection({ onOpenInquiry }) {
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const materials = [
    {
      id: 'mat-sainik',
      title: 'AISSEE Sainik School Class 6 Model Paper (300 Marks)',
      description: 'Full-length 125 Questions paper with Mathematics, GK, Intelligence, and Language keys.',
      pages: '24 Pages PDF',
      size: '2.4 MB'
    },
    {
      id: 'mat-navodaya',
      title: 'JNVST Navodaya Class 6 Pattern Test & OMR Sheet',
      description: '80 Questions OMR test featuring all 10 non-verbal mental ability patterns & arithmetic speed problems.',
      pages: '18 Pages PDF',
      size: '1.9 MB'
    },
    {
      id: 'mat-rk-mission',
      title: 'RK Mission Deoghar & Narendrapur Subjective Paper',
      description: 'Model descriptive question paper for step-by-step Math problems, English composition & Vernacular.',
      pages: '16 Pages PDF',
      size: '1.5 MB'
    },
    {
      id: 'mat-banasthali',
      title: 'Banasthali Vidyapith Class 6 Aptitude Sample Kit',
      description: 'Curated language, arithmetic, and general reasoning mock set modeled after previous admission evaluations.',
      pages: '14 Pages PDF',
      size: '1.7 MB'
    }
  ];

  const handleDownload = (item) => {
    setDownloadingId(item.id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccess(item.title);
      setTimeout(() => {
        setDownloadSuccess(null);
      }, 4000);
    }, 1200);
  };

  return (
    <section id="materials" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e1eff9] text-[#285375] text-xs font-bold uppercase tracking-wider mb-2 border border-[#c5e1f3]">
            <Sparkles className="w-3.5 h-3.5 text-[#5096ca]" />
            Free Learning Vault
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Download Class 6 Sample Papers & Practice Kits
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Get instant access to authentic model question papers and simulated OMR answer sheets designed by Inspire Institute faculty.
          </p>

          {downloadSuccess && (
            <div className="mt-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 animate-in fade-in duration-200">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Sample Paper Ready: "{downloadSuccess}" downloaded to your session!</span>
            </div>
          )}
        </div>

        {/* 4 Downloadable Items Grid in White & #5096ca */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.map((mat) => {
            const isDownloading = downloadingId === mat.id;
            return (
              <div
                key={mat.id}
                className="p-6 rounded-3xl border border-[#c5e1f3] bg-[#f0f7fc]/50 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="p-2.5 rounded-2xl bg-[#e1eff9] text-[#5096ca]">
                      <FileText className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#c5e1f3] text-slate-600">
                      {mat.pages} • {mat.size}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {mat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {mat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e1eff9] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#5096ca] font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Free Class 6 Prototype Copy</span>
                  </div>

                  <button
                    onClick={() => handleDownload(mat)}
                    disabled={isDownloading}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-[#5096ca] hover:bg-[#3b7db2] text-white transition-all flex items-center gap-1.5 disabled:opacity-60 shadow-sm"
                  >
                    <Download className={`w-3.5 h-3.5 ${isDownloading ? 'animate-bounce' : ''}`} />
                    <span>{isDownloading ? 'Downloading PDF...' : 'Download Sample'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complete Inspire Kit Feature Card in Gradient #5096ca */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[#285375] via-[#3b7db2] to-[#5096ca] text-white border border-[#c5e1f3] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs uppercase font-bold text-[#c5e1f3] tracking-wider">
                Comprehensive 8-Booklet Printed Study Kit
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Everything Your Child Needs For A Guaranteed Top Rank
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Our enrolled students receive the complete physical postal kit including Speed Arithmetic Workbook, 10-Patterns Non-Verbal Mental Ability Master Book, English & Vernacular Reading Passages, 100 Printed Barcode OMR Sheets, and Past 10-Year Solved Archive.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-white">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Courier Delivery Across India
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Bilingual (English & Hindi)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Class 6 Level Exclusively
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
              <div className="text-xs text-[#c5e1f3] font-semibold mb-1">
                Academic Session 2026-27
              </div>
              <div className="text-3xl font-black text-white">
                Inspire Study Pack
              </div>
              <div className="text-xs text-white/80 mt-1">
                Included Free in Classroom & Hybrid Batches
              </div>
              
              <button
                onClick={() => onOpenInquiry('Class 6 Study Kit Inquiry')}
                className="w-full mt-4 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#285375] font-bold text-xs shadow-md transition-all"
              >
                Inquire About Study Material Kit
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
