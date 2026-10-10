import React from 'react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { PROCESS_STEPS } from '../data/companyData.ts';
import { ArrowUpRight } from 'lucide-react';

interface ProcessTimelineSectionProps {
  onStartProcess: () => void;
}

export const ProcessTimelineSection: React.FC<ProcessTimelineSectionProps> = ({
  onStartProcess,
}) => {
  return (
    <section id="how-we-work" className="py-20 sm:py-24 bg-[#fefae0] text-[#01472e] rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-20 shadow-forest overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="End-to-End Delivery"
          title="From Requirement to Deployment"
          subtitle="SkillTech's structured eight-stage HR and workforce lifecycle ensures complete operational continuity from day one."
          alignment="center"
        />

        {/* 8-Step Timeline Layout */}
        <div className="relative mt-12 sm:mt-16">
          {/* Central Spine */}
          <div
            className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-[#01472e]/20 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Side */}
                  <div
                    className={`w-full lg:w-1/2 ${
                      isEven ? 'lg:text-left' : 'lg:text-right'
                    }`}
                  >
                    <div className="p-6 rounded-[2rem] bg-[#e9edc9]/70 border border-[#01472e]/15 shadow-forest-sm hover:shadow-forest transition-all duration-300 hover:-translate-y-1">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? 'lg:justify-start' : 'lg:justify-end'
                        }`}
                      >
                        <span className="text-[10px] font-mono font-bold text-[#01472e] bg-[#01472e]/10 px-2.5 py-0.5 rounded-full uppercase tracking-ultra">
                          STAGE {step.number}
                        </span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#01472e]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#01472e]/80 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-[#01472e] text-[#fefae0] font-display text-base font-bold shadow-forest z-10 shrink-0 border-4 border-[#fefae0]">
                    {step.number}
                  </div>

                  {/* Empty balance side */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-[2.5rem] bg-[#01472e] text-[#fefae0] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-forest relative overflow-hidden">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ccd5ae]" />
              <p className="text-[10px] uppercase font-bold tracking-wide-label text-[#ccd5ae]">
                RAPID COMMENCEMENT PROTOCOL
              </p>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#fefae0]">
              HAVE AN IMMEDIATE REQUIREMENT?
            </h4>
            <p className="text-xs sm:text-sm text-[#ccd5ae]/90">
              Our Mumbai headquarters team initiates talent screening within 24–48 hours.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartProcess}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#fefae0] text-[#01472e] hover:bg-[#ccd5ae] rounded-full text-xs font-bold uppercase tracking-ultra shadow-forest transition-all shrink-0 cursor-pointer hover:scale-[1.02]"
          >
            <span>INITIATE REQUIREMENT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
