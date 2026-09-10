import React, { useState } from 'react';
import { 
  Sliders, 
  Clock, 
  CalendarCheck, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  FileText
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ProcedureEstimatorProps {
  currentLang: Language;
  onOpenBooking: (procedure?: string) => void;
}

interface EstimatorOption {
  id: string;
  nameKey: string;
  category: string;
  timeEstimate: string;
  anesthesia: string;
  recoveryEstimate: string;
  stabilizationTime: string;
  preOpChecklist: string[];
  recommendedSuit: string;
  description: string;
}

export const ProcedureEstimator: React.FC<ProcedureEstimatorProps> = ({ 
  currentLang, 
  onOpenBooking 
}) => {
  const t = (key: string) => translations[key]?.[currentLang] || key;

  const options: EstimatorOption[] = [
    {
      id: 'abdo',
      nameKey: 'Abdominoplastie (Ventre plat & Diastasis)',
      category: 'Corps',
      timeEstimate: '2h30',
      anesthesia: 'Générale',
      recoveryEstimate: '15 – 21 jours',
      stabilizationTime: '6 mois',
      recommendedSuit: 'Gaine de contention abdominale (4 à 6 semaines)',
      description: 'Idéal pour corriger l’excédent cutané et resserrer les muscles abdominaux écartés après accouchement ou perte de poids.',
      preOpChecklist: [
        'Bilan sanguin préopératoire complet et consultation anesthésique obligatoire',
        'Arrêt absolu du tabac 4 semaines avant et après pour une cicatrisation optimale',
        'Arrêt des anticoagulants et aspirine 10 jours avant l’intervention',
        'Prévoir une aide à domicile pour les 3 à 5 premiers jours post-opératoires'
      ]
    },
    {
      id: 'bbl',
      nameKey: 'Lipofilling Fessier (BBL & Sablier)',
      category: 'Silhouette',
      timeEstimate: '3h00',
      anesthesia: 'Générale',
      recoveryEstimate: '10 – 14 jours',
      stabilizationTime: '3 à 4 mois',
      recommendedSuit: 'Panty de liposuccion avec ouverture fessière (6 semaines)',
      description: 'Prélèvement de graisse par lipoaspiration douce des flancs et du ventre, purification puis réinjection pour galber naturellement.',
      preOpChecklist: [
        'Poids stable depuis au moins 6 mois requis',
        'Acquisition d’un coussin de décharge spécial BBL pour éviter la pression directe assise',
        'Bilan sanguin et échographie sous-cutanée de repérage anatomique',
        'Hydratation renforcée et préparation cutanée antiseptique'
      ]
    },
    {
      id: 'lipo',
      nameKey: 'Liposuccion VASER / Haute Définition',
      category: 'Silhouette',
      timeEstimate: '2h00',
      anesthesia: 'Générale ou vigile',
      recoveryEstimate: '5 – 8 jours',
      stabilizationTime: '2 à 3 mois',
      recommendedSuit: 'Gaine compressive VASER adaptée à la zone (4 semaines)',
      description: 'Technologie d’émulsification par ultrasons pour sculpter les zones rebelles avec une rétraction cutanée supérieure.',
      preOpChecklist: [
        'Évaluation de l’élasticité cutanée lors de la consultation',
        'Planification de 5 séances de drainage lymphatique doux post-opératoire',
        'Arrêt des anti-inflammatoires et compléments fluidifiants',
        'Vêtements amples et confortables prévus pour la sortie de clinique'
      ]
    },
    {
      id: 'rhino',
      nameKey: 'Rhinoplastie Ultrasonique Structurelle',
      category: 'Visage',
      timeEstimate: '2h00',
      anesthesia: 'Générale',
      recoveryEstimate: '7 – 10 jours',
      stabilizationTime: '12 mois',
      recommendedSuit: 'Attelle thermoformée discrète (6 à 7 jours)',
      description: 'Sculpture micrométrique des os et cartilages du nez sans traumatisme excessif, respectant l’harmonie globale et la fonction respiratoire.',
      preOpChecklist: [
        'Photos médicales de face, profil et plongée pour étude morphologique',
        'Examen de la cloison nasale et scanner des sinus si antécédent ORL',
        'Glace et compresses stériles prêtes pour soulager l’œdème léger',
        'Éviter le port de lunettes lourdes directement sur l’arête pendant 1 mois'
      ]
    },
    {
      id: 'breast',
      nameKey: 'Augmentation Mammaire (Implants ou Hybride)',
      category: 'Poitrine',
      timeEstimate: '1h30',
      anesthesia: 'Générale',
      recoveryEstimate: '7 – 10 jours',
      stabilizationTime: '3 à 6 mois',
      recommendedSuit: 'Soutien-gorge médical de contention sans armature (6 semaines)',
      description: 'Restauration de plénitude et de galbe avec implants en gel cohésif dernière génération ou transfert de graisse autologue.',
      preOpChecklist: [
        'Mammographie et échographie mammaire préopératoire récentes indispensables',
        'Essayage précis des gabarits et volumes lors de la consultation avec notre chirurgien',
        'Prévoir l’arrêt des activités sportives intenses du haut du corps pendant 6 semaines',
        'Soins locaux quotidiens des micro-cicatrices dès le retrait du pansement'
      ]
    }
  ];

  const [selectedOpt, setSelectedOpt] = useState<EstimatorOption>(options[0]);

  return (
    <section 
      id="estimator"
      className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 bg-transparent text-[#43141C]"
    >
      <div className="max-w-[1540px] mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#43141C]/5 text-[#43141C] rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-[#D8C4BA]/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B263E]" />
            <span>{t('estimator_tag')}</span>
          </div>
          <h2 
            id="estimator-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#43141C] leading-tight tracking-tight"
          >
            {t('estimator_title')}
          </h2>
          <p className="mt-4 text-[#6E2432] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            {t('estimator_desc')}
          </p>
        </div>

        {/* Interactive Selector & Display Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Procedure Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-[#6E2432] font-bold mb-3">
              Sélectionnez votre intervention :
            </div>
            {options.map((opt) => {
              const isSelected = selectedOpt.id === opt.id;
              return (
                <button
                  key={opt.id}
                  id={`estimator-select-${opt.id}`}
                  onClick={() => setSelectedOpt(opt)}
                  className={`w-full p-5 rounded-2xl text-left transition-all duration-200 border flex items-center justify-between shadow-xs ${
                    isSelected
                      ? 'bg-white border-[#8B263E] shadow-xl ring-2 ring-[#8B263E]/20'
                      : 'bg-white/80 border-[#D8C4BA]/40 hover:border-[#8B263E] hover:bg-white'
                  }`}
                >
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#8B263E] font-bold">
                      {opt.category}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-[#43141C] mt-1">
                      {opt.nameKey}
                    </h3>
                  </div>
                  <div className={`w-6 h-6 rounded-full border grid place-items-center shrink-0 ${
                    isSelected ? 'border-[#8B263E] bg-[#8B263E] text-white' : 'border-[#D8C4BA]/60'
                  }`}>
                    {isSelected && <CheckCircle2 size={14} />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Computed Road Map Bento Card (7 cols) */}
          <div 
            id="estimator-result-card"
            className="lg:col-span-7 rounded-[2.5rem] border border-[#D8C4BA]/50 bg-white/95 p-8 sm:p-10 shadow-xl text-[#43141C]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D8C4BA]/40">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#8B263E] font-bold">
                  Protocole Estimatif Recommandé
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#43141C] mt-1 font-semibold">
                  {selectedOpt.nameKey}
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-[#43141C]/5 border border-[#D8C4BA]/50 text-[#43141C] text-xs font-mono font-bold">
                {selectedOpt.category}
              </span>
            </div>

            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-[#6E2432]">
              {selectedOpt.description}
            </p>

            {/* Metrics grid in mini bento tiles */}
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/40">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#6E2432] block">
                  Durée Bloc
                </span>
                <div className="font-serif text-lg font-bold text-[#43141C] mt-1">
                  {selectedOpt.timeEstimate}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/40">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#6E2432] block">
                  Anesthésie
                </span>
                <div className="font-serif text-lg font-bold text-[#43141C] mt-1">
                  {selectedOpt.anesthesia}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/40">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#6E2432] block">
                  Convalescence
                </span>
                <div className="font-serif text-lg font-bold text-[#8B263E] mt-1">
                  {selectedOpt.recoveryEstimate}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/40">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#6E2432] block">
                  Stabilisation
                </span>
                <div className="font-serif text-lg font-bold text-[#43141C] mt-1">
                  {selectedOpt.stabilizationTime}
                </div>
              </div>
            </div>

            {/* Garment note */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/40 text-xs text-[#6E2432] flex items-center gap-3">
              <ShieldCheck size={18} className="text-[#8B263E] shrink-0" />
              <div>
                <span className="font-bold text-[#43141C]">Contention post-opératoire :</span> {selectedOpt.recommendedSuit}
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-7">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#43141C] font-bold mb-3 flex items-center gap-2">
                <FileText size={14} className="text-[#8B263E]" />
                <span>Consignes & Préparation médicale recommandée :</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedOpt.preOpChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#6E2432]">
                    <span className="w-4 h-4 rounded-full bg-[#43141C]/10 text-[#43141C] grid place-items-center shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Booking Trigger */}
            <div className="mt-8 pt-6 border-t border-[#D8C4BA]/40 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[11px] text-[#6E2432] max-w-sm">
                Une estimation clinique définitive est établie lors de l’examen physique personnalisé.
              </p>
              <button
                id="estimator-confirm-book-btn"
                onClick={() => onOpenBooking(selectedOpt.nameKey)}
                className="btn-luxury-rendezvous px-7 py-3.5 text-xs font-bold tracking-wider uppercase rounded-2xl flex items-center gap-2 cursor-pointer"
              >
                <span>Demander une consultation</span>
                <ArrowRight size={13} className="text-[#F5DDD5]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
