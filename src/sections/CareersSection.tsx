import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CareersSectionProps {
  onExploreOpportunities: () => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({
  onExploreOpportunities,
}) => {
  return (
    <section id="careers" className="py-20 sm:py-24 bg-[#01472e] text-[#fefae0] rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-20 shadow-forest overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide-label text-[#ccd5ae]">
            <span className="w-6 h-[2px] bg-[#ccd5ae] inline-block rounded-full" />
            <span>CAREERS &bull; TALENT NETWORK</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#fefae0]">
            BUILD YOUR CAREER WITH <span className="text-[#ccd5ae]">SKILLTECH</span>
          </h2>

          <p className="text-base sm:text-lg text-[#ccd5ae]/90 leading-relaxed font-normal">
            Whether you are seeking continuing on-roll roles, specialized project assignments, flexible contracts, or university internship exposure, connect with SkillTech’s talent advisory team.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onExploreOpportunities}
              className="inline-flex items-center gap-2 px-9 py-4 bg-[#fefae0] text-[#01472e] hover:bg-[#ccd5ae] text-xs font-bold uppercase tracking-ultra rounded-full shadow-forest transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span>EXPLORE OPPORTUNITIES</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Three Pillars */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 text-left border-t border-[#ccd5ae]/20">
            <div className="p-5 rounded-[2rem] bg-[#023825] border border-[#ccd5ae]/20">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#ccd5ae] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccd5ae]" />
                <span>Multi-Model Roles</span>
              </h4>
              <p className="mt-2 text-xs text-[#fefae0]/80 leading-relaxed">
                Positions spanning on-roll permanent careers, flexible off-roll staffing, and milestone contracts.
              </p>
            </div>

            <div className="p-5 rounded-[2rem] bg-[#023825] border border-[#ccd5ae]/20">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#ccd5ae] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccd5ae]" />
                <span>Learns &amp; Earn Programs</span>
              </h4>
              <p className="mt-2 text-xs text-[#fefae0]/80 leading-relaxed">
                Structured mentorship and practical project exposure tailored for university students and early-career talent.
              </p>
            </div>

            <div className="p-5 rounded-[2rem] bg-[#023825] border border-[#ccd5ae]/20">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#ccd5ae] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccd5ae]" />
                <span>Mumbai Headquarters</span>
              </h4>
              <p className="mt-2 text-xs text-[#fefae0]/80 leading-relaxed">
                Centralized talent coordination and transparent onboarding support from our Wadala, Mumbai hub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
