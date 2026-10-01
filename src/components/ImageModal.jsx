import React, { useState, useEffect, useCallback } from 'react';
import { X, Lightbulb, ChevronLeft, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { PoseSvgIllustration } from './PoseSvgIllustration';
import { getPoseGallery } from '../utils/poseGallery';

export const ImageModal = ({ pose, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Get gallery items for this pose
  const galleryItems = pose ? getPoseGallery(pose) : [];
  const hasMultipleImages = galleryItems.length > 1;

  // Reset active index when pose changes
  useEffect(() => {
    setActiveIndex(0);
    setImgError(false);
  }, [pose]);

  // Reset image error state when active index changes
  useEffect(() => {
    setImgError(false);
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    if (galleryItems.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  }, [galleryItems.length]);

  const handlePrev = useCallback(() => {
    if (galleryItems.length <= 1) return;
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, [galleryItems.length]);

  // Keyboard navigation (Escape to close, Left/Right arrows to flip images)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        // In RTL layout: ArrowLeft goes forward, ArrowRight goes back
        if (e.key === 'ArrowLeft') {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  if (!pose) return null;

  const currentItem = galleryItems[activeIndex] || galleryItems[0];

  return (
    <div 
      className="fixed inset-0 z-50 bg-charcoal/80 p-3 sm:p-4 flex flex-col justify-center items-center backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-lg w-full bg-white rounded-3xl p-5 overflow-hidden shadow-2xl border border-cream-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="font-bold text-charcoal text-lg sm:text-xl">
              {pose.poseHebrewName}
            </h3>
            <div className="text-xs text-terracotta-dark font-sanskrit dir-ltr">
              {pose.sanskritScript} • {pose.englishName}
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal flex items-center justify-center transition-colors shadow-sm"
            aria-label="סגור חלון"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gallery Variation Switcher Tabs (if multiple images available) */}
        {hasMultipleImages && (
          <div className="flex items-center justify-center gap-1.5 mb-3 overflow-x-auto pb-1 custom-scrollbar">
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

        {/* Image Carousel / Display Area */}
        <div className="relative w-full aspect-square max-h-[44vh] flex items-center justify-center bg-cream-50 rounded-2xl p-3 border border-cream-200 overflow-hidden group select-none">
          {/* Main Image with smooth transition */}
          {!imgError && currentItem?.src ? (
            <img
              key={currentItem.src}
              src={currentItem.src}
              alt={currentItem.title || pose.poseHebrewName}
              onError={() => setImgError(true)}
              className="w-full h-full object-contain rounded-xl transition-all duration-300 animate-fadeIn"
            />
          ) : (
            <PoseSvgIllustration 
              poseId={pose.id} 
              customSrc={currentItem?.src}
              className="w-full h-full" 
            />
          )}

          {/* Navigation Chevron Buttons (on hover or visible on mobile) */}
          {hasMultipleImages && (
            <>
              {/* Prev Button (Right side in RTL visual flow) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-charcoal/60 hover:bg-charcoal/85 text-white flex items-center justify-center backdrop-blur-sm shadow-lg transition-transform active:scale-95 z-10"
                aria-label="תמונה קודמת"
                title="תמונה קודמת"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Next Button (Left side in RTL visual flow) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-charcoal/60 hover:bg-charcoal/85 text-white flex items-center justify-center backdrop-blur-sm shadow-lg transition-transform active:scale-95 z-10"
                aria-label="תמונה הבאה"
                title="תמונה הבאה"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Floating Counter Badge */}
              <div className="absolute top-3 left-3 bg-charcoal/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                <Layers className="w-3 h-3 text-terracotta-light" />
                <span>{activeIndex + 1} / {galleryItems.length}</span>
              </div>

              {/* Bottom Dot Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-charcoal/40 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
                {galleryItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex 
                        ? 'w-5 bg-white' 
                        : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`עבור לתמונה ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Dynamic Image Description / Context Banner */}
        {currentItem?.description && (
          <div className="mt-2.5 px-3 py-2 bg-cream-100/70 border border-cream-200/80 rounded-xl text-xs text-charcoal flex items-center justify-between gap-2 text-right">
            <div className="flex items-center gap-1.5 flex-1">
              <span className="text-terracotta text-sm">✦</span>
              <span className="font-medium text-charcoal-dark">{currentItem.description}</span>
            </div>
            {hasMultipleImages && (
              <span className="text-[10px] text-charcoal-muted shrink-0 hidden sm:inline">
                דפדף באמצעות החיצים ◄ ►
              </span>
            )}
          </div>
        )}

        {/* Details & Practice Guide */}
        <div className="mt-3 space-y-2.5 overflow-y-auto custom-scrollbar text-right pr-1">
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
              <div className="font-bold text-emerald-900 flex items-center gap-1 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>✨ יתרונות פיזיולוגיים ובריאותיים:</span>
              </div>
              {pose.benefits}
            </div>
          )}

          {pose.anatomicalPointers && pose.anatomicalPointers.length > 0 && (
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 text-xs text-charcoal">
              <div className="font-bold text-sky-900 flex items-center gap-1 mb-1.5">
                <span>🎯 כיווני תנועה ופעולה אנטומית (Action Vectors):</span>
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
              <div className="font-bold text-indigo-950 flex items-center gap-1 mb-1.5">
                <span>🦴 ביומכניקה ואנטומיה שרירית (Ray Long / Kaminoff):</span>
              </div>
              <div className="space-y-1 text-xs">
                <div>
                  <strong className="text-emerald-800 font-bold">💪 שרירים פועלים (Agonists):</strong> {pose.muscleAnatomy.active}
                </div>
                <div>
                  <strong className="text-amber-800 font-bold">🧘 שרירים מתארכים (Antagonists):</strong> {pose.muscleAnatomy.stretched}
                </div>
              </div>
            </div>
          )}

          {pose.drishti && (
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-xs text-charcoal">
              <div className="font-bold text-purple-900 flex items-center gap-1 mb-1">
                <span>👁️ נקודת מיקוד (Drishti):</span>
              </div>
              {pose.drishti}
            </div>
          )}

          {pose.cautions && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-charcoal">
              <div className="font-bold text-rose-900 flex items-center gap-1 mb-1">
                <span>⚠️ דגשי בטיחות והתאמות (Cautions):</span>
              </div>
              {pose.cautions}
            </div>
          )}

          {pose.propsGuide && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-charcoal">
              <div className="font-bold text-amber-900 flex items-center gap-1 mb-1">
                <span>🧱 שימוש בעזרי איינגר (Props Guide):</span>
              </div>
              {pose.propsGuide}
            </div>
          )}
        </div>

        <p className="text-center text-[11px] text-charcoal-muted mt-3 shrink-0">
          לחץ X, מקש Esc או מחוץ לחלון לסגירה • דפדוף במקשי החיצים ◄ ►
        </p>
      </div>
    </div>
  );
};
