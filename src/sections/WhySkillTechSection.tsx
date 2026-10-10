import React from 'react';
import { Check } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { WHY_SKILLTECH_POINTS, COMPANY_INFO } from '../data/companyData.ts';

export const WhySkillTechSection: React.FC = () => {
  return (
    <section id="why-skilltech" className="py-20 sm:py-24 bg-[#ccd5ae] text-[#01472e] rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-20 shadow-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Value Proposition"
          title="Why SkillTech?"
          subtitle="Flexible workforce models. Talent access. Business support."
          alignment="center"
        />

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {WHY_SKILLTECH_POINTS.map((point) => (
            <div
              key={point.title}
              className="p-6 sm:p-7 rounded-[2.5rem] bg-[#fefae0] border border-[#01472e]/15 shadow-forest-sm hover:shadow-forest transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[#01472e] text-[#fefae0] flex items-center justify-center mb-4 shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#01472e]">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#01472e]/80 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Finishing Signature Statement */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#fefae0] border border-[#01472e]/20 text-[#01472e] font-bold text-xs uppercase tracking-ultra shadow-forest">
            <span className="w-2 h-2 rounded-full bg-[#01472e]" />
            <span>{COMPANY_INFO.closingStatement}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
