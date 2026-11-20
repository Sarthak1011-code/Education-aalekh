import React, { useState } from 'react';
import { Calculator, CheckCircle2, AlertTriangle, Calendar, ArrowRight } from 'lucide-react';

export default function EligibilityChecker({ onOpenInquiry }) {
  const [examType, setExamType] = useState('sainik');
  const [birthYear, setBirthYear] = useState('2015');
  const [birthMonth, setBirthMonth] = useState('05');
  const [birthDay, setBirthDay] = useState('15');
  const [gender, setGender] = useState('boy');
  const [currentClass, setCurrentClass] = useState('class5');
  const [result, setResult] = useState(null);

  const months = [
    { num: '01', name: 'January' },
    { num: '02', name: 'February' },
    { num: '03', name: 'March' },
    { num: '04', name: 'April' },
    { num: '05', name: 'May' },
    { num: '06', name: 'June' },
    { num: '07', name: 'July' },
    { num: '08', name: 'August' },
    { num: '09', name: 'September' },
    { num: '10', name: 'October' },
    { num: '11', name: 'November' },
    { num: '12', name: 'December' }
  ];

  const handleCheck = (e) => {
    e.preventDefault();
    const dob = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
    const refDate = new Date('2026-03-31');

    let ageYears = refDate.getFullYear() - dob.getFullYear();
    let ageMonths = refDate.getMonth() - dob.getMonth();
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    let isEligible = false;
    let message = '';
    let recommendation = '';

    if (examType === 'banasthali' && gender === 'boy') {
      isEligible = false;
      message = 'Banasthali Vidyapith is an exclusive premier residential institution for girls only.';
      recommendation = 'For boys, consider Sainik Schools, Jawahar Navodaya Vidyalaya, or RK Mission Vidyapith.';
    } else if (examType === 'rk-mission' && gender === 'girl') {
      isEligible = false;
      message = 'Ramakrishna Mission Vidyapith (Deoghar/Narendrapur/Purulia) Class 6 residential schools are boys-only campuses.';
      recommendation = 'For girls, we strongly recommend Banasthali Vidyapith, Sainik Schools (AISSEE), or Jawahar Navodaya Vidyalayas.';
    } else if (ageYears >= 10 && (ageYears < 12 || (ageYears === 12 && ageMonths === 0))) {
      isEligible = true;
      message = `Eligible for Class 6 Entrance 2026-27! Your child is approx. ${ageYears} years, ${ageMonths} months old on cutoff date (31 March 2026).`;
      recommendation = 'This is the ideal prime window! Begin structured OMR mock tests and mental ability drills immediately.';
    } else if (ageYears < 10) {
      isEligible = false;
      message = `Currently Under-Age for Class 6 (Child will be ${ageYears} years old). Minimum age is 10 years.`;
      recommendation = 'Perfect time to join our 2-Year Junior Foundation Batch (Class 4) to build strong speed-math and logical foundations before the actual exam year!';
    } else {
      isEligible = false;
      message = `Child is over 12 years of age on 31 March 2026 (${ageYears} years, ${ageMonths} months).`;
      recommendation = 'Check Class 9 lateral entry eligibility or contact our counselors for alternative scholarship boarding schools.';
    }

    setResult({
      isEligible,
      ageText: `${ageYears} Years, ${ageMonths} Months`,
      message,
      recommendation,
      examName: getExamName(examType)
    });
  };

  const getExamName = (type) => {
    switch (type) {
      case 'sainik': return 'Sainik School (AISSEE Class 6)';
      case 'navodaya': return 'Jawahar Navodaya (JNVST Class 6)';
      case 'rk-mission': return 'RK Mission Vidyapith (Class 6)';
      case 'banasthali': return 'Banasthali Vidyapith (Class 6)';
      case 'rms': return 'Rashtriya Military School (RMS CET)';
      default: return 'Class 6 Entrance';
    }
  };

  return (
    <section id="eligibility" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e1eff9] text-[#285375] text-xs font-bold uppercase tracking-wider border border-[#c5e1f3]">
              <Calculator className="w-3.5 h-3.5 text-[#5096ca]" />
              Class 6 Admissions Age Tool
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Is Your Child Eligible for <span className="text-[#5096ca]">Class 6 Entrances?</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every school (Sainik School, Navodaya, RK Mission, Banasthali) maintains razor-strict official birth date cutoffs. A single day's discrepancy can invalidate an application.
            </p>

            <div className="bg-[#f0f7fc] border border-[#c5e1f3] rounded-2xl p-5 text-xs space-y-2 text-slate-700">
              <div className="font-bold text-slate-900 text-sm">Official Class 6 Cutoffs:</div>
              <p>• <strong>Sainik / RMS:</strong> 10 to 12 years as of 31st March 2026</p>
              <p>• <strong>JNVST:</strong> Born strictly within 10 to 12 years window (Class 5 ongoing)</p>
              <p>• <strong>RK Mission:</strong> 10 to 11.5 years as of 1st January 2026</p>
              <p>• <strong>Banasthali:</strong> 10 to 12 years (Girls only)</p>
            </div>
          </div>

          {/* Right Interactive Form & Result Column (White Card with #5096ca Blue accents) */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-[#c5e1f3]">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#5096ca]" />
              <span>Instant Class 6 Eligibility Calculator</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select the target school and enter child’s birth details to evaluate eligibility.
            </p>

            <form onSubmit={handleCheck} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Target School
                </label>
                <select
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                  className="w-full bg-[#f0f7fc] border border-[#c5e1f3] rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#5096ca]"
                >
                  <option value="sainik">Sainik School (AISSEE) - Class 6</option>
                  <option value="navodaya">Jawahar Navodaya Vidyalaya (JNVST) - Class 6</option>
                  <option value="rk-mission">Ramakrishna Mission (RK Mission) Vidyapith - Class 6</option>
                  <option value="banasthali">Banasthali Vidyapith - Class 6 (Girls)</option>
                  <option value="rms">Rashtriya Military School (RMS CET) - Class 6</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Child's Date of Birth
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    className="bg-[#f0f7fc] border border-[#c5e1f3] rounded-xl px-2.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#5096ca]"
                  >
                    {Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0')).map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>

                  <select
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(e.target.value)}
                    className="bg-[#f0f7fc] border border-[#c5e1f3] rounded-xl px-2.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#5096ca]"
                  >
                    {months.map(m => (
                      <option key={m.num} value={m.num}>{m.name}</option>
                    ))}
                  </select>

                  <select
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    className="bg-[#f0f7fc] border border-[#c5e1f3] rounded-xl px-2.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#5096ca]"
                  >
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Gender
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setGender('boy')}
                      className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all ${
                        gender === 'boy'
                          ? 'bg-[#5096ca] text-white border-[#5096ca] font-bold shadow-sm'
                          : 'bg-[#f0f7fc] text-slate-700 border-[#c5e1f3]'
                      }`}
                    >
                      Boy
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('girl')}
                      className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all ${
                        gender === 'girl'
                          ? 'bg-[#5096ca] text-white border-[#5096ca] font-bold shadow-sm'
                          : 'bg-[#f0f7fc] text-slate-700 border-[#c5e1f3]'
                      }`}
                    >
                      Girl
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Current Class
                  </label>
                  <select
                    value={currentClass}
                    onChange={(e) => setCurrentClass(e.target.value)}
                    className="w-full bg-[#f0f7fc] border border-[#c5e1f3] rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#5096ca]"
                  >
                    <option value="class4">Class 4 (Early Foundation)</option>
                    <option value="class5">Class 5 (Appearing / Passed)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-2xl bg-[#5096ca] hover:bg-[#3b7db2] text-white font-bold text-sm shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Eligibility Status</span>
              </button>
            </form>

            {/* Result Box */}
            {result && (
              <div className={`mt-6 p-4 rounded-2xl border animate-in fade-in duration-300 ${
                result.isEligible
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-amber-50 border-amber-300 text-amber-900'
              }`}>
                <div className="flex items-start gap-3">
                  {result.isEligible ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <div className="text-sm font-bold flex items-center gap-2">
                      <span>{result.isEligible ? 'QUALIFIES FOR ADMISSION' : 'ATTENTION REQUIRED'}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                        {result.ageText}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700">
                      {result.message}
                    </p>
                    <p className="text-xs text-[#285375] pt-1 font-medium">
                      💡 {result.recommendation}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Official 2026-27 Guidelines
                  </span>
                  <button
                    onClick={() => onOpenInquiry(`Eligibility Consultation for ${result.examName}`)}
                    className="text-xs font-bold text-[#5096ca] hover:text-[#3b7db2] flex items-center gap-1"
                  >
                    <span>Talk to Admissions Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
