import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { CheckCircle2, XCircle, Sparkles, HelpCircle, RotateCcw, ArrowRight, Award, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DemoQuiz({ onOpenInquiry }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (optIndex) => {
    if (showResults) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIdx]: optIndex
    });
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowExplanation(false);
    } else {
      calculateFinal();
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      setShowExplanation(false);
    }
  };

  const calculateFinal = () => {
    setShowResults(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = Object.keys(selectedAnswers).reduce((acc, qIdx) => {
    return selectedAnswers[qIdx] === QUIZ_QUESTIONS[qIdx].correctIndex ? acc + 1 : acc;
  }, 0);

  return (
    <section id="quiz" className="py-20 bg-[#f0f7fc] text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#285375] text-xs font-bold uppercase tracking-wider mb-2 border border-[#c5e1f3] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#5096ca]" />
            Free 5-Minute Class 6 Diagnostic Test
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Test Your Child's Class 6 Entrance Readiness
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Real sample questions from Sainik School, Navodaya, Banasthali, and RK Mission patterns.
          </p>
        </div>

        {/* Quiz Container Card in Crisp White */}
        <div className="bg-white rounded-3xl border border-[#c5e1f3] p-6 sm:p-10 shadow-xl">
          {!showResults ? (
            <div>
              {/* Progress Bar & Question Tracker */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#5096ca] uppercase tracking-wider">
                    Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-lg bg-[#e1eff9] text-[#285375] font-medium border border-[#c5e1f3]">
                    {currentQ.exam}
                  </span>
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Subject: <span className="text-slate-800 font-bold">{currentQ.subject}</span>
                </div>
              </div>

              {/* Progress Line */}
              <div className="w-full bg-[#e1eff9] h-2 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-[#5096ca] h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options List */}
              <div className="mt-6 space-y-3">
                {currentQ.options.map((opt, i) => {
                  const isSelected = selectedAnswers[currentIdx] === i;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(i)}
                      className={`w-full text-left p-4 rounded-2xl text-sm font-medium border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#e1eff9] border-[#5096ca] text-slate-900 font-bold shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-[#f0f7fc] hover:border-[#99caeb]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          isSelected
                            ? 'bg-[#5096ca] text-white shadow-sm'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{opt}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Toggle Explanation if answered */}
              {selectedAnswers[currentIdx] !== undefined && (
                <div className="mt-4">
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="text-xs text-[#5096ca] hover:underline font-bold flex items-center gap-1.5"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{showExplanation ? 'Hide Explanation' : 'View Instant Solution & Logic'}</span>
                  </button>

                  {showExplanation && (
                    <div className="mt-2 p-4 rounded-xl bg-[#f0f7fc] border border-[#c5e1f3] text-xs text-slate-700 animate-in fade-in">
                      <div className="font-bold text-[#285375] mb-1">
                        Correct Answer: {String.fromCharCode(65 + currentQ.correctIndex)} — {currentQ.options[currentQ.correctIndex]}
                      </div>
                      <p>{currentQ.explanation}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation controls */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {currentIdx === QUIZ_QUESTIONS.length - 1 ? (
                    <button
                      onClick={calculateFinal}
                      disabled={selectedAnswers[currentIdx] === undefined}
                      className="px-6 py-2.5 rounded-xl bg-[#5096ca] hover:bg-[#3b7db2] text-white font-bold text-xs sm:text-sm shadow-md transition-all disabled:opacity-50"
                    >
                      Submit & View Score
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      disabled={selectedAnswers[currentIdx] === undefined}
                      className="px-6 py-2.5 rounded-xl bg-[#5096ca] hover:bg-[#3b7db2] text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 disabled:opacity-50 shadow-sm"
                    >
                      <span>Next Question</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-[#e1eff9] border-2 border-[#5096ca] flex items-center justify-center mx-auto mb-4 text-[#5096ca]">
                <Trophy className="w-10 h-10" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#f0f7fc] text-[#285375] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#c5e1f3]">
                Class 6 Diagnostic Assessment Result
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Your Child Scored: <span className="text-[#5096ca]">{score} / {QUIZ_QUESTIONS.length}</span>
              </h3>

              <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
                {score >= 4
                  ? 'Outstanding Aptitude! Your child shows superior mental alertness and is an ideal candidate for Sainik School, Navodaya & RK Mission.'
                  : score >= 2
                  ? 'Promising Potential! With our systematic OMR speed drills and concept mapping, your child can easily bridge the gap to top ranks.'
                  : 'Needs Foundation Building! Our 1-Year Intensive Class 6 Batch will build their fundamental reasoning and arithmetic speed from scratch.'}
              </p>

              {/* Review answers breakdown */}
              <div className="mt-8 text-left space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Question Summary & Analysis:
                </h4>
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const userAns = selectedAnswers[idx];
                  const isCorrect = userAns === q.correctIndex;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border text-xs ${
                        isCorrect
                          ? 'bg-emerald-50/70 border-emerald-200'
                          : 'bg-rose-50/70 border-rose-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-semibold text-slate-900">
                          {idx + 1}. {q.question}
                        </div>
                        {isCorrect ? (
                          <span className="flex items-center gap-1 text-emerald-700 font-bold shrink-0">
                            <CheckCircle2 className="w-4 h-4" /> Correct
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-rose-700 font-bold shrink-0">
                            <XCircle className="w-4 h-4" /> Incorrect
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-slate-600">
                        {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Result Actions */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={resetQuiz}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 border border-slate-200 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Diagnostic Test</span>
                </button>

                <button
                  onClick={() => onOpenInquiry(`Diagnostic Quiz Followup (Score: ${score}/5)`)}
                  className="px-6 py-2.5 rounded-xl bg-[#5096ca] hover:bg-[#3b7db2] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Get Detailed Evaluation Report & Counseling</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
