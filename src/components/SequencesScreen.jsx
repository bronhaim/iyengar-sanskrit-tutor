import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Play, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Info, 
  Star, 
  Search, 
  Package, 
  Lock, 
  Shield, 
  Activity, 
  HeartPulse, 
  AlertCircle, 
  SlidersHorizontal,
  Check,
  Crown
} from 'lucide-react';
import { YOGA_SEQUENCES } from '../data/sequencesData';
import { POSE_DATABASE } from '../data/posesData';
import { PoseSvgIllustration } from './PoseSvgIllustration';
import { useAuth } from '../context/AuthContext';

const SENSITIVITY_CONFIG = [
  { id: 'digestion', label: 'בטן ועיכול', icon: Shield, tip: 'הקלה על כאבי בטן, דלקתיות ואי נוחות במערכת העיכול' },
  { id: 'knees', label: 'ברכיים', icon: Activity, tip: 'דגש על הפחתת כפיפה עמוקה ותמיכת בלוק' },
  { id: 'lower_back', label: 'גב תחתון', icon: Shield, tip: 'דגש על הארכת מותנית והרפיה עם בולסטר' },
  { id: 'neck', label: 'צוואר וכתפיים', icon: AlertCircle, tip: 'דגש על תמיכה במצח ובקודקוד' },
  { id: 'high_bp', label: 'לחץ דם', icon: HeartPulse, tip: 'דגש על שהיות מתונות והרגעת הדופק' }
];

export const SequencesScreen = ({ onBackToHome, onOpenZoomModal, onOpenPoseDetail, onOpenAuth, initialCategory = 'all' }) => {
  const { currentUser, userProfile, toggleFavoriteSequence, isFavoriteSequence, updateSensitivities } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeSequence, setActiveSequence] = useState(null);
  const [guidedStepIndex, setGuidedStepIndex] = useState(0);
  const [showSensitivitiesEditor, setShowSensitivitiesEditor] = useState(false);

  // Time of Day smart helper
  const timeRecommendation = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return {
        greeting: 'בוקר טוב',
        label: 'המלצת השעה: רצף מעורר לבוקר',
        recommendedId: 'morning-awakening'
      };
    } else if (hour >= 12 && hour < 18) {
      return {
        greeting: 'צהריים טובים',
        label: 'המלצת השעה: רצף משרדי לרענון הצוואר והגב',
        recommendedId: 'office-desk-chair-yoga'
      };
    } else {
      return {
        greeting: 'ערב רגוע',
        label: 'המלצת השעה: רצף הרפיה ושינה לערב',
        recommendedId: 'evening-winddown'
      };
    }
  }, []);

  const userSensitivities = userProfile?.sensitivities || [];
  const favSeqCount = userProfile?.favoriteSequences?.length || 0;

  // Calculate personal match for each sequence
  const isSequenceRecommendedForUser = (seq) => {
    if (seq.id === timeRecommendation.recommendedId) return true;
    if (userSensitivities.includes('digestion') && (seq.category === 'digestion' || seq.id === 'abdominal-pain-relief' || seq.id === 'post-meal-digestion')) return true;
    if (userSensitivities.includes('lower_back') && (seq.id === 'lower-back-therapy' || seq.id === 'evening-winddown' || seq.id === 'pregnancy-safe' || seq.id === 'office-desk-chair-yoga')) return true;
    if (userSensitivities.includes('neck') && (seq.id === 'headache-relief' || seq.id === 'stress-anxiety-relief' || seq.id === 'desk-worker-posture' || seq.id === 'office-desk-chair-yoga')) return true;
    if (userSensitivities.includes('high_bp') && (seq.id === 'evening-winddown' || seq.id === 'headache-relief' || seq.id === 'abdominal-pain-relief')) return true;
    if (userSensitivities.includes('knees') && (seq.id === 'post-meal-digestion' || seq.id === 'abdominal-pain-relief')) return true;
    return false;
  };

  const categoryFilters = [
    { id: 'all', label: 'הכל' },
    { id: 'personalized', label: 'מותאם אישית עבורך' },
    { id: 'favorites', label: favSeqCount > 0 ? `מועדפים (${favSeqCount})` : 'מועדפים' },
    { id: 'office', label: 'משרד וכיסא' },
    { id: 'digestion', label: 'בטן ועיכול' },
    { id: 'remedial', label: 'טיפולי ושיקומי' },
    { id: 'foundational', label: 'אור על היוגה' },
    { id: 'posture', label: 'יציבה וגב' },
    { id: 'morning', label: 'בוקר' },
    { id: 'evening', label: 'ערב' },
    { id: 'pregnancy', label: 'הריון' }
  ];

  const filteredSequences = useMemo(() => {
    return YOGA_SEQUENCES.filter(seq => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'personalized') return isSequenceRecommendedForUser(seq);
      if (selectedCategory === 'favorites') return isFavoriteSequence(seq.id);
      return seq.category === selectedCategory;
    });
  }, [selectedCategory, userSensitivities, timeRecommendation.recommendedId, userProfile?.favoriteSequences]);

  const handleToggleSensitivity = (id) => {
    if (!updateSensitivities) return;
    const current = userSensitivities;
    const updated = current.includes(id)
      ? current.filter(item => item !== id)
      : [...current, id];
    updateSensitivities(updated);
  };

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

  // 1. GATED ACCESS SCREEN FOR UNREGISTERED USERS
  if (!currentUser) {
    return (
      <div className="flex flex-col h-full bg-[#F5EFEB] animate-fadeIn overflow-hidden">
        {/* Header */}
        <header className="p-4 bg-[#FAF6F0] border-b border-[#D5C2AF] flex items-center justify-between shrink-0">
          <button
            onClick={onBackToHome}
            className="px-3.5 py-1.5 rounded-xl bg-[#FAF6F0] hover:bg-[#EFE5D8] border border-[#8C6549] text-[#3E2616] text-sm font-semibold transition-colors"
          >
            <span>חזרה לראשי</span>
          </button>

          <h2 className="text-base font-bold text-[#3E2616]">
            רצפי תרגול ביתיים
          </h2>
        </header>

        {/* Gated Access Presentation */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 flex items-center justify-center">
          <div className="max-w-xl w-full bg-[#FAF6F0] border border-[#DECFC0] rounded-3xl p-6 sm:p-10 shadow-lg text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#EAE0D3] border border-[#CBB8A1] flex items-center justify-center text-[#67442B] mx-auto shadow-xs">
              <Lock className="w-8 h-8 text-[#67442B]" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-[#E6D7C3] border border-[#CBB8A1] text-[#422716]">
                חברי קהילת איינגר • גישת תרגול אישית
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3E2616]">
                רצפי תרגול מותאמים אישית
              </h3>
              <p className="text-sm text-[#624530] font-light leading-relaxed max-w-md mx-auto">
                עמוד רצפי התרגול זמין למתרגלים רשומים בלבד. התחברו כדי לקבל תוכניות מובנות לפי מסורת איינגר המותאמות לרגישויות הגוף ולזמני היום שלך.
              </p>
            </div>

            {/* Value props */}
            <div className="grid sm:grid-cols-3 gap-3 text-right pt-2">
              <div className="bg-[#F5EEE6] border border-[#D5C2AF]/60 p-3.5 rounded-2xl flex flex-col gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#EAE0D3] flex items-center justify-center text-[#8C6549]">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#3E2616]">התאמה לרגישויות</h4>
                <p className="text-[11px] text-[#674831] leading-relaxed">
                  הנחיות בטיחות מותאמות אישית לברכיים, גב תחתון, צוואר ולחץ דם.
                </p>
              </div>

              <div className="bg-[#F5EEE6] border border-[#D5C2AF]/60 p-3.5 rounded-2xl flex flex-col gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#EAE0D3] flex items-center justify-center text-[#8C6549]">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#3E2616]">רצפים לפי זמנים</h4>
                <p className="text-[11px] text-[#674831] leading-relaxed">
                  רצפי בוקר מעוררים, ערב להרפיה, שיקום, כאבי ראש ועיכול.
                </p>
              </div>

              <div className="bg-[#F5EEE6] border border-[#D5C2AF]/60 p-3.5 rounded-2xl flex flex-col gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#EAE0D3] flex items-center justify-center text-[#8C6549]">
                  <Play className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#3E2616]">נגן תרגול מודרך</h4>
                <p className="text-[11px] text-[#674831] leading-relaxed">
                  הדרכה צעד-אחר-צעד, זמני שהות ודגשי עבודה מדויקים עם פרופס.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={onOpenAuth}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FAF6F0] hover:bg-[#EFE5D8] border-2 border-[#8C6549] text-[#3E2616] font-bold text-sm shadow-xs hover:shadow-md transition-all text-center"
              >
                התחברות או הרשמה מהירה בחינם
              </button>
              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#EAE0D3] hover:bg-[#D5C2AF] text-[#3E2616] font-semibold text-sm transition-colors text-center"
              >
                חזרה לראשי
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. REGISTERED USER VIEW (PERSONALIZED & READY FOR PRO MEMBERSHIP)
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
          className="px-3.5 py-1.5 rounded-xl bg-[#FAF6F0] hover:bg-[#EFE5D8] border border-[#8C6549] text-[#3E2616] text-sm font-semibold transition-colors"
        >
          <span>{activeSequence ? 'חזרה לרצפים' : 'חזרה לראשי'}</span>
        </button>

        <div className="flex items-center gap-2 text-right">
          <span className="text-xs bg-[#E6D7C3] border border-[#CBB8A1] text-[#422716] font-bold px-2 py-0.5 rounded-full hidden sm:inline-block">
            מתרגל רשום
          </span>
          <h2 className="text-base font-bold text-[#3E2616]">
            <span>{activeSequence ? activeSequence.title : 'רצפי תרגול מותאמים אישית'}</span>
          </h2>
        </div>
      </header>

      {/* Main Content Area */}
      {!activeSequence ? (
        /* Sequence Catalog View */
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
          
          {/* Personalized User Sanctuary Banner */}
          <div className="bg-[#FAF6F0] border border-[#D5C2AF] rounded-3xl p-5 text-right space-y-3 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-extrabold text-[#3E2616] text-lg">
                  {timeRecommendation.greeting}, {currentUser.displayName || currentUser.email.split('@')[0]}!
                </h3>
                <p className="text-xs text-[#674831] mt-0.5">
                  רצפי תרגול מובנים לפי מסורת איינגר • מותאמים אישית לפרופיל ולרגישויות הגוף שלך
                </p>
              </div>

              {/* Quick toggle for sensitivities editor */}
              <button
                onClick={() => setShowSensitivitiesEditor(!showSensitivitiesEditor)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE0D3] hover:bg-[#DECFC0] border border-[#CBB8A1] text-[#422716] text-xs font-semibold self-start sm:self-auto transition-all shadow-xs"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C6549]" />
                <span>{showSensitivitiesEditor ? 'סגור הגדרות רגישויות' : 'התאמת רגישויות הגוף'}</span>
              </button>
            </div>

            {/* Time of Day Context Box */}
            <div className="bg-[#F5EEE6] border border-[#D5C2AF]/60 rounded-2xl p-3 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#3E2616] font-medium">
                <Sparkles className="w-4 h-4 text-[#8C6549] shrink-0" />
                <span>{timeRecommendation.label}</span>
              </div>
              <button
                onClick={() => {
                  const targetSeq = YOGA_SEQUENCES.find(s => s.id === timeRecommendation.recommendedId);
                  if (targetSeq) handleStartGuided(targetSeq);
                }}
                className="px-3 py-1 rounded-xl bg-[#FAF6F0] hover:bg-[#EFE5D8] border border-[#8C6549] text-[#3E2616] font-bold text-[11px] shrink-0 transition-all shadow-xs"
              >
                התחל רצף מומלץ
              </button>
            </div>

            {/* Inline Sensitivities Management Area */}
            {showSensitivitiesEditor && (
              <div className="pt-2 border-t border-[#DECFC0] animate-fadeIn space-y-2">
                <div className="text-xs font-bold text-[#3E2616]">
                  בחר את הרגישויות שלך לקבלת התאמות ותרגול בטוח:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SENSITIVITY_CONFIG.map(sens => {
                    const isChecked = userSensitivities.includes(sens.id);
                    return (
                      <button
                        key={sens.id}
                        type="button"
                        onClick={() => handleToggleSensitivity(sens.id)}
                        className={`p-2.5 rounded-2xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                          isChecked 
                            ? 'bg-[#FAF6F0] border-2 border-[#8C6549] shadow-xs' 
                            : 'bg-white border-[#D5C2AF] hover:bg-[#FAF6F0]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <sens.icon className={`w-3.5 h-3.5 ${isChecked ? 'text-[#8C6549]' : 'text-charcoal-muted'}`} />
                          <span className="text-xs font-bold text-[#3E2616]">{sens.label}</span>
                        </div>
                        {isChecked && (
                          <div className="w-4 h-4 rounded-full bg-[#8C6549] text-white flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Active Sensitivities Summary Pills */}
            {!showSensitivitiesEditor && userSensitivities.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] text-[#674831] font-medium ml-1">רגישויות פעילות:</span>
                {userSensitivities.map(id => {
                  const cfg = SENSITIVITY_CONFIG.find(c => c.id === id);
                  if (!cfg) return null;
                  return (
                    <span 
                      key={id} 
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FAF6F0] border border-[#CBB8A1] text-[#3E2616]"
                    >
                      <cfg.icon className="w-2.5 h-2.5 text-[#8C6549]" />
                      <span>{cfg.label}</span>
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
            {categoryFilters.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#FAF6F0] text-[#3E2616] border-2 border-[#8C6549] shadow-xs font-bold'
                    : 'bg-[#FAF6F0] text-[#5A3E2B] border border-[#D5C2AF] hover:bg-white'
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
                <div className="flex justify-center mb-3">
                  {selectedCategory === 'favorites' ? (
                    <Star className="w-10 h-10 text-[#8C6549]" />
                  ) : (
                    <Search className="w-10 h-10 text-[#8C6549]" />
                  )}
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
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${seq.badgeColor}`}>
                          {seq.timing}
                        </span>

                        {isSequenceRecommendedForUser(seq) && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EAE0D3] border border-[#8C6549] text-[#3E2616] shadow-2xs">
                            <Sparkles className="w-3 h-3 text-[#8C6549]" />
                            <span>מומלץ עבורך</span>
                          </span>
                        )}

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
                    <span>תנוחות ברצף ({seq.poses.length}):</span>
                  </div>
                  <div className="space-y-1.5">
                    {seq.poses.map((step, idx) => {
                      const pose = getPoseById(step.poseId);
                      if (!pose) return null;
                      return (
                        <div 
                          key={idx}
                          onClick={() => onOpenPoseDetail ? onOpenPoseDetail(pose.id) : onOpenZoomModal(pose)}
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
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl bg-[#FAF6F0] hover:bg-[#EFE5D8] border-2 border-[#8C6549] text-[#3E2616] font-bold text-sm shadow-xs hover:shadow-md transition-all"
                  >
                    <span>התחל תרגול מודרך</span>
                  </button>
                </div>

              </div>
            );
          }))}
          </div>

          {/* Pro / Membership Future Tier Preview */}
          <div className="bg-[#FAF6F0] border border-[#DECFC0] rounded-3xl p-5 text-right space-y-2 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#EAE0D3] flex items-center justify-center text-[#8C6549]">
                <Crown className="w-3.5 h-3.5" />
              </div>
              <h4 className="font-bold text-sm text-[#3E2616]">
                תכונות מתקדמות למנויי תרגול (בקרוב)
              </h4>
            </div>
            <p className="text-xs text-[#674831] leading-relaxed">
              אנחנו עובדים על פיצ׳רים מתקדמים למנויים: הדרכה קולית מונחית עם טיימרים לשהייה, בניית רצפי תרגול מותאמים אישית, וסרטוני הדגמה של מורים מוסמכים.
            </p>
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
                <div className="font-bold text-sage-dark mb-0.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sage-dark" />
                  <span>דגש לרצף זה:</span>
                </div>
                {currentStep.tip}
              </div>

              {/* Props Tip */}
              {currentPose.propsGuide && (
                <div className="bg-cream-100 border border-cream-300 rounded-2xl p-3 text-xs text-charcoal">
                  <div className="font-bold text-charcoal mb-0.5 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#8C6549]" />
                    <span>עזרי איינגר לתנוחה:</span>
                  </div>
                  {currentPose.propsGuide}
                </div>
              )}

              {onOpenPoseDetail && (
                <button
                  onClick={() => onOpenPoseDetail(currentPose.id)}
                  className="w-full py-2 px-3 rounded-xl bg-white hover:bg-[#FAF6F0] border border-[#8C6549] text-[#382417] text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                >
                  <Package className="w-3.5 h-3.5 text-[#8C6549]" />
                  <span>צפה במדריך עזרים ופירוט מלא של התנוחה</span>
                </button>
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
                className="flex-1 py-3 rounded-2xl bg-[#FAF6F0] hover:bg-[#EFE5D8] border-2 border-[#8C6549] text-[#3E2616] font-bold text-sm shadow-xs hover:shadow-md text-center transition-all"
              >
                <span>תנוחה הבאה</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveSequence(null)}
                className="flex-1 py-3 rounded-2xl bg-[#FAF6F0] hover:bg-[#EFE5D8] border-2 border-[#8C6549] text-[#3E2616] font-bold text-sm shadow-xs hover:shadow-md text-center transition-all"
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
