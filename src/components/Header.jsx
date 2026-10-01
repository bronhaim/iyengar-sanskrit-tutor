import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { UserProfileMenu } from './UserProfileMenu';

export const Header = ({ currentView, setCurrentView, onStartQuiz, onOpenAuth, onSelectCategory, onRequestFeature }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'ראשי', desc: 'עמוד הבית וסקירה כללית' },
    { id: 'catalog', label: 'קטלוג תנוחות', desc: 'מאגר התנוחות עם צילומים והנחיות' },
    { id: 'sequences', label: 'רצפי תרגולים', desc: 'תוכניות תרגול מובנות לבית' },
    { id: 'quiz', label: 'חידון שמות ותנוחות', desc: 'אימון זיהוי ותרגול סנסקריט' },
    { id: 'roots', label: 'מילון סנסקריט', desc: 'פירוק והבנת מילות המפתח' },
    { id: 'favorites', label: 'המועדפים שלי', desc: 'תנוחות ורצפים ששמרת' }
  ];

  const handleNavClick = (viewId) => {
    setIsMobileMenuOpen(false);
    if (viewId === 'quiz') {
      if (onStartQuiz) onStartQuiz();
      else setCurrentView('quiz');
    } else {
      setCurrentView(viewId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-[#F5EFEB]/90 backdrop-blur-md border-b border-[#DECFC0] sticky top-0 z-40 px-3 sm:px-8 py-2 sm:py-2.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand / Logo (Right in RTL) */}
        <button 
          onClick={() => setCurrentView('home')} 
          className="flex items-center gap-1.5 sm:gap-2 text-[#382417] hover:opacity-85 transition-opacity group py-0.5 shrink-0"
          title="חזרה לדף הבית"
        >
          {/* Centered Text: title and subtitle centered one under the other */}
          <div className="flex flex-col items-center text-center">
            <div className="font-bold text-[11px] sm:text-[13px] text-[#382417] leading-tight tracking-tight whitespace-nowrap">
              יוגה איינגר לתרגול ביתי
            </div>
            <div className="text-[8.5px] sm:text-[10px] text-[#674831] font-normal tracking-wide leading-tight whitespace-nowrap mt-0.5">
              דיוק, יציבה והעמקה
            </div>
          </div>

          {/* Purple Icon placed to the LEFT of the text */}
          <div className="w-5 h-5 sm:w-6.5 sm:h-6.5 rounded-md sm:rounded-lg bg-gradient-to-br from-[#7B4B85] to-[#542B5E] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform border border-[#542B5E]/30 shrink-0">
            <span className="leading-none text-[10px] sm:text-xs">🕉️</span>
          </div>
        </button>

        {/* Mode Navigation (Center on Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#EAE0D3] p-1 rounded-2xl border border-[#DECFC0] text-sm">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'home' 
                ? 'bg-[#FAF6F0] text-[#382417] shadow-xs font-bold' 
                : 'text-[#674831] hover:text-[#382417]'
            }`}
          >
            ראשי
          </button>

          <button
            onClick={() => setCurrentView('catalog')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'catalog' 
                ? 'bg-[#FAF6F0] text-[#382417] shadow-xs font-bold' 
                : 'text-[#674831] hover:text-[#382417]'
            }`}
          >
            קטלוג תנוחות
          </button>

          <button
            onClick={() => setCurrentView('sequences')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'sequences' 
                ? 'bg-[#FAF6F0] text-[#382417] shadow-xs font-bold' 
                : 'text-[#674831] hover:text-[#382417]'
            }`}
          >
            רצפי תרגולים
          </button>

          <button
            onClick={onStartQuiz || (() => setCurrentView('quiz'))}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'quiz' 
                ? 'bg-[#FAF6F0] text-[#382417] shadow-xs font-bold' 
                : 'text-[#674831] hover:text-[#382417]'
            }`}
          >
            חידון
          </button>

          <button
            onClick={() => setCurrentView('roots')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'roots' 
                ? 'bg-[#FAF6F0] text-[#382417] shadow-xs font-bold' 
                : 'text-[#674831] hover:text-[#382417]'
            }`}
          >
            מילון סנסקריט
          </button>

          <button
            onClick={() => setCurrentView('favorites')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'favorites' 
                ? 'bg-[#FAF6F0] text-[#382417] shadow-xs font-bold' 
                : 'text-[#674831] hover:text-[#382417]'
            }`}
          >
            מועדפים
          </button>
        </nav>

        {/* User Profile & Mobile Pizza Menu Button (Left in RTL) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <UserProfileMenu 
            onOpenAuth={onOpenAuth} 
            onOpenFavorites={() => setCurrentView('favorites')}
            onRequestFeature={onRequestFeature}
            onSelectCategory={(cat) => {
              setCurrentView('catalog');
              if (onSelectCategory) onSelectCategory(cat);
            }}
          />

          {/* Hamburger / Pizza Menu Button (Mobile only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center w-8 h-8 rounded-xl bg-[#FAF6F0] border border-[#DECFC0] text-[#382417] hover:bg-white shadow-xs transition-colors shrink-0"
            title="תפריט ניווט"
            aria-label="תפריט ניווט"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer / Pizza Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-start">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Card */}
          <div className="relative z-10 m-3 bg-[#FAF6F0] border border-[#DECFC0] rounded-3xl p-5 shadow-2xl flex flex-col gap-3.5 animate-fadeIn text-right max-h-[85vh] overflow-y-auto custom-scrollbar">
            {/* Top Bar of drawer */}
            <div className="flex items-center justify-between border-b border-[#DECFC0] pb-3">
              <div className="font-bold text-sm text-[#382417]">
                תפריט האתר
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-7 h-7 rounded-lg bg-[#EAE0D3] text-[#382417] flex items-center justify-center hover:bg-white transition-colors"
                aria-label="סגור תפריט"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Items (All 6 options) */}
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all text-right ${
                      isActive
                        ? 'bg-[#74482B] text-white font-bold shadow-xs'
                        : 'bg-[#EAE0D3]/60 hover:bg-[#EAE0D3] text-[#382417]'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-bold leading-tight">{item.label}</span>
                      <span className={`text-[11px] leading-tight mt-0.5 ${isActive ? 'text-[#FAF6F0]/80' : 'text-[#674831]'}`}>
                        {item.desc}
                      </span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#FAF6F0] shrink-0"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Extra Request Feature in Drawer */}
            {onRequestFeature && (
              <div className="pt-2 border-t border-[#DECFC0]">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onRequestFeature();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-white border border-[#D5C2AF] text-[#74482B] hover:bg-[#FAF6F0] text-xs font-semibold text-center transition-all shadow-xs"
                >
                  ✨ בקשת תנוחה או פיצ׳ר חדש
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
