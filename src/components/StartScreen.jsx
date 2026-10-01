import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, MessageSquarePlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

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
    id: 'virabhadrasana-2',
    hebrewName: 'ויראבדראסאנה II',
    sanskrit: 'Vīrabhadrāsana II',
    meaning: 'תנוחת הלוחם השנייה',
    image: '/images/poses/virabhadrasana-2.jpg',
    fallback: '/images/poses/virabhadrasana-2.png'
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
    id: 'utkatasana',
    hebrewName: 'אוטקטאסאנה',
    sanskrit: 'Utkaṭāsana',
    meaning: 'התנוחה העוצמתית (כיסא)',
    image: '/images/poses/utkatasana.jpg',
    fallback: '/images/poses/utkatasana.png'
  },
  {
    id: 'parivrtta-trikonasana',
    hebrewName: 'פאריבריטה טריקונאסאנה',
    sanskrit: 'Parivṛtta Trikoṇāsana',
    meaning: 'תנוחת המשולש המפותל',
    image: '/images/poses/parivrtta-trikonasana.jpg',
    fallback: '/images/poses/parivrtta-trikonasana.png'
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

const IYENGAR_QUOTES = [
  {
    quote: "היוגה אינה משנה רק את האופן שבו אנו רואים דברים — היא משנה את האדם שרואה",
    highlight: "היא משנה את האדם שרואה"
  },
  {
    quote: "הגוף הוא הקשת שלך, האסאנה היא החץ, והנשמה היא המטרה",
    highlight: "והנשמה היא המטרה"
  },
  {
    quote: "היוגה מלמדת אותנו לרפא את מה שאין צורך לסבול, ולסבול את מה שאי אפשר לרפא",
    highlight: "לרפא את מה שאין צורך לסבול"
  },
  {
    quote: "מילים אינן יכולות להעביר את ערכה של היוגה — יש לחוות אותה ישירות דרך הגוף",
    highlight: "יש לחוות אותה ישירות"
  },
  {
    quote: "אינטליגנציה ללא פעולה היא עקרה; פעולה ללא אינטליגנציה היא עיוורת",
    highlight: "אינטליגנציה בפעולה"
  },
  {
    quote: "התמדה וסבלנות בתרגול היומי בונות עוגן פנימי של שקט ותודעה בהירה",
    highlight: "עוגן פנימי של שקט"
  }
];

export const StartScreen = ({ onStartQuiz, onOpenRoots, onOpenCatalog, onOpenSequences, onOpenFavorites, onRequestFeature, totalPoses }) => {
  const { userProfile, currentUser } = useAuth();
  const [currentPoseIdx, setCurrentPoseIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [currentQuoteIdx, setCurrentQuoteIdx] = useState(0);
  const [isQuotePaused, setIsQuotePaused] = useState(false);

  const totalFavs = (userProfile?.favorites?.length || 0) + (userProfile?.favoriteSequences?.length || 0);

  // Auto-advance showcase poses every 4.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentPoseIdx((prev) => (prev + 1) % SHOWCASE_POSES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-advance quotes every 6.5 seconds unless paused
  useEffect(() => {
    if (isQuotePaused) return;
    const interval = setInterval(() => {
      setCurrentQuoteIdx((prev) => (prev + 1) % IYENGAR_QUOTES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isQuotePaused]);

  const nextPose = (e) => {
    e?.stopPropagation();
    setCurrentPoseIdx((prev) => (prev + 1) % SHOWCASE_POSES.length);
  };

  const prevPose = (e) => {
    e?.stopPropagation();
    setCurrentPoseIdx((prev) => (prev - 1 + SHOWCASE_POSES.length) % SHOWCASE_POSES.length);
  };

  const nextQuote = (e) => {
    e?.stopPropagation();
    setCurrentQuoteIdx((prev) => (prev + 1) % IYENGAR_QUOTES.length);
  };

  const prevQuote = (e) => {
    e?.stopPropagation();
    setCurrentQuoteIdx((prev) => (prev - 1 + IYENGAR_QUOTES.length) % IYENGAR_QUOTES.length);
  };

  const currentPose = SHOWCASE_POSES[currentPoseIdx];

  return (
    <div className="w-full flex flex-col gap-10 sm:gap-14 animate-fadeIn pb-12">
      
      {/* 1. HERO SECTION (Editorial 2-Column on Desktop + Interactive Quotes Bar) */}
      <section className="relative overflow-hidden py-8 sm:py-12 bg-gradient-to-b from-[#F7F2EB] via-[#EFE5D7] to-[#E5D7C5] rounded-3xl border border-[#CBB8A1] p-6 sm:p-10 shadow-card">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text & Action Column (Right in RTL - 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center flex flex-col items-center">
            
            {/* Tradition Badge - Earth element tone */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#E6D7C3] border border-[#CBB8A1] shadow-xs text-[#422716]">
              <span>מסורת יוגה איינגר • דיוק, יציבה והעמקה</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-light text-[#422716] leading-[1.15] tracking-tight text-center">
              יוגה איינגר לתרגול ביתי
            </h1>

            <p className="text-lg sm:text-xl text-[#624530] font-light leading-relaxed max-w-xl text-center">
              מרחב מקיף לתרגול יוגה איינגר אישי: קטלוג תנוחות מפורט עם צילומי סטודיו, רצפי תרגולים מומלצים, חידון שמות ותנוחות, ומילון סנסקריט עשיר.
            </p>

            {/* Quick Action Buttons - 4 Rich Earth-Brown Buttons */}
            <div className="pt-2 w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
              <button
                onClick={onOpenCatalog}
                className="px-5 py-3 rounded-full bg-[#67442B] hover:bg-[#52331E] border border-[#482A15]/30 text-[#FFFDF9] text-sm sm:text-base font-bold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center whitespace-nowrap"
              >
                קטלוג תנוחות
              </button>

              <button
                onClick={onOpenSequences}
                className="px-5 py-3 rounded-full bg-[#7B5336] hover:bg-[#623F27] border border-[#54341E]/30 text-[#FFFDF9] text-sm sm:text-base font-bold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center whitespace-nowrap"
              >
                רצפי תרגולים
              </button>

              <button
                onClick={onStartQuiz}
                className="px-5 py-3 rounded-full bg-[#8D5838] hover:bg-[#724326] border border-[#63391F]/30 text-[#FFFDF9] text-sm sm:text-base font-bold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center whitespace-nowrap"
              >
                חידון
              </button>

              <button
                onClick={onOpenRoots}
                className="px-5 py-3 rounded-full bg-[#5A3822] hover:bg-[#452714] border border-[#3A2010]/30 text-[#FFFDF9] text-sm sm:text-base font-bold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center whitespace-nowrap"
              >
                מילון סנסקריט
              </button>
            </div>

            {/* Direct Access to Favorites and Feature Request */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={onOpenFavorites}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E6D7C3] hover:bg-[#D8C4AB] border border-[#CBB8A1] text-[#422716] text-xs font-bold transition-all shadow-xs"
              >
                <span>המועדפים שלי</span>
                {totalFavs > 0 && (
                  <span className="bg-[#FAF6F0] border border-[#CBB8A1] text-[#422716] text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    {totalFavs}
                  </span>
                )}
              </button>

              {currentUser && (
                <button
                  onClick={onRequestFeature}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E6D7C3] hover:bg-[#D8C4AB] border border-[#CBB8A1] text-[#422716] text-xs font-bold transition-all shadow-xs"
                >
                  <MessageSquarePlus className="w-3.5 h-3.5 text-[#67442B]" />
                  <span>בקשת תנוחה או פיצ׳ר</span>
                </button>
              )}
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
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#74482B]/20 via-[#EAE0D3] to-[#9C7A5E]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              {/* Main Circular Image Frame - Full size object-cover presentation */}
              <div 
                onClick={nextPose}
                title="לחצו להחלפת תנוחה"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-92 lg:h-92 rounded-full border-8 border-[#FAF6F0] shadow-2xl overflow-hidden bg-[#FAF6F0] mx-auto flex items-center justify-center cursor-pointer"
              >
                <img 
                  key={currentPose.id}
                  src={currentPose.image} 
                  alt={currentPose.hebrewName}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 animate-fadeIn"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = currentPose.fallback;
                  }}
                />
              </div>

              {/* Left / Right Interactive Arrow Overlays */}
              <button
                onClick={(e) => { e.stopPropagation(); prevPose(); }}
                aria-label="תנוחה קודמת"
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF6F0] hover:bg-[#74482B] text-[#382417] hover:text-white flex items-center justify-center shadow-lg border border-[#D5C2AF] transition-all hover:scale-110 z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextPose(); }}
                aria-label="תנוחה הבאה"
                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF6F0] hover:bg-[#74482B] text-[#382417] hover:text-white flex items-center justify-center shadow-lg border border-[#D5C2AF] transition-all hover:scale-110 z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Floating Pose Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FAF6F0]/95 backdrop-blur-md border border-[#D5C2AF] rounded-2xl px-5 py-2 shadow-lg text-center whitespace-nowrap z-20">
                <div className="font-bold text-sm text-[#382417]">
                  {currentPose.hebrewName}
                </div>
                <div className="text-[11px] text-[#74482B] font-medium">
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
                      ? 'w-6 bg-[#74482B] shadow-xs' 
                      : 'w-2 bg-[#D5C2AF] hover:bg-[#74482B]'
                  }`}
                  aria-label={`עבור לתנוחת ${pose.hebrewName}`}
                />
              ))}
            </div>

          </div>

        </div>

        {/* Interactive B.K.S. Iyengar Quote Bar (Prominently positioned with main screen) */}
        <div 
          className="mt-8 sm:mt-10 pt-6 border-t border-[#D8C7B5] flex flex-col items-center text-center relative select-none"
          onMouseEnter={() => setIsQuotePaused(true)}
          onMouseLeave={() => setIsQuotePaused(false)}
        >
          <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-3xl px-2">
            <button 
              onClick={prevQuote} 
              aria-label="ציטוט קודם"
              className="p-2 rounded-full hover:bg-[#EAE0D3] text-[#674831] hover:text-[#74482B] transition-colors shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div 
              onClick={nextQuote}
              className="cursor-pointer max-w-2xl px-2 py-1 hover:opacity-90 transition-opacity"
              title="לחצו לציטוט הבא"
            >
              <blockquote 
                key={currentQuoteIdx}
                className="font-amatic text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#382417] leading-tight tracking-wide animate-fadeIn"
              >
                "{IYENGAR_QUOTES[currentQuoteIdx].quote}"
              </blockquote>
              <div className="text-xs sm:text-sm text-[#74482B] font-medium mt-1">
                — ב.ק.ס איינגר
              </div>
            </div>

            <button 
              onClick={nextQuote} 
              aria-label="ציטוט הבא"
              className="p-2 rounded-full hover:bg-[#EAE0D3] text-[#674831] hover:text-[#74482B] transition-colors shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Quote Indicator dots */}
          <div className="flex items-center gap-1.5 mt-2.5">
            {IYENGAR_QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuoteIdx(idx)}
                aria-label={`ציטוט ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentQuoteIdx 
                    ? 'w-5 bg-[#74482B]' 
                    : 'w-1.5 bg-[#D5C2AF] hover:bg-[#74482B]'
                }`}
              />
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};

