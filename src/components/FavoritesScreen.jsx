import React, { useState } from 'react';
import { ArrowRight, Star, Clock, Play, Sparkles, BookOpen, User, Layers, Info, Compass, ChevronLeft, Bookmark, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { POSE_DATABASE } from '../data/posesData';
import { YOGA_SEQUENCES } from '../data/sequencesData';
import { PoseSvgIllustration } from './PoseSvgIllustration';
import { getPoseGallery } from '../utils/poseGallery';

export const FavoritesScreen = ({ 
  onBackToHome, 
  onOpenCatalog, 
  onOpenSequences, 
  onOpenZoomModal,
  onStartGuidedSequence,
  onOpenAuth 
}) => {
  const { 
    currentUser, 
    userProfile, 
    toggleFavoritePose, 
    isFavorite, 
    toggleFavoriteSequence, 
    isFavoriteSequence 
  } = useAuth();

  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'sequences' | 'poses'

  const favoritePoseIds = userProfile.favorites || [];
  const favoriteSequenceIds = userProfile.favoriteSequences || [];

  const favoritePoses = POSE_DATABASE.filter(p => favoritePoseIds.includes(p.id));
  const favoriteSequences = YOGA_SEQUENCES.filter(s => favoriteSequenceIds.includes(s.id));

  const totalCount = favoritePoses.length + favoriteSequences.length;

  const getPoseById = (poseId) => {
    return POSE_DATABASE.find(p => p.id === poseId);
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF7F2] animate-fadeIn overflow-hidden">
      
      {/* Header */}
      <header className="p-4 bg-white border-b border-[#E5D9C8] flex items-center justify-between shrink-0">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-charcoal hover:text-terracotta text-sm font-semibold transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>חזרה לראשי</span>
        </button>

        <h2 className="text-base font-bold text-charcoal flex items-center gap-1.5">
          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
          <span>המועדפים שלי</span>
        </h2>
      </header>

      {/* Main Scrollable Body */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 space-y-6 max-w-5xl mx-auto w-full">
        
        {/* User Status Card */}
        <div className="bg-white border border-[#E5D9C8] rounded-3xl p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {currentUser?.photoURL ? (
              <img 
                src={currentUser.photoURL} 
                alt="פרופיל" 
                className="w-12 h-12 rounded-full object-cover border border-[#E5D9C8] shrink-0"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-cream-200 text-terracotta border border-[#E5D9C8] flex items-center justify-center text-lg font-bold shrink-0">
                {currentUser ? (currentUser.displayName || currentUser.email || 'מתרגל').charAt(0).toUpperCase() : <Star className="w-5 h-5 text-terracotta" />}
              </div>
            )}

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-charcoal">
                  {currentUser ? (currentUser.displayName || 'פרופיל מתרגל אישי') : 'מועדפים מקומיים'}
                </h3>
                {currentUser && (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    מסונכרן בענן
                  </span>
                )}
              </div>
              <p className="text-xs text-charcoal-muted mt-0.5">
                {currentUser 
                  ? `שמרת ${favoriteSequences.length} רצפי תרגול ו-${favoritePoses.length} תנוחות בחשבונך`
                  : 'התחברו כדי לשמור ולסנכרן את התנוחות והרצפים המועדפים שלכם בכל המכשירים'}
              </p>
            </div>
          </div>

          {!currentUser && (
            <button
              onClick={onOpenAuth}
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-bold shadow-xs hover:shadow-md transition-all shrink-0 text-center"
            >
              התחברות לחשבון
            </button>
          )}
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center sm:justify-start gap-2 bg-cream-100/80 p-1 rounded-2xl border border-[#E5D9C8] max-w-md mx-auto sm:mx-0">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-white text-charcoal shadow-xs'
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            הכל ({totalCount})
          </button>
          <button
            onClick={() => setActiveTab('sequences')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'sequences'
                ? 'bg-white text-charcoal shadow-xs'
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            רצפי תרגולים ({favoriteSequences.length})
          </button>
          <button
            onClick={() => setActiveTab('poses')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'poses'
                ? 'bg-white text-charcoal shadow-xs'
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            תנוחות ({favoritePoses.length})
          </button>
        </div>

        {/* Completely Empty State */}
        {totalCount === 0 && (
          <div className="bg-white rounded-3xl border border-[#E5D9C8] p-8 sm:p-12 text-center space-y-4">
            <div className="flex justify-center">
              <Bookmark className="w-12 h-12 text-[#8C6549]" />
            </div>
            <h3 className="text-xl font-bold text-charcoal">
              עדיין אין לך פריטים מועדפים
            </h3>
            <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
              תוכל לסמן בכוכב כל תנוחה בקטלוג התנוחות וכל רצף תרגול בעמוד הרצפים כדי לשמור אותם כאן לגישה מהירה ומותאמת אישית.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onOpenCatalog}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-cream-100 border border-[#E5D9C8] hover:border-terracotta text-charcoal text-xs sm:text-sm font-semibold shadow-xs transition-all"
              >
                גלה תנוחות בקטלוג
              </button>
              <button
                onClick={onOpenSequences}
                className="px-5 py-2.5 rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
              >
                צפה ברצפי תרגולים
              </button>
            </div>
          </div>
        )}

        {/* Section 1: Favorite Sequences */}
        {(activeTab === 'all' || activeTab === 'sequences') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-charcoal flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-terracotta" />
                <span>רצפי תרגול מועדפים</span>
                <span className="text-xs bg-cream-200 text-charcoal px-2 py-0.5 rounded-full font-semibold">
                  {favoriteSequences.length}
                </span>
              </h3>

              {favoriteSequences.length > 0 && (
                <button
                  onClick={onOpenSequences}
                  className="text-xs font-semibold text-terracotta hover:underline"
                >
                  לכל הרצפים
                </button>
              )}
            </div>

            {favoriteSequences.length === 0 && activeTab === 'sequences' ? (
              <div className="bg-white rounded-3xl border border-[#E5D9C8] p-8 text-center space-y-3">
                <div className="flex justify-center">
                  <Sparkles className="w-8 h-8 text-[#8C6549]" />
                </div>
                <h4 className="font-bold text-charcoal">אין רצפי תרגול מועדפים</h4>
                <p className="text-xs text-charcoal-muted max-w-sm mx-auto">
                  עבור לרצפי התרגול ולחץ על סמל הכוכב כדי לשמור את הרצפים המועדפים עליך.
                </p>
                <button
                  onClick={onOpenSequences}
                  className="px-5 py-2 rounded-full bg-white border border-[#E5D9C8] hover:border-terracotta text-charcoal text-xs font-semibold shadow-xs"
                >
                  לרצפי התרגולים
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {favoriteSequences.map(seq => (
                  <div
                    key={seq.id}
                    className={`bg-white border rounded-3xl p-5 shadow-xs hover:shadow-card transition-all text-right flex flex-col gap-3 ${seq.borderColor}`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${seq.badgeColor}`}>
                          {seq.timing}
                        </span>

                        <button
                          onClick={() => toggleFavoriteSequence(seq.id)}
                          className="p-1.5 rounded-xl border bg-amber-50 border-amber-300 text-amber-500 shadow-xs hover:bg-amber-100 transition-all"
                          title="הסר מרצפים מועדפים"
                        >
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-semibold text-charcoal-muted">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{seq.duration}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-charcoal mb-0.5">
                        {seq.title}
                      </h4>
                      <div className="text-xs text-terracotta-dark font-sanskrit dir-ltr mb-1.5">
                        {seq.subtitle}
                      </div>
                      <p className="text-xs text-charcoal-light leading-relaxed">
                        {seq.description}
                      </p>
                    </div>

                    {/* Props Required */}
                    <div className="flex flex-wrap gap-1.5">
                      {seq.propsNeeded.map((prop, pIdx) => (
                        <span key={pIdx} className="px-2 py-0.5 bg-cream-100 rounded-lg text-[11px] text-charcoal font-medium">
                          {prop}
                        </span>
                      ))}
                    </div>

                    {/* Poses Preview List */}
                    <div className="bg-cream-50/80 border border-cream-200 rounded-2xl p-3">
                      <div className="text-xs font-bold text-charcoal mb-2 flex items-center gap-1">
                        <span>תנוחות ברצף ({seq.poses.length}):</span>
                      </div>
                      <div className="space-y-1.5">
                        {seq.poses.map((step, idx) => {
                          const pose = getPoseById(step.poseId);
                          if (!pose) return null;
                          return (
                            <div 
                              key={idx}
                              onClick={() => onOpenZoomModal(pose)}
                              className="flex items-center justify-between text-xs p-1.5 rounded-xl hover:bg-white border border-transparent hover:border-cream-300 transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-cream-200 text-charcoal text-[11px] font-bold flex items-center justify-center shrink-0">
                                  {idx + 1}
                                </span>
                                <div>
                                  <strong className="text-charcoal font-bold">{pose.poseHebrewName}</strong>
                                  <span className="text-charcoal-muted text-[11px] mr-1.5">({step.durationText})</span>
                                </div>
                              </div>

                              <Info className="w-4 h-4 text-terracotta shrink-0" />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Start Guided Practice */}
                    <div className="pt-1 flex items-center justify-start">
                      <button
                        onClick={() => {
                          if (onStartGuidedSequence) {
                            onStartGuidedSequence(seq);
                          } else {
                            onOpenSequences();
                          }
                        }}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-terracotta hover:bg-terracotta-dark text-white font-bold text-sm shadow-duo-terracotta hover:shadow-md transition-all"
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                        <span>התחל תרגול מודרך</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Section 2: Favorite Poses */}
        {(activeTab === 'all' || activeTab === 'poses') && (
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-charcoal flex items-center gap-2">
                <Layers className="w-4 h-4 text-terracotta" />
                <span>תנוחות מועדפות</span>
                <span className="text-xs bg-cream-200 text-charcoal px-2 py-0.5 rounded-full font-semibold">
                  {favoritePoses.length}
                </span>
              </h3>

              {favoritePoses.length > 0 && (
                <button
                  onClick={onOpenCatalog}
                  className="text-xs font-semibold text-terracotta hover:underline"
                >
                  לקטלוג התנוחות
                </button>
              )}
            </div>

            {favoritePoses.length === 0 && activeTab === 'poses' ? (
              <div className="bg-white rounded-3xl border border-[#E5D9C8] p-8 text-center space-y-3">
                <div className="flex justify-center">
                  <Layers className="w-8 h-8 text-[#8C6549]" />
                </div>
                <h4 className="font-bold text-charcoal">אין תנוחות מועדפות</h4>
                <p className="text-xs text-charcoal-muted max-w-sm mx-auto">
                  עבור לקטלוג התנוחות ולחץ על סמל הכוכב בכרטיס התנוחה כדי לשמור אותה כאן.
                </p>
                <button
                  onClick={onOpenCatalog}
                  className="px-5 py-2 rounded-full bg-white border border-[#E5D9C8] hover:border-terracotta text-charcoal text-xs font-semibold shadow-xs"
                >
                  לקטלוג התנוחות
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {favoritePoses.map(pose => {
                  const gallery = getPoseGallery(pose);

                  return (
                    <div 
                      key={pose.id}
                      className="bg-white border border-[#E5D9C8] rounded-3xl p-4 shadow-xs hover:shadow-card transition-shadow flex flex-col sm:flex-row gap-4 relative"
                    >
                      {/* Thumbnail */}
                      <div 
                        onClick={() => onOpenZoomModal(pose)}
                        className="w-full sm:w-36 h-36 rounded-2xl bg-cream-50 border border-cream-200 p-2 shrink-0 flex items-center justify-center relative group cursor-pointer overflow-hidden hover:border-terracotta transition-all"
                      >
                        <PoseSvgIllustration poseId={pose.id} className="w-full h-full" />
                        
                        {gallery.length > 1 && (
                          <div className="absolute top-2 right-2 bg-charcoal/75 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm z-10 group-hover:scale-105 transition-transform">
                            <Layers className="w-2.5 h-2.5 text-terracotta-light" />
                            <span>{gallery.length} תמונות</span>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-charcoal/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1 rounded-2xl z-20">
                          <Search className="w-3.5 h-3.5" />
                          <span>לחץ לצפייה</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-right flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <button
                              onClick={() => toggleFavoritePose(pose.id)}
                              className="p-2 rounded-xl border bg-amber-50 border-amber-300 text-amber-500 shadow-xs hover:bg-amber-100 transition-all shrink-0"
                              title="הסר מתנוחות מועדפות"
                            >
                              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                            </button>

                            <div className="flex-1">
                              <h4 className="font-extrabold text-base sm:text-lg text-charcoal leading-tight">
                                {pose.poseHebrewName}
                              </h4>
                              <div className="text-xs text-terracotta-dark font-sanskrit tracking-wider dir-ltr inline-block">
                                {pose.sanskritScript}
                              </div>
                            </div>
                          </div>

                          <div className="mt-2 text-xs text-charcoal-light leading-relaxed">
                            {pose.benefits || pose.iyengarNote}
                          </div>

                          {/* Sanskrit Breakdown */}
                          {pose.breakdown && pose.breakdown.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2.5">
                              {pose.breakdown.map((item, bIdx) => (
                                <span key={bIdx} className="px-2 py-0.5 rounded-lg bg-cream-100 border border-cream-200 text-[11px] text-charcoal">
                                  <strong>{item.root}:</strong> {item.meaning}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* View full details button */}
                        <div className="mt-3 pt-2 border-t border-cream-200 flex items-center justify-between text-xs">
                          <button
                            onClick={() => onOpenZoomModal(pose)}
                            className="text-terracotta font-semibold hover:underline flex items-center gap-1"
                          >
                            <span>צפה בהנחיות, פרופס ותמונות מלאות</span>
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
