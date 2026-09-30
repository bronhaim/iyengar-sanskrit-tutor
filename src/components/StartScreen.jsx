import React from 'react';
import { Play, BookOpen, Compass, Award, Heart, ArrowLeft } from 'lucide-react';

export const StartScreen = ({ onStartQuiz, onOpenRoots, onOpenCatalog, totalPoses }) => {
  return (
    <section className="flex flex-col h-full justify-between p-6 sm:p-8 bg-cream-50 select-none text-center animate-fadeIn overflow-y-auto custom-scrollbar">
      
      <div className="pt-2">
        {/* Lotus & Om Symbol Header */}
        <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-cream-100 border border-cream-300 shadow-sm mb-5 text-terracotta mx-auto">
          <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="46" stroke="#E4D6C3" strokeWidth="1.5" strokeDasharray="4 3"/>
            <path d="M50 20 C42 35 30 55 30 70 C30 81 39 88 50 88 C61 88 70 81 70 70 C70 55 58 35 50 20 Z" fill="#F8ECEB" stroke="currentColor" strokeWidth="2"/>
            <path d="M50 35 C45 48 38 62 38 72 C38 78 43 83 50 83 C57 83 62 78 62 72 C62 62 55 48 50 35 Z" fill="#C07373" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M50 48 L50 85" stroke="#FAF5EE" strokeWidth="2"/>
          </svg>
          <span className="absolute -bottom-1 text-xs font-bold bg-terracotta text-white px-2 py-0.5 rounded-full shadow-sm">
            {totalPoses} תנוחות
          </span>
        </div>

        {/* Iyengar Tradition Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cream-200 text-charcoal border border-cream-300 mb-3">
          <span className="text-terracotta">🌸</span>
          <span>מסורת ב.ק.ס איינגר • למידה ותרגול</span>
        </div>

        <h1 className="text-3xl font-bold text-charcoal tracking-tight mb-2">
          שפת היוגה בסנסקריט
        </h1>

        <p className="text-sm font-sanskrit text-terracotta-dark tracking-wide mb-3 dir-ltr">
          योगेन चित्तस्य पदेन वाचां मलं शरीरस्य च वैद्यकेन
        </p>

        <p className="text-charcoal-light text-sm sm:text-base leading-relaxed max-w-xs mx-auto mb-6">
          למדו לזהות תנוחות יוגה, לפרק את שמותיהן להברות המשמעותיות ולהעמיק את הבנת התרגול על המזרן.
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

        </div>

      </div>

      <div className="pt-2 pb-4 text-xs text-charcoal-muted flex items-center justify-center gap-1">
        <span>מבוסס על ספרו של ב.ק.ס איינגר "אור על היוגה"</span>
      </div>

    </section>
  );
};
