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
            className="group p-3.5 rounded-2xl bg-white border border-cream-300 hover:border-sage/60 text-charcoal text-right shadow-xs hover:shadow-sm transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sage-light text-sage-dark flex items-center justify-center font-bold shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-charcoal">קטלוג תנוחות איינגר</div>
                <div className="text-xs text-charcoal-muted">עיון בתנוחות, אנטומיה, עזרי יוגה ודגשי שהות</div>
              </div>
            </div>
            <ArrowLeft className="w-4 h-4 text-charcoal-muted group-hover:text-charcoal group-hover:translate-x-[-3px] transition-all shrink-0" />
          </button>

          {/* 2. תרגול סנסקריט וזיהוי תנוחות */}
          <button
            onClick={onStartQuiz}
            className="group p-3.5 rounded-2xl bg-white border border-cream-300 hover:border-terracotta/50 text-charcoal text-right shadow-xs hover:shadow-sm transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center font-bold shrink-0">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <div>
                <div className="font-bold text-sm text-charcoal">תרגול סנסקריט וחידון זיהוי</div>
                <div className="text-xs text-charcoal-muted">זיהוי תנוחות, פירוק מילים ושאלות אמריקאיות</div>
              </div>
            </div>
            <ArrowLeft className="w-4 h-4 text-charcoal-muted group-hover:text-terracotta group-hover:translate-x-[-3px] transition-all shrink-0" />
          </button>

          {/* 3. רצפי תרגול ביתיים */}
          <button
            onClick={onOpenSequences}
            className="group p-3.5 rounded-2xl bg-white border border-cream-300 hover:border-amber-400 text-charcoal text-right shadow-xs hover:shadow-sm transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center font-bold shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-charcoal">רצפי תרגול ביתיים</div>
                <div className="text-xs text-charcoal-muted">רצפים לבוקר, ערב, עיכול, כאבי ראש והריון</div>
              </div>
            </div>
            <ArrowLeft className="w-4 h-4 text-charcoal-muted group-hover:text-amber-800 group-hover:translate-x-[-3px] transition-all shrink-0" />
          </button>

          {/* 4. מילון שורשי סנסקריט */}
          <button
            onClick={onOpenRoots}
            className="group p-3.5 rounded-2xl bg-white border border-cream-300 hover:border-charcoal/40 text-charcoal text-right shadow-xs hover:shadow-sm transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cream-200 text-charcoal flex items-center justify-center font-bold shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-charcoal">מילון שורשי סנסקריט</div>
                <div className="text-xs text-charcoal-muted">פירוש מילים כמו אדו, מוקה, וירה, וריקשה</div>
              </div>
            </div>
            <ArrowLeft className="w-4 h-4 text-charcoal-muted group-hover:text-charcoal group-hover:translate-x-[-3px] transition-all shrink-0" />
          </button>

        </div>

      </div>

      <div className="pt-2 pb-4 text-xs text-charcoal-muted flex items-center justify-center gap-1">
        <span>מבוסס על ספרו של ב.ק.ס איינגר "אור על היוגה"</span>
      </div>

    </section>
  );
};
