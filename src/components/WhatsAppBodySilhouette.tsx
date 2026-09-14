import React from 'react';

interface WhatsAppSilhouetteProps {
  className?: string;
  glow?: boolean;
  imageSrc?: string; // إمكانية تبديل التصويرة وقت ما تحب
}

export const WhatsAppBodySilhouette: React.FC<WhatsAppSilhouetteProps> = ({
  className = "w-full h-full object-contain",
  glow = true,
  imageSrc = "/images/silhouette.png" // حط مسار التصويرة متاعك هنا
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* التصويرة الأساسية مع تأثير Glow إذا glow = true */}
      <img
        src={imageSrc}
        alt="Perla Fine Line Silhouette"
        className={`w-full h-full object-contain transition-all duration-300 ${
          glow ? "drop-shadow-[0_0_12px_rgba(217,148,163,0.6)]" : ""
        }`}
      />
    </div>
  );
};