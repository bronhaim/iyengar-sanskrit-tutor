import React from 'react';
import { BookOpen, Compass, Home, Play, Sparkles } from 'lucide-react';
import { UserProfileMenu } from './UserProfileMenu';

export const Header = ({ currentView, setCurrentView, onStartQuiz, onOpenAuth, onSelectCategory }) => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-[#E5D9C8] sticky top-0 z-40 px-4 sm:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand / Logo (Right in RTL) */}
        <button 
          onClick={() => setCurrentView('home')} 
          className="flex items-center gap-3 text-charcoal hover:opacity-85 transition-opacity text-right group"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-cream-100 border border-[#E5D9C8] flex items-center justify-center text-lg sm:text-xl shadow-xs group-hover:scale-105 transition-transform">
            🕉️
          </div>
          <div>
            <div className="font-bold text-base sm:text-lg text-charcoal leading-tight">
              יוגה איינגר לתרגול ביתי
            </div>
          </div>
        </button>

        {/* Mode Navigation (Center) */}
        <nav className="hidden md:flex items-center gap-1.5 bg-cream-100/80 p-1 rounded-2xl border border-[#E5D9C8] text-sm">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 transition-all ${
              currentView === 'home' 
                ? 'bg-white text-charcoal shadow-xs' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            <Home className="w-4 h-4 text-soft-green" />
            <span>ראשי</span>
          </button>

          <button
            onClick={() => setCurrentView('catalog')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 transition-all ${
              currentView === 'catalog' 
                ? 'bg-white text-charcoal shadow-xs' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            <Compass className="w-4 h-4 text-soft-green" />
            <span>קטלוג תנוחות</span>
          </button>

          <button
            onClick={() => setCurrentView('sequences')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 transition-all ${
              currentView === 'sequences' 
                ? 'bg-white text-charcoal shadow-xs' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>רצפי תרגולים</span>
          </button>

          <button
            onClick={onStartQuiz || (() => setCurrentView('quiz'))}
            className={`px-3.5 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 transition-all ${
              currentView === 'quiz' 
                ? 'bg-white text-terracotta shadow-xs font-bold' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            <Play className="w-4 h-4 fill-current text-terracotta" />
            <span>חידון</span>
          </button>

          <button
            onClick={() => setCurrentView('roots')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 transition-all ${
              currentView === 'roots' 
                ? 'bg-white text-charcoal shadow-xs' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            <BookOpen className="w-4 h-4 text-soft-green" />
            <span>מילון סנסקריט</span>
          </button>
        </nav>

        {/* User Profile / Auth (Left in RTL) */}
        <div className="flex items-center gap-2">
          {/* Quick Mobile Navigation Bar */}
          <div className="flex md:hidden items-center gap-1 bg-cream-100 p-0.5 rounded-xl border border-[#E5D9C8] text-xs">
            <button
              onClick={() => setCurrentView('catalog')}
              className={`px-2 py-1 rounded-lg font-medium ${currentView === 'catalog' ? 'bg-white shadow-xs font-bold text-soft-green' : 'text-charcoal-muted'}`}
            >
              תנוחות
            </button>
            <button
              onClick={() => setCurrentView('sequences')}
              className={`px-2 py-1 rounded-lg font-medium ${currentView === 'sequences' ? 'bg-white shadow-xs font-bold text-amber-700' : 'text-charcoal-muted'}`}
            >
              תרגולים
            </button>
            <button
              onClick={onStartQuiz || (() => setCurrentView('quiz'))}
              className={`px-2 py-1 rounded-lg font-medium ${currentView === 'quiz' ? 'bg-white shadow-xs font-bold text-terracotta' : 'text-charcoal-muted'}`}
            >
              חידון
            </button>
          </div>

          <UserProfileMenu 
            onOpenAuth={onOpenAuth} 
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
