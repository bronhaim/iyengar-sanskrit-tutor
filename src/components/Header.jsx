import React from 'react';
import { BookOpen, Compass, Home } from 'lucide-react';
import { UserProfileMenu } from './UserProfileMenu';

export const Header = ({ currentView, setCurrentView, onOpenAuth, onSelectCategory }) => {
  return (
    <header className="w-full bg-cream-50/95 border-b border-cream-200 sticky top-0 z-30 px-2.5 sm:px-4 py-2">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-1.5 sm:gap-2 flex-nowrap">
        
        {/* User Profile / Auth Button (Right side in RTL) */}
        <UserProfileMenu 
          onOpenAuth={onOpenAuth} 
          onSelectCategory={(cat) => {
            setCurrentView('catalog');
            if (onSelectCategory) onSelectCategory(cat);
          }}
        />

        {/* Mode Navigation (Center) */}
        <nav className="flex items-center gap-0.5 sm:gap-1 bg-cream-100 p-0.5 sm:p-1 rounded-xl border border-cream-200 text-xs shrink-0">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-2 sm:px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-all ${
              currentView === 'home' 
                ? 'bg-white text-terracotta-dark shadow-xs font-bold' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
            title="בית"
          >
            <Home className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">ראשי</span>
          </button>

          <button
            onClick={() => setCurrentView('catalog')}
            className={`px-2 sm:px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-all ${
              currentView === 'catalog' 
                ? 'bg-white text-terracotta-dark shadow-xs font-bold' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
            title="קטלוג תנוחות איינגר"
          >
            <Compass className="w-3.5 h-3.5 shrink-0" />
            <span>תנוחות</span>
          </button>

          <button
            onClick={() => setCurrentView('roots')}
            className={`px-2 sm:px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-all ${
              currentView === 'roots' 
                ? 'bg-white text-terracotta-dark shadow-xs font-bold' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
            title="מילון שורשים בסנסקריט"
          >
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>מילון</span>
          </button>
        </nav>

        {/* Brand / Logo (Left side in RTL) */}
        <button 
          onClick={() => setCurrentView('home')} 
          className="flex items-center gap-1.5 sm:gap-2 text-charcoal hover:opacity-80 transition-opacity text-right shrink-0"
        >
          <div className="text-right">
            <div className="text-xs sm:text-sm font-bold text-charcoal tracking-tight whitespace-nowrap">איינגר יוגה</div>
            <div className="text-[9px] text-terracotta-dark font-medium hidden sm:block">מדריך תרגול מעמיק</div>
          </div>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-terracotta/10 border border-terracotta/30 flex items-center justify-center text-terracotta font-bold text-xs sm:text-sm shrink-0">
            🕉️
          </div>
        </button>

      </div>
    </header>
  );
};
