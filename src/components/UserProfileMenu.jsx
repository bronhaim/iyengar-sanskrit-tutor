import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, Star, Heart, Settings, ChevronDown, Check, ShieldAlert } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const UserProfileMenu = ({ onOpenAuth, onSelectCategory }) => {
  const { currentUser, userProfile, logout, updateSensitivities } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowPreferences(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sensitivityOptions = [
    { id: 'knees', label: 'רגישות בברכיים 🦵' },
    { id: 'lower_back', label: 'רגישות בגב תחתון 🧘' },
    { id: 'neck', label: 'רגישות בצוואר / כתפיים 💆' },
    { id: 'high_bp', label: 'לחץ דם גבוה 🩺' }
  ];

  const handleToggleSensitivity = (id) => {
    const current = userProfile.sensitivities || [];
    const updated = current.includes(id)
      ? current.filter(item => item !== id)
      : [...current, id];
    updateSensitivities(updated);
  };

  if (!currentUser) {
    return (
      <button
        onClick={onOpenAuth}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 hover:bg-cream-200 border border-cream-300 text-charcoal text-xs font-semibold shadow-sm transition-all hover:border-terracotta"
      >
        <User className="w-3.5 h-3.5 text-terracotta" />
        <span>התחברות</span>
      </button>
    );
  }

  const displayName = currentUser.displayName || currentUser.email?.split('@')[0] || 'מתרגל';
  const initial = displayName.charAt(0).toUpperCase();
  const favCount = userProfile.favorites?.length || 0;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white hover:bg-cream-50 border border-cream-300 text-charcoal text-xs font-semibold shadow-sm transition-all"
      >
        {currentUser.photoURL ? (
          <img 
            src={currentUser.photoURL} 
            alt={displayName} 
            className="w-5 h-5 rounded-full object-cover"
          />
        ) : (
          <div className="w-5 h-5 rounded-full bg-terracotta text-white flex items-center justify-center text-[10px] font-bold">
            {initial}
          </div>
        )}
        <span className="max-w-[90px] truncate">{displayName}</span>
        <ChevronDown className="w-3 h-3 text-charcoal-muted" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-cream-200 p-2 z-50 text-right animate-fadeIn">
          {/* User Info Header */}
          <div className="px-3 py-2 border-b border-cream-100 mb-1">
            <div className="font-bold text-charcoal text-sm">{displayName}</div>
            <div className="text-[11px] text-charcoal-muted truncate dir-ltr text-right">{currentUser.email}</div>
          </div>

          {/* Quick Menu Items */}
          <div className="space-y-0.5">
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory('favorites');
                setIsOpen(false);
              }}
              className="w-full px-3 py-2 rounded-xl text-xs text-charcoal hover:bg-cream-100 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>התנוחות המועדפות שלי</span>
              </div>
              <span className="bg-cream-200 text-charcoal font-bold px-1.5 py-0.5 rounded-md text-[10px]">
                {favCount}
              </span>
            </button>

            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="w-full px-3 py-2 rounded-xl text-xs text-charcoal hover:bg-cream-100 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <Settings className="w-3.5 h-3.5 text-sage-dark" />
                <span>העדפות ורגישויות גוף</span>
              </div>
              <ChevronDown className={`w-3 h-3 transition-transform ${showPreferences ? 'rotate-180' : ''}`} />
            </button>

            {/* Sensitivities Submenu */}
            {showPreferences && (
              <div className="bg-cream-50 p-2 rounded-xl my-1 space-y-1 border border-cream-200/60">
                <div className="text-[10px] text-charcoal-muted font-bold px-1 mb-1">
                  האפליקציה תדגיש זהירות בתנוחות:
                </div>
                {sensitivityOptions.map(opt => {
                  const isChecked = (userProfile.sensitivities || []).includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleToggleSensitivity(opt.id)}
                      className="w-full px-2 py-1 rounded-lg text-xs flex items-center justify-between text-right hover:bg-white transition-colors"
                    >
                      <span className="text-[11px] text-charcoal">{opt.label}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        isChecked ? 'bg-terracotta border-terracotta text-white' : 'border-cream-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            <div className="border-t border-cream-100 my-1"></div>

            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="w-full px-3 py-2 rounded-xl text-xs text-rose-700 hover:bg-rose-50 flex items-center gap-2 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>התנתקות מהחשבון</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
