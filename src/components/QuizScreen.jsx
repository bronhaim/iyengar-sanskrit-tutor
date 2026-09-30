import React, { useState, useEffect } from 'react';
import { Undo2, X, ZoomIn, CheckCircle2, AlertCircle, BookOpen, Lightbulb, ChevronLeft } from 'lucide-react';
import { PoseSvgIllustration } from './PoseSvgIllustration';

export const QuizScreen = ({
  question,
  questionIndex,
  totalQuestions,
  answerState, // { selectedIndex, isCorrect } or null
  onSelectOption,
  onCheckAnswer,
  onNextQuestion,
  onPrevQuestion,
  onExit,
  onOpenZoomModal,
  canGoPrev
}) => {
  const [selectedOpt, setSelectedOpt] = useState(null);

  useEffect(() => {
    if (answerState) {
      setSelectedOpt(answerState.selectedIndex);
    } else {
      setSelectedOpt(null);
    }
  }, [questionIndex, answerState]);

  const handleOptionClick = (idx) => {
    if (answerState) return; // Answer locked
    setSelectedOpt(idx);
    onSelectOption(idx);
  };

  const isAnswered = Boolean(answerState);
  const isCorrect = answerState?.isCorrect;

  return (
    <section className="flex flex-col h-full relative bg-cream-100 animate-fadeIn">
      
      {/* Quiz Top Header */}
      <header className="px-4 py-3 flex items-center justify-between border-b border-cream-200 bg-cream-50/80 backdrop-blur-sm shrink-0 z-10">
        <button
          onClick={onPrevQuestion}
          disabled={!canGoPrev}
          title="שאלה קודמת"
          className="duo-button flex items-center gap-1 px-3 py-1.5 rounded-xl border border-cream-300 bg-white text-charcoal text-xs font-semibold shadow-sm hover:bg-cream-100 disabled:opacity-30 disabled:pointer-events-none"
        >
          <Undo2 className="w-3.5 h-3.5" />
          <span>חזור</span>
        </button>

        {/* Progress Bar & Counter */}
        <div className="flex-1 max-w-[160px] mx-3 flex flex-col items-center gap-1">
          <div className="w-full bg-cream-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-terracotta h-full transition-all duration-300" 
              style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
          <span className="text-[11px] font-semibold text-charcoal-muted">
            שאלה {questionIndex + 1} מתוך {totalQuestions}
          </span>
        </div>

        <button
          onClick={onExit}
          title="חזרה לתפריט"
          className="w-8 h-8 flex items-center justify-center rounded-xl text-charcoal-muted hover:text-charcoal hover:bg-cream-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Main Question Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-5 flex flex-col">
        
        {/* Sanskrit Banner & Prompt */}
        <div className="mb-3">
          {(isAnswered || question.type !== 'identify') && (
            <div className="text-xs font-sanskrit text-terracotta tracking-wider mb-1 font-semibold dir-ltr text-right">
              {question.sanskritScript}
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal leading-tight">
            {question.question}
          </h2>
        </div>

        {/* Visual Pose Illustration Card */}
        <div className="relative w-full aspect-[4/3] max-h-[220px] rounded-2xl overflow-hidden bg-white border border-cream-300 shadow-sm mb-4 flex items-center justify-center p-3">
          <PoseSvgIllustration poseId={question.id} className="w-full h-full max-h-[200px]" />

          <button
            onClick={() => onOpenZoomModal(question)}
            className="absolute bottom-2.5 left-2.5 bg-charcoal/70 hover:bg-charcoal text-white rounded-xl px-2.5 py-1 backdrop-blur-sm text-xs flex items-center gap-1 shadow transition-colors"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>הגדל</span>
          </button>
        </div>

        {/* Options List */}
        <div className="flex flex-col gap-2.5 mb-4">
          {question.options.map((optText, idx) => {
            let optionStyle = "border-cream-200 bg-white hover:bg-cream-50 text-charcoal";
            let circleStyle = "border-cream-300 text-charcoal-muted bg-cream-50";

            if (isAnswered) {
              if (idx === question.correctIndex) {
                optionStyle = "border-sage-dark bg-sage-light text-sage-dark font-bold";
                circleStyle = "bg-sage-dark text-white font-bold";
              } else if (idx === answerState.selectedIndex && !isCorrect) {
                optionStyle = "border-terracotta bg-terracotta-light text-terracotta-deep font-bold opacity-80";
                circleStyle = "bg-terracotta text-white font-bold";
              } else {
                optionStyle = "border-cream-200 bg-white/50 text-charcoal-muted opacity-40";
              }
            } else if (selectedOpt === idx) {
              optionStyle = "border-terracotta bg-terracotta-light text-charcoal font-bold shadow-[0_2px_0_0_#C07373]";
              circleStyle = "bg-terracotta text-white font-bold";
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOptionClick(idx)}
                className={`duo-button w-full text-right p-3.5 sm:p-4 rounded-2xl border-2 font-medium text-base shadow-sm flex items-center justify-between transition-all ${optionStyle}`}
              >
                <span className="flex-1">{optText}</span>
                <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ml-1 transition-all ${circleStyle}`}>
                  {['א', 'ב', 'ג', 'ד'][idx]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feedback Sheet when Answered */}
        {isAnswered && (
          <div className="mt-2 p-4 bg-white border-2 rounded-2xl shrink-0 animate-fadeIn" style={{ borderColor: isCorrect ? '#728C74' : '#C07373' }}>
            
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-white ${isCorrect ? 'bg-sage-dark' : 'bg-terracotta'}`}>
                {isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
              </div>
              <div>
                <h3 className={`text-xl font-bold leading-tight ${isCorrect ? 'text-sage-dark' : 'text-terracotta-deep'}`}>
                  {isCorrect ? 'נכון מאוד!' : 'לא מדויק'}
                </h3>
                <p className="text-xs text-charcoal-muted">
                  {isCorrect ? question.poseHebrewName : `התשובה הנכונה: ${question.options[question.correctIndex]}`}
                </p>
              </div>
            </div>

            {/* Sanskrit Roots Breakdown */}
            <div className="bg-cream-50 border border-cream-200 rounded-xl p-3.5 mb-3">
              <div className="text-xs font-bold text-charcoal-light uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-terracotta" />
                <span>פירוק השם בסנסקריט:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {question.breakdown.map((item, bIdx) => (
                  <div key={bIdx} className="px-3 py-1.5 rounded-xl bg-white border border-cream-300 shadow-sm flex items-center gap-1.5 text-xs">
                    <span className="font-bold text-terracotta-dark">{item.root}:</span>
                    <span className="text-charcoal font-medium">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Iyengar Light on Yoga Insight */}
            <div className="bg-sage-light/60 border border-sage/20 rounded-xl p-3.5 text-right">
              <div className="text-xs font-bold text-sage-dark mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>דגש מתוך "אור על היוגה" (ב.ק.ס איינגר):</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-medium">
                {question.iyengarNote}
              </p>
            </div>

          </div>
        )}

      </div>

      {/* Action Footer Bar */}
      <footer className="w-full p-4 bg-white border-t border-cream-200 flex flex-col gap-2 shrink-0">
        {!isAnswered ? (
          <button
            disabled={selectedOpt === null}
            onClick={() => onCheckAnswer(selectedOpt)}
            className={`duo-button w-full py-3.5 px-6 rounded-2xl font-bold text-base shadow-sm transition-all ${
              selectedOpt !== null
                ? 'bg-terracotta hover:bg-terracotta-dark text-white shadow-duo-terracotta cursor-pointer'
                : 'bg-cream-300 text-charcoal-muted cursor-not-allowed'
            }`}
          >
            בדוק תשובה
          </button>
        ) : (
          <button
            onClick={onNextQuestion}
            className="duo-button w-full py-3.5 px-6 rounded-2xl bg-sage-dark hover:bg-sage font-bold text-base text-white shadow-duo-sage flex items-center justify-center gap-2"
          >
            <span>{questionIndex < totalQuestions - 1 ? 'השאלה הבאה' : 'סים תרגול והצג תוצאות'}</span>
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
      </footer>

    </section>
  );
};
