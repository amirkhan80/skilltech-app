import React, { useState } from 'react';
import { ArrowUpRight, Building, Layers, Clock, FileCheck, GraduationCap, Check } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { WORKFORCE_MODELS, WorkforceModel } from '../data/companyData.ts';

interface WorkforceModelsSectionProps {
  onSelectModel: (model: WorkforceModel) => void;
}

export const WorkforceModelsSection: React.FC<WorkforceModelsSectionProps> = ({
  onSelectModel,
}) => {
  const [activeModelId, setActiveModelId] = useState<string>(WORKFORCE_MODELS[0].id);

  const activeModel =
    WORKFORCE_MODELS.find((m) => m.id === activeModelId) || WORKFORCE_MODELS[0];

  const getModelIcon = (id: string) => {
    switch (id) {
      case 'on-roll':
        return <Building className="w-4 h-4" />;
      case 'off-roll':
        return <Layers className="w-4 h-4" />;
      case 'short-term':
        return <Clock className="w-4 h-4" />;
      case 'contractual':
        return <FileCheck className="w-4 h-4" />;
      case 'internships':
        return <GraduationCap className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="workforce-solutions"
      className="py-20 sm:py-24 bg-[#01472e] text-[#fefae0] rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-20 shadow-forest"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Workforce Solutions"
          title="The Right Employment Model for Every Requirement"
          subtitle="Explore SkillTech’s five core workforce engagement models engineered to support every commercial cycle."
          alignment="center"
          theme="dark"
        />

        {/* 5-Card Interactive Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {WORKFORCE_MODELS.map((model) => {
            const isSelected = model.id === activeModelId;
            return (
              <button
                key={model.id}
                type="button"
                onClick={() => setActiveModelId(model.id)}
                className={`text-left p-4 sm:p-5 rounded-[2rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#fefae0] text-[#01472e] border-[#fefae0] shadow-forest scale-[1.02]'
                    : 'bg-[#01472e]/50 text-[#ccd5ae] border-[#ccd5ae]/20 hover:border-[#ccd5ae]/50 hover:bg-[#01472e]/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? 'text-[#01472e]' : 'text-[#ccd5ae]/70'
                      }`}
                    >
                      {model.number}
                    </span>
                    <div
                      className={`p-2 rounded-full ${
                        isSelected ? 'bg-[#01472e] text-[#fefae0]' : 'bg-[#ccd5ae]/20 text-[#fefae0]'
                      }`}
                    >
                      {getModelIcon(model.id)}
                    </div>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl uppercase tracking-tight">
                    {model.name}
                  </h3>
                  <p
                    className={`mt-1 text-xs truncate ${
                      isSelected ? 'text-[#01472e]/80 font-medium' : 'text-[#ccd5ae]/70'
                    }`}
                  >
                    {model.title}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-[10px] font-bold uppercase tracking-ultra flex items-center justify-between ${
                    isSelected ? 'border-[#01472e]/20 text-[#01472e]' : 'border-[#ccd5ae]/15 text-[#ccd5ae]/60'
                  }`}
                >
                  <span>{isSelected ? 'ACTIVE' : 'SELECT'}</span>
                  <span>&rarr;</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Model Spotlight Card */}
        <div className="rounded-[2.5rem] bg-[#023825] border border-[#ccd5ae]/20 p-6 sm:p-10 shadow-forest relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#ccd5ae] text-[#01472e] text-xs font-mono font-black rounded-full">
                  MODEL {activeModel.number}
                </span>
                <span className="text-xs font-bold uppercase tracking-wide-label text-[#ccd5ae]">
                  {activeModel.title}
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#fefae0]">
                  {activeModel.name} &mdash; <span className="text-[#ccd5ae]">{activeModel.title}</span>
                </h3>
                <p className="mt-2 text-base text-[#fefae0]/90 font-normal">
                  {activeModel.description}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-[#ccd5ae]/80">
                  {activeModel.subtitle}
                </p>
              </div>

              {/* Best For Box */}
              <div className="p-4 rounded-[1.5rem] bg-[#01472e] border border-[#ccd5ae]/20 text-xs text-[#fefae0]">
                <span className="font-bold text-[#ccd5ae] uppercase tracking-wide">Recommended for: </span>
                <span>{activeModel.bestFor}</span>
              </div>

              {/* Verified Process Points */}
              <div className="space-y-2.5">
                <p className="text-[10px] font-bold uppercase tracking-ultra text-[#ccd5ae]">
                  Execution Workflow:
                </p>
                {activeModel.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#fefae0]">
                    <span className="w-5 h-5 rounded-full bg-[#ccd5ae] text-[#01472e] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectModel(activeModel)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#fefae0] text-[#01472e] hover:bg-[#ccd5ae] rounded-full text-xs font-bold uppercase tracking-ultra shadow-forest transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <span>INQUIRE FOR {activeModel.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Summary Panel */}
            <div className="lg:col-span-5 bg-[#01472e] rounded-[2rem] p-6 sm:p-8 border border-[#ccd5ae]/25 shadow-forest space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wide-label text-[#ccd5ae] border-b border-[#ccd5ae]/20 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ccd5ae]" />
                <span>DEPLOYMENT OVERVIEW</span>
              </h4>

              <div className="space-y-3.5 text-xs">
                <div>
                  <p className="text-[#ccd5ae]/70 font-bold uppercase tracking-ultra text-[9px]">Classification</p>
                  <p className="text-[#fefae0] font-bold text-sm mt-0.5">{activeModel.name}</p>
                </div>
                <div>
                  <p className="text-[#ccd5ae]/70 font-bold uppercase tracking-ultra text-[9px]">Core Purpose</p>
                  <p className="text-[#fefae0]/90 font-medium mt-0.5">{activeModel.description}</p>
                </div>
                <div>
                  <p className="text-[#ccd5ae]/70 font-bold uppercase tracking-ultra text-[9px]">HR Support Level</p>
                  <p className="text-[#fefae0]/80 font-normal mt-0.5 leading-relaxed">
                    End-to-end talent sourcing, documentation, coordination, and onboarding oversight.
                  </p>
                </div>
                <div>
                  <p className="text-[#ccd5ae]/70 font-bold uppercase tracking-ultra text-[9px]">Headquarters Hub</p>
                  <p className="text-[#fefae0] font-bold mt-0.5">
                    Wadala, Mumbai &bull; Pan-India Deployments
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-[#ccd5ae]/15 border border-[#ccd5ae]/20 rounded-xl text-xs text-[#fefae0] font-normal leading-relaxed">
                Need customized terms or hybrid models? SkillTech structures multi-tier staffing according to your exact capacity specifications.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
