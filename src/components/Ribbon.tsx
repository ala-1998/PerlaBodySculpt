import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface RibbonProps {
  currentLang: Language;
}

export const Ribbon: React.FC<RibbonProps> = ({ currentLang }) => {
  const t = (key: string) => translations[key]?.[currentLang] || key;

  const items = [
    t('ribbon_precision'),
    t('ribbon_safety'),
    t('ribbon_natural'),
    t('ribbon_care'),
    t('ribbon_excellence'),
  ];

  return (
    <section 
      id="brand-ribbon"
      className="bg-[#2D0C13] text-[#FAF4F0] py-3.5 border-y border-[#D8C4BA]/30 overflow-hidden relative shadow-sm"
    >
      <div className="animate-marquee text-[#E8D7D0] text-[10px] uppercase tracking-[0.28em] font-mono font-semibold flex items-center">
        {[0, 1, 2, 3].map((repeatIdx) => (
          <div key={repeatIdx} className="flex items-center gap-8 px-6">
            {items.map((item, idx) => (
              <React.Fragment key={`${repeatIdx}-${idx}`}>
                <span className="hover:text-[#D8C4BA] transition duration-200 cursor-default">{item}</span>
                <span className="text-[#D8C4BA] text-xs leading-none select-none">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
