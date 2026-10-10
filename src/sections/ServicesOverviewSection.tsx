import React from 'react';
import { Users2, BriefcaseBusiness, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/hero_corporate_workforce_1791022671886.jpg';
import aboutImage from '../assets/images/about_workforce_collaboration_1791022688199.jpg';
import workspaceImage from '../assets/images/services_workspace_modern_1791022702184.jpg';

interface ServicesOverviewSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesOverviewSection: React.FC<ServicesOverviewSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-[#e9edc9] text-[#01472e] rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-20 shadow-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Anton Display Header Paired with Circular CTA Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-[#01472e]/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide-label mb-2 text-[#01472e]">
              <span className="w-6 h-[2px] bg-[#01472e] inline-block" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#01472e] leading-[0.88]">
              WHAT WE DO
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onSelectService('Recruitment')}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#01472e] text-[#fefae0] hover:bg-[#01472e]/90 flex flex-col items-center justify-center text-center p-2 shadow-forest transition-transform duration-300 hover:scale-105 cursor-pointer shrink-0"
          >
            <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
            <span className="text-[10px] font-bold uppercase tracking-ultra mt-1">
              INQUIRE
            </span>
          </button>
        </div>

        {/* 3-Column Layout with 2.5rem radius cards & Blur-Reveal button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Talent & Recruitment */}
          <div className="group relative rounded-[2.5rem] bg-[#fefae0] p-6 sm:p-7 border border-[#01472e]/15 shadow-forest-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-forest">
            <div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-[#01472e]/10">
                <img
                  src={aboutImage}
                  alt="Talent & Recruitment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Blur-reveal overlay */}
                <div className="absolute inset-0 bg-[#01472e]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    type="button"
                    onClick={() => onSelectService('Recruitment')}
                    className="px-6 py-2.5 rounded-full bg-[#fefae0] text-[#01472e] font-bold text-xs uppercase tracking-ultra shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra text-[#01472e]/70 mb-1">
                <span>01 &bull; TALENT SOURCING</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e]">
                TALENT &amp; RECRUITMENT
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#01472e]/80 leading-relaxed font-normal">
                Precision talent identification, end-to-end recruitment pipelines, and seamless candidate assimilation into client teams.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#01472e]/15 flex items-center justify-between text-xs font-bold uppercase tracking-ultra">
              <span>EXPLORE PIPELINE</span>
              <span className="w-7 h-7 rounded-full bg-[#01472e] text-[#fefae0] flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Workforce Solutions */}
          <div className="group relative rounded-[2.5rem] bg-[#fefae0] p-6 sm:p-7 border border-[#01472e]/15 shadow-forest-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-forest">
            <div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-[#01472e]/10">
                <img
                  src={heroImage}
                  alt="Workforce Solutions"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Blur-reveal overlay */}
                <div className="absolute inset-0 bg-[#01472e]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    type="button"
                    onClick={() => onSelectService('Workforce Solutions')}
                    className="px-6 py-2.5 rounded-full bg-[#fefae0] text-[#01472e] font-bold text-xs uppercase tracking-ultra shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
                  >
                    SELECT MODEL
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra text-[#01472e]/70 mb-1">
                <span>02 &bull; DEPLOYMENT MODELS</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e]">
                WORKFORCE SOLUTIONS
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#01472e]/80 leading-relaxed font-normal">
                Adaptive workforce structures providing the exact level of commitment, flexibility, and operational scale businesses require.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#01472e]/15 flex items-center justify-between text-xs font-bold uppercase tracking-ultra">
              <span>5 ENGAGEMENT TIERS</span>
              <span className="w-7 h-7 rounded-full bg-[#01472e] text-[#fefae0] flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 3: Enterprise Ecosystem */}
          <div className="group relative rounded-[2.5rem] bg-[#fefae0] p-6 sm:p-7 border border-[#01472e]/15 shadow-forest-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-forest">
            <div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-[#01472e]/10">
                <img
                  src={workspaceImage}
                  alt="Enterprise Infrastructure & Workspace Solutions"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Blur-reveal overlay */}
                <div className="absolute inset-0 bg-[#01472e]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    type="button"
                    onClick={() => onSelectService('Workspace Solutions')}
                    className="px-6 py-2.5 rounded-full bg-[#fefae0] text-[#01472e] font-bold text-xs uppercase tracking-ultra shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
                  >
                    VIEW SERVICES
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra text-[#01472e]/70 mb-1">
                <span>03 &bull; TURNKEY OPERATIONS</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e]">
                WORKSPACE &amp; ADVISORY
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#01472e]/80 leading-relaxed font-normal">
                Holistic corporate infrastructure, CA compliance consulting, and enterprise project management for scaling teams.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#01472e]/15 flex items-center justify-between text-xs font-bold uppercase tracking-ultra">
              <span>12 ECOSYSTEM SERVICES</span>
              <span className="w-7 h-7 rounded-full bg-[#01472e] text-[#fefae0] flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
