import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageSquare, 
  ArrowRight,
  Shield,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PerlaLogo } from './PerlaLogo';

interface FooterProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenBooking }) => {
  const t = (key: string) => translations[key]?.[currentLang] || key;

  return (
    <footer 
      id="contact"
      className="bg-[#FAF4F0]/95 text-[#43141C] pt-20 pb-12 border-t border-[#D8C4BA]/30 relative"
    >
      <div className="px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto">
        
        {/* Main 4-Column Bento Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#D8C4BA]/30">
          
          {/* Col 1: Identity & Ethics (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <PerlaLogo size="xl" />

            <p className="text-xs sm:text-sm leading-relaxed text-[#6E2432] max-w-sm">
              {t('footer_desc')}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/perla.bodysculpt?igsi=MWRtN2sxNTZ1dXFpYg%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram Perla"
                className="w-10 h-10 rounded-xl bg-white border border-[#D8C4BA]/50 grid place-items-center text-[#43141C] hover:text-[#C9A6A5] hover:border-[#C9A6A5] transition shadow-xs"
              >
                <Instagram size={15} />
              </a>
              <a 
                href="https://wa.me/21626723876" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp Contact"
                className="w-10 h-10 rounded-xl bg-white border border-[#D8C4BA]/50 grid place-items-center text-[#43141C] hover:text-[#25D366] hover:border-[#25D366] transition shadow-xs"
              >
                <MessageSquare size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase font-mono tracking-wider text-[#43141C] font-bold">
              Coordonnées & Accès
            </div>
            <div className="space-y-4 text-xs text-[#6E2432] pt-2">
              <a 
                href="https://wa.me/21626723876" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-3 hover:text-[#25D366] transition group"
              >
                <Phone size={15} className="text-[#C9A6A5] shrink-0 mt-0.5" />
                <span className="font-mono text-[#43141C] group-hover:text-[#25D366] font-semibold">+216 26 723 876</span>
              </a>

              <a 
                href="mailto:perlabodyartcontact@gmail.com" 
                className="flex items-start gap-3 hover:text-[#C9A6A5] transition group"
              >
                <Mail size={15} className="text-[#C9A6A5] shrink-0 mt-0.5" />
                <span className="font-mono text-[#43141C] group-hover:text-[#C9A6A5]">perlabodyartcontact@gmail.com</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C9A6A5] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#6E2432]">
                  Les Berges du Lac 2, Tunis, Tunisie
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase font-mono tracking-wider text-[#43141C] font-bold">
              {t('footer_hours_title')}
            </div>
            <div className="space-y-3 text-xs text-[#6E2432] pt-2">
              <div className="flex justify-between border-b border-[#D8C4BA]/30 pb-2">
                <span>{t('footer_hours_weekdays')}</span>
              </div>
              <div className="flex justify-between border-b border-[#D8C4BA]/30 pb-2">
                <span>{t('footer_hours_sat')}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-[#43141C] font-semibold">{t('footer_hours_sun')}</span>
              </div>
            </div>

            <button
              id="footer-book-appointment-btn"
              onClick={onOpenBooking}
              className="mt-4 btn-luxury-rendezvous inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>{t('hero_book_btn')}</span>
              <ArrowRight size={13} className="text-[#F5DDD5]" />
            </button>
          </div>

          {/* Col 4: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs uppercase font-mono tracking-wider text-[#43141C] font-bold">
              Plan du Site
            </div>
            <nav className="space-y-2 text-xs text-[#6E2432] pt-2">
              <a href="#home" className="block hover:text-[#43141C] transition">Accueil</a>
              <a href="#results" className="block hover:text-[#43141C] transition">Résultats Avant/Après</a>
              <a href="#procedures" className="block hover:text-[#43141C] transition">Interventions</a>
              <a href="#surgeon" className="block hover:text-[#43141C] transition">Nos Chirurgien</a>
              <a href="#guide" className="block hover:text-[#43141C] transition">Parcours Patient</a>
              <a href="#estimator" className="block hover:text-[#43141C] transition">Simulateur</a>
              <a href="#contact" className="block hover:text-[#43141C] transition">Contact & Accès</a>
            </nav>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E2432] font-mono">
          <div>{t('footer_rights')}</div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#43141C] transition cursor-pointer">{t('footer_privacy')}</span>
            <span className="hover:text-[#43141C] transition cursor-pointer">{t('footer_terms')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
