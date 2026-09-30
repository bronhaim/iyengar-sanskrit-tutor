import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, RotateCcw, Home, Sparkles } from 'lucide-react';

export const EndScreen = ({ score, totalQuestions, onRestart, onGoHome }) => {
  useEffect(() => {
    // Fire festive celebration confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <section className="flex flex-col h-full justify-center items-center p-6 sm:p-8 bg-sage-light select-none text-center animate-fadeIn">
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-card w-full max-w-sm flex flex-col items-center border border-cream-200">
        
        <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center text-white mb-4 shadow-md animate-bounceShort">
          <Award className="w-10 h-10" />
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-1">
          תרגול הושלם בהצלחה!
        </h2>
        <p className="text-charcoal-light text-sm mb-4">
          עברת על כל <span className="font-bold text-terracotta">{totalQuestions}</span> השאלות בשיעור זה.
        </p>
        
        <div className="w-full bg-cream-50 border border-cream-200 rounded-2xl p-4 mb-6">
          <div className="text-xs font-bold text-charcoal-muted uppercase tracking-wider mb-1">
            ציון תרגול
          </div>
          <div className="text-3xl font-bold text-sage-dark flex items-baseline justify-center gap-1">
            <span>{score}</span>
            <span className="text-lg text-charcoal-muted font-normal">/ {totalQuestions}</span>
          </div>
          <div className="text-xs font-semibold text-terracotta mt-1">
            {percentage >= 80 ? 'מצוין! הבנה עמוקה של שפת היוגה 🌸' : 'התקדמות מצוינת! התרגול מביא לשלמות 🙏'}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2.5">
          <button
            onClick={onRestart}
            className="duo-button w-full py-3.5 px-6 rounded-2xl bg-sage-dark hover:bg-sage text-white font-bold text-base shadow-duo-sage flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>תרגל שוב מחדש</span>
          </button>

          <button
            onClick={onGoHome}
            className="duo-button w-full py-3 px-6 rounded-2xl bg-cream-100 hover:bg-cream-200 text-charcoal font-semibold text-sm border border-cream-300 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>חזרה לתפריט הראשי</span>
          </button>
        </div>

      </div>
    </section>
  );
};
