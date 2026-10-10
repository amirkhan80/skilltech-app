import React from 'react';

interface SkillTechLogoProps {
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  showTagline?: boolean;
}

export const SkillTechLogo: React.FC<SkillTechLogoProps> = ({
  className = '',
  theme = 'auto',
  showTagline = false,
}) => {
  const isDarkBg = theme === 'dark';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Organic Seed / Leaf Emblem */}
      <div className="relative w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-forest-sm transition-transform duration-300 hover:rotate-12">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          <circle cx="20" cy="20" r="19" fill={isDarkBg ? "#fefae0" : "#01472e"} />
          <path
            d="M20 9C15 9 11 13 11 18C11 24 20 31 20 31C20 31 29 24 29 18C29 13 25 9 20 9Z"
            fill={isDarkBg ? "#01472e" : "#ccd5ae"}
          />
          <circle cx="20" cy="18" r="3.5" fill={isDarkBg ? "#fefae0" : "#01472e"} />
        </svg>
      </div>

      {/* Hyphen-prefixed Logo as requested in prompt: 'Logo in bold uppercase with a hyphen prefix' */}
      <div className="flex flex-col">
        <div
          className={`font-display text-xl sm:text-2xl tracking-normal uppercase flex items-center gap-1.5 ${
            isDarkBg ? 'text-[#fefae0]' : 'text-[#01472e]'
          }`}
        >
          <span className="text-[#a3b18a] font-normal">&mdash;</span>
          <span>SKILLTECH</span>
        </div>
        {showTagline && (
          <span
            className={`text-[9px] font-bold uppercase tracking-wide-label ${
              isDarkBg ? 'text-[#ccd5ae]' : 'text-[#01472e]/70'
            }`}
          >
            WORKFORCE SOLUTIONS
          </span>
        )}
      </div>
    </div>
  );
};
