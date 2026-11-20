import React, { useState } from 'react';
import { COURSES } from '../data/coursesData';
import { BookOpen, Clock, Award, CheckCircle, ArrowRight, X, Shield, Sparkles } from 'lucide-react';

export default function CoursesSection({ onOpenInquiry }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredCourses = filter === 'all' 
    ? COURSES 
    : COURSES.filter(c => c.id === filter);

  return (
    <section id="courses" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e1eff9] text-[#285375] text-xs font-bold uppercase tracking-wider mb-3 border border-[#c5e1f3]">
            <Sparkles className="w-3.5 h-3.5 text-[#5096ca]" />
            Class 6 Admissions Focused
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Preparation Tracks for Class 6
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Tailor-made academic pedagogy, daily OMR drills, and interview mentorship designed specifically for 10-to-12-year-old aspirants.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-[#5096ca] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-[#f0f7fc] border border-slate-200'
              }`}
            >
              All Programs
            </button>
            {COURSES.map((course) => (
              <button
                key={course.id}
                onClick={() => setFilter(course.id)}
                className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === course.id
                    ? 'bg-[#5096ca] text-white font-bold shadow-md'
                    : 'bg-white text-slate-700 hover:bg-[#f0f7fc] border border-slate-200'
                }`}
              >
                {course.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-[#c5e1f3] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Banner Image & Badges */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider bg-white/95 text-[#285375] border border-[#c5e1f3] shadow-sm">
                    {course.tag}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-sm">
                    {course.gender}
                  </span>
                </div>

                {/* Target Schools label on bottom of image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[11px] text-[#99caeb] font-medium">Target Campuses:</div>
                  <div className="text-xs text-white font-semibold truncate">{course.targetSchools}</div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#5096ca] transition-colors">
                    {course.title}
                  </h3>

                  {/* Quick Key Facts */}
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-start gap-2 text-slate-700 bg-[#f0f7fc] p-2.5 rounded-xl border border-[#e1eff9]">
                      <Clock className="w-4 h-4 text-[#5096ca] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">Age Limit:</strong> {course.ageLimit}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-slate-700 bg-[#f0f7fc] p-2.5 rounded-xl border border-[#e1eff9]">
                      <Award className="w-4 h-4 text-[#5096ca] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">Exam Scheme:</strong> {course.totalMarks}
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Preparation Focus:
                    </div>
                    <ul className="space-y-1.5">
                      {course.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-[#5096ca] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-slate-500">
                    Target Session: 2026-27
                  </span>

                  <button
                    onClick={() => onOpenInquiry(course.title)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#5096ca] hover:bg-[#3b7db2] active:scale-95 text-white transition-all shadow-md cursor-pointer"
                  >
                    Enroll / Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Class 6 Guarantee & Holistic Pedagogy Banner in #5096ca Sky Blue */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#5096ca] via-[#3b7db2] to-[#285375] text-white p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 text-white">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/80">
                The Inspire Institute Promise
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                "One Inspires Many" — Nurturing Character, Intellect & Mental Stamina
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-medium mt-1 max-w-2xl">
                We do not treat 10-year-olds like high-school rote learners. We teach cognitive pattern logic, speed calculation games, and moral confidence so your child shines both in the written exam and in life.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry('Class 6 Admission Consultation')}
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-[#285375] font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md active:scale-95"
          >
            Speak With Course Counselor
          </button>
        </div>
      </div>

      {/* Deep Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#285375] to-[#5096ca] text-white rounded-t-3xl">
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-block px-3 py-1 rounded bg-white/20 text-white text-xs font-semibold mb-2 border border-white/30">
                Class 6 Entrance Master Roadmap
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedCourse.title}
              </h3>
              <p className="text-sm text-white/90 mt-1">
                Target: {selectedCourse.targetSchools}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-xs text-white">
                <span className="px-2.5 py-1 bg-white/20 rounded-lg">
                  <strong>Gender:</strong> {selectedCourse.gender}
                </span>
                <span className="px-2.5 py-1 bg-white/20 rounded-lg">
                  <strong>Total Marks:</strong> {selectedCourse.totalMarks}
                </span>
                <span className="px-2.5 py-1 bg-white/20 rounded-lg">
                  <strong>Batch Mode:</strong> Classroom & Live Hybrid
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Exam Pattern & Structure
                </h4>
                <div className="p-4 rounded-2xl bg-[#f0f7fc] border border-[#c5e1f3] text-slate-800 text-sm">
                  {selectedCourse.patternSummary}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Syllabus & Core Subject Modules (Class 6 Level)
                </h4>
                <div className="space-y-3">
                  {selectedCourse.syllabus.map((sub, i) => (
                    <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-white">
                      <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#5096ca]" />
                        <span>{sub.subject}</span>
                      </div>
                      <div className="text-xs text-slate-600 mt-1 pl-6">
                        {sub.topics}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const courseName = selectedCourse.title;
                    setSelectedCourse(null);
                    onOpenInquiry(`Enrollment Inquiry: ${courseName}`);
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#5096ca] hover:bg-[#3b7db2] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Free Demo Seat For {selectedCourse.shortName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedCourse(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm transition-colors text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
