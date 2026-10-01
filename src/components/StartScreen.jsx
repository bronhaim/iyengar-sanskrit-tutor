import React from 'react';
import { Play, BookOpen, Compass, Sparkles, ArrowLeft, Heart, Award, CheckCircle2 } from 'lucide-react';

export const StartScreen = ({ onStartQuiz, onOpenRoots, onOpenCatalog, onOpenSequences, totalPoses }) => {
  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16 animate-fadeIn pb-12">
      
      {/* 1. HERO SECTION (Editorial 2-Column on Desktop) */}
      <section className="relative overflow-hidden py-8 sm:py-14 bg-gradient-to-b from-white via-beige-light/80 to-transparent rounded-3xl border border-[#E8E0D6]/60 p-6 sm:p-12 shadow-soft">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text & Action Column (Right in RTL - 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Iyengar Tradition Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#E8E0D6] shadow-xs text-charcoal">
              <span className="text-terracotta">🌸</span>
              <span>מסורת איינגר • לימוד תנוחות ושורשים</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-[1.18] tracking-tight">
              לימוד סנסקריט <br className="hidden sm:inline" />
              <span className="text-terracotta font-serifHebrew">לתנוחות היוגה</span>
            </h1>

            <p className="text-sm sm:text-base font-sanskrit text-terracotta-dark tracking-wide dir-ltr text-right font-medium">
              योगेन चित्तस्य पदेन वाचां मलं शरीरस्य च वैद्यकेन
            </p>

            <p className="text-lg sm:text-xl text-charcoal-light font-light leading-relaxed max-w-xl">
              מרחב לימוד שקט ומזמין להבנת שמות תנוחות היוגה, פירוק שורשי הסנסקריט (מה זה אדו, מה זה מוקה, וירה וקונה), ודגשי אנטומיה ותרגול מעמיקים.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onStartQuiz}
                className="inline-flex items-center justify-center px-8 py-4 bg-terracotta hover:bg-terracotta-dark text-white rounded-full text-base font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 gap-2.5"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>התחל תרגול וחידון יומי</span>
              </button>

              <button
                onClick={onOpenCatalog}
                className="inline-flex items-center justify-center px-7 py-4 bg-white border border-[#E8E0D6] hover:border-soft-green text-charcoal hover:text-soft-green rounded-full text-base font-bold shadow-xs hover:shadow-md transition-all gap-2"
              >
                <Compass className="w-5 h-5 text-soft-green" />
                <span>עיון בקטלוג התנוחות ({totalPoses})</span>
              </button>
            </div>

            {/* Quick Feature Perks */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-charcoal-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-soft-green" />
                <span>צילומי סטודיו מפורטים</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-soft-green" />
                <span>פירוק הברות ושורשים</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-soft-green" />
                <span>הנחיות עזרים (בולסטר, בלוק, חגורה)</span>
              </div>
            </div>

          </div>

          {/* Media Column - Circular Frame with Utthita Trikonasana (Left in RTL - 5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative group">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-terracotta/20 via-cream-200 to-soft-green/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Main Circular Image Frame (as requested, like Atar's website style) */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-92 lg:h-92 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-white mx-auto flex items-center justify-center">
                <img 
                  src="/images/poses/utthita-trikonasana.jpg" 
                  alt="אוטיטה טריקונאסאנה - Utthita Trikonasana"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/poses/utthita-trikonasana.png';
                  }}
                />
              </div>

              {/* Floating Pose Badge */}
              <div className="absolute -bottom-3 sm:bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-[#E8E0D6] rounded-2xl px-5 py-2.5 shadow-lg text-center whitespace-nowrap">
                <div className="font-bold text-sm text-charcoal">
                  אוטיטה טריקונאסאנה
                </div>
                <div className="text-[11px] text-terracotta font-medium">
                  Utthita Trikoṇāsana • תנוחת המשולש המוארך
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. FEATURE CARDS GRID (Atar site aesthetic with warm cards) */}
      <section className="space-y-6">
        <div className="text-right">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
            במה תרצו להעמיק היום?
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base font-light">
            בחרו את ציר הלמידה המתאים לכם לקראת התרגול הבא
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: קטלוג תנוחות */}
          <div 
            onClick={onOpenCatalog}
            className="group bg-white hover:bg-cream-50/60 rounded-3xl p-7 transition-all duration-300 border border-[#E8E0D6] hover:border-soft-green/60 hover:shadow-xl flex flex-col justify-between cursor-pointer text-right"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sage-light flex items-center justify-center mb-6 text-2xl shadow-xs group-hover:scale-110 transition-transform">
                🧘‍♂️
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2.5 group-hover:text-soft-green transition-colors">
                קטלוג תנוחות איינגר
              </h3>
              <p className="text-charcoal-muted text-sm font-light leading-relaxed mb-6">
                עיון מעמיק בכל התנוחות, צילומי סטודיו מפורטים, דגשי אנטומיה, עבודה עם פרופס (בלוקים, בולסטר) והתוויות נגד.
              </p>
            </div>
            <div className="flex items-center text-soft-green font-semibold text-sm gap-2">
              <span>לכל התנוחות</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
          </div>

          {/* Card 2: חידון סנסקריט */}
          <div 
            onClick={onStartQuiz}
            className="group bg-white hover:bg-cream-50/60 rounded-3xl p-7 transition-all duration-300 border border-[#E8E0D6] hover:border-terracotta/60 hover:shadow-xl flex flex-col justify-between cursor-pointer text-right"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-terracotta-light flex items-center justify-center mb-6 text-2xl shadow-xs group-hover:scale-110 transition-transform text-terracotta">
                🎯
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2.5 group-hover:text-terracotta transition-colors">
                חידון ואימון יומי
              </h3>
              <p className="text-charcoal-muted text-sm font-light leading-relaxed mb-6">
                זיהוי תנוחות מתוך תמונות, שאלות על פירושי שמות, דגשי איינגר ומעקב התקדמות אישי כמו ב-Duolingo.
              </p>
            </div>
            <div className="flex items-center text-terracotta font-semibold text-sm gap-2">
              <span>התחל אימון</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
          </div>

          {/* Card 3: מילון שורשי סנסקריט */}
          <div 
            onClick={onOpenRoots}
            className="group bg-white hover:bg-cream-50/60 rounded-3xl p-7 transition-all duration-300 border border-[#E8E0D6] hover:border-charcoal/60 hover:shadow-xl flex flex-col justify-between cursor-pointer text-right"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cream-200 flex items-center justify-center mb-6 text-2xl shadow-xs group-hover:scale-110 transition-transform">
                📖
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2.5 group-hover:text-charcoal transition-colors">
                מילון שורשי סנסקריט
              </h3>
              <p className="text-charcoal-muted text-sm font-light leading-relaxed mb-6">
                פירוק והבנה של מילות המפתח: אדו (מטה), מוקה (פנים), שוואנה (כלב), וירה (גיבור), וריקשה (עץ) וקונה (זווית).
              </p>
            </div>
            <div className="flex items-center text-charcoal font-semibold text-sm gap-2">
              <span>למילון השורשים</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
          </div>

          {/* Card 4: רצפי תרגול ביתיים */}
          <div 
            onClick={onOpenSequences}
            className="group bg-white hover:bg-cream-50/60 rounded-3xl p-7 transition-all duration-300 border border-[#E8E0D6] hover:border-amber-400 hover:shadow-xl flex flex-col justify-between cursor-pointer text-right"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100/70 flex items-center justify-center mb-6 text-2xl shadow-xs group-hover:scale-110 transition-transform">
                ✨
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2.5 group-hover:text-amber-800 transition-colors">
                רצפי תרגול ביתיים
              </h3>
              <p className="text-charcoal-muted text-sm font-light leading-relaxed mb-6">
                סדרות מובנות לפי מסורת איינגר: רצף עמידה לפתיחת הגוף, רצף הרפיה ושיקום, רצף להקלה על עייפות ונשימה.
              </p>
            </div>
            <div className="flex items-center text-amber-800 font-semibold text-sm gap-2">
              <span>לכל הרצפים</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. INSPIRATIONAL QUOTE SECTION */}
      <section className="py-12 px-6 sm:px-12 bg-white rounded-3xl border border-[#E8E0D6] text-center shadow-xs">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center mx-auto text-xl text-terracotta">
            🕉️
          </div>
          <blockquote className="font-amatic text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            "היוגה אינה משנה רק את האופן שבו אנו רואים דברים — <br className="hidden sm:inline" />
            <span className="text-soft-green font-extrabold">היא משנה את האדם שרואה."</span>
          </blockquote>
          <div className="text-xs sm:text-sm text-charcoal-muted font-medium pt-1">
            ב.ק.ס איינגר
          </div>
        </div>
      </section>

    </div>
  );
};
