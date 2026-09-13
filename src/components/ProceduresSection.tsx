import React, { useState } from 'react';
import { 
  ArrowRight, 
  Clock, 
  Activity, 
  Bed, 
  CalendarCheck, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Info,
  X,
  Calendar,
  Layers,
  HeartPulse
} from 'lucide-react';
import { Language, InterventionCategory, Procedure } from '../types';
import { translations } from '../data/translations';
import { interventionCategoriesData, proceduresData } from '../data/content';

interface ProceduresSectionProps {
  currentLang: Language;
  onOpenBooking: (procedure?: string) => void;
}

export const ProceduresSection: React.FC<ProceduresSectionProps> = ({ 
  currentLang, 
  onOpenBooking 
}) => {
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<InterventionCategory | null>(null);
  const [activeTab, setActiveTab] = useState<'categories' | 'detailed'>('categories');
  const [expandedProcId, setExpandedProcId] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const t = (key: string) => translations[key]?.[currentLang] || key;

  const toggleExpand = (id: string) => {
    setExpandedProcId((prev) => (prev === id ? null : id));
  };

  const filteredProcedures = selectedFilter === 'all' 
    ? proceduresData 
    : proceduresData.filter(p => p.category === selectedFilter);

  return (
    <section 
      id="procedures"
      className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 bg-transparent text-[#43141C]"
    >
      <div className="max-w-[1540px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#43141C]/5 text-[#43141C] rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-[#D8C4BA]/60 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A6A5]" />
              <span>{t('procedures_tag')}</span>
            </div>
            <h2 
              id="procedures-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#43141C] leading-tight tracking-tight"
            >
              {t('procedures_title')}
            </h2>
            <p className="mt-3 text-[#6E2432] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Découvrez l'ensemble de nos pôles d'excellence chirurgicale et de médecine esthétique en Tunisie, assurés par nos chirurgiens.
            </p>
          </div>

          {/* View Mode Toggle: Exact Captures vs Detailed Cards */}
          <div className="flex items-center p-1.5 bg-white rounded-2xl border border-[#D8C4BA]/60 shadow-xs shrink-0">
            <button
              id="tab-categories-view"
              onClick={() => setActiveTab('categories')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'categories'
                  ? 'bg-[#43141C] text-[#FAF4F0] shadow-sm'
                  : 'text-[#6E2432] hover:text-[#43141C]'
              }`}
            >
              <Layers size={14} />
              <span>Par Catégories (7 Pôles)</span>
            </button>
            <button
              id="tab-detailed-view"
              onClick={() => setActiveTab('detailed')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'detailed'
                  ? 'bg-[#43141C] text-[#FAF4F0] shadow-sm'
                  : 'text-[#6E2432] hover:text-[#43141C]'
              }`}
            >
              <HeartPulse size={14} />
              <span>Fiches Détaillées</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CATEGORIES VIEW - EXACT REPLICA OF THE USER CAPTURES */}
        {activeTab === 'categories' && (
          <div 
            id="intervention-categories-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {interventionCategoriesData.map((cat) => (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                className="group rounded-3xl bg-white border border-[#D8C4BA]/50 shadow-lg shadow-[#43141C]/5 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#C9A6A5]/40 transition-all duration-300"
              >
                <div>
                  {/* Category Image - Click to view full poster */}
                  <div 
                    onClick={() => setSelectedCategoryModal(cat)}
                    className="relative h-74 overflow-hidden bg-[#2D0C13] cursor-pointer group/img"
                    title="Cliquer pour voir l'affiche complète"
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D0C13]/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-mono font-bold text-[#43141C] border border-[#D8C4BA]/60 shadow-xs">
                      {cat.badgeNumber}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md text-white/90 text-[10px] font-mono px-2.5 py-1 rounded-lg opacity-0 group-hover/img:opacity-100 transition-opacity">
                      Agrandir l'affiche
                    </div>

                    {cat.popular && (
                      <div className="absolute top-4 right-4 bg-[#C9A6A5] text-[#FAF4F0] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-xl shadow-md">
                        Signature
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#43141C] tracking-tight">
                      {cat.title}
                    </h3>
                    
                    {/* Pearl & Silhouette Accent Bar */}
                    <div className="flex items-center gap-1.5 my-3.5">
                      <div className="w-10 h-1 bg-[#C9A6A5] rounded-full" />
                      <div className="w-2.5 h-1 bg-[#D8C4BA] rounded-full" />
                    </div>

                    <p className="text-xs text-[#6E2432] leading-relaxed mb-4">
                      {cat.description}
                    </p>

                    {/* Bullet List of Interventions matching the capture */}
                    <div className="space-y-2 pt-2 border-t border-[#D8C4BA]/30">
                      {cat.interventions.map((item, idx) => (
                        <div 
                          key={idx}
                          onClick={() => onOpenBooking(`${cat.title} - ${item}`)}
                          className="flex items-start gap-2.5 text-xs text-[#43141C] font-medium hover:text-[#C9A6A5] cursor-pointer group/item transition-colors"
                        >
                          <span className="text-[#C9A6A5] font-bold text-sm leading-none">•</span>
                          <span className="group-hover/item:translate-x-0.5 transition-transform">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions: "+ d'info" and "Consultation gratuite" */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 mt-4">
                  <button
                    id={`btn-more-info-${cat.id}`}
                    onClick={() => setSelectedCategoryModal(cat)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#FAF4F0] hover:bg-[#F5ECE6] text-[#43141C] text-xs font-bold font-mono tracking-wider uppercase transition flex items-center justify-center gap-1.5 border border-[#D8C4BA]/50"
                  >
                    <Info size={13} className="text-[#C9A6A5]" />
                    <span>+ d'info</span>
                  </button>

                  <button
                    id={`btn-consult-free-${cat.id}`}
                    onClick={() => onOpenBooking(cat.title)}
                    className="btn-luxury-rendezvous flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Consultation</span>
                    <ArrowRight size={13} className="text-[#F5DDD5]" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* TAB 2: DETAILED MEDICAL SPECIFICATIONS VIEW */}
        {activeTab === 'detailed' && (
          <div>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {[
                { key: 'all', label: 'Toutes les interventions' },
                { key: 'face', label: 'Visage' },
                { key: 'breast', label: 'Seins' },
                { key: 'silhouette', label: 'Silhouette' },
                { key: 'obesity', label: 'Obésité' },
                { key: 'dental', label: 'Dentaire' },
                { key: 'intimate', label: 'Intime' },
                { key: 'hair', label: 'Cheveux' }
              ].map(f => (
                <button
                  key={f.key}
                  onClick={() => setSelectedFilter(f.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition ${
                    selectedFilter === f.key
                      ? 'bg-[#43141C] text-[#FAF4F0]'
                      : 'bg-white text-[#6E2432] border border-[#D8C4BA]/50 hover:bg-[#FAF4F0]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Detailed Grid */}
            <div 
              id="procedures-catalog-grid"
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filteredProcedures.map((proc) => {
                const isExpanded = expandedProcId === proc.id;
                return (
                  <div
                    key={proc.id}
                    id={`procedure-card-${proc.id}`}
                    className="bento-card group flex flex-col justify-between border-[#D8C4BA]/50 bg-white/95 shadow-md overflow-hidden hover:border-[#C9A6A5]/40 transition"
                  >
                    {/* Image header */}
                    <div className="relative h-48 overflow-hidden bg-[#2D0C13]">
                      <img
                        src={proc.image}
                        alt={proc.titleKey}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D0C13]/90 via-[#2D0C13]/30 to-transparent" />
                      
                      {proc.popular && (
                        <div className="absolute top-3 right-3 bg-[#C9A6A5] text-white text-[9px] font-bold uppercase font-mono tracking-wider px-3 py-1 rounded-xl shadow-md">
                          Signature Care
                        </div>
                      )}

                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <span className="text-[9px] uppercase tracking-wider font-mono text-[#E8D7D0] font-bold">
                          {proc.category.toUpperCase()}
                        </span>
                        <h3 className="font-serif text-lg font-semibold leading-tight mt-0.5">
                          {proc.titleKey}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs leading-relaxed text-[#6E2432]">
                          {proc.descKey}
                        </p>

                        {proc.indication && (
                          <div className="mt-3 p-2.5 rounded-xl bg-[#FAF4F0] border border-[#D8C4BA]/40 text-[11px] text-[#43141C]">
                            <span className="font-bold text-[#C9A6A5]">Indication : </span>
                            <span>{proc.indication}</span>
                          </div>
                        )}
                      </div>

                      {/* Expandable Specifications */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-[#D8C4BA]/40 space-y-2.5 text-xs text-[#6E2432] animate-in fade-in duration-200">
                          <div className="flex items-center justify-between">
                            <span className="text-[#6E2432] flex items-center gap-1.5 font-mono text-[11px]">
                              <Clock size={12} className="text-[#C9A6A5]" />
                              {t('spec_duration')}
                            </span>
                            <span className="font-semibold text-[#43141C]">{proc.duration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#6E2432] flex items-center gap-1.5 font-mono text-[11px]">
                              <Activity size={12} className="text-[#C9A6A5]" />
                              {t('spec_anesthesia')}
                            </span>
                            <span className="font-semibold text-[#43141C]">{proc.anesthesia}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#6E2432] flex items-center gap-1.5 font-mono text-[11px]">
                              <Bed size={12} className="text-[#C9A6A5]" />
                              {t('spec_stay')}
                            </span>
                            <span className="font-semibold text-[#43141C]">{proc.hospitalStay}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#6E2432] flex items-center gap-1.5 font-mono text-[11px]">
                              <CalendarCheck size={12} className="text-[#C9A6A5]" />
                              {t('spec_recovery')}
                            </span>
                            <span className="font-semibold text-[#43141C]">{proc.recovery}</span>
                          </div>
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="mt-6 pt-4 border-t border-[#D8C4BA]/40 flex items-center justify-between gap-2">
                        <button
                          id={`toggle-detail-${proc.id}`}
                          onClick={() => toggleExpand(proc.id)}
                          className="text-[11px] uppercase tracking-wider font-mono font-bold text-[#6E2432] hover:text-[#43141C] flex items-center gap-1 transition"
                        >
                          <span>{isExpanded ? t('close_details_btn') : t('details_btn')}</span>
                          {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                        </button>

                        <button
                          id={`book-proc-${proc.id}`}
                          onClick={() => onOpenBooking(proc.titleKey)}
                          className="btn-luxury-rendezvous w-9 h-9 rounded-xl grid place-items-center cursor-pointer"
                          aria-label={`Book consultation for ${proc.titleKey}`}
                          title={t('hero_book_btn')}
                        >
                          <ArrowRight size={13} className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MODAL: DETAIL FOR A SELECTED CATEGORY (+ D'INFO) */}
        {selectedCategoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
              id="category-detail-modal"
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D8C4BA] shadow-2xl p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setSelectedCategoryModal(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#FAF4F0] text-[#43141C] hover:bg-[#F5ECE6] flex items-center justify-center transition border border-[#D8C4BA]/50"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-[#FAF4F0] text-[#C9A6A5] border border-[#D8C4BA]/50">
                  PÔLE {selectedCategoryModal.badgeNumber}
                </span>
                <span className="text-xs text-[#6E2432] uppercase tracking-wider font-mono">
                  Clinique Dr. Taher Jamel · Tunis
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#43141C]">
                {selectedCategoryModal.title}
              </h3>
              
              <div className="flex items-center gap-1.5 my-3">
                <div className="w-12 h-1 bg-[#C9A6A5] rounded-full" />
                <div className="w-3 h-1 bg-[#D8C4BA] rounded-full" />
              </div>

              <p className="text-sm text-[#6E2432] leading-relaxed mb-6">
                {selectedCategoryModal.description}
              </p>

              {/* Official Poster Visual Preview */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-[#D8C4BA]/70 bg-[#FAF4F0] p-2 flex flex-col items-center shadow-inner">
                <img
                  src={selectedCategoryModal.image}
                  alt={`Affiche officielle ${selectedCategoryModal.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[440px] object-contain rounded-xl"
                />
                <div className="w-full text-center py-2 text-[11px] font-mono text-[#6E2432] tracking-wider uppercase font-semibold">
                  Affiche Officielle Perla Body Sculpt
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#43141C]">
                  Interventions incluses dans ce pôle :
                </h4>

                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedCategoryModal.interventions.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FAF4F0] border border-[#D8C4BA]/50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#C9A6A5] shrink-0" />
                        <span className="text-xs font-semibold text-[#43141C]">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FAF4F0] to-[#F5ECE6] border border-[#D8C4BA]/60 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#43141C] font-mono uppercase mb-2">
                  <Sparkles size={14} className="text-[#C9A6A5]" />
                  <span>Séjour Médical Tout Inclus</span>
                </div>
                <p className="text-xs text-[#6E2432] leading-relaxed">
                  Chaque intervention bénéficie d’un bilan pré-opératoire personnalisé, de consultations avec le chirurgien et l’anesthésiste, d'un séjour en clinique privée agréée, et d'un suivi infirmier et médical post-opératoire dédié.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#D8C4BA]/40">
                <button
                  onClick={() => setSelectedCategoryModal(null)}
                  className="px-5 py-3 rounded-xl bg-white border border-[#D8C4BA] text-[#43141C] text-xs font-semibold hover:bg-[#FAF4F0] transition"
                >
                  Fermer
                </button>

                <button
                  onClick={() => {
                    const title = selectedCategoryModal.title;
                    setSelectedCategoryModal(null);
                    onOpenBooking(title);
                  }}
                  className="btn-luxury-rendezvous px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 cursor-pointer"
                >
                  <Calendar size={14} />
                  <span>Demander une consultation pour ce pôle</span>
                  <ArrowRight size={14} className="text-[#F5DDD5]" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
