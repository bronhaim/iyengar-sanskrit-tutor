import React from 'react';
import { Play, BookOpen, Compass, Sparkles, ArrowLeft } from 'lucide-react';

export const StartScreen = ({ onStartQuiz, onOpenRoots, onOpenCatalog, onOpenSequences, totalPoses }) => {
  return (
    <section className="flex flex-col h-full justify-between p-6 sm:p-8 bg-cream-50 select-none text-center animate-fadeIn overflow-y-auto custom-scrollbar">
      
      <div className="pt-2">
        {/* Iyengar Studio Hero Card - Portrait Framing for Full Alignment Visibility */}
        <div className="relative inline-flex flex-col items-center justify-center w-32 h-44 sm:w-36 sm:h-48 rounded-2xl bg-gradient-to-b from-cream-100 to-cream-200 border border-cream-300 shadow-md mb-3 text-terracotta mx-auto overflow-hidden group">
          <img 
            src="/images/poses/tadasana.jpg" 
            alt="Iyengar Yoga Practice Model - Tadasana Strict Alignment"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Graceful fallback to pose photo
              e.target.onerror = null;
              e.target.src = '/images/poses/tadasana.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent flex flex-col justify-end items-center pb-2 px-1">
            <span className="text-[10px] font-bold bg-terracotta text-white px-2.5 py-0.5 rounded-full shadow-sm">
              {totalPoses} תנוחות איינגר
            </span>
            <span className="text-[9px] text-cream-100 font-medium mt-0.5 drop-shadow">
              טדאסאנה • כפות רגליים צמודות
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

        <p className="text-xs font-sanskrit text-terracotta-dark tracking-wide mb-5 dir-ltr">
          योगेन चित्तस्य पदेन वाचां मलं शरीरस्य च वैद्यकेन
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-3 max-w-xs mx-auto mb-6 text-right">
          
          {/* 1. קטלוג תנוחות */}
          <button
            onClick={onOpenCatalog}
            className="group duo-button p-4 rounded-2xl bg-white border border-cream-300 hover:border-sage/60 text-charcoal text-right shadow-sm hover:shadow-md transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-light text-sage-dark flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-base text-charcoal">קטלוג תנוחות</div>
                <div className="text-xs text-charcoal-muted">עיון בתנוחות, אנטומיה, עזרי יוגה ודגשי שהות</div>
              </div>
            </div>
            <ArrowLeft className="w-5 h-5 text-charcoal-muted group-hover:translate-x-[-3px] transition-transform" />
          </button>

          {/* 2. רצפי תרגול ביתיים */}
          <button
            onClick={onOpenSequences}
            className="group duo-button p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 hover:border-amber-400 text-charcoal text-right shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <div className="font-bold text-sm text-charcoal">רצפי תרגול ביתיים</div>
                <div className="text-xs text-charcoal-muted">רצפים לבוקר, ערב, עיכול, כאבי ראש והריון</div>
              </div>
            </div>
            <ArrowLeft className="w-4 h-4 text-amber-800 group-hover:translate-x-[-3px] transition-transform" />
          </button>

          {/* 3. תרגול סנסקריט וזיהוי תנוחות */}
          <button
            onClick={onStartQuiz}
            className="group duo-button p-3.5 rounded-2xl bg-terracotta hover:bg-terracotta-dark text-white text-right shadow-duo-terracotta flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <div>
                <div className="font-bold text-sm">תרגול סנסקריט וזיהוי תנוחות</div>
                <div className="text-xs text-white/80">זיהוי תנוחות, פירוק מילים ושאלות אמריקאיות</div>
              </div>
            </div>
            <ArrowLeft className="w-4 h-4 text-white/70 group-hover:translate-x-[-3px] transition-transform" />
          </button>

          {/* 4. מילון שורשי סנסקריט */}
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
