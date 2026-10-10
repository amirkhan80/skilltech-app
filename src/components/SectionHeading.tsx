import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  alignment = 'left',
  theme = 'light',
  className = '',
}) => {
  const isCenter = alignment === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={`max-w-3xl mb-10 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {kicker && (
        <div
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wide-label mb-2 ${
            isDark ? 'text-[#ccd5ae]' : 'text-[#01472e]'
          } ${isCenter ? 'justify-center' : 'justify-start'}`}
        >
          <span className={`w-6 h-[2px] inline-block shrink-0 rounded-full ${isDark ? 'bg-[#ccd5ae]' : 'bg-[#01472e]'}`} />
          <span>{kicker}</span>
        </div>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[0.95] ${
          isDark ? 'text-[#fefae0]' : 'text-[#01472e]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed font-normal ${
            isDark ? 'text-[#ccd5ae]/80' : 'text-[#01472e]/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
