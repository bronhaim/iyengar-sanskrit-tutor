import React from 'react';
import { UserProfileMenu } from './UserProfileMenu';

export const Header = ({ currentView, setCurrentView, onStartQuiz, onOpenAuth, onSelectCategory, onRequestFeature }) => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-[#E5D9C8] sticky top-0 z-40 px-4 sm:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand / Logo (Right in RTL) */}
        <button 
          onClick={() => setCurrentView('home')} 
          className="text-charcoal hover:opacity-85 transition-opacity text-right"
        >
          <div className="font-bold text-base sm:text-lg text-charcoal leading-tight tracking-tight">
            יוגה איינגר לתרגול ביתי
          </div>
        </button>

        {/* Mode Navigation (Center) */}
        <nav className="hidden md:flex items-center gap-1.5 bg-cream-100/80 p-1 rounded-2xl border border-[#E5D9C8] text-sm">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'home' 
                ? 'bg-white text-charcoal shadow-xs' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            ראשי
          </button>

          <button
            onClick={() => setCurrentView('catalog')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'catalog' 
                ? 'bg-white text-charcoal shadow-xs' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            קטלוג תנוחות
          </button>

          <button
            onClick={() => setCurrentView('sequences')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'sequences' 
                ? 'bg-white text-charcoal shadow-xs' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            רצפי תרגולים
          </button>

          <button
            onClick={() => setCurrentView('favorites')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'favorites' 
                ? 'bg-white text-charcoal shadow-xs' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            מועדפים
          </button>

          <button
            onClick={onStartQuiz || (() => setCurrentView('quiz'))}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'quiz' 
                ? 'bg-white text-charcoal shadow-xs' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            חידון
          </button>

          <button
            onClick={() => setCurrentView('roots')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              currentView === 'roots' 
                ? 'bg-white text-charcoal shadow-xs' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            מילון סנסקריט
          </button>
        </nav>

        {/* User Profile / Auth (Left in RTL) */}
        <div className="flex items-center gap-2">
          {/* Quick Mobile Navigation Bar */}
          <div className="flex md:hidden items-center gap-1 bg-cream-100 p-0.5 rounded-xl border border-[#E5D9C8] text-xs">
            <button
              onClick={() => setCurrentView('catalog')}
              className={`px-2 py-1 rounded-lg font-medium ${currentView === 'catalog' ? 'bg-white shadow-xs font-bold text-charcoal' : 'text-charcoal-muted'}`}
            >
              תנוחות
            </button>
            <button
              onClick={() => setCurrentView('sequences')}
              className={`px-2 py-1 rounded-lg font-medium ${currentView === 'sequences' ? 'bg-white shadow-xs font-bold text-charcoal' : 'text-charcoal-muted'}`}
            >
              תרגולים
            </button>
            <button
              onClick={() => setCurrentView('favorites')}
              className={`px-2 py-1 rounded-lg font-medium ${currentView === 'favorites' ? 'bg-white shadow-xs font-bold text-charcoal' : 'text-charcoal-muted'}`}
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
