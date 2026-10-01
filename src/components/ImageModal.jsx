import React, { useState } from 'react';
import { X, Lightbulb } from 'lucide-react';
import { PoseSvgIllustration } from './PoseSvgIllustration';

export const ImageModal = ({ pose, onClose }) => {
  const [showPropsImage, setShowPropsImage] = useState(false);

  if (!pose) return null;

  const hasPropsPhoto = pose.id === 'paschimottanasana' || pose.hasPropsVariation;

  return (
    <div 
      className="fixed inset-0 z-50 bg-charcoal/80 p-4 flex flex-col justify-center items-center backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-lg w-full bg-white rounded-3xl p-5 overflow-hidden shadow-2xl border border-cream-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="font-bold text-charcoal text-lg">
              {pose.poseHebrewName}
            </h3>
            <div className="text-xs text-terracotta-dark font-sanskrit dir-ltr">
              {pose.sanskritScript} • {pose.englishName}
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toggle Props Photo if available */}
        {hasPropsPhoto && (
          <div className="flex justify-center gap-2 mb-3">
            <button
              onClick={() => setShowPropsImage(false)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                !showPropsImage 
                  ? 'bg-sage-dark text-white shadow-sm'
                  : 'bg-cream-100 text-charcoal hover:bg-cream-200'
              }`}
            >
              תרגול קלאסי (ללא עזרים)
            </button>
            <button
              onClick={() => setShowPropsImage(true)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                showPropsImage 
                  ? 'bg-terracotta text-white shadow-sm'
                  : 'bg-cream-100 text-charcoal hover:bg-cream-200'
              }`}
            >
              תרגול נתמך (עם בולסטר / עזרים) 🧱
            </button>
          </div>
        )}

        {/* Image Area */}
        <div className="w-full aspect-square max-h-[45vh] flex items-center justify-center bg-cream-50 rounded-2xl p-4 border border-cream-200 overflow-hidden relative">
          {showPropsImage ? (
            <img
              src={`/images/poses/${pose.id}-props.png`}
              alt={`${pose.poseHebrewName} עם עזרים`}
              className="w-full h-full object-contain rounded-xl"
            />
          ) : (
            <PoseSvgIllustration poseId={pose.id} className="w-full h-full" />
          )}
        </div>

        {/* Details & Props Guide */}
        <div className="mt-4 space-y-2.5 overflow-y-auto custom-scrollbar text-right">
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
          לחץ X או מחוץ לחלון לסגירה
        </p>
      </div>
    </div>
  );
};

