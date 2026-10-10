import React from 'react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { ECOSYSTEM_SERVICES } from '../data/companyData.ts';
import { ArrowUpRight } from 'lucide-react';
import workspaceImage from '../assets/images/services_workspace_modern_1791022702184.jpg';

interface EcosystemSectionProps {
  onSelectEcosystemService: (serviceName: string) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  onSelectEcosystemService,
}) => {
  return (
    <section id="ecosystem" className="py-20 sm:py-24 bg-[#e9edc9] text-[#01472e] rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-20 shadow-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Beyond Recruitment"
          title="SkillTech’s Service Ecosystem"
          subtitle="Comprehensive enterprise consulting and operational service capabilities listed in the verified company profile."
          alignment="center"
        />

        {/* Bento Grid with 12 Core Ecosystem Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ECOSYSTEM_SERVICES.map((item, idx) => {
            const isFeatured = item.title === 'Workspace Solutions';

            return (
              <div
                key={item.title}
                className={`group rounded-[2.5rem] border border-[#01472e]/15 transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-forest-sm hover:shadow-forest hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'bg-[#01472e] text-[#fefae0] md:col-span-2 lg:col-span-2'
                    : 'bg-[#fefae0] text-[#01472e] p-6 sm:p-7'
                }`}
              >
                {isFeatured ? (
                  <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                    <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ccd5ae] uppercase tracking-ultra mb-3">
                          <span className="w-4 h-[2px] bg-[#ccd5ae] inline-block" />
                          <span>{item.category} &bull; INFRASTRUCTURE</span>
                        </div>
                        <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#fefae0]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#ccd5ae]/90 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4">
                        <button
                          type="button"
                          onClick={() => onSelectEcosystemService(item.title)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#fefae0] hover:text-[#ccd5ae] uppercase tracking-ultra cursor-pointer transition-colors"
                        >
                          <span>EXPLORE WORKSPACE INFRASTRUCTURE</span>
                          <ArrowUpRight className="w-4 h-4 text-[#ccd5ae]" />
                        </button>
                      </div>
                    </div>

                    <div className="sm:col-span-5 relative min-h-[220px]">
                      <img
                        src={workspaceImage}
                        alt="SkillTech workspace solution infrastructure"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#01472e] via-transparent to-transparent sm:block hidden" />
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wide-label text-[#01472e]/70">
                          {item.category}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#01472e]/40">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#01472e] group-hover:text-[#01472e]/80 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#01472e]/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#01472e]/10 flex justify-end">
                      <button
                        type="button"
                        onClick={() => onSelectEcosystemService(item.title)}
                        className="w-8 h-8 rounded-full bg-[#e9edc9] text-[#01472e] group-hover:bg-[#01472e] group-hover:text-[#fefae0] transition-colors flex items-center justify-center cursor-pointer"
                        aria-label={`Inquire about ${item.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center text-xs text-[#01472e]/60 uppercase tracking-ultra font-bold">
          Services listed strictly reflect official SkillTech corporate profile offerings.
        </div>
      </div>
    </section>
  );
};
