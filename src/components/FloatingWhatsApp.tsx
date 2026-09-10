import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  currentLang: Language;
  phoneNumber?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  currentLang,
  phoneNumber = '21626723876'
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Message initial selon la langue
  const defaultMessages = {
    fr: "Bonjour Perla Body Sculpt, je souhaite me renseigner sur une consultation chirurgicale.",
    en: "Hello Perla Body Sculpt, I would like more information about a surgical consultation.",
    ar: "مرحباً Perla Body Sculpt، أود الاستفسار عن استشارة لجراحة تجميلية."
  };

  const currentMessage = encodeURIComponent(defaultMessages[currentLang] || defaultMessages.fr);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${currentMessage}`;

  const tooltipLabels = {
    fr: "Discutez sur WhatsApp",
    en: "Chat on WhatsApp",
    ar: "تواصل عبر واتساب"
  };

  const statusLabels = {
    fr: "En ligne • Réponse rapide",
    en: "Online • Quick response",
    ar: "متصل الآن • رد سريع"
  };

  return (
    <div 
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Tooltip / Badge de contact rapide */}
      {showTooltip && (
        <div 
          id="whatsapp-tooltip-card"
          className="hidden sm:flex flex-col bg-white/95 backdrop-blur-xl border border-[#D8C4BA]/60 rounded-2xl p-3.5 shadow-2xl text-[#43141C] animate-in fade-in slide-in-from-right-2 duration-200"
        >
          <div className="flex items-center justify-between gap-4 mb-1">
            <span className="text-xs font-bold text-[#43141C] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              Perla Body Sculpt
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-[#6E2432] hover:text-[#43141C] p-0.5 rounded-md transition"
              aria-label="Fermer"
            >
              <X size={12} />
            </button>
          </div>
          <p className="text-[11px] text-[#6E2432] font-medium">
            {tooltipLabels[currentLang]}
          </p>
          <span className="text-[9px] font-mono text-emerald-600 font-bold mt-0.5">
            {statusLabels[currentLang]}
          </span>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Contacter la clinique Perla par WhatsApp au +216 26 723 876"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/40"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        {/* WhatsApp Official Style Icon */}
        <MessageCircle size={30} className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />

        {/* Online Status Green Dot Badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm" />
      </a>
    </div>
  );
};
