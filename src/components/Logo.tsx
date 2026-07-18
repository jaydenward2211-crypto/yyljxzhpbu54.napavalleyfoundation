import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-16", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-fidelity SVG of the Napa Valley College Foundation Logo */}
      <svg
        id="nvc-foundation-logo"
        viewBox="0 0 450 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
        aria-label="Napa Valley College Foundation Logo"
      >
        {/* GREEN HILLS BACKGROUND */}
        {/* Left Hill Peak 1 */}
        <path
          d="M10 50 C 40 30, 80 30, 110 50 C 130 63, 160 63, 180 50 C 210 30, 240 30, 260 45"
          stroke="#4F7E66"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Left Hill Filled Base */}
        <path
          d="M10 50 C 40 30, 80 30, 110 50 C 130 63, 160 63, 180 50 C 210 30, 240 30, 260 45 L 260 55 L 10 55 Z"
          fill="#5E937A"
          opacity="0.8"
        />

        {/* Contour lines (Vineyard terracing paths) */}
        <path
          d="M25 50 C 55 40, 95 40, 120 53"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M40 52 C 70 45, 110 45, 135 55"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M70 54 C 100 50, 130 50, 150 56"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Right Hill Peak 2 */}
        <path
          d="M245 42 C 275 25, 315 25, 345 40 C 365 50, 395 50, 415 40 C 430 32, 440 32, 445 35"
          stroke="#4F7E66"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right Hill Filled Base */}
        <path
          d="M245 42 C 275 25, 315 25, 345 40 C 365 50, 395 50, 415 40 L 445 35 L 445 55 L 245 55 Z"
          fill="#5E937A"
          opacity="0.8"
        />

        {/* Right Contour lines */}
        <path
          d="M260 42 C 290 32, 330 32, 355 43"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M280 44 C 310 36, 345 36, 370 45"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* THE GRAPE BUNCH (Burgundy circles arranged in triangular bunch in center, sitting on the line) */}
        {/* Grape bunch connector / stem */}
        <path
          d="M228 15 C 228 25, 224 28, 224 35"
          stroke="#8A5C6D"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M221 21 C 218 19, 214 20, 212 24"
          stroke="#5E937A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Grape circles in 10-circle bunch: Top (4), Mid-high (3), Mid-low (2), Bottom (1) */}
        {/* Row 1: y = 28 */}
        <circle cx="210" cy="29" r="6" fill="#8E5E71" />
        <circle cx="221" cy="28" r="6.5" fill="#7D4F61" />
        <circle cx="233" cy="28" r="6" fill="#8E5E71" />
        <circle cx="244" cy="30" r="5.5" fill="#724957" />

        {/* Row 2: y = 39 */}
        <circle cx="215" cy="40" r="6" fill="#7D4F61" />
        <circle cx="227" cy="39" r="6.5" fill="#6A3F50" />
        <circle cx="239" cy="40" r="6" fill="#7D4F61" />

        {/* Row 3: y = 50 */}
        <circle cx="221" cy="51" r="6.5" fill="#6A3F50" />
        <circle cx="233" cy="51" r="6.5" fill="#583140" />

        {/* Row 4: y = 62 */}
        <circle cx="227" cy="63" r="7" fill="#583140" />


        {/* TEXT SECTION */}
        {showText && (
          <>
            {/* "NAPA VALLEY" Text */}
            <text
              x="5"
              y="92"
              fontFamily="'Cinzel', 'Playfair Display', 'Georgia', serif"
              fontSize="29"
              fontWeight="bold"
              fill="#AF8B2C"
              letterSpacing="2.5"
            >
              NAPA VALLEY
            </text>

            {/* "COLLEGE" Text */}
            <text
              x="298"
              y="92"
              fontFamily="'Cinzel', 'Playfair Display', 'Georgia', serif"
              fontSize="29"
              fontWeight="bold"
              fill="#AF8B2C"
              letterSpacing="2.5"
            >
              COLLEGE
            </text>

            {/* "FOUNDATION" Text (Centered below) */}
            <text
              x="225"
              y="126"
              textAnchor="middle"
              fontFamily="'Montserrat', 'Inter', 'Helvetica', sans-serif"
              fontSize="31"
              fontWeight="500"
              fill="#4E7C66"
              letterSpacing="11"
            >
              FOUNDATION
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
