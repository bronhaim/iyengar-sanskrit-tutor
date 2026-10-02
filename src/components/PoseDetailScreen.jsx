import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Star, 
  BookOpen, 
  Package, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Compass, 
  Activity, 
  Eye, 
  AlertTriangle, 
  ShieldCheck, 
  Check, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { POSE_DATABASE } from '../data/posesData';
import { PoseSvgIllustration } from './PoseSvgIllustration';
import { getPoseGallery } from '../utils/poseGallery';
import { useAuth } from '../context/AuthContext';

export const PoseDetailScreen = ({ poseId, onBack, onSelectPose }) => {
  const { toggleFavoritePose, isFavorite, userProfile } = useAuth();
  
  // Find current pose object
  const poseIndex = POSE_DATABASE.findIndex(p => p.id === poseId);
  const pose = poseIndex !== -1 ? POSE_DATABASE[poseIndex] : POSE_DATABASE[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [zoomModalImage, setZoomModalImage] = useState(null);

  // Gallery items for this pose
  const galleryItems = pose ? getPoseGallery(pose) : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIndex(0);
    setImgError(false);
  }, [poseId]);

  const isFav = isFavorite(pose.id);

  // Prev / Next pose navigation
  const prevPose = poseIndex > 0 ? POSE_DATABASE[poseIndex - 1] : POSE_DATABASE[POSE_DATABASE.length - 1];
  const nextPose = poseIndex < POSE_DATABASE.length - 1 ? POSE_DATABASE[poseIndex + 1] : POSE_DATABASE[0];

  const categoryLabels = {
    standing: 'תנוחות עמידה',
    forwardbend: 'כפיפות לפנים',
    backbend: 'כפופות לאחור',
    inversion: 'תנוחות הפוכות',
    seated: 'תנוחות ישיבה',
    restorative: 'תנוחות רסטורטיביות'
  };

  // Sensitivity match
  const sensitivities = userProfile.sensitivities || [];
  const cautionsText = pose.cautions || '';
  const matchingSensitivities = [];
  if (sensitivities.includes('knees') && cautionsText.includes('ברכ')) {
    matchingSensitivities.push('רגישות בברכיים');
  }
  if (sensitivities.includes('lower_back') && cautionsText.includes('גב')) {
    matchingSensitivities.push('רגישות בגב תחתון');
  }
  if (sensitivities.includes('neck') && cautionsText.includes('צוואר')) {
    matchingSensitivities.push('רגישות בצוואר');
  }
  if (sensitivities.includes('high_bp') && cautionsText.includes('לחץ דם')) {
    matchingSensitivities.push('רגישות ללחץ דם');
  }

  const currentGalleryItem = galleryItems[activeImageIndex] || galleryItems[0];

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 pb-16 animate-fadeIn text-right">
      
      {/* 1. Top Navigation Bar */}
      <div className="bg-[#FAF6F0] border border-[#DECFC0] rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 shadow-xs flex items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#D5C2AF] text-[#442714] hover:bg-[#FAF6F0] active:scale-95 transition-all text-sm font-bold shadow-xs"
        >
          <ArrowRight className="w-4 h-4 text-[#8C6549]" />
          <span>חזרה לקטלוג</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Quick Counter */}
          <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#EAE0D3] text-[#55331E] border border-[#DECFC0]">
            תנוחה {poseIndex + 1} מתוך {POSE_DATABASE.length}
          </span>

          {/* Favorite Toggle */}
          <button
            onClick={() => toggleFavoritePose(pose.id)}
            className={`p-2 sm:px-3 sm:py-2 rounded-xl border flex items-center gap-1.5 transition-all text-xs font-bold ${
              isFav
                ? 'bg-amber-50 border-amber-300 text-amber-600 shadow-xs'
                : 'bg-white border-[#D5C2AF] text-[#674831] hover:text-amber-500'
            }`}
            title={isFav ? 'הסר ממועדפים' : 'הוסף למועדפים'}
          >
            <Star className={`w-4 h-4 ${isFav ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">{isFav ? 'שמור במועדפים' : 'שמור למועדפים'}</span>
          </button>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onSelectPose(prevPose.id)}
              className="p-2 rounded-xl bg-white border border-[#D5C2AF] text-[#55331E] hover:bg-[#FAF6F0] active:scale-95 transition-all"
              title={`לתנוחה הקודמת: ${prevPose.poseHebrewName}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectPose(nextPose.id)}
              className="p-2 rounded-xl bg-white border border-[#D5C2AF] text-[#55331E] hover:bg-[#FAF6F0] active:scale-95 transition-all"
              title={`לתנוחה הבאה: ${nextPose.poseHebrewName}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: Studio Media + Core Pose Info */}
      <div className="bg-[#FAF6F0] border border-[#DECFC0] rounded-3xl p-5 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Media Column (Image / Diagram Gallery) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative w-full aspect-4/3 sm:aspect-square rounded-2xl bg-white border border-[#DECFC0] p-3 shadow-xs flex items-center justify-center overflow-hidden group">
            {currentGalleryItem && currentGalleryItem.type === 'svg' ? (
              <PoseSvgIllustration poseId={pose.id} className="w-full h-full max-h-[360px]" />
            ) : (
              !imgError && currentGalleryItem?.url ? (
                <img
                  src={currentGalleryItem.url}
                  alt={pose.poseHebrewName}
                  className="w-full h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-102"
                  onClick={() => setZoomModalImage({ src: currentGalleryItem.url, title: `${pose.poseHebrewName} - ${currentGalleryItem.title || ''}` })}
                  onError={() => setImgError(true)}
                />
              ) : (
                <PoseSvgIllustration poseId={pose.id} className="w-full h-full max-h-[360px]" />
              )
            )}

            {/* Zoom In Button */}
            {currentGalleryItem?.url && !imgError && (
              <button
                onClick={() => setZoomModalImage({ src: currentGalleryItem.url, title: `${pose.poseHebrewName} - ${currentGalleryItem.title || ''}` })}
                className="absolute bottom-3 left-3 bg-[#382417]/80 hover:bg-[#382417] text-white p-2 rounded-xl shadow-md transition-all flex items-center gap-1.5 text-xs font-semibold backdrop-blur-xs"
                title="הגדל תמונה"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>הגדל</span>
              </button>
            )}

            {/* Gallery counter badge */}
            {galleryItems.length > 1 && (
              <div className="absolute top-3 right-3 bg-[#FAF6F0]/90 border border-[#D5C2AF] text-[#442714] text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                <Layers className="w-3 h-3 text-[#8C6549]" />
                <span>{activeImageIndex + 1} / {galleryItems.length}</span>
              </div>
            )}
          </div>

          {/* Gallery Switcher Thumbnails */}
          {galleryItems.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
              {galleryItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx);
                    setImgError(false);
                  }}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    activeImageIndex === idx
                      ? 'bg-[#FAF6F0] border-2 border-[#8C6549] text-[#382417] shadow-xs'
                      : 'bg-white border-[#D5C2AF] text-[#674831] hover:bg-[#FAF6F0]'
                  }`}
                >
                  <span>{item.title || `מבט ${idx + 1}`}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Pose Header & Core Information Column */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Category & Sensitivity Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#EAE0D3] border border-[#DECFC0] text-[#55331E] text-xs font-bold">
              {categoryLabels[pose.category] || 'תנוחת יוגה'}
            </span>
            
            {matchingSensitivities.map((s, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>שים לב: {s}</span>
              </span>
            ))}
          </div>

          {/* Titles */}
          <div>
            <div className="text-sm sm:text-base font-serif text-[#8C6549] font-medium tracking-wide dir-ltr mb-1">
              {pose.sanskritScript}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#382417] leading-tight">
              {pose.poseHebrewName}
            </h1>
            <div className="text-sm sm:text-base text-[#674831] font-medium mt-1">
              {pose.englishName}
            </div>
          </div>

          {/* Sanskrit Roots Breakdown Cards */}
          {pose.breakdown && pose.breakdown.length > 0 && (
            <div className="bg-white/80 border border-[#DECFC0] rounded-2xl p-3.5 sm:p-4">
              <div className="text-xs font-bold text-[#67442B] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#8C6549]" />
                <span>פירוק מילולי ומשמעות בסנסקריט:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {pose.breakdown.map((item, idx) => (
                  <div key={idx} className="px-3 py-1.5 rounded-xl bg-[#FAF6F0] border border-[#D5C2AF] text-xs">
                    <strong className="text-[#8C6549] font-bold">{item.root}:</strong>{' '}
                    <span className="text-[#382417] font-medium">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Iyengar Master Insight */}
          {pose.iyengarNote && (
            <div className="bg-[#F2E8DC]/80 border border-[#D5C2AF] rounded-2xl p-4 text-xs sm:text-sm text-[#382417] leading-relaxed">
              <div className="font-bold text-[#55331E] flex items-center gap-1.5 mb-1 text-sm">
                <span>דגש מרכזי של ב.ק.ס איינגר:</span>
              </div>
              <p className="font-serif italic text-[#442714]">"{pose.iyengarNote}"</p>
            </div>
          )}

          {/* Core Benefits */}
          {pose.benefits && (
            <div className="bg-white/80 border border-[#DECFC0] rounded-2xl p-4 text-xs sm:text-sm text-[#382417] leading-relaxed">
              <div className="font-bold text-[#67442B] flex items-center gap-1.5 mb-1 text-sm">
                <ShieldCheck className="w-4 h-4 text-[#8C6549]" />
                <span>תועלות והשפעה פיזיולוגית:</span>
              </div>
              <p className="text-[#442714]">{pose.benefits}</p>
            </div>
          )}

          {/* Drishti (Focus) */}
          {pose.drishti && (
            <div className="bg-white/80 border border-[#DECFC0] rounded-2xl p-3.5 flex items-center gap-2 text-xs sm:text-sm">
              <Eye className="w-4 h-4 text-[#8C6549] shrink-0" />
              <div>
                <strong className="text-[#55331E] font-bold">נקודת מיקוד ומבט (Drishti):</strong>{' '}
                <span className="text-[#382417]">{pose.drishti}</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* 3. PROPS GUIDE SECTION (The star feature requested by user) */}
      <div className="bg-[#FAF6F0] border border-[#DECFC0] rounded-3xl p-5 sm:p-8 shadow-xs flex flex-col gap-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DECFC0] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-[#382417]">
              <Package className="w-6 h-6 text-[#8C6549]" />
              <h2>מדריך עזרי איינגר לתרגול ביתי (Props Guide)</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#674831] mt-1">
              בשיטת איינגר העזרים מנגישים את התנוחה ומאפשרים דיוק, שהות ממושכת, פתיחה עמוקה והגנה על מפרקים.
            </p>
          </div>

          {/* Prop Badges List */}
          {pose.propsList && pose.propsList.length > 0 && (
            <div className="flex flex-wrap gap-1.5 shrink-0">
              {pose.propsList.map((p, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-white border border-[#D5C2AF] text-[#442714] text-xs font-bold shadow-2xs">
                  {p.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Detailed Props Cards */}
        {pose.propsList && pose.propsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {pose.propsList.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#D5C2AF] p-4 sm:p-5 shadow-xs flex flex-col gap-4 hover:border-[#8C6549] transition-colors"
              >
                {/* Prop Demonstration Image (Large & Zoomable) */}
                {item.image && (
                  <div 
                    onClick={() => setZoomModalImage({ src: item.image, title: `${pose.poseHebrewName} - ${item.name}` })}
                    className="w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-[#D5C2AF] bg-[#FAF6F0] cursor-pointer relative group shrink-0"
                    title="לחץ להגדלת תמונת ההדגמה"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-[1px]">
                      <ZoomIn className="w-4 h-4" />
                      <span>לחץ להגדלה מלאה</span>
                    </div>
                  </div>
                )}

                {/* Prop Info */}
                <div className="flex flex-col gap-2.5 flex-1">
                  <div className="flex items-center justify-between gap-2 border-b border-[#EAE0D3] pb-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#382417]">
                      {item.name}
                    </h3>
                    {item.level && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#EAE0D3] text-[#55331E] font-semibold border border-[#DECFC0]">
                        {item.level}
                      </span>
                    )}
                  </div>

                  <div className="text-xs sm:text-sm text-[#67442B] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E3D6C8]">
                    <strong className="text-[#382417] font-bold">מטרת האביזר:</strong>{' '}
                    <span>{item.purpose}</span>
                  </div>

                  <div className="text-xs sm:text-sm text-[#382417] leading-relaxed">
                    <strong className="text-[#382417] font-bold block mb-1">הוראות שימוש צעד-אחר-צעד:</strong>
                    <p className="whitespace-pre-line text-[#442714]">{item.instructions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-5 border border-[#D5C2AF] text-sm text-[#382417] leading-relaxed">
            {pose.propsGuide}
          </div>
        )}
      </div>

      {/* 4. LIGHT ON YOGA BOOK REFERENCE SECTION */}
      {pose.bookReference && (
        <div className="bg-[#FAF6F0] border border-[#DECFC0] rounded-3xl p-5 sm:p-8 shadow-xs flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3 border-b border-[#DECFC0] pb-3">
            <div className="flex items-center gap-2 text-lg sm:text-xl font-extrabold text-[#382417]">
              <BookOpen className="w-5 h-5 text-[#8C6549]" />
              <h2>מראי מקום בספר "אור על היוגה" (Light on Yoga)</h2>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EAE0D3] text-[#55331E] border border-[#DECFC0]">
              ב.ק.ס איינגר (B.K.S. Iyengar)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="bg-white rounded-2xl p-4 border border-[#DECFC0] shadow-xs">
              <div className="text-xs text-[#7A5B43] font-bold">מספר תמונה / לוח מקורי (Plate):</div>
              <div className="text-lg font-extrabold text-[#382417] mt-1">{pose.bookReference.plate}</div>
              <div className="text-[11px] text-[#674831] mt-0.5">אחיד בכל המהדורות בעולם</div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-[#DECFC0] shadow-xs">
              <div className="text-xs text-[#7A5B43] font-bold">מהדורה בעברית (מודן / שלום):</div>
              <div className="text-lg font-extrabold text-[#382417] mt-1">{pose.bookReference.hebrewPage}</div>
              <div className="text-[11px] text-[#674831] mt-0.5">תרגום עברי רשמי</div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-[#DECFC0] shadow-xs">
              <div className="text-xs text-[#7A5B43] font-bold">מהדורה באנגלית (HarperCollins):</div>
              <div className="text-lg font-extrabold text-[#382417] mt-1">{pose.bookReference.englishPage}</div>
              <div className="text-[11px] text-[#674831] mt-0.5">English Classic Edition</div>
            </div>
          </div>

          {pose.bookReference.note && (
            <div className="bg-white rounded-2xl p-4 border border-[#D5C2AF] text-sm text-[#442714] leading-relaxed italic border-r-4 border-r-[#8C6549]">
              "{pose.bookReference.note}"
            </div>
          )}
        </div>
      )}

      {/* 5. ANATOMY, ALIGNMENT & SAFETY SECTION */}
      <div className="bg-[#FAF6F0] border border-[#DECFC0] rounded-3xl p-5 sm:p-8 shadow-xs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Anatomical Action Vectors */}
        {pose.anatomicalPointers && pose.anatomicalPointers.length > 0 && (
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#D5C2AF] flex flex-col gap-3">
            <div className="font-bold text-sm sm:text-base text-[#382417] flex items-center gap-1.5 border-b border-[#EAE0D3] pb-2">
              <Compass className="w-4 h-4 text-[#8C6549]" />
              <span>כיווני תנועה ופעולה אנטומית</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {pose.anatomicalPointers.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#8C6549] font-bold text-sm shrink-0">←</span>
                  <span>
                    <strong className="text-[#382417] font-bold">{p.area}:</strong>{' '}
                    <span className="text-[#55331E]">{p.direction}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Biomechanics & Muscles */}
        {pose.muscleAnatomy && (
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#D5C2AF] flex flex-col gap-3">
            <div className="font-bold text-sm sm:text-base text-[#382417] flex items-center gap-1.5 border-b border-[#EAE0D3] pb-2">
              <Activity className="w-4 h-4 text-[#8C6549]" />
              <span>ביומכניקה שרירית (Ray Long)</span>
            </div>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E3D6C8]">
                <strong className="text-emerald-900 font-bold block mb-0.5">שרירים פועלים (Agonists):</strong>
                <span className="text-[#382417]">{pose.muscleAnatomy.active}</span>
              </div>
              <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E3D6C8]">
                <strong className="text-amber-900 font-bold block mb-0.5">שרירים מתארכים (Antagonists):</strong>
                <span className="text-[#382417]">{pose.muscleAnatomy.stretched}</span>
              </div>
            </div>
          </div>
        )}

        {/* Cautions & Safety */}
        {pose.cautions && (
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-rose-200 flex flex-col gap-3 md:col-span-2 lg:col-span-1">
            <div className="font-bold text-sm sm:text-base text-rose-900 flex items-center gap-1.5 border-b border-rose-100 pb-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>דגשי בטיחות והתאמות (Cautions)</span>
            </div>
            <p className="text-xs sm:text-sm text-[#442714] leading-relaxed">
              {pose.cautions}
            </p>
          </div>
        )}

      </div>

      {/* 6. Bottom Navigation Controls */}
      <div className="bg-[#FAF6F0] border border-[#DECFC0] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onSelectPose(prevPose.id)}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-[#D5C2AF] text-[#442714] hover:bg-[#FAF6F0] active:scale-95 transition-all text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-2xs"
        >
          <ChevronRight className="w-4 h-4" />
          <span>הקודמת: {prevPose.poseHebrewName}</span>
        </button>

        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#8C6549] text-white hover:bg-[#74482B] active:scale-95 transition-all text-xs sm:text-sm font-bold text-center shadow-xs"
        >
          חזרה לרשימת התנוחות
        </button>

        <button
          onClick={() => onSelectPose(nextPose.id)}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-[#D5C2AF] text-[#442714] hover:bg-[#FAF6F0] active:scale-95 transition-all text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-2xs"
        >
          <span>הבאה: {nextPose.poseHebrewName}</span>
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Zoom Modal Overlay for Fullscreen Images */}
      {zoomModalImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setZoomModalImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#FAF6F0] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#8C6549]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3.5 bg-[#FAF6F0] border-b border-[#DECFC0] text-xs text-[#382417] font-bold">
              <span className="text-sm sm:text-base">{zoomModalImage.title}</span>
              <button 
                onClick={() => setZoomModalImage(null)} 
                className="p-1.5 rounded-lg bg-[#EAE0D3] hover:bg-[#DECFC0] text-[#382417] transition-colors"
                title="סגור"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-[#F2ECE4] flex items-center justify-center">
              <img 
                src={zoomModalImage.src} 
                alt={zoomModalImage.title} 
                className="w-full max-h-[75vh] object-contain rounded-xl shadow-xs" 
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
