import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { User, LogOut, Star, Settings, Check, X, ShieldAlert, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const UserProfileMenu = ({ onOpenAuth, onSelectCategory }) => {
  const { currentUser, userProfile, logout, updateSensitivities } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const sensitivityOptions = [
    { 
      id: 'knees', 
      label: 'רגישות בברכיים', 
      emoji: '🦵',
      desc: 'התראות בתנוחות כפיפה עמוקה ופיתולים' 
    },
    { 
      id: 'lower_back', 
      label: 'רגישות בגב תחתון', 
      emoji: '🧘',
      desc: 'התראות בכפיפות לאחור ובמתיחות עמוקות לפנים' 
    },
    { 
      id: 'neck', 
      label: 'רגישות בצוואר / כתפיים', 
      emoji: '💆',
      desc: 'התראות בתנוחות הפוכות והרמת זרועות' 
    },
    { 
      id: 'high_bp', 
      label: 'לחץ דם גבוה', 
      emoji: '🩺',
      desc: 'התאמת תנוחות הפוכות והנחיות שהייה נתמכת' 
    }
  ];

  const handleToggleSensitivity = (id) => {
    const current = userProfile.sensitivities || [];
    const updated = current.includes(id)
      ? current.filter(item => item !== id)
      : [...current, id];
    updateSensitivities(updated);
  };

  // If not logged in, render compact login button
  if (!currentUser) {
    return (
      <button
        onClick={onOpenAuth}
        className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-full bg-white hover:bg-cream-100 border border-cream-300 text-charcoal text-xs font-semibold shadow-xs transition-all hover:border-terracotta shrink-0"
        title="התחברות לחשבון"
      >
        <User className="w-3.5 h-3.5 text-terracotta shrink-0" />
        <span className="hidden sm:inline">התחברות</span>
      </button>
    );
  }

  const displayName = currentUser.displayName || currentUser.email?.split('@')[0] || 'מתרגל';
  const initial = displayName.charAt(0).toUpperCase();
  const favCount = userProfile.favorites?.length || 0;
  const sensitivitiesCount = (userProfile.sensitivities || []).length;

  return (
    <div className="relative shrink-0">
      {/* Header Profile Trigger Button: Compact Avatar Circle on Mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 sm:gap-1.5 p-1 sm:px-2.5 sm:py-1 rounded-full bg-white hover:bg-cream-50 border border-cream-300 hover:border-terracotta/50 text-charcoal text-xs font-semibold shadow-xs transition-all"
        title={`פרופיל מתרגל: ${displayName}`}
      >
        <div className="relative">
          {currentUser.photoURL ? (
            <img 
              src={currentUser.photoURL} 
              alt={displayName} 
              className="w-6 h-6 sm:w-5 sm:h-5 rounded-full object-cover border border-cream-300"
            />
          ) : (
            <div className="w-6 h-6 sm:w-5 sm:h-5 rounded-full bg-terracotta text-white flex items-center justify-center text-xs sm:text-[10px] font-bold shadow-xs">
              {initial}
            </div>
          )}
          {/* Active online dot */}
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white"></span>
        </div>
        
        {/* Name is hidden on small mobile screens to prevent bar overflow */}
        <span className="hidden sm:inline max-w-[80px] truncate text-xs">{displayName}</span>
      </button>

      {/* React Portal: Render modal directly in document.body to avoid being trapped by parent transforms or backdrop filters */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn" 
          dir="rtl"
        >
          {/* Backdrop Click to close */}
          <div 
            className="absolute inset-0" 
            onClick={() => setIsOpen(false)} 
          />

          {/* Modal Container */}
          <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-cream-200 overflow-hidden z-10 max-h-[88vh] flex flex-col animate-slideUp text-right">
            
            {/* Header / User Card */}
            <div className="bg-gradient-to-l from-cream-100 to-cream-50 p-4 sm:p-5 border-b border-cream-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {currentUser.photoURL ? (
                  <img 
                    src={currentUser.photoURL} 
                    alt={displayName} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-terracotta text-white flex items-center justify-center text-lg font-bold shadow-sm">
                    {initial}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-charcoal text-base">{displayName}</span>
                    <span className="text-[10px] bg-sage-light text-sage-dark font-medium px-2 py-0.5 rounded-full">
                      מחובר
                    </span>
                  </div>
                  <div className="text-xs text-charcoal-muted truncate dir-ltr text-right mt-0.5 max-w-[200px] sm:max-w-[240px]">
                    {currentUser.email}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white border border-cream-200 hover:bg-cream-100 flex items-center justify-center text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer"
                title="סגור"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-4 sm:p-5 space-y-4 overflow-y-auto custom-scrollbar flex-1">
              
              {/* Option 1: My Favorites */}
              <div className="bg-cream-50/70 border border-cream-200 rounded-2xl p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-charcoal">תנוחות מועדפות</div>
                      <div className="text-[11px] text-charcoal-muted">רשימת התנוחות האישית שלך לשמירה ותרגול</div>
                    </div>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded-full">
                    {favCount} תנוחות
                  </span>
                </div>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (onSelectCategory) onSelectCategory('favorites');
                  }}
                  className="w-full mt-1.5 py-2 px-3 rounded-xl bg-white border border-cream-300 hover:border-amber-400 text-charcoal text-xs font-bold shadow-xs hover:shadow-sm flex items-center justify-center gap-1.5 transition-all text-terracotta cursor-pointer"
                >
                  <Star className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
                  <span>מעבר לתנוחות המועדפות בקטלוג</span>
                </button>
              </div>

              {/* Option 2: Body Sensitivities & Iyengar Adjustments */}
              <div className="bg-cream-50/70 border border-cream-200 rounded-2xl p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-sage-light text-sage-dark flex items-center justify-center">
                      <Settings className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-charcoal">העדפות ורגישויות גוף</div>
                      <div className="text-[11px] text-charcoal-muted">התאמת דגשי שהות, אזהרות ועזרים לפי מצבך</div>
                    </div>
                  </div>
                  {sensitivitiesCount > 0 && (
                    <span className="bg-sage-light text-sage-dark text-[11px] font-bold px-2 py-0.5 rounded-full">
                      {sensitivitiesCount} פעילות
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-charcoal-muted mb-2.5">
                  סמן רגישויות קיימות. תנוחות שדורשות זהירות יסומנו בקטלוג בהתראה ברורה:
                </p>

                {/* Sensitivities List */}
                <div className="space-y-1.5">
                  {sensitivityOptions.map(opt => {
                    const isChecked = (userProfile.sensitivities || []).includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleToggleSensitivity(opt.id)}
                        className={`w-full p-2.5 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                          isChecked 
                            ? 'bg-cream-100/90 border-terracotta/40 shadow-xs' 
                            : 'bg-white border-cream-200 hover:border-cream-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{opt.emoji}</span>
                          <div>
                            <div className="text-xs font-bold text-charcoal">{opt.label}</div>
                            <div className="text-[10px] text-charcoal-muted">{opt.desc}</div>
                          </div>
                        </div>

                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                          isChecked 
                            ? 'bg-terracotta border-terracotta text-white shadow-xs' 
                            : 'border-cream-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Logout Button */}
              <div className="pt-1">
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl border border-rose-200 text-rose-700 bg-rose-50/50 hover:bg-rose-100/70 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>התנתקות מהחשבון</span>
                </button>
              </div>

            </div>

          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
