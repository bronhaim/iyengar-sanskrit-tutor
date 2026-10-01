import React, { useState } from 'react';
import { ArrowRight, Clock, Sparkles, Play, CheckCircle2, ChevronRight, ChevronLeft, Info, Sun, Moon, Brain, Heart, Apple } from 'lucide-react';
import { YOGA_SEQUENCES } from '../data/sequencesData';
import { POSE_DATABASE } from '../data/posesData';
import { PoseSvgIllustration } from './PoseSvgIllustration';

export const SequencesScreen = ({ onBackToHome, onOpenZoomModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSequence, setActiveSequence] = useState(null);
  const [guidedStepIndex, setGuidedStepIndex] = useState(0);

  const categoryFilters = [
    { id: 'all', label: 'הכל' },
    { id: 'morning', label: '🌅 בוקר' },
    { id: 'evening', label: '🌙 ערב' },
    { id: 'remedial', label: '💆 כאבי ראש ומתח' },
    { id: 'digestion', label: '🍃 לאחר אוכל' },
    { id: 'pregnancy', label: '🤰 הריון' }
  ];

  const filteredSequences = YOGA_SEQUENCES.filter(seq => 
    selectedCategory === 'all' || seq.category === selectedCategory
  );

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
    <div className="flex flex-col h-full bg-cream-50 animate-fadeIn overflow-hidden">
      
      {/* Header */}
      <header className="p-4 bg-white border-b border-cream-200 flex items-center justify-between shrink-0">
        <button
          onClick={() => {
            if (activeSequence) {
              setActiveSequence(null);
            } else {
              onBackToHome();
            }
          }}
          className="flex items-center gap-1.5 text-charcoal hover:text-terracotta text-sm font-semibold transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>{activeSequence ? 'חזרה לרצפים' : 'חזרה לראשי'}</span>
        </button>

        <h2 className="text-base font-bold text-charcoal flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-terracotta" />
          <span>{activeSequence ? activeSequence.title : 'רצפי תרגול ביתיים'}</span>
        </h2>
      </header>

      {/* Main Content Area */}
      {!activeSequence ? (
        /* Sequence Catalog View */
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
          
          {/* Intro Banner */}
          <div className="bg-gradient-to-r from-terracotta/10 to-sage/10 border border-terracotta/20 rounded-2xl p-4 text-right">
            <h3 className="font-bold text-charcoal text-base mb-1">
              🧘 רצפי תרגול מותאמים לפי מסורת איינגר
            </h3>
            <p className="text-xs text-charcoal-light leading-relaxed">
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
                    ? 'bg-terracotta text-white shadow-sm'
                    : 'bg-white text-charcoal-light border border-cream-200 hover:bg-cream-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sequences List */}
          <div className="space-y-4">
            {filteredSequences.map(seq => (
              <div 
                key={seq.id}
                className={`bg-white border rounded-3xl p-5 shadow-sm hover:shadow-card transition-all text-right flex flex-col gap-3 ${seq.borderColor}`}
              >
                {/* Top Info Header */}
                <div className="flex items-start justify-between">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${seq.badgeColor}`}>
                    {seq.timing}
                  </span>

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
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-terracotta hover:bg-terracotta-dark text-white font-bold text-sm shadow-duo-terracotta hover:shadow-md transition-all"
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>התחל תרגול מודרך</span>
                  </button>
                </div>

              </div>
            ))}
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
                  className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-cream-300 px-2.5 py-1 rounded-xl text-xs font-semibold text-charcoal flex items-center gap-1 shadow-sm hover:bg-white transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-terracotta" />
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
              className="flex-1 py-3 rounded-2xl bg-white border border-cream-300 text-charcoal font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cream-100 transition-colors flex items-center justify-center gap-1"
            >
              <ChevronRight className="w-4 h-4" />
              <span>תנוחה קודמת</span>
            </button>

            {guidedStepIndex < activeSequence.poses.length - 1 ? (
              <button
                onClick={() => setGuidedStepIndex(prev => prev + 1)}
                className="flex-1 py-3 rounded-2xl bg-terracotta hover:bg-terracotta-dark text-white font-bold text-sm shadow-duo-terracotta flex items-center justify-center gap-1 transition-all"
              >
                <span>תנוחה הבאה</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setActiveSequence(null)}
                className="flex-1 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-1 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>סיום תרגול</span>
              </button>
            )}
          </div>

        </div>
      )}

    </div>
  );
};
