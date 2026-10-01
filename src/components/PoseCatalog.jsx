import React, { useState, useEffect } from 'react';
import { Compass, ArrowRight, Filter, BookOpen, Lightbulb, Search, Layers, Star, AlertTriangle } from 'lucide-react';
import { POSE_DATABASE } from '../data/posesData';
import { PoseSvgIllustration } from './PoseSvgIllustration';
import { getPoseGallery } from '../utils/poseGallery';
import { useAuth } from '../context/AuthContext';

export const PoseCatalog = ({ onBackToHome, onOpenZoomModal, initialCategory = 'all' }) => {
  const { userProfile, toggleFavoritePose, isFavorite } = useAuth();
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const favoritesCount = userProfile.favorites?.length || 0;

  const categories = [
    { id: 'all', label: 'הכל' },
    { id: 'favorites', label: `⭐ מועדפים (${favoritesCount})` },
    { id: 'standing', label: 'עמידה' },
    { id: 'inversion', label: 'הפוכות' },
    { id: 'backbend', label: 'כפופות לאחור' },
    { id: 'forwardbend', label: 'כפופות לפנים' },
    { id: 'seated', label: 'ישיבה' }
  ];

  const filteredPoses = POSE_DATABASE.filter(pose => {
    let matchCat = false;
    if (activeCategory === 'all') {
      matchCat = true;
    } else if (activeCategory === 'favorites') {
      matchCat = isFavorite(pose.id);
    } else {
      matchCat = pose.category === activeCategory;
    }

    const matchSearch = 
      pose.poseHebrewName.includes(searchTerm) ||
      pose.sanskritScript.includes(searchTerm) ||
      pose.englishName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  // Check if pose cautions match user sensitivities
  const checkSensitivityWarning = (pose) => {
    if (!userProfile.sensitivities || userProfile.sensitivities.length === 0) return null;
    const cautionsText = pose.cautions || '';
    if (userProfile.sensitivities.includes('knees') && cautionsText.includes('ברכ')) {
      return 'שים לב לרגישות בברכיים';
    }
    if (userProfile.sensitivities.includes('lower_back') && cautionsText.includes('גב')) {
      return 'שים לב לרגישות בגב תחתון';
    }
    if (userProfile.sensitivities.includes('neck') && cautionsText.includes('צוואר')) {
      return 'שים לב לרגישות בצוואר';
    }
    if (userProfile.sensitivities.includes('high_bp') && (cautionsText.includes('לחץ דם') || pose.category === 'inversion')) {
      return 'שים לב ללחץ דם בהיפוך';
    }
    return null;
  };

  return (
    <div className="flex flex-col h-full bg-cream-50 animate-fadeIn overflow-hidden">
      
      {/* Top Header */}
      <header className="p-4 bg-white border-b border-cream-200 flex items-center justify-between shrink-0">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-charcoal hover:text-terracotta text-sm font-semibold transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>חזרה לראשי</span>
        </button>

        <h2 className="text-base font-bold text-charcoal flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-sage-dark" />
          <span>קטלוג תנוחות איינגר</span>
        </h2>
      </header>

      {/* Filter Tabs & Search */}
      <div className="p-4 border-b border-cream-200 bg-cream-100 flex flex-col gap-3 shrink-0">
        
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="חיפוש לפי שם בעברית, סנסקריט או אנגלית..."
            className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-cream-300 bg-white text-charcoal text-sm focus:outline-none focus:border-sage transition-colors text-right"
          />
          <Search className="w-4 h-4 text-charcoal-muted absolute right-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-sage-dark text-white shadow-sm'
                  : 'bg-white text-charcoal-light border border-cream-200 hover:bg-cream-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* Pose List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
        {filteredPoses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-cream-200 p-6">
            <div className="text-4xl mb-3">
              {activeCategory === 'favorites' ? '⭐' : '🔍'}
            </div>
            <h3 className="font-bold text-charcoal text-base mb-1">
              {activeCategory === 'favorites' ? 'עדיין לא סימנת תנוחות מועדפות' : 'לא נמצאו תנוחות מתאימות'}
            </h3>
            <p className="text-xs text-charcoal-muted max-w-xs mx-auto">
              {activeCategory === 'favorites' 
                ? 'לחץ על סמל הכוכב בכל כרטיס תנוחה כדי להוסיף אותה לרשימת המועדפים האישית שלך.'
                : 'נסה לחפש מילה אחרת או לבחור קטגוריה שונה.'}
            </p>
          </div>
        ) : (
          filteredPoses.map(pose => {
            const isFav = isFavorite(pose.id);
            const sensitivityWarning = checkSensitivityWarning(pose);

            return (
              <div 
                key={pose.id}
                className="bg-white border border-cream-300 rounded-3xl p-4 shadow-sm hover:shadow-card transition-shadow flex flex-col sm:flex-row gap-4 relative"
              >
                {/* Image Thumbnail with Click-to-Zoom */}
                <div 
                  onClick={() => onOpenZoomModal(pose)}
                  className="w-full sm:w-36 h-36 rounded-2xl bg-cream-50 border border-cream-200 p-2 shrink-0 flex items-center justify-center relative group cursor-pointer overflow-hidden hover:border-terracotta transition-all"
                >
                  <PoseSvgIllustration poseId={pose.id} className="w-full h-full" />
                  
                  {/* Badge indicating multiple images are available to browse */}
                  {getPoseGallery(pose).length > 1 && (
                    <div className="absolute top-2 right-2 bg-charcoal/75 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm z-10 group-hover:scale-105 transition-transform">
                      <Layers className="w-2.5 h-2.5 text-terracotta-light" />
                      <span>{getPoseGallery(pose).length} תמונות</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-charcoal/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1 rounded-2xl z-20">
                    <span>🔍 לחץ להגדלה</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-right flex flex-col justify-between">
                  <div>
                    {/* Header line with Name and Favorite Star */}
                    <div className="flex items-start justify-between gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavoritePose(pose.id);
                        }}
                        className={`p-2 rounded-xl border transition-all ${
                          isFav
                            ? 'bg-amber-50 border-amber-300 text-amber-500 shadow-sm'
                            : 'bg-cream-50 border-cream-200 text-charcoal-muted hover:text-amber-500 hover:border-amber-200'
                        }`}
                        title={isFav ? 'הסר ממועדפים' : 'הוסף למועדפים'}
                        aria-label="מועדף"
                      >
                        <Star className={`w-4 h-4 ${isFav ? 'fill-amber-500' : ''}`} />
                      </button>

                      <div className="flex-1">
                        <div className="text-[11px] font-sanskrit text-terracotta-dark dir-ltr mb-0.5">
                          {pose.sanskritScript}
                        </div>
                        <h3 className="text-xl font-bold text-charcoal">
                          {pose.poseHebrewName}
                        </h3>
                        <div className="text-xs text-charcoal-muted mb-2">
                          {pose.englishName}
                        </div>
                      </div>
                    </div>

                    {/* Sensitivity Warning (if user specified sensitivities) */}
                    {sensitivityWarning && (
                      <div className="mb-2 p-1.5 px-2.5 bg-amber-50 border border-amber-200 rounded-lg text-[11px] text-amber-900 flex items-center gap-1.5 inline-flex">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="font-semibold">{sensitivityWarning}</span>
                      </div>
                    )}

                    {/* Roots Breakdown */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {pose.breakdown.map((b, bIdx) => (
                        <span key={bIdx} className="px-2 py-1 rounded-lg bg-cream-100 border border-cream-200 text-[11px]">
                          <strong className="text-terracotta">{b.root}:</strong> {b.meaning}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Iyengar Note & Props Guide */}
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="bg-sage-light/50 border border-sage/20 rounded-xl p-2.5 text-xs text-charcoal">
                      <div className="font-bold text-sage-dark flex items-center gap-1 mb-0.5">
                        <Lightbulb className="w-3 h-3" />
                        <span>דגש איינגר:</span>
                      </div>
                      {pose.iyengarNote}
                    </div>

                    {pose.anatomicalPointers && pose.anatomicalPointers.length > 0 && (
                      <div className="bg-sky-50/80 border border-sky-200/80 rounded-xl p-2.5 text-xs text-charcoal">
                        <div className="font-bold text-sky-900 flex items-center gap-1 mb-1">
                          <span>🎯 כיווני תנועה ופעולה אנטומית:</span>
                        </div>
                        <ul className="space-y-1 pr-1 text-[11px]">
                          {pose.anatomicalPointers.map((p, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-1">
                              <span className="text-terracotta font-bold shrink-0">←</span>
                              <span>
                                <strong className="text-charcoal font-semibold">{p.area}:</strong> {p.direction}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
