import React, { useState } from 'react';
import { ArrowRight, Clock, Sparkles, Play, CheckCircle2, ChevronRight, ChevronLeft, Info, Star, Sun, Moon, Brain, Heart, Apple } from 'lucide-react';
import { YOGA_SEQUENCES } from '../data/sequencesData';
import { POSE_DATABASE } from '../data/posesData';
import { PoseSvgIllustration } from './PoseSvgIllustration';
import { useAuth } from '../context/AuthContext';

export const SequencesScreen = ({ onBackToHome, onOpenZoomModal, initialCategory = 'all' }) => {
  const { userProfile, toggleFavoriteSequence, isFavoriteSequence } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeSequence, setActiveSequence] = useState(null);
  const [guidedStepIndex, setGuidedStepIndex] = useState(0);

  const favSeqCount = userProfile.favoriteSequences?.length || 0;

  const categoryFilters = [
    { id: 'all', label: 'הכל' },
    { id: 'favorites', label: favSeqCount > 0 ? `מועדפים (${favSeqCount})` : 'מועדפים' },
    { id: 'morning', label: 'בוקר' },
    { id: 'evening', label: 'ערב' },
    { id: 'remedial', label: 'כאבי ראש ומתח' },
    { id: 'digestion', label: 'לאחר אוכל' },
    { id: 'pregnancy', label: 'הריון' }
  ];

  const filteredSequences = YOGA_SEQUENCES.filter(seq => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'favorites') return isFavoriteSequence(seq.id);
    return seq.category === selectedCategory;
  });

  // Helper to resolve pose object from ID
  const getPoseById = (poseId) => {
    return POSE_DATABASE.find(p => p.id === poseId);
  };

  const handleStartGuided = (seq) => {
    setActiveSequence(seq);
    setGuidedStepIndex(0);
  };

  const currentStep = activeSequence ? activeSequence.poses[guidedStepIndex] : null;
  const currentPose = currentStep ? getPoseById(currentStep.poseId) : null;

  return (
    <div className="flex flex-col h-full bg-[#F5EFEB] animate-fadeIn overflow-hidden">
      
      {/* Header */}
      <header className="p-4 bg-[#FAF6F0] border-b border-[#D5C2AF] flex items-center justify-between shrink-0">
        <button
          onClick={() => {
            if (activeSequence) {
              setActiveSequence(null);
            } else {
              onBackToHome();
            }
          }}
          className="px-3.5 py-1.5 rounded-xl bg-[#EAE0D3] hover:bg-[#D5C2AF] text-[#382417] text-sm font-semibold transition-colors"
        >
          <span>{activeSequence ? 'חזרה לרצפים' : 'חזרה לראשי'}</span>
        </button>

        <h2 className="text-base font-bold text-[#382417]">
          <span>{activeSequence ? activeSequence.title : 'רצפי תרגול ביתיים'}</span>
        </h2>
      </header>

      {/* Main Content Area */}
      {!activeSequence ? (
        /* Sequence Catalog View */
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
          
          {/* Intro Banner */}
          <div className="bg-[#EAE0D3] border border-[#D5C2AF] rounded-2xl p-4 text-right">
            <h3 className="font-bold text-[#382417] text-base mb-1">
              🧘 רצפי תרגול מותאמים לפי מסורת איינגר
            </h3>
            <p className="text-xs text-[#674831] leading-relaxed">
              בחרו רצף תנוחות מותאם לפי זמן ביום, מצב עיכול, הפחתת כאבי ראש או הריון. התרחבו לקבלת הנחיות שהות ועזרים.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
            {categoryFilters.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#67442B] text-white shadow-sm font-bold'
                    : 'bg-[#FAF6F0] text-[#382417] border border-[#D5C2AF] hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sequences List */}
          <div className="space-y-4">
            {filteredSequences.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-3xl border border-cream-200 p-6">
                <div className="text-4xl mb-3">
                  {selectedCategory === 'favorites' ? '⭐' : '🔍'}
                </div>
                <h3 className="font-bold text-charcoal text-base mb-1">
                  {selectedCategory === 'favorites' ? 'עדיין לא סימנת רצפי תרגול מועדפים' : 'לא נמצאו רצפים בקטגוריה זו'}
                </h3>
                <p className="text-xs text-charcoal-muted max-w-xs mx-auto mb-4">
                  {selectedCategory === 'favorites' 
                    ? 'לחצו על סמל הכוכב בכל כרטיס רצף כדי לשמור אותו לרשימת המועדפים האישית שלכם.' 
                    : 'נסו לבחור קטגוריה אחרת.'}
                </p>
                {selectedCategory === 'favorites' && (
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="px-4 py-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-charcoal text-xs font-semibold transition-all"
                  >
                    הצג את כל הרצפים
                  </button>
                )}
              </div>
            ) : (
              filteredSequences.map(seq => {
                const isFav = isFavoriteSequence(seq.id);

                return (
                  <div 
                    key={seq.id}
                    className={`bg-[#FAF6F0] border rounded-3xl p-5 shadow-sm hover:shadow-card transition-all text-right flex flex-col gap-3 ${seq.borderColor}`}
                  >
                    {/* Top Info Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${seq.badgeColor}`}>
                          {seq.timing}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavoriteSequence(seq.id);
                          }}
                          className={`p-1.5 rounded-xl border transition-all ${
                            isFav
                              ? 'bg-amber-50 border-amber-300 text-amber-500 shadow-xs'
                              : 'bg-cream-50 border-cream-200 text-charcoal-muted hover:text-amber-500 hover:border-amber-300'
                          }`}
                          title={isFav ? 'הסר מרצפים מועדפים' : 'הוסף לרצפים מועדפים'}
                          aria-label="מועדף"
                        >
                          <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-amber-500 text-amber-500' : ''}`} />
                        </button>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-semibold text-charcoal-muted">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{seq.duration}</span>
                      </div>
                    </div>

                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-0.5">
                    {seq.title}
                  </h3>
                  <div className="text-xs text-terracotta-dark font-sanskrit dir-ltr mb-2">
                    {seq.subtitle}
                  </div>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    {seq.description}
                  </p>
                </div>

                {/* Props Required */}
                <div className="flex flex-wrap gap-1.5 my-1">
                  {seq.propsNeeded.map((prop, pIdx) => (
                    <span key={pIdx} className="px-2 py-0.5 bg-cream-100 rounded-lg text-[11px] text-charcoal font-medium">
                      {prop}
                    </span>
                  ))}
                </div>

                {/* Poses Preview List */}
                <div className="bg-cream-50/80 border border-cream-200 rounded-2xl p-3">
                  <div className="text-xs font-bold text-charcoal mb-2 flex items-center gap-1">
                    <span>📋 תנוחות ברצף ({seq.poses.length}):</span>
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

                {/* Start Guided Button */}
                <div className="pt-1 flex items-center justify-start">
                  <button
                    onClick={() => handleStartGuided(seq)}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl bg-[#67442B] hover:bg-[#52331E] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <span>התחל תרגול מודרך</span>
                  </button>
                </div>

              </div>
            );
          }))}
          </div>

        </div>
      ) : (
        /* Guided Step-by-Step Player View */
        <div className="flex-1 flex flex-col justify-between p-4 bg-cream-50 overflow-y-auto custom-scrollbar">
          
          {/* Progress Bar & Step Counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-charcoal">
              <span>תנוחה {guidedStepIndex + 1} מתוך {activeSequence.poses.length}</span>
              <span className="text-terracotta-dark">{activeSequence.title}</span>
            </div>
            
            <div className="w-full bg-cream-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-terracotta h-full transition-all duration-300 rounded-full"
                style={{ width: `${((guidedStepIndex + 1) / activeSequence.poses.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Pose Card */}
          {currentPose && (
            <div className="bg-white border border-cream-300 rounded-3xl p-5 shadow-card my-3 text-right flex flex-col gap-3">
              
              {/* Illustration Thumbnail */}
              <div className="w-full aspect-square max-h-[30vh] bg-cream-50 rounded-2xl p-3 border border-cream-200 flex items-center justify-center relative">
                <PoseSvgIllustration poseId={currentPose.id} className="w-full h-full" />
                
                <button
                  onClick={() => onOpenZoomModal(currentPose)}
                  className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-cream-300 px-3 py-1.5 rounded-xl text-xs font-semibold text-charcoal shadow-sm hover:bg-white transition-colors"
                >
                  <span>דף תנוחה מלא</span>
                </button>
              </div>

              {/* Title & Sanskrit */}
              <div>
                <div className="text-xs text-terracotta-dark font-sanskrit dir-ltr mb-0.5">
                  {currentPose.sanskritScript} • {currentPose.englishName}
                </div>
                <h3 className="text-2xl font-bold text-charcoal">
                  {currentPose.poseHebrewName}
                </h3>
              </div>

              {/* Duration Guidance */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs text-amber-950 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                <div>
                  <strong>זמן שהות מומלץ:</strong> {currentStep.durationText}
                </div>
              </div>

              {/* Sequence Specific Tip */}
              <div className="bg-sage-light/60 border border-sage/30 rounded-2xl p-3 text-xs text-charcoal">
                <div className="font-bold text-sage-dark mb-0.5">💡 דגש לרצף זה:</div>
                {currentStep.tip}
              </div>

              {/* Props Tip */}
              {currentPose.propsGuide && (
                <div className="bg-cream-100 border border-cream-300 rounded-2xl p-3 text-xs text-charcoal">
                  <div className="font-bold text-charcoal mb-0.5">🧱 עזרי איינגר לתנוחה:</div>
                  {currentPose.propsGuide}
                </div>
              )}

            </div>
          )}

          {/* Player Navigation Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setGuidedStepIndex(prev => Math.max(0, prev - 1))}
              disabled={guidedStepIndex === 0}
              className="flex-1 py-3 rounded-2xl bg-white border border-cream-300 text-charcoal font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cream-100 transition-colors text-center"
            >
              <span>תנוחה קודמת</span>
            </button>

            {guidedStepIndex < activeSequence.poses.length - 1 ? (
              <button
                onClick={() => setGuidedStepIndex(prev => prev + 1)}
                className="flex-1 py-3 rounded-2xl bg-[#67442B] hover:bg-[#52331E] text-white font-bold text-sm shadow-md text-center transition-all"
              >
                <span>תנוחה הבאה</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveSequence(null)}
                className="flex-1 py-3 rounded-2xl bg-[#67442B] hover:bg-[#52331E] text-white font-bold text-sm shadow-md text-center transition-all"
              >
                <span>סיום תרגול</span>
              </button>
            )}
          </div>

        </div>
      )}

    </div>
  );
};
