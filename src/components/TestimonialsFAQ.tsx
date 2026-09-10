import React, { useState } from 'react';
import { 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Quote, 
  HelpCircle, 
  CheckCircle2, 
  MapPin, 
  Calendar
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { testimonialsData, faqData } from '../data/content';

interface TestimonialsFAQProps {
  currentLang: Language;
}

export const TestimonialsFAQ: React.FC<TestimonialsFAQProps> = ({ currentLang }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqData[0]?.id || null);
  const t = (key: string) => translations[key]?.[currentLang] || key;

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="faq-testimonials"
      className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 bg-transparent text-[#43141C]"
    >
      <div className="max-w-[1540px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#43141C]/5 text-[#43141C] rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-[#D8C4BA]/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B263E]" />
            <span>{t('faq_tag')}</span>
          </div>
          <h2 
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#43141C] leading-tight tracking-tight"
          >
            {t('faq_title')}
          </h2>
        </div>

        {/* Testimonials Bento Cards Grid */}
        <div 
          id="testimonials-grid"
          className="grid md:grid-cols-3 gap-5 mb-20"
        >
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              id={`testimonial-card-${test.id}`}
              className="bento-card p-8 flex flex-col justify-between bg-white/95 border-[#D8C4BA]/50 shadow-md text-[#43141C]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#8B263E]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#8B263E" />
                    ))}
                  </div>
                  <Quote size={20} className="text-[#D8C4BA]" />
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-[#6E2432] italic">
                  "{test.commentKey}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#D8C4BA]/30 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#43141C]">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-[#8B263E] font-mono font-medium mt-0.5">
                    {test.procedure}
                  </p>
                </div>
                <div className="text-[10px] text-[#6E2432] font-mono flex items-center gap-1">
                  <MapPin size={11} className="text-[#8B263E]" />
                  <span>{test.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section in Bento Card */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-[#43141C] font-bold mb-6">
            <HelpCircle size={15} className="text-[#8B263E]" />
            <span>Questions Fréquentes de nos Patients</span>
          </div>

          <div 
            id="faq-accordion-list"
            className="space-y-3"
          >
            {faqData.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="rounded-2xl border border-[#D8C4BA]/50 bg-white/95 shadow-md overflow-hidden transition-colors"
                >
                  <button
                    id={`faq-toggle-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF4F0]/60 transition"
                  >
                    <span className="font-serif text-base sm:text-lg font-semibold text-[#43141C]">
                      {faq.questionKey}
                    </span>
                    <span className="w-8 h-8 rounded-xl border border-[#D8C4BA]/50 bg-[#FAF4F0] grid place-items-center shrink-0 text-[#43141C]">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed text-[#6E2432] border-t border-[#D8C4BA]/30 animate-in fade-in duration-200">
                      <p>{faq.answerKey}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
