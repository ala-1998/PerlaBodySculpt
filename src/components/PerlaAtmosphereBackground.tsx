import React from 'react';
import { WhatsAppBodySilhouette } from './WhatsAppBodySilhouette';

export const PerlaAtmosphereBackground: React.FC = () => {
  return (
    <div 
      id="perla-atmosphere-backdrop"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Subtle Dot Grid & Warm Radial Ambient Lighting */}
      <div className="absolute inset-0 bg-[#FAF4F0]" />
      <div className="absolute inset-0 bg-[radial-gradient(#D8C4BA_1.1px,transparent_1.1px)] [background-size:32px_32px] opacity-25" />

      {/* 2. Soft Ambient Luminous Color Orbs */}
      <div className="absolute -top-32 -left-20 w-[620px] h-[620px] rounded-full bg-[#D8C4BA]/20 blur-[120px]" />
      <div className="absolute top-1/4 -right-24 w-[680px] h-[680px] rounded-full bg-[#F4E8E2] blur-[140px]" />
      <div className="absolute top-1/2 -left-28 w-[640px] h-[640px] rounded-full bg-[#D8C4BA]/15 blur-[130px]" />
      <div className="absolute top-3/4 -right-24 w-[660px] h-[660px] rounded-full bg-[#F4E8E2] blur-[140px]" />
      <div className="absolute -bottom-24 left-1/3 w-[620px] h-[620px] rounded-full bg-[#D8C4BA]/15 blur-[130px]" />

      {/* 3. SIGNATURE BODY SILHOUETTE - EXACTLY MATCHING USER'S WHATSAPP IMAGE (3D Rose Gold Metallic Ribbons with Sparkles) */}
      <div className="absolute top-2 sm:top-6 -right-6 sm:right-2 lg:right-6 w-[340px] sm:w-[500px] lg:w-[650px] h-[720px] sm:h-[960px] pointer-events-none select-none z-0 opacity-85 sm:opacity-95 transition-opacity">
        <WhatsAppBodySilhouette className="w-full h-full object-contain filter drop-shadow-sm" />
      </div>

            {/* 4. 3D Radiant Powder Rose Pearlescent Spheres & Crystal Water Bubbles */}
      
      {/* Top-Left: Large Radiant Powder Rose Pearl Sphere */}
      <div className="absolute -top-10 -left-10 sm:-top-8 sm:-left-8 w-36 h-36 sm:w-48 sm:h-48 pearl-sphere animate-float-1 z-1 opacity-95">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C9A6A5]/25 via-transparent to-white/60 pointer-events-none" />
      </div>

      {/* Mid-Field Upper Pearl (from user screenshot): Powder Rose with Soft Glow */}
      <div className="absolute top-[32%] right-[34%] sm:right-[38%] w-12 h-12 sm:w-16 sm:h-16 pearl-sphere animate-float-2 z-1 opacity-95" />

      {/* Mid-Field Lower Pearl (from user screenshot, beside heading): Powder Rose with Soft Glow */}
      <div className="absolute top-[48%] right-[16%] sm:right-[20%] w-14 h-14 sm:w-18 sm:h-18 pearl-sphere animate-float-3 z-1 opacity-95" />

      {/* Top-Center/Right: Crystal Translucent Water Bubble */}
      <div className="absolute top-20 right-[24%] sm:right-[28%] w-12 h-12 sm:w-16 sm:h-16 water-bubble animate-float-2 z-1">
        <div className="absolute top-2 left-2 w-3 h-2 rounded-full bg-white/80 blur-[0.5px] transform -rotate-45" />
      </div>

      {/* Near Upper-Right Silhouette: Delicate Micro Water Bubble */}
      <div className="absolute top-36 right-[10%] w-8 h-8 sm:w-10 sm:h-10 water-bubble animate-float-3 z-1 opacity-85" />

      {/* Mid-Left: Floating Powder Rose Pearlescent Sphere */}
      <div className="absolute top-[38%] -left-6 sm:left-6 w-20 h-20 sm:w-28 sm:h-28 pearl-sphere animate-float-2 z-1 opacity-90" />

      {/* Mid-Page: Translucent Water Bubble with shimmer */}
      <div className="absolute top-[42%] left-[22%] sm:left-[28%] w-12 h-12 sm:w-16 sm:h-16 water-bubble animate-float-1 z-1" />

      {/* Mid-Right: Floating Water Bubble */}
      <div className="absolute top-[60%] right-[8%] sm:right-[12%] w-14 h-14 sm:w-20 sm:h-20 water-bubble animate-float-3 z-1">
        <div className="absolute top-3 left-3 w-4 h-2.5 rounded-full bg-white/90 blur-[0.5px] transform -rotate-45" />
      </div>

      {/* Center-Lower: Small Floating Water Bubble */}
      <div className="absolute top-[68%] left-[45%] w-9 h-9 sm:w-12 sm:h-12 water-bubble animate-float-2 z-1 opacity-80" />

      {/* Bottom-Left: Large Shimmering Powder Rose Pearl Sphere */}
      <div className="absolute -bottom-12 -left-8 sm:bottom-12 sm:left-12 w-32 h-32 sm:w-44 sm:h-44 pearl-sphere animate-float-3 z-1 opacity-95" />

      {/* Bottom-Left Adjacent: Crystal Water Bubble */}
      <div className="absolute bottom-32 left-[18%] sm:left-[22%] w-10 h-10 sm:w-14 sm:h-14 water-bubble animate-float-1 z-1" />

      {/* Bottom-Right: Radiant Powder Rose Pearl Sphere */}
      <div className="absolute -bottom-16 -right-10 sm:-bottom-10 sm:-right-8 w-36 h-36 sm:w-52 sm:h-52 pearl-sphere animate-float-1 z-1 opacity-95" />


      {/* Bottom-Right Adjacent: Translucent Water Bubble */}
      <div className="absolute bottom-40 right-[24%] w-12 h-12 sm:w-16 sm:h-16 water-bubble animate-float-2 z-1" />

      {/* Scattered Micro-Droplets / Caustic sparkles */}
      <div className="absolute top-[18%] left-[16%] w-5 h-5 water-bubble animate-float-1 opacity-70" />
      <div className="absolute top-[28%] right-[44%] w-4 h-4 water-bubble animate-float-3 opacity-60" />
      <div className="absolute top-[75%] right-[38%] w-6 h-6 water-bubble animate-float-2 opacity-75" />
      <div className="absolute top-[85%] left-[34%] w-5 h-5 water-bubble animate-float-1 opacity-65" />
    </div>
  );
};
