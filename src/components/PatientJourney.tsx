import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  HeartHandshake, 
  ArrowRight,
  Check,
  MessageCircle
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { patientJourneySteps, clinicPillars } from '../data/content';

interface PatientJourneyProps {
  currentLang: Language;
  onOpenBooking: () => void;
  clinicPhone?: string;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ 
  currentLang, 
  onOpenBooking,
  clinicPhone = '21626723876'
}) => {
  const t = (key: string) => translations[key]?.[currentLang] || key;

  const quickWhatsAppMessage = encodeURIComponent(
    currentLang === 'ar'
      ? 'مرحباً Perla Body Sculpt، أود الاستفسار عن استشارة لجراحة تجميلية مع جراحكم المعتمد.'
      : 'Bonjour Perla Body Sculpt, je souhaite obtenir un premier avis pour une consultation esthétique avec votre chirurgien partenaire.'
  );

  const directWhatsAppUrl = `https://wa.me/${clinicPhone}?text=${quickWhatsAppMessage}`;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={24} className="text-[#C9A6A5]" />;
      case 'Sparkles':
        return <Sparkles size={24} className="text-[#C9A6A5]" />;
      case 'Award':
        return <Award size={24} className="text-[#C9A6A5]" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake size={24} className="text-[#C9A6A5]" />;
    }
  };

  return (
    <section 
      id="guide"
      className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 bg-transparent text-[#43141C]"
    >
      <div className="max-w-[1540px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#43141C]/5 text-[#43141C] rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-[#D8C4BA]/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A6A5]" />
            <span>{t('guide_tag')}</span>
          </div>
          <h2 
            id="guide-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#43141C] leading-tight tracking-tight"
          >
            {t('guide_title')}
          </h2>
          <p className="text-[#6E2432] text-sm sm:text-base leading-relaxed mt-4 font-normal">
            {t('guide_desc')}
          </p>
        </div>

        {/* 5-Step Linear Process in Bento Cards */}
        <div className="relative">
          {/* Subtle connecting guideline on desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-[#D8C4BA]/40 z-0" />

          <div 
            id="journey-steps-grid"
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10"
          >
            {patientJourneySteps.map((step, idx) => {
              const isHighlight = idx === 2; // Procedure step
              const title = currentLang === 'ar' ? step.titleAr : currentLang === 'fr' ? step.titleFr : step.titleEn;
              const desc = currentLang === 'ar' ? step.descAr : currentLang === 'fr' ? step.descFr : step.descEn;

              return (
                <div
                  key={step.step}
                  id={`journey-step-${step.step}`}
                  className={`bento-card group flex flex-col items-center text-center p-6 bg-white/95 border-[#D8C4BA]/50 shadow-md ${
                    isHighlight ? 'border-[#C9A6A5] ring-2 ring-[#C9A6A5]/20' : ''
                  }`}
                >
                  {/* Step badge */}
                  <div 
                    className={`w-14 h-14 rounded-2xl grid place-items-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg ${
                      isHighlight
                        ? 'bg-[#C9A6A5] text-white shadow-[#C9A6A5]/30'
                        : 'bg-[#43141C] text-[#FAF4F0] border border-[#D8C4BA]/50'
                    }`}
                  >
                    <span className="font-mono text-xl font-bold">{step.step}</span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#43141C] mb-2">
                    {title}
                  </h3>

                  <p className="text-xs leading-relaxed text-[#6E2432]">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Clinical Pillars Bento Card */}
        <div 
          id="clinical-pillars-grid"
          className="mt-14 rounded-[2.5rem] bg-white/95 text-[#43141C] p-8 sm:p-10 lg:p-12 shadow-xl border border-[#D8C4BA]/50"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D8C4BA]/30">
            {clinicPillars.map((pillar, idx) => {
              const title = currentLang === 'ar' ? pillar.titleAr : currentLang === 'fr' ? pillar.titleFr : pillar.titleEn;
              const desc = currentLang === 'ar' ? pillar.descAr : currentLang === 'fr' ? pillar.descFr : pillar.descEn;

              return (
                <div 
                  key={idx}
                  id={`pillar-card-${idx}`}
                  className={`${idx > 0 ? 'pt-6 md:pt-0 md:pl-6' : ''} flex flex-col items-start`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/40 grid place-items-center mb-4 shadow-sm">
                    {renderIcon(pillar.icon)}
                  </div>
                  <h4 className="font-serif text-base font-semibold text-[#43141C] mb-2">
                    {title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[#6E2432]">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div 
          id="guide-cta-banner"
          className="mt-12 rounded-[2.5rem] overflow-hidden relative min-h-[280px] flex items-center bg-[#2D0C13] border border-[#D8C4BA]/30 shadow-xl text-white"
        >
          <img
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1400&q=80"
            alt="Wellness Journey"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D0C13] via-[#2D0C13]/85 to-transparent" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-14 max-w-2xl">
            <div className="text-[10px] uppercase font-mono tracking-wider text-[#D8C4BA] font-bold mb-3">
              PRENEZ VOTRE TEMPS
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-semibold leading-tight">
              Prêt pour une transformation sereine et sur-mesure ?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#FAF4F0]/90 leading-relaxed">
              Une première consultation ne vous engage à rien : c’est un espace d’échange bienveillant pour poser toutes vos questions directement à nos chirurgiens spécialistes.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                id="guide-banner-book-btn"
                onClick={onOpenBooking}
                className="btn-luxury-rendezvous inline-flex items-center gap-3 px-8 py-4 text-xs font-bold tracking-wider uppercase rounded-2xl cursor-pointer"
              >
                <span>{t('hero_book_btn')}</span>
                <ArrowRight size={13} className="text-[#F5DDD5]" />
              </button>

              <a
                id="guide-banner-whatsapp-btn"
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] text-xs font-bold tracking-wider uppercase rounded-2xl transition duration-300 shadow-lg shadow-[#25D366]/10"
              >
                <MessageCircle size={16} />
                <span>WhatsApp (+216 26 723 876)</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
