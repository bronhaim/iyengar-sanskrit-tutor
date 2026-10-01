import React, { useState, useEffect } from 'react';
import { Play, BookOpen, Compass, Sparkles, ArrowLeft, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

const SHOWCASE_POSES = [
  {
    id: 'utthita-trikonasana',
    hebrewName: 'אוטיטה טריקונאסאנה',
    sanskrit: 'Utthita Trikoṇāsana',
    meaning: 'תנוחת המשולש המוארך',
    image: '/images/poses/utthita-trikonasana.jpg',
    fallback: '/images/poses/utthita-trikonasana.png'
  },
  {
    id: 'salamba-sarvangasana',
    hebrewName: 'סאלמבה סרוואנגאסאנה',
    sanskrit: 'Sālamba Sarvāṅgāsana',
    meaning: 'עמידת כתפיים נתמכת',
    image: '/images/poses/salamba-sarvangasana.jpg',
    fallback: '/images/poses/salamba-sarvangasana.png'
  },
  {
    id: 'virabhadrasana-2',
    hebrewName: 'ויראבדראסאנה II',
    sanskrit: 'Vīrabhadrāsana II',
    meaning: 'תנוחת הלוחם השנייה',
    image: '/images/poses/virabhadrasana-2.jpg',
    fallback: '/images/poses/virabhadrasana-2.png'
  },
  {
    id: 'supta-baddha-konasana',
    hebrewName: 'סופטה באדהה קונאסאנה',
    sanskrit: 'Supta Baddhakoṇāsana',
    meaning: 'זווית קשורה בשכיבה',
    image: '/images/poses/supta-baddha-konasana.jpg',
    fallback: '/images/poses/supta-baddha-konasana-guide.jpg'
  },
  {
    id: 'adho-mukha-svanasana',
    hebrewName: 'אדו מוקה שוואנאסאנה',
    sanskrit: 'Adho Mukha Śvānāsana',
    meaning: 'כלב מביט כלפי מטה',
    image: '/images/poses/adho-mukha-svanasana.jpg',
    fallback: '/images/poses/adho-mukha-svanasana.png'
  },
  {
    id: 'ardha-chandrasana',
    hebrewName: "ארדהה צ'נדראסאנה",
    sanskrit: 'Ardha Chandrāsana',
    meaning: 'תנוחת חצי ירח',
    image: '/images/poses/ardha-chandrasana.jpg',
    fallback: '/images/poses/ardha-chandrasana.png'
  },
  {
    id: 'vriksasana',
    hebrewName: 'וריקשאסאנה',
    sanskrit: 'Vṛkṣāsana',
    meaning: 'תנוחת העץ',
    image: '/images/poses/vriksasana.jpg',
    fallback: '/images/poses/vriksasana.png'
  },
  {
    id: 'tadasana',
    hebrewName: 'טדאסאנה',
    sanskrit: 'Tādāsana',
    meaning: 'תנוחת ההר',
    image: '/images/poses/tadasana.jpg',
    fallback: '/images/poses/tadasana.png'
  }
];

export const StartScreen = ({ onStartQuiz, onOpenRoots, onOpenCatalog, onOpenSequences, totalPoses }) => {
  const [currentPoseIdx, setCurrentPoseIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance showcase every 4.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentPoseIdx((prev) => (prev + 1) % SHOWCASE_POSES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextPose = (e) => {
    e?.stopPropagation();
    setCurrentPoseIdx((prev) => (prev + 1) % SHOWCASE_POSES.length);
  };

  const prevPose = (e) => {
    e?.stopPropagation();
    setCurrentPoseIdx((prev) => (prev - 1 + SHOWCASE_POSES.length) % SHOWCASE_POSES.length);
  };

  const currentPose = SHOWCASE_POSES[currentPoseIdx];

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
              <span>בהשראת הספר "אור על היוגה" • ב.ק.ס איינגר</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-[1.18] tracking-tight">
              יוגה איינגר בבית <br className="hidden sm:inline" />
              <span className="text-terracotta font-serifHebrew">תרגול ושמות התנוחות</span>
            </h1>

            <p className="text-sm sm:text-base font-sanskrit text-terracotta-dark tracking-wide dir-ltr text-right font-medium">
              योगेन चित्तस्य पदेन वाचां मलं शरीरस्य च वैद्यकेन
            </p>

            <p className="text-lg sm:text-xl text-charcoal-light font-light leading-relaxed max-w-xl">
              מרחב מקיף לתרגול יוגה איינגר אישי בבית ולימוד שמות התנוחות: קטלוג תנוחות יוגה מפורט, רצפי שיעורים ביתיים מובנים, חידון שמות ותנוחות, ומילון סנסקריט עשיר.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenCatalog}
                className="inline-flex items-center justify-center px-8 py-4 bg-terracotta hover:bg-terracotta-dark text-white rounded-full text-base font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 gap-2.5"
              >
                <Compass className="w-5 h-5" />
                <span>קטלוג תנוחות יוגה ({totalPoses})</span>
              </button>

              <button
                onClick={onStartQuiz}
                className="inline-flex items-center justify-center px-7 py-4 bg-white border border-[#E8E0D6] hover:border-terracotta text-charcoal hover:text-terracotta rounded-full text-base font-bold shadow-xs hover:shadow-md transition-all gap-2"
              >
                <Play className="w-5 h-5 fill-current text-terracotta" />
                <span>חידון שמות ותנוחות</span>
              </button>
            </div>

            {/* Quick Feature Perks */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-charcoal-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-soft-green" />
                <span>קטלוג תנוחות יוגה</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-soft-green" />
                <span>רצפי שיעורים ביתיים</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-soft-green" />
                <span>חידון סנסקריט ואימון</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-soft-green" />
                <span>מילון סנסקריט</span>
              </div>
            </div>

          </div>

          {/* Media Column - Interactive Circular Showcase (Left in RTL - 5 cols) */}
          <div 
            className="lg:col-span-5 flex flex-col items-center justify-center relative select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative group max-w-sm sm:max-w-md mx-auto">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-terracotta/20 via-cream-200 to-soft-green/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              {/* Main Circular Image Frame:
                  Uses pure white background + max-w-[76%] max-h-[76%] object-contain 
                  so every pose (including Salamba Sarvangasana & Supta Baddha Konasana)
                  is displayed 100% in full without ANY clipping or cut off! */}
              <div 
                onClick={nextPose}
                title="לחצו להחלפת תנוחה"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-92 lg:h-92 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-white mx-auto flex items-center justify-center cursor-pointer p-4 sm:p-6"
              >
                <img 
                  key={currentPose.id}
                  src={currentPose.image} 
                  alt={currentPose.hebrewName}
                  className="w-full h-full max-w-[76%] max-h-[76%] object-contain object-center group-hover:scale-[1.03] transition-transform duration-500 animate-fadeIn drop-shadow-sm select-none"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = currentPose.fallback;
                  }}
                />
              </div>

              {/* Left / Right Interactive Arrow Overlays - on outer frame so they never obscure the pose */}
              <button
                onClick={(e) => { e.stopPropagation(); prevPose(); }}
                aria-label="תנוחה קודמת"
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-charcoal hover:text-terracotta flex items-center justify-center shadow-lg border border-cream-200 transition-all hover:scale-110 z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextPose(); }}
                aria-label="תנוחה הבאה"
                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-charcoal hover:text-terracotta flex items-center justify-center shadow-lg border border-cream-200 transition-all hover:scale-110 z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Floating Pose Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-[#E8E0D6] rounded-2xl px-5 py-2 shadow-lg text-center whitespace-nowrap z-20">
                <div className="font-bold text-sm text-charcoal">
                  {currentPose.hebrewName}
                </div>
                <div className="text-[11px] text-terracotta font-medium">
                  {currentPose.sanskrit} • {currentPose.meaning}
                </div>
              </div>

            </div>

            {/* Interactive Carousel Indicator Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-8">
              {SHOWCASE_POSES.map((pose, idx) => (
                <button
                  key={pose.id}
                  onClick={() => setCurrentPoseIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentPoseIdx 
                      ? 'w-6 bg-terracotta shadow-xs' 
                      : 'w-2 bg-[#E8E0D6] hover:bg-charcoal-muted'
                  }`}
                  aria-label={`עבור לתנוחת ${pose.hebrewName}`}
                />
              ))}
            </div>
            <div className="text-[11px] text-charcoal-muted mt-1.5 font-light">
              לחצו על התמונה או החיצים כדי להחליף תנוחה
            </div>

          </div>

        </div>
      </section>

      {/* 2. THE 4 PILLARS OF THE PLATFORM */}
      <section className="space-y-6">
        <div className="text-right">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
            מרחב התרגול והלימוד שלך
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base font-light">
            כל מה שדרוש להעמקת תרגול יוגה איינגר בבית
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: קטלוג תנוחות יוגה */}
          <div 
            onClick={onOpenCatalog}
            className="group bg-white hover:bg-cream-50/60 rounded-3xl p-7 transition-all duration-300 border border-[#E8E0D6] hover:border-soft-green/60 hover:shadow-xl flex flex-col justify-between cursor-pointer text-right"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sage-light flex items-center justify-center mb-6 text-2xl shadow-xs group-hover:scale-110 transition-transform">
                🧘‍♂️
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2.5 group-hover:text-soft-green transition-colors">
                קטלוג תנוחות יוגה
              </h3>
              <p className="text-charcoal-muted text-sm font-light leading-relaxed mb-6">
                צילומי סטודיו מפורטים, עבודה עם פרופס (בלוקים, בולסטר, חגורות), דגשי אנטומיה והתוויות נגד לכל תנוחה.
              </p>
            </div>
            <div className="flex items-center text-soft-green font-semibold text-sm gap-2">
              <span>לקטלוג התנוחות</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
          </div>

          {/* Card 2: רצפי שיעורים ביתיים */}
          <div 
            onClick={onOpenSequences}
            className="group bg-white hover:bg-cream-50/60 rounded-3xl p-7 transition-all duration-300 border border-[#E8E0D6] hover:border-amber-400 hover:shadow-xl flex flex-col justify-between cursor-pointer text-right"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100/70 flex items-center justify-center mb-6 text-2xl shadow-xs group-hover:scale-110 transition-transform">
                ✨
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2.5 group-hover:text-amber-800 transition-colors">
                רצפי שיעורים ביתיים
              </h3>
              <p className="text-charcoal-muted text-sm font-light leading-relaxed mb-6">
                תוכניות תרגול מובנות לבית לפי מסורת איינגר: רצף בוקר מעורר, רצף ערב להרפיה, שיקום, כאבי גב ועיכול.
              </p>
            </div>
            <div className="flex items-center text-amber-800 font-semibold text-sm gap-2">
              <span>לכל השיעורים</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
          </div>

          {/* Card 3: חידון שמות ותנוחות */}
          <div 
            onClick={onStartQuiz}
            className="group bg-white hover:bg-cream-50/60 rounded-3xl p-7 transition-all duration-300 border border-[#E8E0D6] hover:border-terracotta/60 hover:shadow-xl flex flex-col justify-between cursor-pointer text-right"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-terracotta-light flex items-center justify-center mb-6 text-2xl shadow-xs group-hover:scale-110 transition-transform text-terracotta">
                🎯
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2.5 group-hover:text-terracotta transition-colors">
                חידון שמות ותנוחות
              </h3>
              <p className="text-charcoal-muted text-sm font-light leading-relaxed mb-6">
                אימון יומי לזיהוי תנוחות מתוך צילומי סטודיו, שאלות על שמות בסנסקריט, פירוק מילים ומעקב התקדמות אישי.
              </p>
            </div>
            <div className="flex items-center text-terracotta font-semibold text-sm gap-2">
              <span>התחל חידון</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
          </div>

          {/* Card 4: מילון סנסקריט */}
          <div 
            onClick={onOpenRoots}
            className="group bg-white hover:bg-cream-50/60 rounded-3xl p-7 transition-all duration-300 border border-[#E8E0D6] hover:border-charcoal/60 hover:shadow-xl flex flex-col justify-between cursor-pointer text-right"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cream-200 flex items-center justify-center mb-6 text-2xl shadow-xs group-hover:scale-110 transition-transform">
                📖
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2.5 group-hover:text-charcoal transition-colors">
                מילון סנסקריט
              </h3>
              <p className="text-charcoal-muted text-sm font-light leading-relaxed mb-6">
                פירוק והבנה של מילות המפתח: אדו (מטה), מוקה (פנים), שוואנה (כלב), וירה (גיבור), וריקשה (עץ) וקונה (זווית).
              </p>
            </div>
            <div className="flex items-center text-charcoal font-semibold text-sm gap-2">
              <span>למילון הסנסקריט</span>
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
            ב.ק.ס איינגר • מתוך הספר "אור על היוגה"
          </div>
        </div>
      </section>

    </div>
  );
};
