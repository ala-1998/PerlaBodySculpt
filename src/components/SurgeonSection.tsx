import React from 'react';
import { 
  Award, 
  MapPin, 
  Calendar, 
  Clock, 
  Phone, 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface SurgeonSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const SurgeonSection: React.FC<SurgeonSectionProps> = ({ 
  currentLang, 
  onOpenBooking 
}) => {
  const t = (key: string) => translations[key]?.[currentLang] || key;

  return (
    <section 
      id="surgeon"
      className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 bg-transparent text-[#43141C]"
    >
      <div className="max-w-[1540px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#43141C]/5 text-[#43141C] rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-[#D8C4BA]/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A6A5]" />
              <span>{t('surgeon_tag')}</span>
            </div>
            <h2 
              id="surgeon-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#43141C] leading-tight tracking-tight"
            >
              {t('surgeon_name')}
            </h2>
          </div>

          <div className="text-xs uppercase tracking-widest font-mono text-[#6E2432] flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-[#D8C4BA]/50 shadow-xs">
            <Award size={15} className="text-[#C9A6A5]" />
            <span>France · Tunisie · International</span>
          </div>
        </div>

        {/* Main Surgeon Feature Bento Card */}
        <article 
          id="surgeon-profile-card"
          className="rounded-[2.5rem] overflow-hidden border border-[#D8C4BA]/50 bg-white shadow-xl"
        >
          <div className="grid lg:grid-cols-12 items-stretch">
            
            {/* Left: Portrait in bento frame (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-[580px] bg-[#2D0C13] overflow-hidden">
              <img
                src="/dr-taher-djemal.jpg"
                alt="Dr. Taher Jamel - Chirurgien Plasticien & Esthétique"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D0C13] via-[#2D0C13]/30 to-transparent" />
              
              <div className="absolute top-6 left-6 bg-[#2D0C13]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#D8C4BA]/40 text-[10px] font-mono uppercase tracking-wider text-[#FAF4F0] font-bold">
                {t('surgeon_title')}
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[10px] uppercase font-mono tracking-wider text-[#E8D7D0] font-bold flex items-center gap-1.5 mb-1">
                  <ShieldCheck size={13} className="text-[#FAF4F0]" />
                  <span>Praticien Qualifié & Inscrit à l'Ordre</span>
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold mt-1">
                  {t('surgeon_name')}
                </div>
                <p className="text-xs text-[#E8D7D0] mt-1">Chirurgie Plastique, Reconstructrice et Esthétique</p>
              </div>
            </div>

            {/* Right: Bio, Credentials, Consultation Times, and Actions (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-[#C9A6A5] font-bold">
                  {t('surgeon_title')}
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl text-[#43141C] mt-2 font-semibold">
                  L'art du geste chirurgical sur mesure.
                </h3>

                <div className="w-14 h-1 bg-[#C9A6A5] rounded-full my-6" />

                <p 
                  id="surgeon-biography"
                  className="text-xs sm:text-sm leading-relaxed text-[#6E2432] font-normal"
                >
                  {t('surgeon_bio')}
                </p>

                {/* Key Pillars in Bento cells */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/50">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#43141C] uppercase tracking-wider font-mono">
                      <GraduationCap size={16} className="text-[#C9A6A5]" />
                      <span>Formation Internationale</span>
                    </div>
                    <p className="text-xs text-[#6E2432] mt-2 leading-relaxed">
                      Chirurgien formé au sein des hôpitaux universitaires de référence en France et en Tunisie, maîtrisant les techniques de pointe.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/50">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#43141C] uppercase tracking-wider font-mono">
                      <Building2 size={16} className="text-[#C9A6A5]" />
                      <span>Plateau Clinique Agréé</span>
                    </div>
                    <p className="text-xs text-[#6E2432] mt-2 leading-relaxed">
                      Interventions pratiquées au sein de blocs opératoires certifiés à Tunis avec surveillance anesthésique continue et hygiène hospitalière stricte.
                    </p>
                  </div>
                </div>

                {/* Logistics Schedule & Clinic Address */}
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/50">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-[#43141C] font-bold flex items-center gap-1.5">
                      <Clock size={13} className="text-[#C9A6A5]" />
                      <span>{t('surgeon_hours_title')}</span>
                    </div>
                    <div className="text-xs font-semibold text-[#43141C] mt-2">
                      {t('surgeon_hours_value')}
                    </div>
                    <div className="text-xs text-[#6E2432] mt-0.5">
                      {t('surgeon_hours_time')}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#FAF4F0] border border-[#D8C4BA]/50">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-[#43141C] font-bold flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#C9A6A5]" />
                      <span>{t('surgeon_location_title')}</span>
                    </div>
                    <div className="text-xs font-semibold text-[#43141C] mt-2">
                      {t('surgeon_location_value')}
                    </div>
                    <div className="text-xs text-[#6E2432] mt-0.5">
                      {t('surgeon_location_sub')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#D8C4BA]/40 flex flex-wrap items-center gap-4">
                <button
                  id="surgeon-consultation-btn"
                  onClick={onOpenBooking}
                  className="btn-luxury-rendezvous px-8 py-4 text-xs font-bold tracking-wider uppercase rounded-2xl flex items-center gap-3 cursor-pointer"
                >
                  <Calendar size={14} className="text-[#2D0C13]" />
                  <span>{t('hero_book_btn')}</span>
                  <ArrowRight size={13} className="text-[#2D0C13]" />
                </button>

                <a
                  href="https://wa.me/21626723876"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="surgeon-phone-direct"
                  className="px-6 py-4 rounded-2xl bg-white border border-[#D8C4BA]/60 text-[#43141C] text-xs font-semibold hover:border-[#43141C] transition flex items-center gap-2.5 font-mono shadow-xs"
                >
                  <Phone size={13} className="text-[#C9A6A5]" />
                  <span>+216 26 723 876</span>
                </a>
              </div>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
};
