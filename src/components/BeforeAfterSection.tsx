import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Maximize2, 
  ArrowRight, 
  Clock, 
  UserCheck, 
  SlidersHorizontal,
  Info,
  X
} from 'lucide-react';
import { Language, ProcedureCategory, BeforeAfterItem } from '../types';
import { translations } from '../data/translations';
import { beforeAfterGallery } from '../data/content';

interface BeforeAfterSectionProps {
  currentLang: Language;
  onOpenBooking: (procedure?: string) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ 
  currentLang, 
  onOpenBooking 
}) => {
  const [activeFilter, setActiveFilter] = useState<ProcedureCategory>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedItem, setSelectedItem] = useState<BeforeAfterItem>(beforeAfterGallery[0]);
  const [zoomedImage, setZoomedImage] = useState<{ url: string; title: string } | null>(null);

  const t = (key: string) => translations[key]?.[currentLang] || key;

  const filters: { id: ProcedureCategory; label: string }[] = [
    { id: 'all', label: 'Tous les résultats' },
    { id: 'silhouette', label: 'Silhouette & Abdomen' },
    { id: 'face', label: 'Visage & Regard' },
    { id: 'breast', label: 'Poitrine & Seins' },
    { id: 'buttocks', label: 'Fessiers & Galbe' },
  ];

  const filteredItems = beforeAfterGallery.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter || (activeFilter === 'silhouette' && (item.category === 'silhouette' || item.category === 'body'))
  );

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const offsetX = clientX - rect.left;
    const newPos = Math.max(5, Math.min(95, (offsetX / rect.width) * 100));
    setSliderPosition(newPos);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, rect);
    }
  };

  return (
    <section 
      id="results"
      className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 bg-transparent text-[#43141C]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#8B263E]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#F4E8E2] blur-[140px] pointer-events-none" />

      <div className="max-w-[1540px] mx-auto relative z-10">
        
        {/* Header and Category Filters in Bento Style */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#43141C]/5 text-[#43141C] rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-[#D8C4BA]/60 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B263E]" />
              <span>{t('results_tag')}</span>
            </div>
            <h2 
              id="results-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#43141C] leading-tight tracking-tight"
            >
              {t('results_title')}
            </h2>
            <p className="text-[#6E2432] text-sm sm:text-base leading-relaxed mt-3 max-w-2xl font-normal">
              {t('results_desc')}
            </p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end w-full">
            {/* Bento Filter pills */}
            <div 
              id="results-filter-pills"
              className="flex flex-wrap gap-2 bg-white/95 p-1.5 rounded-2xl border border-[#D8C4BA]/50 shadow-xs"
            >
              {filters.map((f) => {
                const isCurrent = activeFilter === f.id;
                return (
                  <button
                    key={f.id}
                    id={`filter-btn-${f.id}`}
                    onClick={() => setActiveFilter(f.id)}
                    className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                      isCurrent
                        ? 'bg-[#43141C] text-[#FAF4F0] font-bold shadow-md shadow-[#43141C]/20'
                        : 'text-[#6E2432] hover:text-[#43141C] hover:bg-[#FAF4F0]'
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Interactive Comparison Bento Container */}
        <div 
          id="interactive-comparison-container"
          className="mb-14 rounded-[2.5rem] overflow-hidden border border-[#D8C4BA]/50 bg-white/95 backdrop-blur-xl text-[#43141C] shadow-xl"
        >
          <div className="grid lg:grid-cols-12 items-stretch">
            
            {/* Left: Interactive comparison canvas or Full Single Composite Image (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] select-none overflow-hidden bg-[#2D0C13] flex items-center justify-center">
              {selectedItem.fullCompositeImg ? (
                /* Mode 1: Photo unique complète (déjà Avant & Après ensemble) */
                <div className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] bg-[#22070D] flex items-center justify-center p-4 sm:p-6 group">
                  <img
                    src={selectedItem.fullCompositeImg}
                    alt={selectedItem.title}
                    className="max-h-[520px] w-auto max-w-full object-contain rounded-2xl shadow-2xl transition duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#2D0C13]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-[10px] font-mono uppercase tracking-wider font-bold border border-[#D8C4BA]/40 text-[#FAF4F0] flex items-center gap-1.5 shadow-md">
                    <Sparkles size={12} className="text-[#8B263E]" />
                    <span>Avant / Après Officiel</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setZoomedImage({ url: selectedItem.fullCompositeImg!, title: selectedItem.title })}
                    className="absolute top-4 right-4 bg-[#2D0C13]/85 hover:bg-[#43141C] text-white hover:text-[#FAF4F0] px-3.5 py-1.5 rounded-xl text-xs font-medium border border-[#D8C4BA]/40 transition flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <Maximize2 size={13} />
                    <span className="hidden sm:inline">Plein écran</span>
                  </button>
                </div>
              ) : (
                /* Mode 2: Comparateur interactif par Slider (Before & After séparées) */
                <div className="absolute inset-0 cursor-ew-resize">
                  {/* After image (base) */}
                  <img
                    src={selectedItem.afterImg}
                    alt="After transformation"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#2D0C13]/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-[10px] font-mono uppercase tracking-wider font-bold border border-[#D8C4BA]/40 text-[#FAF4F0]">
                    {t('after_label')}
                  </div>

                  {/* Before image (clipped overlay) */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={selectedItem.beforeImg}
                      alt="Before transformation"
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', minWidth: '100%' }}
                    />
                    <div className="absolute top-4 left-4 bg-[#2D0C13]/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-[10px] font-mono uppercase tracking-wider font-bold border border-[#D8C4BA]/40 text-white">
                      {t('before_label')}
                    </div>
                  </div>

                  {/* Draggable Divider Line & Knob in Silhouette Burgundy */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#8B263E] text-white grid place-items-center shadow-lg border-2 border-white slider-thumb-shadow">
                      <SlidersHorizontal size={14} className="rotate-90" />
                    </div>
                  </div>

                  {/* Mouse & touch interaction zone */}
                  <div
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    className="absolute inset-0 z-30"
                  />

                  {/* Hint badge at bottom */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#2D0C13]/85 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider text-[#FAF4F0] border border-[#D8C4BA]/40 pointer-events-none flex items-center gap-2">
                    <SlidersHorizontal size={12} className="text-[#8B263E]" />
                    <span>{t('results_interactive_hint')}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Procedure Insight & Clinical Specifics (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-[#D8C4BA]/40 text-[#43141C]">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#43141C] font-bold px-2.5 py-1 rounded-full bg-[#43141C]/5 border border-[#D8C4BA]/50">
                    {selectedItem.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#6E2432] font-mono">
                    <Clock size={13} className="text-[#8B263E]" />
                    <span>{selectedItem.timeframe}</span>
                  </div>
                </div>

                <h3 
                  id="selected-procedure-title"
                  className="font-serif text-2xl sm:text-3xl text-[#43141C] mt-4 font-semibold"
                >
                  {selectedItem.title}
                </h3>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#6E2432]">
                  {selectedItem.description}
                </p>

                <div className="mt-6 space-y-2.5 p-5 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#6E2432]">Intervention :</span>
                    <span className="font-semibold text-[#43141C]">{selectedItem.procedure}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#6E2432]">Chirurgien :</span>
                    <span className="font-semibold text-[#43141C]">Dr. Taher Jamel</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#6E2432]">Suivi clinique :</span>
                    <span className="font-semibold text-[#43141C]">Inclus avec séjour et soins infirmiers</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D8C4BA]/40">
                <button
                  id="compare-book-btn"
                  onClick={() => onOpenBooking(selectedItem.procedure)}
                  className="btn-luxury-rendezvous w-full py-4 px-6 text-xs font-bold tracking-wider uppercase rounded-2xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t('hero_book_btn')}</span>
                  <ArrowRight size={13} className="text-[#F5DDD5]" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bento Gallery Grid of Additional Case Transformations */}
        <div 
          id="before-after-case-grid"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredItems.map((item) => {
            const isCurrentSelected = selectedItem.id === item.id;
            return (
              <article
                key={item.id}
                id={`case-card-${item.id}`}
                onClick={() => {
                  setSelectedItem(item);
                  setSliderPosition(50);
                  const el = document.getElementById('interactive-comparison-container');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`group cursor-pointer bento-card bg-white transition-all duration-300 ${
                  isCurrentSelected 
                    ? 'border-[#8B263E] ring-2 ring-[#8B263E]/30 shadow-xl' 
                    : 'border-[#D8C4BA]/50 hover:border-[#8B263E]'
                }`}
              >
                {/* Images preview: either Single Composite Image or Side-by-side */}
                {item.fullCompositeImg ? (
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-[#2D0C13] flex items-center justify-center p-3">
                    <img
                      src={item.fullCompositeImg}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl shadow-lg"
                    />
                    <div className="absolute top-3 left-3 bg-[#2D0C13]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-wider font-bold text-[#FAF4F0] border border-[#D8C4BA]/40 flex items-center gap-1.5 shadow-sm">
                      <Sparkles size={10} className="text-[#8B263E]" />
                      <span>Avant / Après</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomedImage({ url: item.fullCompositeImg!, title: item.title });
                      }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#2D0C13]/80 hover:bg-[#8B263E] text-white flex items-center justify-center border border-[#D8C4BA]/40 transition opacity-80 hover:opacity-100 shadow-md"
                      title="Agrandir l'image"
                    >
                      <Maximize2 size={13} />
                    </button>
                  </div>
                ) : (
                  <div className="relative h-72 sm:h-80 overflow-hidden grid grid-cols-2">
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={item.beforeImg}
                        alt={`${item.title} - Before`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#2D0C13]/80 backdrop-blur-sm px-2 py-1 rounded text-[8px] font-mono uppercase tracking-wider font-bold text-white">
                        {t('before_label')}
                      </div>
                    </div>
                    <div className="relative h-full overflow-hidden border-l border-[#D8C4BA]/50">
                      <img
                        src={item.afterImg}
                        alt={`${item.title} - After`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-[#43141C] text-[#FAF4F0] px-2 py-1 rounded text-[8px] font-mono uppercase tracking-wider font-bold">
                        {t('after_label')}
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#2D0C13]/80 to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8B263E] font-bold">
                    {item.badge}
                  </div>
                  <h4 className="font-serif text-lg text-[#43141C] mt-1.5 font-semibold group-hover:text-[#8B263E] transition">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#6E2432] line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#D8C4BA]/30 flex items-center justify-between text-xs text-[#6E2432]">
                    <span className="font-mono text-[11px]">{item.timeframe}</span>
                    <span className="text-[#43141C] font-semibold group-hover:translate-x-0.5 transition inline-flex items-center gap-1">
                      {t('details_btn')}
                      <ArrowRight size={11} className="text-[#8B263E]" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Ethical Medical Disclaimer */}
        <div 
          id="results-medical-disclaimer"
          className="mt-10 p-5 rounded-2xl bg-white border border-[#D8C4BA]/50 flex items-start gap-3.5 text-xs text-[#6E2432] shadow-xs"
        >
          <Info size={16} className="text-[#8B263E] shrink-0 mt-0.5" />
          <p>{t('results_disclaimer')}</p>
        </div>

        {/* Fullscreen Lightbox Modal for High-Res Zoom */}
        {zoomedImage && (
          <div 
            id="photo-zoom-modal"
            className="fixed inset-0 z-50 bg-[#2D0C13]/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={() => setZoomedImage(null)}
          >
            <div className="w-full max-w-5xl flex items-center justify-between pb-4 border-b border-[#D8C4BA]/30 text-white">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAF4F0] font-bold px-2.5 py-1 rounded bg-[#8B263E] border border-[#8B263E]">
                  Vue Haute Définition
                </span>
                <h3 className="font-serif text-lg text-white font-medium">{zoomedImage.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                className="w-10 h-10 rounded-full bg-[#43141C] border border-[#D8C4BA]/40 hover:bg-[#8B263E] text-white flex items-center justify-center transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div 
              className="mt-6 max-h-[82vh] max-w-full flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomedImage.url}
                alt={zoomedImage.title}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-[#D8C4BA]/40"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
