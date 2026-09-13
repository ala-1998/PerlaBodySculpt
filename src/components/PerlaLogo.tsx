import React from 'react';

interface PerlaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
  textVariant?: 'compact' | 'full';
  className?: string;
  textColor?: string;
  subtextColor?: string;
}

export const PerlaLogo: React.FC<PerlaLogoProps> = ({
  size = 'md',
  showText = false,
  textVariant = 'full',
  className = '',
  textColor = 'text-inherit',
  subtextColor = 'text-[#D8C4BA]'
}) => {
  // Dimensions for pure logo without any contour or border box
  const dimensions = {
    sm: { img: 'w-10 h-10' },
    md: { img: 'w-14 h-14' },
    lg: { img: 'w-20 h-20' },
    xl: { img: 'w-24 h-24' },
    '2xl': { img: 'w-32 h-32' }
  };

  const dim = dimensions[size];

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {/* Pure Logo alone without contour, border or clipping circle */}
      <img
        src="/perla-logo.png"
        alt="Perla Body Sculpt"
        onError={(e) => {
          // Automatic fallback to JPG if user places perla-logo.jpg in public/
          const target = e.currentTarget;
          if (!target.dataset.triedJpg) {
            target.dataset.triedJpg = 'true';
            target.src = '/perla-logo.png';
          }
        }}
        referrerPolicy="no-referrer"
        className={`${dim.img} aspect-square object-contain select-none transition-transform duration-300 group-hover:scale-105`}
      />

      {/* Optional text only if explicitly requested */}
      {showText && (
        <div className="leading-tight text-left ml-3">
          <div className={`font-serif tracking-widest text-base font-bold ${textColor} group-hover:text-[#C9A6A5] transition-colors`}>
            PERLA
          </div>
          <div className={`text-[10px] tracking-[0.24em] uppercase font-mono font-semibold ${subtextColor}`}>
            {textVariant === 'full' ? 'BODY SCULPT' : 'SCULPT'}
          </div>
        </div>
      )}
    </div>
  );
};

