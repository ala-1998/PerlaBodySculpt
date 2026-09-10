import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Ribbon } from './components/Ribbon';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ProceduresSection } from './components/ProceduresSection';
import { SurgeonSection } from './components/SurgeonSection';
import { PatientJourney } from './components/PatientJourney';
import { ProcedureEstimator } from './components/ProcedureEstimator';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PerlaAtmosphereBackground } from './components/PerlaAtmosphereBackground';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('perla-language');
    if (saved === 'en' || saved === 'fr' || saved === 'ar') {
      return saved;
    }
    return 'fr'; // Default to French as primary language in Tunis
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('perla-theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingProcedure, setBookingProcedure] = useState<string>('');

  // Synchronize language and RTL/LTR attributes
  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('perla-language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  }, [currentLang]);

  // Synchronize theme
  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('perla-theme', next ? 'dark' : 'light');
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['home', 'results', 'procedures', 'surgeon', 'guide', 'estimator', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenBooking = (procedureName?: string) => {
    setBookingProcedure(procedureName || '');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const isRtl = currentLang === 'ar';

  return (
    <div className={`min-h-screen bg-[#FAF4F0] text-[#43141C] transition-colors duration-300 relative selection:bg-[#8B263E]/20 selection:text-[#43141C] ${isRtl ? 'rtl' : 'ltr'}`}>
      
      {/* Global Luxury Atmosphere Background with Silhouette & Floating Water/Pearl Bubbles */}
      <PerlaAtmosphereBackground />

      {/* Global Navigation (Mobile header + drawer, desktop vertical dock, top utility) */}
      <Navigation
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
        onOpenBooking={handleOpenBooking}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area (Offset by desktop sidebar width 114px) */}
      <main className={`relative z-10 ${isRtl ? 'md:mr-[114px]' : 'md:ml-[114px]'} transition-all duration-300 pt-20 md:pt-0`}>
        
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Brand Core Ticker Ribbon */}
        <Ribbon currentLang={currentLang} />

        {/* 02 / Results & Interactive Before-After Comparison Slider */}
        <BeforeAfterSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 03 / Specialized Procedures Catalog & Specifics */}
        <ProceduresSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 04 / Accredited Surgeon Feature: Notre Chirurgien */}
        <SurgeonSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 05 / Patient Experience Guide & Clinical Pillars */}
        <PatientJourney
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 06 / Interactive Procedure Estimator & Care Roadmap */}
        <ProcedureEstimator
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 07 / Patient Testimonials & Medical FAQ */}
        <TestimonialsFAQ
          currentLang={currentLang}
        />

        {/* Footer */}
        <Footer
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

      </main>

      {/* Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        currentLang={currentLang}
        preselectedProcedure={bookingProcedure}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp
        currentLang={currentLang}
        phoneNumber="21626723876"
      />

    </div>
  );
}
