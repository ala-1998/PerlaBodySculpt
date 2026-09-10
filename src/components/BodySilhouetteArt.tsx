import React from 'react';

interface BodySilhouetteArtProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

/**
 * Single, pristine line-art female body contour silhouette
 * Exactly matching Gemini_Generated_Image_lb3qk6lb3qk6lb3q:
 * Clean, bold, fluid lines with no extra scribbles, no badges, and no text.
 */
export const BodySilhouetteArt: React.FC<BodySilhouetteArtProps> = ({
  className = 'w-full h-full',
  color = '#1B1424',
  strokeWidth = 4.5,
}) => {
  return (
    <svg
      viewBox="0 0 320 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* 1. Left Neck & Shoulder Curve */}
        <path d="M 128 4 C 122 20, 110 36, 96 48 C 80 62, 66 74, 58 84" />

        {/* 2. Right Neck & Shoulder Curve */}
        <path d="M 212 4 C 220 22, 238 40, 268 62" />

        {/* 3. Collarbone / Clavicle Delicate Accents */}
        <path d="M 92 52 C 100 55, 110 57, 118 62" strokeWidth={strokeWidth * 0.75} />
        <path d="M 136 68 C 148 65, 162 60, 174 57" strokeWidth={strokeWidth * 0.75} />

        {/* 4. Left Arm: Shoulder Cap -> Upper Arm -> Elbow -> Forearm down to hip/thigh */}
        <path d="M 58 84 C 40 100, 24 124, 12 158 C 2 190, 2 218, 4 246 C 8 280, 22 320, 38 364 C 52 398, 60 434, 66 470 C 68 496, 68 526, 64 560 C 60 604, 52 652, 48 680" />

        {/* Left Inner Arm Crease Line */}
        <path d="M 38 184 C 40 212, 42 238, 50 264 C 56 294, 62 324, 64 352" strokeWidth={strokeWidth * 0.85} />

        {/* Left Ribcage / Waist Line (inside the arm frame) */}
        <path d="M 42 108 C 38 128, 38 148, 42 172" strokeWidth={strokeWidth * 0.85} />

        {/* 5. Chest & Décolleté (The signature clean curves of the Gemini image) */}
        {/* Upper right chest subtle accent */}
        <path d="M 220 120 C 202 132, 182 140, 166 146" strokeWidth={strokeWidth * 0.9} />
        
        {/* Main deep elegant U-scoop décolleté line */}
        <path d="M 210 180 C 188 196, 148 206, 110 206 C 82 206, 66 186, 60 154" strokeWidth={strokeWidth * 1.05} />

        {/* 6. Right Hourglass Contour: Armpit -> Narrow Waist -> Dramatic S-Curve Hip -> Thigh */}
        <path d="M 216 182 C 200 212, 186 242, 186 278 C 186 310, 196 340, 216 376 C 242 416, 278 454, 298 500 C 312 530, 312 560, 294 600 C 274 640, 250 674, 230 704" strokeWidth={strokeWidth * 1.1} />

        {/* 7. Right Outer Arm / Back Line */}
        <path d="M 268 62 C 286 100, 302 154, 310 212 C 320 272, 320 334, 318 388 C 316 414, 312 440, 306 468" strokeWidth={strokeWidth} />

        {/* 8. Navel: Delicate vertical tick in abdomen */}
        <path d="M 76 340 C 84 350, 84 360, 78 372" strokeWidth={strokeWidth * 0.85} />

        {/* 9. Groin / Inner Hip Crease */}
        <path d="M 164 474 C 162 494, 158 516, 150 538" strokeWidth={strokeWidth * 0.85} />

        {/* 10. Left Leg Inner Contour Line */}
        <path d="M 72 458 C 68 500, 64 564, 58 634 C 54 666, 52 692, 50 706" strokeWidth={strokeWidth * 0.9} />
      </g>
    </svg>
  );
};

