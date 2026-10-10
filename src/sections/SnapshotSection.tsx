import React from 'react';
import { StatsCounter } from '../components/StatsCounter.tsx';
import { STATS, COMPANY_INFO } from '../data/companyData.ts';

export const SnapshotSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#e9edc9] text-[#01472e] rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-20 shadow-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#01472e]/10 text-[10px] sm:text-xs font-bold uppercase tracking-ultra mb-2 text-[#01472e]">
            <span>&bull;</span>
            <span>VERIFIED COMPANY REGISTRY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#01472e]">
            SKILLTECH AT A GLANCE
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#01472e]/80 font-bold uppercase tracking-wide-label">
            {COMPANY_INFO.businessType} &bull; Wadala, Mumbai &bull; Founded {COMPANY_INFO.founded}
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat) => (
            <StatsCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              textValue={stat.textValue}
              label={stat.label}
              sublabel={stat.sublabel}
            />
          ))}
        </div>

        {/* Central Core Statement */}
        <div className="mt-12 max-w-4xl mx-auto text-center px-4">
          <blockquote className="text-base sm:text-lg font-medium text-[#01472e] leading-relaxed italic border-y border-[#01472e]/20 py-5 sm:py-6 px-6 bg-[#fefae0]/70 rounded-[2rem] shadow-sm">
            &ldquo;{COMPANY_INFO.missionStatement}&rdquo;
          </blockquote>
          <p className="mt-3 text-[10px] text-[#01472e]/60 font-bold uppercase tracking-ultra">
            * Data sourced from official SkillTech company presentation &amp; verified registry
          </p>
        </div>
      </div>
    </section>
  );
};
