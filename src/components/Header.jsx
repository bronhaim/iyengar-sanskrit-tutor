import React from 'react';
import { BookOpen, Compass, Home } from 'lucide-react';
import { UserProfileMenu } from './UserProfileMenu';

export const Header = ({ currentView, setCurrentView, onOpenAuth, onSelectCategory }) => {
  return (
    <header className="w-full bg-cream-50/95 border-b border-cream-200 sticky top-0 z-30 px-2 py-2">
      <div className="w-full flex items-center justify-between gap-1 flex-nowrap">
        
        {/* User Profile / Auth Button (Right in RTL) */}
        <UserProfileMenu 
          onOpenAuth={onOpenAuth} 
          onSelectCategory={(cat) => {
            setCurrentView('catalog');
            if (onSelectCategory) onSelectCategory(cat);
          }}
        />

        {/* Mode Navigation (Center) - Compact & never wraps */}
        <nav className="flex items-center gap-0.5 bg-cream-100 p-0.5 rounded-xl border border-cream-200 text-xs shrink-0">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-2 py-1 rounded-lg font-medium flex items-center gap-1 transition-all ${
              currentView === 'home' 
                ? 'bg-white text-terracotta-dark shadow-xs font-bold' 
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
            title="בית"
          >
            <Home className="w-3.5 h-3.5 shrink-0" />
            <span>ראשי</span>
          </button>

          <button
            onClick={() => setCurrentView('catalog')}
            className={`px-2 py-1 rounded-lg font-medium flex items-center gap-1 transition-all ${
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
            className={`px-2 py-1 rounded-lg font-medium flex items-center gap-1 transition-all ${
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

        {/* Brand / Logo (Left in RTL) - Single line, super compact */}
        <button 
          onClick={() => setCurrentView('home')} 
          className="flex items-center gap-1 text-charcoal hover:opacity-80 transition-opacity text-right shrink-0 pr-1"
          title="איינגר יוגה - עמוד ראשי"
        >
          <span className="text-xs sm:text-sm font-bold text-charcoal tracking-tight whitespace-nowrap">איינגר יוגה</span>
          <span className="text-sm shrink-0">🕉️</span>
        </button>

      </div>
    </header>
  );
};
