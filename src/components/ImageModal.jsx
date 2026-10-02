import React, { useState, useEffect, useCallback } from 'react';
import { X, Lightbulb, ChevronLeft, ChevronRight, Layers, Sparkles, Maximize2, ZoomIn, Minimize2, Star, Compass, Activity, Eye, AlertTriangle, Package, BookOpen } from 'lucide-react';
import { PoseSvgIllustration } from './PoseSvgIllustration';
import { getPoseGallery } from '../utils/poseGallery';
import { useAuth } from '../context/AuthContext';

export const ImageModal = ({ pose, onClose, onOpenFullPage }) => {
  const { toggleFavoritePose, isFavorite } = useAuth();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [previewPropImage, setPreviewPropImage] = useState(null);

  // Get gallery items for this pose
  const galleryItems = pose ? getPoseGallery(pose) : [];
  const hasMultipleImages = galleryItems.length > 1;

  // Reset active index when pose changes
  useEffect(() => {
    setActiveIndex(0);
    setImgError(false);
    setIsFullScreen(false);
    setIsZoomedIn(false);
    setPreviewPropImage(null);
  }, [pose]);

  // Reset image error & zoom state when active index changes
  useEffect(() => {
    setImgError(false);
    setIsZoomedIn(false);
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    if (galleryItems.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  }, [galleryItems.length]);

  const handlePrev = useCallback(() => {
    if (galleryItems.length <= 1) return;
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, [galleryItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFullScreen) {
          setIsFullScreen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        // RTL natural navigation
        if (e.key === 'ArrowLeft') {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handleNext, handlePrev, isFullScreen]);

  if (!pose) return null;

  const currentItem = galleryItems[activeIndex] || galleryItems[0];

  return (
    <>
      {/* ===================== FULL SCREEN LIGHTBOX ===================== */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 z-[100] bg-charcoal-dark/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fadeIn select-none"
          onClick={() => setIsFullScreen(false)}
        >
          {/* Top Bar */}
          <div 
            className="flex items-center justify-between w-full max-w-5xl mx-auto z-20 pb-2 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className="text-white text-lg sm:text-xl font-bold flex items-center gap-2">
                <span>{pose.poseHebrewName}</span>
                {currentItem?.badge && (
                  <span className="text-xs bg-terracotta/80 text-white px-2 py-0.5 rounded-full font-normal">
                    {currentItem.badge}
                  </span>
                )}
              </h2>
              <div className="text-cream-300 text-xs font-sanskrit dir-ltr">
                {pose.sanskritScript} • {pose.englishName}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Variation Pills in Full Screen */}
              {hasMultipleImages && (
                <div className="hidden sm:flex items-center gap-1.5 bg-white/10 p-1 rounded-xl">
                  {galleryItems.map((item, idx) => (
                    <button
                      key={item.id || idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`px-3 py-1 rounded-lg text-xs transition-all ${
                        idx === activeIndex
                          ? 'bg-terracotta text-white font-bold shadow'
                          : 'text-cream-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.badge || item.title}
                    </button>
                  ))}
                </div>
              )}

              {/* Favorite Star Button */}
              <button
                onClick={() => toggleFavoritePose(pose.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg ${
                  isFavorite(pose.id)
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-400/40'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
                title={isFavorite(pose.id) ? 'הסר ממועדפים' : 'הוסף למועדפים'}
              >
                <Star className={`w-5 h-5 ${isFavorite(pose.id) ? 'fill-amber-400' : ''}`} />
              </button>

              {/* Close Fullscreen Button */}
              <button
                onClick={() => setIsFullScreen(false)}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors shadow-lg"
                title="סגור מסך מלא (Esc)"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Image Container */}
          <div 
            className="relative flex-1 flex items-center justify-center w-full max-w-5xl mx-auto my-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image with optional 1.5x zoom on click */}
            <div 
              className={`w-full h-full flex items-center justify-center cursor-pointer transition-transform duration-300 ${
                isZoomedIn ? 'scale-125 sm:scale-150' : 'scale-100'
              }`}
              onClick={() => setIsZoomedIn(!isZoomedIn)}
              title={isZoomedIn ? 'לחץ להקטנה' : 'לחץ להגדלה נוספת (Zoom In)'}
            >
              {!imgError && currentItem?.src ? (
                <img
                  key={currentItem.src}
                  src={currentItem.src}
                  alt={currentItem.title || pose.poseHebrewName}
                  onError={(e) => {
                    if (currentItem?.src && currentItem.src.endsWith('.jpg')) {
                      e.target.onerror = () => setImgError(true);
                      e.target.src = currentItem.src.replace('.jpg', '.png');
                    } else {
                      setImgError(true);
                    }
                  }}
                  className="max-h-[76vh] max-w-full object-contain drop-shadow-2xl rounded-lg"
                />
              ) : (
                <PoseSvgIllustration 
                  poseId={pose.id} 
                  customSrc={currentItem?.src}
                  className="max-h-[76vh] w-auto text-cream-100" 
                />
              )}
            </div>

            {/* Navigation Chevrons in Fullscreen */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-transform active:scale-95 z-20 border border-white/20"
                  aria-label="תמונה קודמת"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-transform active:scale-95 z-20 border border-white/20"
                  aria-label="תמונה הבאה"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Bar */}
          <div 
            className="w-full max-w-3xl mx-auto text-center z-20 pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-light shrink-0"></span>
              <span className="font-medium text-white">{currentItem?.description}</span>
            </div>

            <div className="flex items-center gap-3">
              {hasMultipleImages && (
                <span className="bg-white/15 px-2.5 py-1 rounded-full text-white font-medium">
                  {activeIndex + 1} מתוך {galleryItems.length}
                </span>
              )}
              <span className="text-cream-400 text-[11px] hidden sm:inline">
                לחיצה על התמונה לזום • מקש Esc לסגירה
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ===================== REGULAR MODAL ===================== */}
      <div 
        className="fixed inset-0 z-50 bg-charcoal/80 p-2 sm:p-4 flex flex-col justify-center items-center backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      >
        <div 
          className="relative max-w-lg w-full bg-white rounded-3xl p-4 sm:p-5 overflow-hidden shadow-2xl border border-cream-200 flex flex-col max-h-[94vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-2.5">
            <div>
              <h3 className="font-bold text-charcoal text-lg sm:text-xl">
                {pose.poseHebrewName}
              </h3>
              <div className="text-xs text-terracotta-dark font-sanskrit dir-ltr">
                {pose.sanskritScript} • {pose.englishName}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => toggleFavoritePose(pose.id)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  isFavorite(pose.id) 
                    ? 'bg-amber-50 text-amber-500 border border-amber-300 shadow-sm' 
                    : 'bg-cream-100 hover:bg-cream-200 text-charcoal-muted hover:text-amber-500'
                }`}
                title={isFavorite(pose.id) ? 'הסר ממועדפים' : 'הוסף לתנוחות המועדפות'}
                aria-label="מועדף"
              >
                <Star className={`w-4 h-4 ${isFavorite(pose.id) ? 'fill-amber-500' : ''}`} />
              </button>

              {onOpenFullPage && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenFullPage(pose.id);
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-[#FAF6F0] hover:bg-[#EAE0D3] border border-[#DECFC0] text-[#382417] flex items-center gap-1.5 text-xs font-bold transition-all shadow-2xs"
                  title="פתח כעמוד מלא ומדריך עזרים"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#8C6549]" />
                  <span className="hidden sm:inline">עמוד מלא</span>
                </button>
              )}

              <button 
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal flex items-center justify-center transition-colors shadow-sm"
                aria-label="סגור חלון"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Gallery Variation Switcher Tabs (if multiple images available) */}
          {hasMultipleImages && (
            <div className="flex items-center justify-center gap-1.5 mb-2.5 overflow-x-auto pb-1 custom-scrollbar">
              {galleryItems.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id || idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                      isActive 
                        ? 'bg-terracotta text-white shadow-md shadow-terracotta/20 font-bold scale-[1.02]'
                        : 'bg-cream-100 text-charcoal hover:bg-cream-200 hover:text-charcoal-dark'
                    }`}
                  >
                    <span>{item.badge || item.title}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Image Display Area - Optimized for Portrait Poses with Clean Feet Visibility */}
          <div 
            onClick={() => setIsFullScreen(true)}
            className="relative w-full h-[46vh] sm:h-[50vh] max-h-[460px] flex items-center justify-center bg-cream-50 rounded-2xl p-2 border border-cream-200 overflow-hidden group select-none cursor-pointer"
            title="לחץ לפתיחה במסך מלא נוח ומוגדל"
          >
            {/* Main Image with smooth transition */}
            {!imgError && currentItem?.src ? (
              <img
                key={currentItem.src}
                src={currentItem.src}
                alt={currentItem.title || pose.poseHebrewName}
                onError={(e) => {
                  if (currentItem?.src && currentItem.src.endsWith('.jpg')) {
                    e.target.onerror = () => setImgError(true);
                    e.target.src = currentItem.src.replace('.jpg', '.png');
                  } else {
                    setImgError(true);
                  }
                }}
                className="w-full h-full object-contain rounded-xl transition-all duration-300 group-hover:scale-[1.02]"
              />
            ) : (
              <PoseSvgIllustration 
                poseId={pose.id} 
                customSrc={currentItem?.src}
                className="w-full h-full" 
              />
            )}

            {/* Top-Right: Fullscreen / Expand Prompt Badge */}
            <div className="absolute top-2.5 right-2.5 bg-charcoal/70 hover:bg-charcoal/90 text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1.5 transition-all group-hover:bg-terracotta z-10">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>מסך מלא</span>
            </div>

            {/* Top-Left: Counter Badge */}
            {hasMultipleImages && (
              <div className="absolute top-2.5 left-2.5 bg-charcoal/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                <Layers className="w-3 h-3 text-terracotta-light" />
                <span>{activeIndex + 1} / {galleryItems.length}</span>
              </div>
            )}

            {/* Navigation Chevron Buttons (sides only, leaving bottom/feet completely clear) */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-charcoal/60 hover:bg-charcoal/85 text-white flex items-center justify-center backdrop-blur-sm shadow-lg transition-transform active:scale-95 z-10"
                  aria-label="תמונה קודמת"
                  title="תמונה קודמת"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-charcoal/60 hover:bg-charcoal/85 text-white flex items-center justify-center backdrop-blur-sm shadow-lg transition-transform active:scale-95 z-10"
                  aria-label="תמונה הבאה"
                  title="תמונה הבאה"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="bg-charcoal/80 text-white text-xs px-3 py-1.5 rounded-xl backdrop-blur-sm flex items-center gap-1.5 shadow-lg">
                <ZoomIn className="w-4 h-4 text-terracotta-light" />
                <span>לחץ לתמונה מוגדלת במסך מלא</span>
              </span>
            </div>
          </div>

          {/* Dynamic Image Description / Context Banner & Pagination Dots (Outside the image!) */}
          <div className="mt-2 px-3 py-2 bg-cream-100/80 border border-cream-200/80 rounded-xl text-xs text-charcoal flex items-center justify-between gap-2 text-right">
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0"></span>
              <span className="font-medium text-charcoal-dark truncate">{currentItem?.description}</span>
            </div>

            {/* Clean Pagination Dots (Safely located outside the image so feet are never blocked!) */}
            {hasMultipleImages && (
              <div className="flex items-center gap-1 shrink-0 bg-cream-200/60 px-2 py-1 rounded-full">
                {galleryItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex 
                        ? 'w-4 bg-terracotta' 
                        : 'w-2 bg-charcoal-muted/40 hover:bg-charcoal-muted'
                    }`}
                    aria-label={`עבור לתמונה ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Details & Practice Guide */}
          <div className="mt-2.5 space-y-2.5 overflow-y-auto custom-scrollbar text-right pr-1 flex-1">
            {pose.iyengarNote && (
              <div className="bg-sage-light/50 border border-sage/20 rounded-xl p-3 text-xs text-charcoal">
                <div className="font-bold text-sage-dark flex items-center gap-1 mb-1">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>דגש שהות ואלמנט מנחה (איינגר):</span>
                </div>
                {pose.iyengarNote}
              </div>
            )}

            {pose.benefits && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-charcoal">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>יתרונות פיזיולוגיים ובריאותיים:</span>
                </div>
                {pose.benefits}
              </div>
            )}

            {pose.anatomicalPointers && pose.anatomicalPointers.length > 0 && (
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 text-xs text-charcoal">
                <div className="font-bold text-sky-900 flex items-center gap-1.5 mb-1.5">
                  <Compass className="w-3.5 h-3.5 text-sky-700" />
                  <span>כיווני תנועה ופעולה אנטומית (Action Vectors):</span>
                </div>
                <ul className="space-y-1.5 pr-1">
                  {pose.anatomicalPointers.map((pointer, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs">
                      <span className="text-terracotta shrink-0 font-bold">←</span>
                      <span>
                        <strong className="text-charcoal font-bold">{pointer.area}:</strong> {pointer.direction}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {pose.muscleAnatomy && (
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-xs text-charcoal">
                <div className="font-bold text-indigo-950 flex items-center gap-1.5 mb-1.5">
                  <Activity className="w-3.5 h-3.5 text-indigo-700" />
                  <span>ביומכניקה ואנטומיה שרירית (Ray Long / Kaminoff):</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div>
                    <strong className="text-emerald-800 font-bold">שרירים פועלים (Agonists):</strong> {pose.muscleAnatomy.active}
                  </div>
                  <div>
                    <strong className="text-amber-800 font-bold">שרירים מתארכים (Antagonists):</strong> {pose.muscleAnatomy.stretched}
                  </div>
                </div>
              </div>
            )}

            {pose.drishti && (
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-xs text-charcoal">
                <div className="font-bold text-purple-900 flex items-center gap-1.5 mb-1">
                  <Eye className="w-3.5 h-3.5 text-purple-700" />
                  <span>נקודת מיקוד (Drishti):</span>
                </div>
                {pose.drishti}
              </div>
            )}

            {pose.cautions && (
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-charcoal">
                <div className="font-bold text-rose-900 flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                  <span>דגשי בטיחות והתאמות (Cautions):</span>
                </div>
                {pose.cautions}
              </div>
            )}

            {/* Light on Yoga Book Reference Card */}
            {pose.bookReference && (
              <div className="bg-[#FAF6F0] border border-[#8C6549]/35 rounded-2xl p-3.5 text-xs text-[#382417] shadow-xs">
                <div className="font-bold text-[#67442B] flex items-center justify-between gap-1.5 mb-2.5 border-b border-[#D5C2AF]/50 pb-2">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#8C6549]" />
                    <span className="font-bold text-sm text-[#382417]">מתוך "אור על היוגה" (Light on Yoga)</span>
                  </div>
                  <span className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EAE0D3] text-[#55331E] border border-[#DECFC0]">
                    ב.ק.ס איינגר
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs mb-2.5">
                  <div className="bg-white/90 p-2.5 rounded-xl border border-[#DECFC0]">
                    <div className="text-[10px] text-[#7A5B43] font-semibold">לוח / תמונה מקורית:</div>
                    <div className="font-bold text-[#382417] text-xs mt-0.5">{pose.bookReference.plate}</div>
                  </div>
                  <div className="bg-white/90 p-2.5 rounded-xl border border-[#DECFC0]">
                    <div className="text-[10px] text-[#7A5B43] font-semibold">מהדורה בעברית (מודן):</div>
                    <div className="font-bold text-[#382417] text-xs mt-0.5">{pose.bookReference.hebrewPage}</div>
                  </div>
                  <div className="bg-white/90 p-2.5 rounded-xl border border-[#DECFC0]">
                    <div className="text-[10px] text-[#7A5B43] font-semibold">מהדורה באנגלית (Harper):</div>
                    <div className="font-bold text-[#382417] text-xs mt-0.5">{pose.bookReference.englishPage}</div>
                  </div>
                </div>

                {pose.bookReference.note && (
                  <div className="text-[11.5px] leading-relaxed text-[#5F432F] italic border-r-2 border-[#8C6549] pr-2.5 mt-1 bg-white/50 p-2 rounded-lg">
                    "{pose.bookReference.note?.replace(/\.+$/, '')}"
                  </div>
                )}
              </div>
            )}

            {/* Iyengar Props Guide */}
            {(pose.propsList || pose.propsGuide) && (
              <div className="bg-[#FAF7F2] border border-[#8C6549]/35 rounded-2xl p-3.5 text-xs text-[#382417] shadow-xs space-y-3">
                <div className="font-bold text-[#67442B] flex flex-wrap items-center justify-between gap-2 border-b border-[#D5C2AF]/50 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-[#8C6549]" />
                    <span className="font-bold text-sm text-[#382417]">שימוש בעזרי איינגר (Props Guide)</span>
                  </div>
                  {pose.propsList && pose.propsList.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {pose.propsList.map((p, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF6F0] border border-[#8C6549]/40 text-[#603E27] font-semibold">
                          {p.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {pose.propsList && pose.propsList.length > 0 ? (
                  <div className="space-y-3">
                    {pose.propsList.map((item, idx) => (
                      <div key={idx} className="bg-white/95 rounded-xl p-3 border border-[#E3D6C8] shadow-xs flex flex-col sm:flex-row gap-3 items-start">
                        {item.image && (
                          <div 
                            onClick={() => setPreviewPropImage({ src: item.image, title: `${pose.poseHebrewName} - ${item.name}` })}
                            className="w-full sm:w-40 h-36 sm:h-28 rounded-lg overflow-hidden border border-[#D5C2AF] shrink-0 cursor-pointer relative group bg-[#FAF6F0]"
                            title="לחץ להגדלת התמונה"
                          >
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-[11px] font-bold gap-1">
                              <ZoomIn className="w-4 h-4" /> הגדל
                            </div>
                          </div>
                        )}
                        <div className="flex-1 space-y-1.5 w-full">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-sm text-[#3E2516]">{item.name}</span>
                            {item.level && (
                              <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-[#EAE0D3]/80 text-[#603D27] font-medium border border-[#DECFC0]/60">
                                {item.level}
                              </span>
                            )}
                          </div>
                          <div className="text-[11.5px] text-[#674831]">
                            <strong className="font-bold text-[#442714]">מטרה:</strong> {item.purpose}
                          </div>
                          <div className="text-xs text-[#382417] leading-relaxed">
                            <strong className="font-bold text-[#442714]">הנחיית שימוש:</strong> {item.instructions}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs leading-relaxed text-[#382417]">{pose.propsGuide}</p>
                )}
              </div>
            )}
          </div>

          <p className="text-center text-[11px] text-[#7A5B43] mt-2.5 shrink-0">
            לחץ על התמונה להגדלה מלאה • לחץ X או Esc לסגירה
          </p>
        </div>
      </div>

      {/* Prop Image Fullscreen Preview Overlay */}
      {previewPropImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setPreviewPropImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#FAF6F0] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#8C6549]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 bg-[#FAF6F0] border-b border-[#DECFC0] text-xs text-[#382417] font-bold">
              <span className="text-sm">{previewPropImage.title}</span>
              <button 
                onClick={() => setPreviewPropImage(null)} 
                className="p-1.5 rounded-lg bg-[#EAE0D3] hover:bg-[#DECFC0] text-[#382417] transition-colors"
                title="סגור"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-[#F2ECE4] flex items-center justify-center">
              <img 
                src={previewPropImage.src} 
                alt={previewPropImage.title} 
                className="w-full max-h-[75vh] object-contain rounded-xl shadow-xs" 
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
