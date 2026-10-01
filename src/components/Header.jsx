import React from 'react';
import { UserProfileMenu } from './UserProfileMenu';

export const Header = ({ currentView, setCurrentView, onStartQuiz, onOpenAuth, onSelectCategory, onRequestFeature }) => {
  return (
    <header className="w-full bg-[#F5EFEB]/90 backdrop-blur-md border-b border-[#DECFC0] sticky top-0 z-40 px-4 sm:px-8 py-2 sm:py-2.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand / Logo (Right in RTL) - Styled emblem */}
        <button 
          onClick={() => setCurrentView('home')} 
          className="flex flex-col items-center sm:items-start justify-center text-[#382417] hover:opacity-85 transition-opacity text-right group py-0.5"
          title="חזרה לדף הבית"
        >
          {/* Purple Icon on top */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-gradient-to-br from-[#7B4B85] to-[#542B5E] text-white flex items-center justify-center text-xs shadow-xs mb-1 group-hover:scale-105 transition-transform border border-[#542B5E]/30">
            <span className="leading-none text-[11px] sm:text-xs">🕉️</span>
          </div>
          <div className="font-bold text-[12px] sm:text-[13px] text-[#382417] leading-tight tracking-tight">
            יוגה איינגר לתרגול ביתי
          </div>
          <div className="text-[9px] sm:text-[10px] text-[#674831] font-normal tracking-wide leading-tight">
            דיוק, יציבה והעמקה
          </div>
        </button>

        {/* Mode Navigation (Center) */}
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

        {/* User Profile / Auth (Left in RTL) */}
        <div className="flex items-center gap-2">
          {/* Quick Mobile Navigation Bar */}
          <div className="flex md:hidden items-center gap-1 bg-[#EAE0D3] p-0.5 rounded-xl border border-[#DECFC0] text-xs">
            <button
              onClick={() => setCurrentView('catalog')}
              className={`px-2 py-1 rounded-lg font-medium ${currentView === 'catalog' ? 'bg-[#FAF6F0] shadow-xs font-bold text-[#382417]' : 'text-[#674831]'}`}
            >
              תנוחות
            </button>
            <button
              onClick={() => setCurrentView('sequences')}
              className={`px-2 py-1 rounded-lg font-medium ${currentView === 'sequences' ? 'bg-[#FAF6F0] shadow-xs font-bold text-[#382417]' : 'text-[#674831]'}`}
            >
              תרגולים
            </button>
            <button
              onClick={() => setCurrentView('favorites')}
              className={`px-2 py-1 rounded-lg font-medium ${currentView === 'favorites' ? 'bg-[#FAF6F0] shadow-xs font-bold text-[#382417]' : 'text-[#674831]'}`}
            >
              מועדפים
            </button>
          </div>

          <UserProfileMenu 
            onOpenAuth={onOpenAuth} 
            onOpenFavorites={() => setCurrentView('favorites')}
            onRequestFeature={onRequestFeature}
            onSelectCategory={(cat) => {
              setCurrentView('catalog');
              if (onSelectCategory) onSelectCategory(cat);
            }}
          />
        </div>

      </div>
    </header>
  );
};
