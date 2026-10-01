import React from 'react';
import { Play, BookOpen, Compass, Sparkles, ArrowLeft } from 'lucide-react';

export const StartScreen = ({ onStartQuiz, onOpenRoots, onOpenCatalog, onOpenSequences, totalPoses }) => {
  return (
    <section className="flex flex-col h-full justify-between p-6 sm:p-8 bg-cream-50 select-none text-center animate-fadeIn overflow-y-auto custom-scrollbar">
      
      <div className="pt-2">
        {/* Iyengar Studio Hero Badge (Replaces old lotus icon) */}
        <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-b from-cream-100 to-cream-200 border border-cream-300 shadow-md mb-4 text-terracotta mx-auto overflow-hidden group">
          <img 
            src="/images/poses/tadasana.jpg" 
            alt="Iyengar Yoga Practice Model"
            className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Graceful fallback if photograph is loading
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent flex items-end justify-center pb-1.5">
            <span className="text-[11px] font-bold bg-terracotta text-white px-2.5 py-0.5 rounded-full shadow-sm">
              {totalPoses} תנוחות איינגר
            </span>
          </div>
        </div>

        {/* Iyengar Tradition Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cream-200 text-charcoal border border-cream-300 mb-3">
          <span className="text-terracotta">🌸</span>
          <span>מסורת ב.ק.ס איינגר • תרגול, אנטומיה וסנסקריט</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight mb-1">
          איינגר יוגה • מדריך תרגול מעמיק
        </h1>

        <p className="text-xs font-sanskrit text-terracotta-dark tracking-wide mb-3 dir-ltr">
          योगेन चित्तस्य पदेन वाचां मलं शरीरस्य च वैद्यकेन
        </p>

        <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed max-w-xs mx-auto mb-6">
          מדריך מקצועי ומקיף לתרגול יוגה בשיטת איינגר: יישורת אנטומית, שימוש בעזרים (Props), רצפים ביתיים ופירוק שורשי סנסקריט.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-3 max-w-xs mx-auto mb-6 text-right">
          
          <button
            onClick={onStartQuiz}
            className="group duo-button p-4 rounded-2xl bg-terracotta hover:bg-terracotta-dark text-white text-right shadow-duo-terracotta flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
              <div>
                <div className="font-bold text-base">התחל תרגול חידון</div>
                <div className="text-xs text-white/80">זיהוי תנוחות, פירוק מילים ושאלות אמריקאיות</div>
              </div>
            </div>
            <ArrowLeft className="w-5 h-5 text-white/70 group-hover:translate-x-[-3px] transition-transform" />
          </button>

          <button
            onClick={onOpenSequences}
            className="group duo-button p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 hover:border-amber-400 text-charcoal text-right shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <div className="font-bold text-sm text-charcoal flex items-center gap-1">
                  <span>רצפי תרגול ביתיים</span>
                  <span className="text-[10px] font-extrabold bg-terracotta text-white px-1.5 py-0.2 rounded-full">חדש</span>
                </div>
                <div className="text-xs text-charcoal-muted">רצפים לבוקר, ערב, עיכול, כאבי ראש והריון</div>
              </div>
            </div>
            <ArrowLeft className="w-4 h-4 text-amber-800 group-hover:translate-x-[-3px] transition-transform" />
          </button>

          <button
            onClick={onOpenCatalog}
            className="group duo-button p-3.5 rounded-2xl bg-white border border-cream-300 hover:border-sage/40 text-charcoal text-right shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sage-light text-sage-dark flex items-center justify-center font-bold">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-charcoal">קטלוג תנוחות איינגר</div>
                <div className="text-xs text-charcoal-muted">עיון בתנוחות לפי עמידה, הפוכות וכפופות</div>
              </div>
            </div>
            <ArrowLeft className="w-4 h-4 text-charcoal-muted group-hover:translate-x-[-3px] transition-transform" />
          </button>

          <button
            onClick={onOpenRoots}
            className="group duo-button p-3.5 rounded-2xl bg-white border border-cream-300 hover:border-terracotta/40 text-charcoal text-right shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cream-200 text-terracotta flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-charcoal">מילון שורשי סנסקריט</div>
                <div className="text-xs text-charcoal-muted">פירוש מילים כמו אדו, מוקה, וירה, וריקשה</div>
              </div>
            </div>
            <ArrowLeft className="w-4 h-4 text-charcoal-muted group-hover:translate-x-[-3px] transition-transform" />
          </button>

        </div>

      </div>

      <div className="pt-2 pb-4 text-xs text-charcoal-muted flex items-center justify-center gap-1">
        <span>מבוסס על ספרו של ב.ק.ס איינגר "אור על היוגה"</span>
      </div>

    </section>
  );
};
