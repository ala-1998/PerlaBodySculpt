import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  UserCheck, 
  Star, 
  Calendar,
  Lock,
  Activity,
  MapPin,
  CheckCircle2,
  HeartHandshake,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const t = (key: string) => translations[key]?.[currentLang] || key;

  return (
    <section 
      id="home"
      className="relative min-h-[calc(100vh-68px)] flex items-center overflow-hidden bg-transparent text-[#43141C] py-10 lg:py-14"
    >
      <style>{`
        .water-bubble {
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(253, 235, 242, 0.4) 40%,
            rgba(226, 146, 179, 0.2) 80%,
            rgba(200, 107, 145, 0.35) 100%
          );
          box-shadow:
            inset 2px 2px 5px rgba(255, 255, 255, 0.9),
            inset -2px -2px 6px rgba(180, 85, 125, 0.25),
            0 4px 10px rgba(67, 20, 28, 0.08);
          backdrop-filter: blur(2px);
        }
      `}</style>

      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full bg-[#F4E8E2]/60 blur-[120px]" />
      </div>

      <div className="relative z-10 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1540px] mx-auto">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Bento Cell 1: Large Main Command Card */}
          <div 
            id="hero-bento-main-card"
            className="lg:col-span-2 lg:row-span-2 bento-card p-8 sm:p-10 flex flex-col justify-between relative group border-[#D8C4BA]/50 bg-white/95 shadow-lg shadow-[#43141C]/5"
          >
            <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#FAF4F0] to-[#F5ECE6] opacity-70 blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#43141C]/5 text-[#43141C] rounded-full text-xs font-bold tracking-wider uppercase border border-[#D8C4BA]/60 mb-6 font-mono">
                <Sparkles size={13} className="text-[#8B263E]" />
                <span>{t('hero_eyebrow')}</span>
              </div>

              {/* Main Title */}
              <h1 
                id="hero-main-title"
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#43141C] leading-[1.12] tracking-tight mb-5"
              >
                {t('hero_title_1')}{' '}
                <span className="text-[#8B263E] italic font-normal underline decoration-[#E8D7D0] decoration-wavy decoration-1 underline-offset-8">
                  {t('hero_title_highlight')}
                </span>
              </h1>

              {/* Mission Presentation Card with Real Image Pearl */}
              {/* Mission Presentation Card with Centered Pearl */}
<div 
  id="hero-instagram-presentation-box"
  className="relative my-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDFC] via-[#FAF4F0] to-[#F7EEE8] border border-[#D8C4BA]/50 shadow-sm flex flex-col items-start"
>
  {/* Pearl Image - Centered directly above NOTRE MISSION */}
  <div className="w-full flex justify-center mb-3">
    <img 
      src="/images/pearl.png" 
      alt="Perla Pearl" 
      className="w-40 h-40 sm:w-24 sm:h-24 object-contain filter drop-shadow-[0_8px_16px_rgba(67,20,28,0.12)]"
    />
  </div>

  {/* Section Header */}
  <div className="w-full flex items-center justify-center gap-2 mb-4">
    <span className="text-[#8B263E] text-xs">✦</span>
    <span className="font-serif text-xs sm:text-sm font-bold tracking-[0.22em] text-[#43141C] uppercase font-mono">
      NOTRE MISSION
    </span>
  </div>

  {/* Mission Text */}
  <p className="font-serif text-base sm:text-lg text-[#43141C] leading-snug font-medium mb-6 text-left w-full">
    Transformer votre expérience esthétique en un parcours serein, sécurisé et mémorable.
  </p>

  {/* Divider Line */}
  <div className="w-full h-[1px] bg-[#D8C4BA]/40 mb-5" />

  {/* Bottom Info */}
  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
      <span className="font-serif text-xs tracking-[0.18em] text-[#8B263E] uppercase font-semibold block mb-0.5">
        PERLA BODY SCULPT
      </span>
      <div className="font-serif text-sm sm:text-base font-bold text-[#43141C] italic">
        « La perle de votre corps de rêve »
      </div>
    </div>

    {/* Badges / Values */}
    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold text-[#6E2432] font-mono uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-[#8B263E]" />
      <span>EXCELLENCE</span>
      <span className="text-[#8B263E]">•</span>
      <span>CONFIANCE</span>
      <span className="text-[#8B263E]">•</span>
      <span>HARMONIE</span>
    </div>
  </div>
</div>

              {/* Interactive CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="hero-primary-book-btn"
                  onClick={onOpenBooking}
                  className="btn-luxury-rendezvous inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.14em] uppercase rounded-2xl cursor-pointer"
                >
                  <span>{t('hero_book_btn')}</span>
                  <ArrowRight size={15} className="text-[#2D0C13]" />
                </button>

                <a
                  id="hero-secondary-explore-btn"
                  href="#procedures"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white border border-[#D8C4BA]/60 text-[#43141C] text-xs font-semibold hover:border-[#8B263E] hover:text-[#8B263E] transition duration-300 shadow-sm"
                >
                  <span>{t('hero_explore_btn')}</span>
                </a>
              </div>
            </div>

            {/* Bottom Telemetry Metrics Bar */}
            <div className="relative z-10 pt-8 mt-8 border-t border-[#D8C4BA]/30 flex items-end justify-between">
              <div className="flex gap-2 items-end">
                <div className="w-2.5 h-6 bg-[#FAF4F0] rounded-full" />
                <div className="w-2.5 h-10 bg-[#FAF4F0] rounded-full" />
                <div className="w-2.5 h-16 bg-[#8B263E] rounded-full shadow-md shadow-[#8B263E]/30" />
                <div className="w-2.5 h-12 bg-[#FAF4F0] rounded-full" />
                <div className="w-2.5 h-20 bg-[#43141C] rounded-full shadow-md shadow-[#43141C]/20" />
                <div className="w-2.5 h-8 bg-[#FAF4F0] rounded-full" />
                <div className="w-2.5 h-14 bg-[#6E2432] rounded-full" />
              </div>

              <div className="text-right">
                <p className="text-2xl sm:text-3xl font-bold text-[#43141C] tracking-tight">4.9 / 5.0</p>
                <p className="text-[10px] text-[#6E2432] font-mono font-bold uppercase tracking-widest">{t('hero_badge_rating')}</p>
              </div>
            </div>
          </div>

          {/* Bento Cell 2 */}
          <div 
            id="hero-bento-stat-rating"
            className="bento-card p-7 flex flex-col justify-between bg-white/90 border-[#D8C4BA]/40 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-[#43141C]/10 border border-[#D8C4BA]/40 flex items-center justify-center text-[#43141C] shadow-sm">
                <Star size={20} fill="#8B263E" className="text-[#8B263E]" />
              </div>
              <div className="text-[#43141C] text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#43141C]/5 border border-[#D8C4BA]/40">
                +98% Satisfaction
              </div>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#43141C] tracking-tight">2 400+</p>
              <p className="text-[#6E2432] text-xs font-medium uppercase tracking-wider font-mono mt-1">
                Interventions Réalisées
              </p>
            </div>
          </div>

          {/* Bento Cell 3 */}
          <div 
            id="hero-bento-stat-surgeon"
            className="bento-card p-7 flex flex-col justify-between bg-white/90 border-[#D8C4BA]/40 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#D8C4BA]/40 shadow-xs">
                <img
                  src="/dr-taher-djemal.jpg"
                  alt="Dr. Taher Jamel"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-[#43141C] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#43141C]/5 border border-[#D8C4BA]/40 font-bold">
                CHIRURGIEN QUALIFIÉ
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-[#43141C] tracking-tight">Dr. Taher Jamel</p>
              <p className="text-[#6E2432] text-xs font-medium mt-1">
                Chirurgien Plasticien Certifié · Paris & Tunis
              </p>
            </div>
          </div>

          {/* Bento Cell 4 */}
          <div 
            id="hero-bento-visual-card"
            className="bento-card relative overflow-hidden group min-h-[220px] border-[#D8C4BA]/40 shadow-sm"
          >
            <img
              src="/images/perla_natural_results.jpg?v=perla_editorial"
              alt="Perla Body Sculpt - Résultats Naturels & Harmonieux"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#43141C]/90 via-[#43141C]/30 to-transparent pointer-events-none" />
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-[#FAF4F0]">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#E8D7D0] uppercase tracking-wider mb-1 font-bold">
                <Sparkles size={12} className="text-[#FAF4F0]" />
                <span>Haute Définition</span>
              </div>
              <p className="text-sm font-semibold">Résultats Naturels & Harmonieux</p>
            </div>
          </div>

          {/* Bento Cell 5 */}
          <div 
            id="hero-bento-protocol-card"
            className="bento-card p-7 flex flex-col justify-between bg-white/90 border-[#D8C4BA]/40 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-[#43141C]/10 border border-[#D8C4BA]/40 flex items-center justify-center text-[#43141C]">
                <Lock size={18} className="text-[#8B263E]" />
              </div>
              <div className="w-2.5 h-2.5 bg-[#8B263E] rounded-full animate-pulse shadow-sm shadow-[#8B263E]/40" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#43141C] uppercase tracking-wider font-mono">100% Confidentiel</p>
              <p className="text-[#6E2432] text-xs mt-1">Consultation privée sur rendez-vous</p>
            </div>
          </div>

          {/* Bento Cell 6 */}
          <div 
            id="hero-bento-cta-banner"
            className="md:col-span-2 lg:col-span-2 rounded-[2rem] bg-gradient-to-r from-[#3A1017] to-[#43141C] border border-[#D8C4BA]/40 p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xl text-[#FAF4F0]"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-[#E8D7D0] text-xs font-mono uppercase tracking-widest mb-1 font-bold">
                <Activity size={14} />
                <span>Créneaux Disponibles</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Bilan Personnalisé en Clinique ou Visio
              </h3>
              <p className="text-[#E8D7D0] text-xs sm:text-sm mt-1 max-w-md">
                Échangez avec nos chirurgiens pour définir votre projet esthétique sur mesure.
              </p>
            </div>
            <button 
              id="hero-bento-banner-btn"
              onClick={onOpenBooking}
              className="bg-[#FAF4F0] text-[#43141C] hover:bg-white px-7 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shrink-0 flex items-center gap-2 border border-[#D8C4BA]"
            >
              <span>Réserver un Créneau</span>
              <ArrowRight size={13} className="text-[#43141C]" />
            </button>
          </div>

          {/* Bento Cell 7 */}
          <div 
            id="hero-bento-location-card"
            className="bento-card p-7 flex flex-col justify-between bg-white/90 border-[#D8C4BA]/40 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#6E2432] tracking-widest uppercase font-mono">
                CLINICAL HUB
              </span>
              <div className="w-2.5 h-2.5 bg-[#8B263E] rounded-full animate-pulse shadow-sm shadow-[#8B263E]/40" />
            </div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-xl font-bold text-[#43141C] tracking-tight">TUNIS · LAC 2</p>
                <p className="text-xs text-[#6E2432] mt-0.5">Les Berges du Lac 2, Tunis</p>
              </div>
            </div>
          </div>

          {/* Bento Cell 8 */}
          <div 
            id="hero-bento-support-card"
            className="bento-card p-7 flex flex-col justify-between bg-white/90 border-[#D8C4BA]/40 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#6E2432] tracking-widest uppercase font-mono">
                SUIVI POST-OP
              </span>
              <div className="text-[#43141C] text-xs font-mono font-bold bg-[#8B263E]/10 border border-[#8B263E]/20 px-2 py-0.5 rounded">24/7</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#6E2432]">Assistance Médicale</span>
                <span className="text-[#43141C] font-bold">100%</span>
              </div>
              <div className="h-2 w-full bg-[#FAF4F0] rounded-full overflow-hidden border border-[#D8C4BA]/30">
                <div className="h-full bg-[#8B263E] w-full rounded-full shadow-sm shadow-[#8B263E]/40" />
              </div>
            </div>
            <p className="text-[10px] text-[#6E2432] font-mono uppercase">Infirmière dédiée incluse</p>
          </div>

        </div>

      </div>
    </section>
  );
};