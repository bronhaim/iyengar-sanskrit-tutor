import React from 'react';
import { BookOpen, Compass, Home } from 'lucide-react';
import { UserProfileMenu } from './UserProfileMenu';

export const Header = ({ currentView, setCurrentView, onOpenAuth, onSelectCategory }) => {
  return (
    <header className="w-full bg-cream-50/90 backdrop-blur-md border-b border-cream-200 sticky top-0 z-30 px-3 sm:px-4 py-2.5">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-2">
        
        {/* User Profile / Auth Button */}
        <UserProfileMenu 
          onOpenAuth={onOpenAuth} 
          onSelectCategory={(cat) => {
            setCurrentView('catalog');
            if (onSelectCategory) onSelectCategory(cat);
          }}
        />

        {/* Mode Navigation */}
        <nav className="flex items-center gap-1 bg-cream-100 p-1 rounded-xl border border-cream-200 text-xs">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-all ${
              currentView === 'home' 
                ? 'bg-white text-terracotta-dark shadow-sm font-bold' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
            title="בית"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ראשי</span>
          </button>

          <button
            onClick={() => setCurrentView('catalog')}
            className={`px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-all ${
              currentView === 'catalog' 
                ? 'bg-white text-terracotta-dark shadow-sm font-bold' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
            title="קטלוג תנוחות איינגר"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>תנוחות</span>
          </button>

          <button
            onClick={() => setCurrentView('roots')}
            className={`px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-all ${
              currentView === 'roots' 
                ? 'bg-white text-terracotta-dark shadow-sm font-bold' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
            title="מילון שורשים בסנסקריט"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>מילון</span>
          </button>
        </nav>

        {/* Brand / Logo */}
        <button 
          onClick={() => setCurrentView('home')} 
          className="flex items-center gap-2 text-charcoal hover:opacity-80 transition-opacity text-right shrink-0"
        >
          <div className="text-right">
            <div className="text-xs font-bold text-charcoal tracking-tight">איינגר יוגה</div>
            <div className="text-[10px] text-terracotta-dark font-medium">מדריך תרגול מעמיק</div>
          </div>
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-terracotta/10 border border-terracotta/30 flex items-center justify-center text-terracotta font-bold text-sm">
            🕉️
          </div>
        </button>

      </div>
    </header>
  );
};
