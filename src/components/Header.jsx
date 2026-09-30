import React from 'react';
import { BookOpen, Award, Compass, Sparkles, Home } from 'lucide-react';

export const Header = ({ currentView, setCurrentView, score, totalQuestions }) => {
  return (
    <header className="w-full bg-cream-50/90 backdrop-blur-md border-b border-cream-200 sticky top-0 z-30 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => setCurrentView('home')} 
          className="flex items-center gap-2 text-charcoal hover:opacity-80 transition-opacity text-right"
        >
          <div className="w-9 h-9 rounded-full bg-terracotta/10 border border-terracotta/30 flex items-center justify-center text-terracotta font-bold text-sm">
            🕉️
          </div>
          <div>
            <div className="text-xs font-semibold text-charcoal tracking-tight">לימודי סנסקריט</div>
            <div className="text-[10px] text-terracotta-dark font-medium">מסורת איינגר יוגה</div>
          </div>
        </button>

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
        </nav>

      </div>
    </header>
  );
};
