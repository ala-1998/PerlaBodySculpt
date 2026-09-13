import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  User, 
  Menu, 
  X, 
  Instagram, 
  Globe, 
  Calendar, 
  ChevronRight, 
  Shield, 
  Sun, 
  Moon, 
  Compass 
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PerlaLogo } from './PerlaLogo';

interface NavigationProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onOpenBooking: (procedure?: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentLang,
  onLanguageChange,
  activeSection,
  onOpenBooking,
  isDarkMode,
  onToggleTheme
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const t = (key: string) => translations[key]?.[currentLang] || key;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', num: '01', labelKey: 'nav_home' },
    { id: 'results', num: '02', labelKey: 'nav_results' },
    { id: 'procedures', num: '03', labelKey: 'nav_procedures' },
    { id: 'surgeon', num: '04', labelKey: 'nav_surgeon' },
    { id: 'guide', num: '05', labelKey: 'nav_guide' },
    { id: 'estimator', num: '06', labelKey: 'nav_estimator' },
    { id: 'contact', num: '07', labelKey: 'nav_contact' },
  ];

  return (
    <>
      {/* Top scroll progress indicator in Silhouette Rose / Burgundy */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[3px] bg-[#C9A6A5] z-50 transition-all duration-150 shadow-[0_0_12px_rgba(139,38,62,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Top Header */}
      <header 
        id="mobile-header"
        className="md:hidden fixed top-0 inset-x-0 z-40 bg-[#2D0C13]/95 backdrop-blur-xl text-[#FAF4F0] border-b border-[#D8C4BA]/30"
      >
        <div className="h-20 px-5 flex items-center justify-between">
          <a href="#home" className="flex items-center group py-1" title="Perla Body Sculpt">
            <PerlaLogo size="md" />
          </a>

          <div className="flex items-center gap-2.5">
            <button
              id="mobile-book-btn"
              onClick={() => onOpenBooking()}
              className="btn-luxury-rendezvous px-4 py-2 text-[11px] font-bold tracking-[0.12em] uppercase rounded-2xl cursor-pointer leading-tight text-center"
            >
              <span>{t('nav_book_btn')}</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              aria-label="Open mobile navigation menu"
              onClick={() => setIsDrawerOpen(true)}
              className="w-10 h-10 rounded-2xl bg-[#43141C] border border-[#D8C4BA]/30 grid place-items-center text-[#FAF4F0] hover:text-[#D8C4BA]"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Panel */}
      {isDrawerOpen && (
        <div
          id="mobile-drawer-backdrop"
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 bg-[#2D0C13]/85 backdrop-blur-md z-50 md:hidden"
        />
      )}

      <aside
        id="mobile-drawer-panel"
        className={`fixed top-0 bottom-0 ${currentLang === 'ar' ? 'right-0' : 'left-0'} w-[86%] max-w-sm z-50 bg-[#2D0C13] text-[#FAF4F0] p-7 border-x border-[#D8C4BA]/30 transition-transform duration-300 md:hidden flex flex-col justify-between ${
          isDrawerOpen 
            ? 'translate-x-0' 
            : currentLang === 'ar' ? 'translate-x-full' : '-translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#43141C]">
            <PerlaLogo size="md" />
            <button
              id="mobile-drawer-close-btn"
              aria-label="Close navigation"
              onClick={() => setIsDrawerOpen(false)}
              className="w-9 h-9 rounded-xl border border-[#D8C4BA]/30 bg-[#43141C] grid place-items-center text-[#FAF4F0] hover:text-[#D8C4BA]"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="mt-8 space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  href={`#${item.id}`}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl text-xs tracking-[0.14em] uppercase transition ${
                    isActive
                      ? 'bg-[#C9A6A5]/30 text-[#FAF4F0] border border-[#C9A6A5]/50 font-bold'
                      : 'text-[#E8D7D0] hover:text-white hover:bg-[#43141C] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#D8C4BA] font-mono text-[10px]">{item.num}</span>
                    <span>{t(item.labelKey)}</span>
                  </div>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#C9A6A5] shadow-sm shadow-[#C9A6A5]/50" />}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#43141C] space-y-5">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#D8C4BA] font-mono mb-3">Languages</div>
            <div className="flex gap-2 bg-[#43141C] p-1.5 rounded-2xl border border-[#D8C4BA]/30">
              <button
                id="lang-btn-mobile-en"
                onClick={() => onLanguageChange('en')}
                className={`flex-1 py-1.5 text-xs rounded-xl transition ${
                  currentLang === 'en' 
                    ? 'bg-[#C9A6A5] text-white font-bold shadow-sm' 
                    : 'text-[#E8D7D0] hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                id="lang-btn-mobile-fr"
                onClick={() => onLanguageChange('fr')}
                className={`flex-1 py-1.5 text-xs rounded-xl transition ${
                  currentLang === 'fr' 
                    ? 'bg-[#C9A6A5] text-white font-bold shadow-sm' 
                    : 'text-[#E8D7D0] hover:text-white'
                }`}
              >
                FR
              </button>
              <button
                id="lang-btn-mobile-ar"
                onClick={() => onLanguageChange('ar')}
                className={`flex-1 py-1.5 text-xs rounded-xl transition ${
                  currentLang === 'ar' 
                    ? 'bg-[#C9A6A5] text-white font-bold shadow-sm' 
                    : 'text-[#E8D7D0] hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>
          </div>

          <button
            id="mobile-drawer-consult-btn"
            onClick={() => {
              setIsDrawerOpen(false);
              onOpenBooking();
            }}
            className="btn-luxury-rendezvous w-full py-4 text-xs font-bold tracking-[0.16em] uppercase rounded-2xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar size={14} />
            <span>{t('hero_book_btn')}</span>
          </button>
        </div>
      </aside>

      {/* Desktop Vertical Sidebar Dock (md and up) */}
      <aside
        id="desktop-sidebar-dock"
        className={`hidden md:flex fixed inset-y-0 ${
          currentLang === 'ar' ? 'right-0 border-l' : 'left-0 border-r'
        } w-[114px] bg-[#2D0C13] text-[#FAF4F0] z-40 flex-col items-center py-7 border-[#D8C4BA]/30 shadow-2xl`}
      >
        {/* Monogram / Logo */}
        <a 
          href="#home" 
          id="sidebar-logo-link"
          className="flex flex-col items-center justify-center group transition duration-300 px-2 py-1"
          title="Perla Body Sculpt"
        >
          <PerlaLogo size="lg" />
        </a>

        {/* Divider */}
        <div className="w-8 h-px bg-[#43141C] my-6" />

        {/* Numbered Nav Links with active Pearl/Burgundy state */}
        <nav 
          id="sidebar-navigation"
          className="relative w-full px-3 space-y-3.5 flex-1 flex flex-col justify-center"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`sidebar-nav-${item.id}`}
                href={`#${item.id}`}
                data-section={item.id}
                className={`block relative text-center py-2 px-1 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? 'bg-[#C9A6A5]/30 border border-[#C9A6A5]/50 shadow-sm' 
                    : 'hover:bg-[#43141C] border border-transparent'
                }`}
              >
                <div 
                  className={`font-mono text-xs leading-none transition duration-300 ${
                    isActive ? 'text-[#FAF4F0] font-bold' : 'text-[#A07078] group-hover:text-[#FAF4F0]'
                  }`}
                >
                  {item.num}
                </div>
                <div 
                  className={`mt-1.5 text-[8px] tracking-wider uppercase transition ${
                    isActive ? 'text-white font-bold' : 'text-[#A07078] group-hover:text-[#FAF4F0]'
                  }`}
                >
                  {t(item.labelKey)}
                </div>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A6A5] mx-auto mt-1 shadow-sm shadow-[#C9A6A5]/60" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom Social & Theme Toggles */}
        <div className="mt-auto flex flex-col items-center gap-4 text-[#A07078] pt-4">
          <div className="h-8 w-px bg-[#43141C]" />
          <button
            id="theme-toggle-sidebar"
            onClick={onToggleTheme}
            aria-label="Toggle dark/light theme"
            className="w-9 h-9 rounded-xl bg-[#43141C] border border-[#D8C4BA]/30 grid place-items-center text-[#E8D7D0] hover:text-[#D8C4BA] hover:border-[#D8C4BA]/50 transition"
          >
            {isDarkMode ? <Sun size={13} /> : <Moon size={13} />}
          </button>
          <a 
            href="https://www.instagram.com/perla.bodysculpt?igsi=MWRtN2sxNTZ1dXFpYg%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#D8C4BA] transition"
          >
            <Instagram size={14} />
          </a>
          <button
            id="quick-book-dock-icon"
            onClick={() => onOpenBooking()}
            aria-label="Open booking dialog"
            title={t('nav_book_btn')}
            className="btn-luxury-rendezvous w-10 h-10 rounded-xl grid place-items-center cursor-pointer"
          >
            <Calendar size={14} />
          </button>
        </div>
      </aside>

      {/* Top Utility Bar on Desktop */}
      <div 
        id="desktop-top-utility-bar"
        className={`hidden md:flex sticky top-0 z-30 ${
          currentLang === 'ar' ? 'mr-[114px]' : 'ml-[114px]'
        } bg-[#FAF4F0]/90 backdrop-blur-xl border-b border-[#D8C4BA]/30 h-[68px] items-center justify-between px-8 lg:px-12 transition-colors duration-300`}
      >
        <div className="flex items-center gap-8 text-[11px] text-[#6E2432]">
          <a 
            href="https://wa.me/21626723876" 
            target="_blank"
            rel="noopener noreferrer"
            id="utility-phone-link"
            className="flex items-center gap-2.5 hover:text-[#43141C] transition group"
          >
            <span className="w-7 h-7 rounded-lg bg-white border border-[#D8C4BA]/40 grid place-items-center group-hover:border-[#25D366]/50 transition shadow-xs">
              <Phone size={11} className="text-[#C9A6A5] group-hover:text-[#25D366] transition" />
            </span>
            <span className="font-mono tracking-wider font-semibold">{t('top_phone')}</span>
          </a>

          <a 
            href="mailto:perlabodyartcontact@gmail.com" 
            id="utility-email-link"
            className="flex items-center gap-2.5 hover:text-[#43141C] transition group"
          >
            <span className="w-7 h-7 rounded-lg bg-white border border-[#D8C4BA]/40 grid place-items-center group-hover:border-[#C9A6A5] transition shadow-xs">
              <Mail size={11} className="text-[#C9A6A5]" />
            </span>
            <span className="font-medium tracking-wider">{t('top_email')}</span>
          </a>

          <div className="hidden xl:flex items-center gap-2 text-[#6E2432]">
            <div className="w-2 h-2 rounded-full bg-[#C9A6A5] animate-pulse shadow-sm shadow-[#C9A6A5]/50" />
            <span className="font-mono text-[10px] uppercase font-bold">{t('top_location')}</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {/* Language Switcher */}
          <nav 
            id="language-switcher-group"
            className="flex items-center bg-white/90 p-1 rounded-2xl border border-[#D8C4BA]/40 shadow-xs"
          >
            <button 
              id="lang-desktop-en"
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1.5 rounded-xl text-xs transition ${
                currentLang === 'en' 
                  ? 'bg-[#43141C] text-[#FAF4F0] font-bold shadow-sm' 
                  : 'text-[#6E2432] hover:text-[#43141C] font-medium'
              }`}
            >
              EN
            </button>
            <button 
              id="lang-desktop-fr"
              onClick={() => onLanguageChange('fr')}
              className={`px-3 py-1.5 rounded-xl text-xs transition ${
                currentLang === 'fr' 
                  ? 'bg-[#43141C] text-[#FAF4F0] font-bold shadow-sm' 
                  : 'text-[#6E2432] hover:text-[#43141C] font-medium'
              }`}
            >
              FR
            </button>
            <button 
              id="lang-desktop-ar"
              onClick={() => onLanguageChange('ar')}
              className={`px-3 py-1.5 rounded-xl text-xs transition ${
                currentLang === 'ar' 
                  ? 'bg-[#43141C] text-[#FAF4F0] font-bold shadow-sm' 
                  : 'text-[#6E2432] hover:text-[#43141C] font-medium'
              }`}
            >
              العربية
            </button>
          </nav>

          {/* Direct Booking CTA matching official Perla capture */}
          <button
            id="desktop-top-consult-btn"
            onClick={() => onOpenBooking()}
            className="btn-luxury-rendezvous hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] rounded-2xl cursor-pointer"
          >
            <span>{t('nav_book_btn')}</span>
          </button>
        </div>
      </div>
    </>
  );
};
