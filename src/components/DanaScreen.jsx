import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Sparkles, ShieldCheck, CheckCircle2, CreditCard, ExternalLink, Gift, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

const DANA_AMOUNTS = [
  {
    amount: 18,
    symbol: 'ח"י',
    label: 'ברכת חיים והוקרה',
    desc: 'תמיכה בסיסית ונעימה ברוחב לב'
  },
  {
    amount: 36,
    symbol: 'כפול ח"י',
    label: 'תמיכה ותחזוקת המרחב',
    desc: 'השתתפות בעלויות האחסון והשרתים'
  },
  {
    amount: 54,
    symbol: '54 ₪',
    label: 'העמקה ושותפות בדרך',
    desc: 'תמיכה ביצירת רצפים והסברים חדשים'
  },
  {
    amount: 108,
    symbol: '108 ₪',
    label: 'מספר מקודש במסורת היוגה',
    desc: 'תמיכה נדיבה בהפקת צילומי הסטודיו והתוכן'
  }
];

export const DanaScreen = ({ 
  onBackToHome, 
  onOpenCatalog,
  paymentUrl = 'https://mrng.to/1OrKN9VQW2',
  isSuccessView = false 
}) => {
  const [selectedAmount, setSelectedAmount] = useState(36);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    if (isSuccessView) {
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.6 }
      });
    }
  }, [isSuccessView]);

  const currentAmount = isCustom ? Number(customAmount) || 0 : selectedAmount;

  const handleProceedToPayment = () => {
    // Open Green Invoice payment link
    if (paymentUrl) {
      window.open(paymentUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (isSuccessView) {
    return (
      <div className="flex flex-col h-full bg-[#FAF7F2] animate-fadeIn p-4 sm:p-8 select-none">
        <div className="max-w-2xl mx-auto w-full bg-white border border-[#D5C2AF] rounded-3xl p-6 sm:p-12 shadow-card text-center space-y-6 my-auto">
          
          <div className="w-20 h-20 rounded-full bg-[#EAE0D3] border-2 border-[#CBB8A1] text-[#74482B] flex items-center justify-center mx-auto shadow-md">
            <Heart className="w-10 h-10 fill-[#74482B]" />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-[#8C6549] tracking-wider uppercase">
              תודה מעומק הלב
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#382417]">
              תודה רבה על תרומת הדאנה הנדיבה
            </h1>
            <p className="text-sm sm:text-base text-[#674831] leading-relaxed max-w-lg mx-auto">
              התמיכה שלך מאפשרת לנו להמשיך להחזיק את מרחב התרגול, לפתח צילומי סטודיו אותנטיים ולהנגיש את יוגה איינגר בחינם ובאהבה לכל מתרגל ומתרגלת
            </p>
          </div>

          <div className="bg-[#FAF6F0] border border-[#DECFC0] rounded-2xl p-4 text-xs sm:text-sm text-[#4E3524] space-y-1 max-w-md mx-auto">
            <div className="font-bold text-[#74482B] flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#74482B]" />
              <span>קבלה רשמית הופקה בהצלחה</span>
            </div>
            <div className="text-[#674831]">
              הקבלה הדיגיטלית (עוסק פטור ע״ש עטר תעסה, ע.פ 305587685) נשלחה ישירות לכתובת האימייל שלך
            </div>
          </div>

          <blockquote className="border-t border-b border-[#EAE0D3] py-4 text-sm sm:text-base font-semibold text-[#5A3E2A] italic">
            "היוגה אינה משנה רק את האופן שבו אנו רואים דברים — היא משנה את האדם שרואה"
            <div className="text-xs font-normal text-[#8C6549] not-italic mt-1">
              — ב.ק.ס איינגר
            </div>
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenCatalog}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#74482B] hover:bg-[#5C371F] text-white text-sm font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              המשך לקטלוג התנוחות
            </button>

            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#FAF6F0] hover:bg-[#EAE0D3] border border-[#D5C2AF] text-[#382417] text-sm font-semibold transition-all"
            >
              חזרה לדף הבית
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#FAF7F2] animate-fadeIn overflow-y-auto custom-scrollbar">
      
      {/* Top Header */}
      <header className="p-4 bg-[#FAF6F0] border-b border-[#D5C2AF] flex items-center justify-between shrink-0 sticky top-0 z-30">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-[#382417] hover:text-[#74482B] text-sm font-semibold transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>חזרה לראשי</span>
        </button>

        <h2 className="text-base font-bold text-[#382417] flex items-center gap-1.5">
          <Heart className="w-4 h-4 text-[#74482B]" />
          <span>דאנה • תמיכה במרחב התרגול</span>
        </h2>
      </header>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto w-full p-4 sm:p-8 space-y-8">
        
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto pt-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#EAE0D3] border border-[#D5C2AF] text-[#5A3E2A]">
            <Sparkles className="w-3.5 h-3.5 text-[#74482B]" />
            <span>दान • מסורת הדאנה במסורת היוגה</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#382417] tracking-tight">
            נתינה מתוך הלב והוקרת תודה
          </h1>

          <p className="text-sm sm:text-base text-[#674831] leading-relaxed">
            במסורת היוגה, הידע והלימוד מוענקים ברוחב לב וללא מחסום כספי. כל התכנים באתר — קטלוג התנוחות המלא, צילומי הסטודיו המדויקים, רצפי התרגול ומילון הסנסקריט — פתוחים לחלוטין לתרגול ביתי חופשי
          </p>
          
          <p className="text-xs sm:text-sm text-[#7D5B42] leading-relaxed bg-[#FAF6F0] border border-[#DECFC0] rounded-2xl p-4">
            תרומת דאנה מאפשרת לנו להמשיך להחזיק את השרתים, לצלם תנוחות סטודיו חדשות של דוגמן הבית עם אביזרי איינגר מקצועיים, ולפתח כלים נוספים לקהילת המתרגלים
          </p>
        </div>

        {/* Amount Selection Grid */}
        <div className="bg-white border border-[#D5C2AF] rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-[#382417]">
              בחירת סכום תרומה
            </h3>
            <p className="text-xs text-[#7D5B42]">
              כל סכום מתקבל בהערכה רבה ובתודה עמוקה
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {DANA_AMOUNTS.map((item) => {
              const isSelected = !isCustom && selectedAmount === item.amount;
              return (
                <button
                  key={item.amount}
                  onClick={() => {
                    setSelectedAmount(item.amount);
                    setIsCustom(false);
                  }}
                  className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between gap-3 relative ${
                    isSelected
                      ? 'bg-[#FAF6F0] border-2 border-[#74482B] shadow-md scale-[1.02]'
                      : 'bg-white border-[#D5C2AF] hover:border-[#8C6549] hover:bg-[#FAF6F0]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#382417]">
                      {item.amount} ₪
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#EAE0D3] text-[#5A3E2A]">
                      {item.symbol}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-[#382417] mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-[#7D5B42] leading-tight">
                      {item.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Custom Amount Option */}
          <div className="pt-2 border-t border-[#EAE0D3]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <label className="text-xs sm:text-sm font-semibold text-[#382417] flex items-center gap-2">
                <Gift className="w-4 h-4 text-[#74482B]" />
                <span>או הזנת סכום חופשי לבחירתך:</span>
              </label>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="number"
                  min="5"
                  step="1"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setIsCustom(true);
                  }}
                  placeholder="סכום בש״ח"
                  className="w-full sm:w-40 px-3.5 py-2 rounded-xl border border-[#D5C2AF] bg-[#FAF6F0] text-[#382417] text-sm text-center font-bold focus:outline-none focus:border-[#74482B]"
                />
                <span className="text-sm font-bold text-[#382417]">₪</span>
              </div>
            </div>
          </div>

          {/* CTA Button to Morning Payment Link */}
          <div className="pt-4 space-y-3">
            <button
              onClick={handleProceedToPayment}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#74482B] via-[#8C6549] to-[#74482B] hover:opacity-95 text-white text-base sm:text-lg font-bold shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5"
            >
              <Heart className="w-5 h-5 fill-white text-white" />
              <span>
                {currentAmount > 0 
                  ? `המשך לתשלום דאנה מאובטח (${currentAmount} ₪)` 
                  : 'המשך לדף התשלום המאובטח'}
              </span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#7D5B42] text-center pt-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#74482B]" />
                <span>סליקה מאובטחת ומפוקחת (Green Invoice / Morning)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#74482B]" />
                <span>תמיכה בביט, אשראי, Apple Pay ו-Google Pay</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#74482B]" />
                <span>קבלה דיגיטלית חתומה כחוק (עוסק פטור 305587685)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Why Support Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-right">
          <div className="bg-[#FAF6F0] border border-[#D5C2AF] rounded-2xl p-5 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#EAE0D3] text-[#74482B] flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-sm text-[#382417]">
              ללא מנויים או חומות תשלום
            </h4>
            <p className="text-xs text-[#674831] leading-relaxed">
              כל החומרים פתוחים לחלוטין לתרגול ביתי יומיומי לכל אדם
            </p>
          </div>

          <div className="bg-[#FAF6F0] border border-[#D5C2AF] rounded-2xl p-5 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#EAE0D3] text-[#74482B] flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-sm text-[#382417]">
              דיוק אנטומי ומסורת איינגר
            </h4>
            <p className="text-xs text-[#674831] leading-relaxed">
              צילומי סטודיו אותנטיים של דוגמן הבית והנחיות מתוך ״אור על היוגה״
            </p>
          </div>

          <div className="bg-[#FAF6F0] border border-[#D5C2AF] rounded-2xl p-5 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#EAE0D3] text-[#74482B] flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-sm text-[#382417]">
              נתינה מתוך הכרת תודה
            </h4>
            <p className="text-xs text-[#674831] leading-relaxed">
              התרגול שלך והתמיכה ההדדית מאפשרים לקהילה כולה לצמוח ולהעמיק
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
