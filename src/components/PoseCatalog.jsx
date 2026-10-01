import React, { useState } from 'react';
import { Compass, ArrowRight, Filter, BookOpen, Lightbulb, Search } from 'lucide-react';
import { POSE_DATABASE } from '../data/posesData';
import { PoseSvgIllustration } from './PoseSvgIllustration';

export const PoseCatalog = ({ onBackToHome, onOpenZoomModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'הכל' },
    { id: 'standing', label: 'עמידה' },
    { id: 'inversion', label: 'הפוכות' },
    { id: 'backbend', label: 'כפופות לאחור' },
    { id: 'forwardbend', label: 'כפופות לפנים' },
    { id: 'seated', label: 'ישיבה' }
  ];

  const filteredPoses = POSE_DATABASE.filter(pose => {
    const matchCat = activeCategory === 'all' || pose.category === activeCategory;
    const matchSearch = 
      pose.poseHebrewName.includes(searchTerm) ||
      pose.sanskritScript.includes(searchTerm) ||
      pose.englishName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

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
        
        {/* Search */}
        <div className="relative max-w-md mx-auto w-full">
          <Search className="w-4 h-4 absolute right-3.5 top-3.5 text-charcoal-muted" />
          <input
            type="text"
            placeholder="חפש תנוחה (טדאסאנה, אדו מוקה, תנוחת העץ...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 bg-white border border-cream-300 rounded-2xl text-sm focus:outline-none focus:border-sage transition-colors shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
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
        {filteredPoses.map(pose => (
          <div 
            key={pose.id}
            className="bg-white border border-cream-300 rounded-3xl p-4 shadow-sm hover:shadow-card transition-shadow flex flex-col sm:flex-row gap-4"
          >
            {/* SVG Illustration Thumbnail */}
            <div className="w-full sm:w-36 h-36 rounded-2xl bg-cream-50 border border-cream-200 p-2 shrink-0 flex items-center justify-center">
              <PoseSvgIllustration poseId={pose.id} className="w-full h-full" />
            </div>

            {/* Info */}
            <div className="flex-1 text-right flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-sanskrit text-terracotta-dark dir-ltr mb-0.5">
                  {pose.sanskritScript}
                </div>
                <h3 className="text-xl font-bold text-charcoal">
                  {pose.poseHebrewName}
                </h3>
                <div className="text-xs text-charcoal-muted mb-3">
                  {pose.englishName}
                </div>

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
                          <span className="text-terracotta shrink-0 font-bold">←</span>
                          <span><strong>{p.area}:</strong> {p.direction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pose.drishti && (
                  <div className="bg-purple-50/80 border border-purple-200/80 rounded-xl p-2.5 text-xs text-charcoal">
                    <div className="font-bold text-purple-900 flex items-center gap-1 mb-0.5">
                      <span>👁️ נקודת מיקוד (Drishti):</span>
                    </div>
                    {pose.drishti}
                  </div>
                )}

                {pose.cautions && (
                  <div className="bg-rose-50/80 border border-rose-200/80 rounded-xl p-2.5 text-xs text-charcoal">
                    <div className="font-bold text-rose-900 flex items-center gap-1 mb-0.5">
                      <span>⚠️ דגשי בטיחות והתאמות:</span>
                    </div>
                    {pose.cautions}
                  </div>
                )}

                {pose.propsGuide && (
                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-2.5 text-xs text-charcoal">
                    <div className="font-bold text-amber-900 flex items-center gap-1 mb-0.5">
                      <span>🧱 עזרי איינגר לתנוחה:</span>
                    </div>
                    {pose.propsGuide}
                  </div>
                )}
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
