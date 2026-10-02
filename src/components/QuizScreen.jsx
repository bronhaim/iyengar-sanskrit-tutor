import React, { useState, useEffect } from 'react';
import { Undo2, X, CheckCircle2, AlertCircle, BookOpen, Lightbulb, ChevronLeft } from 'lucide-react';
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
  const isIdentifyQuestion = question.type === 'identify';

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col bg-[#FAF6F0] rounded-3xl border border-[#D5C2AF] shadow-card overflow-hidden animate-fadeIn my-2 sm:my-4">
      
      {/* Quiz Top Header */}
      <header className="px-5 py-4 flex items-center justify-between border-b border-[#D5C2AF] bg-[#EAE0D3] backdrop-blur-sm shrink-0">
        <button
          onClick={onPrevQuestion}
          disabled={!canGoPrev}
          title="שאלה קודמת"
          className="duo-button flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#D5C2AF] bg-[#FAF6F0] text-[#382417] text-xs font-semibold shadow-xs hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-all"
        >
          <Undo2 className="w-4 h-4" />
          <span>חזור</span>
        </button>

        {/* Progress Bar & Counter */}
        <div className="flex-1 max-w-[200px] sm:max-w-xs mx-4 flex flex-col items-center gap-1.5">
          <div className="w-full bg-[#D5C2AF] h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-[#74482B] h-full transition-all duration-300 rounded-full" 
              style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold text-[#674831]">
            שאלה {questionIndex + 1} מתוך {totalQuestions}
          </span>
        </div>

        <button
          onClick={onExit}
          title="חזרה לתפריט"
          className="w-9 h-9 flex items-center justify-center rounded-xl text-charcoal-muted hover:text-charcoal hover:bg-cream-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Main Question Scrollable Content */}
      <div className="p-5 sm:p-8 flex flex-col space-y-6">
        
        {/* Sanskrit Banner & Prompt */}
        <div className="text-right space-y-2">
          {isAnswered && (
            <div className="text-sm font-sanskrit text-terracotta tracking-wider font-semibold dir-ltr text-right animate-fadeIn">
              {question.sanskritScript}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal leading-tight">
            {question.question}
          </h2>
        </div>

        {/* MEDIA DISPLAY LOGIC:
            1. If IDENTIFY question: Render large, clear, well-proportioned pose photo (not tiny on mobile!)
            2. If ROOT question (no pose image needed): Render a serene Sanskrit calligraphy focus card instead of a cropped empty box! */}
        {isIdentifyQuestion ? (
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden bg-cream-50/50 border border-[#E5D9C8] shadow-xs flex items-center justify-center p-3">
            <PoseSvgIllustration 
              poseId={question.id} 
              className="w-full h-full object-contain" 
            />
          </div>
        ) : (
          /* Sanskrit Calligraphy Card for Root Meaning Questions */
          <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-cream-100 via-white to-sage-light/30 border border-[#E5D9C8] p-6 sm:p-8 text-center shadow-xs space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-terracotta-light text-terracotta-deep mb-1">
              <BookOpen className="w-3.5 h-3.5 text-terracotta-deep" />
              <span>שורש מילה בסנסקריט</span>
            </div>
            
            <div className="text-4xl sm:text-5xl lg:text-6xl font-sanskrit text-terracotta tracking-wide py-2 dir-ltr">
              {question.sanskritScript.split('•')[0]?.trim() || question.sanskritScript}
            </div>

            {/* Before answering: display ONLY the clean phonetic transliteration (no parenthetical translation spoiler!)
                After answering: reveal the full Hebrew name with meaning */}
            <div className="text-sm font-semibold text-charcoal-muted">
              {isAnswered 
                ? question.poseHebrewName 
                : (question.poseHebrewName?.replace(/\s*\([^)]*\)/g, '').trim() || '')}
            </div>
          </div>
        )}

        {/* Options List */}
        <div className="flex flex-col gap-3">
          {question.options.map((optText, idx) => {
            let optionStyle = "border-[#E5D9C8] bg-white hover:bg-cream-50 text-charcoal hover:border-cream-300";
            let circleStyle = "border-[#E5D9C8] text-charcoal-muted bg-cream-50";

            if (isAnswered) {
              if (idx === question.correctIndex) {
                optionStyle = "border-soft-green bg-sage-light/60 text-sage-deep font-bold ring-2 ring-soft-green/30";
                circleStyle = "bg-soft-green text-white font-bold";
              } else if (idx === answerState.selectedIndex && !isCorrect) {
                optionStyle = "border-terracotta bg-terracotta-light text-terracotta-deep font-bold opacity-85 ring-2 ring-terracotta/30";
                circleStyle = "bg-terracotta text-white font-bold";
              } else {
                optionStyle = "border-[#E5D9C8] bg-white/50 text-charcoal-muted opacity-40";
              }
            } else if (selectedOpt === idx) {
              optionStyle = "border-terracotta bg-terracotta-light/70 text-charcoal font-bold shadow-[0_2px_0_0_#C07373]";
              circleStyle = "bg-terracotta text-white font-bold";
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOptionClick(idx)}
                className={`duo-button w-full text-right p-4 sm:p-5 rounded-2xl border-2 font-medium text-base shadow-xs flex items-center justify-between transition-all ${optionStyle}`}
              >
                <span className="flex-1 text-base sm:text-lg">{optText}</span>
                <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs ml-2 shrink-0 transition-all ${circleStyle}`}>
                  {['א', 'ב', 'ג', 'ד'][idx]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feedback Sheet when Answered */}
        {isAnswered && (
          <div 
            className="p-5 sm:p-6 bg-white border-2 rounded-3xl shrink-0 animate-fadeIn space-y-4 shadow-sm"
            style={{ borderColor: isCorrect ? '#8FB385' : '#C07373' }}
          >
            <div className="flex items-center gap-3.5">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-bold text-white shadow-xs ${isCorrect ? 'bg-soft-green' : 'bg-terracotta'}`}>
                {isCorrect ? <CheckCircle2 className="w-7 h-7" /> : <AlertCircle className="w-7 h-7" />}
              </div>
              <div className="text-right">
                <h3 className={`text-2xl font-extrabold leading-tight ${isCorrect ? 'text-soft-green' : 'text-terracotta-deep'}`}>
                  {isCorrect ? 'נכון מאוד!' : 'לא מדויק'}
                </h3>
                <p className="text-sm text-charcoal-muted">
                  {isCorrect ? question.poseHebrewName : `התשובה הנכונה: ${question.options[question.correctIndex]}`}
                </p>
              </div>
            </div>

            {/* Sanskrit Roots Breakdown */}
            <div className="bg-cream-50 border border-[#E5D9C8] rounded-2xl p-4 text-right">
              <div className="text-xs font-bold text-charcoal uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-terracotta" />
                <span>פירוק השם בסנסקריט:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {question.breakdown.map((item, bIdx) => (
                  <div key={bIdx} className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E5D9C8] shadow-xs flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="font-bold text-terracotta-dark">{item.root}:</span>
                    <span className="text-charcoal font-medium">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Iyengar Light on Yoga Insight */}
            <div className="bg-sage-light/60 border border-soft-green/30 rounded-2xl p-4 text-right">
              <div className="text-xs font-bold text-sage-deep mb-1.5 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-soft-green" />
                <span>דגש איינגר לתנוחה:</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed font-medium">
                {question.iyengarNote}
              </p>
            </div>

          </div>
        )}

      </div>

      {/* Action Footer Bar */}
      <footer className="w-full p-5 sm:p-6 bg-[#EAE0D3] border-t border-[#D5C2AF] flex flex-col gap-2 shrink-0">
        {!isAnswered ? (
          <button
            disabled={selectedOpt === null}
            onClick={() => onCheckAnswer(selectedOpt)}
            className={`duo-button w-full py-4 px-6 rounded-2xl font-bold text-base sm:text-lg shadow-sm transition-all ${
              selectedOpt !== null
                ? 'bg-[#74482B] hover:bg-[#54321A] text-white shadow-md cursor-pointer'
                : 'bg-[#D5C2AF] text-[#805E43] cursor-not-allowed'
            }`}
          >
            בדוק תשובה
          </button>
        ) : (
          <button
            onClick={onNextQuestion}
            className="duo-button w-full py-4 px-6 rounded-2xl bg-soft-green hover:bg-sage-dark font-bold text-base sm:text-lg text-white shadow-md flex items-center justify-center gap-2"
          >
            <span>{questionIndex < totalQuestions - 1 ? 'השאלה הבאה' : 'סיום תרגול והצגת תוצאות'}</span>
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
      </footer>

    </div>
  );
};
