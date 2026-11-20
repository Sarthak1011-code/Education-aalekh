import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function ComparisonTable({ onOpenInquiry }) {
  const comparisonData = [
    {
      feature: 'Target Candidates',
      rkMission: 'Class 5 passed/appearing (Ages 10-11.5)',
      banasthali: 'Class 5 passed/appearing (Ages 10-12)',
      navodaya: 'Class 5 passed/appearing (Ages 10-12)',
      sainik: 'Class 5 passed/appearing (Ages 10-12)',
      rms: 'Class 5 passed/appearing (Ages 10-12)'
    },
    {
      feature: 'Gender Eligibility',
      rkMission: 'Boys Only',
      banasthali: 'Girls Only',
      navodaya: 'Boys & Girls (Co-ed)',
      sainik: 'Boys & Girls (Co-ed)',
      rms: 'Boys & Girls (Co-ed)'
    },
    {
      feature: 'Exam Format',
      rkMission: 'Subjective Written + Descriptive',
      banasthali: 'Aptitude & Language Assessment',
      navodaya: '100% OMR Objective (80 Qs)',
      sainik: '100% OMR Objective (125 Qs - 300 Marks)',
      rms: 'OMR Objective (200 Marks) + Interview'
    },
    {
      feature: 'Core Subject Weightage',
      rkMission: 'Math, English, Science, Vernacular',
      banasthali: 'Hindi, English, Math, General Awareness',
      navodaya: 'Mental Ability (50%), Math (25%), Language (25%)',
      sainik: 'Math (50% - 150 M), GK (50 M), Lang (50 M), Intelligence (50 M)',
      rms: 'English (50 M - Qual.), Intelligence (50 M), Math (50 M), GK (50 M)'
    },
    {
      feature: 'Personal Interview',
      rkMission: 'Yes (Very Crucial)',
      banasthali: 'Yes (Counseling & Interaction)',
      navodaya: 'No Interview',
      sainik: 'No Interview (Medical Only)',
      rms: 'Yes (20 Marks Board Interview)'
    },
    {
      feature: 'Institution Type',
      rkMission: 'Spiritual, Vedic & Modern Residential',
      banasthali: 'Premier Five-Fold Women University School',
      navodaya: 'Central Govt. 100% Free Residential',
      sainik: 'MoD Armed Forces Feeder Boarding',
      rms: 'Ministry of Defence Military Boarding'
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e1eff9] text-[#285375] text-xs font-bold uppercase tracking-wider mb-2 border border-[#c5e1f3]">
            Class 6 Exam Pattern Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Comparison for Class 6 Admissions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Understand the exact nuances, testing patterns, and eligibility of each prestigious institution at a glance.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#c5e1f3] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-[#5096ca] text-white divide-x divide-white/20">
                  <th className="py-4 px-4 font-bold uppercase tracking-wider w-1/6">
                    Parameters
                  </th>
                  <th className="py-4 px-4 font-bold text-white w-1/6">
                    RK Mission Vidyapith
                  </th>
                  <th className="py-4 px-4 font-bold text-white w-1/6">
                    Banasthali Vidyapith
                  </th>
                  <th className="py-4 px-4 font-bold text-white w-1/6">
                    Jawahar Navodaya (JNV)
                  </th>
                  <th className="py-4 px-4 font-bold text-white w-1/6">
                    Sainik School (AISSEE)
                  </th>
                  <th className="py-4 px-4 font-bold text-white w-1/6">
                    Rashtriya Military (RMS)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e1eff9]">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`divide-x divide-[#e1eff9] hover:bg-[#f0f7fc] transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#fafcfe]'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-800 bg-[#f0f7fc]/60">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      {row.rkMission}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      {row.banasthali}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      {row.navodaya}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">
                      {row.sainik}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      {row.rms}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#f0f7fc] border-t border-[#c5e1f3] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-[#5096ca]" />
              <span>Inspire Institute provides integrated batches covering overlapping syllabus topics to maximize selection probability.</span>
            </div>

            <button
              onClick={() => onOpenInquiry('Comparative Counseling Assistance')}
              className="px-4 py-2 rounded-xl bg-[#5096ca] hover:bg-[#3b7db2] text-white font-bold text-xs shadow-sm transition-colors"
            >
              Request Custom Multi-Exam Study Plan
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
