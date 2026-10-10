import React from 'react';
import { Check } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import aboutImage from '../assets/images/about_workforce_collaboration_1791022688199.jpg';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: 'Industry-Specific Skill Focus',
      description: 'Aligning talent capabilities directly with operational and domain requirements across commercial sectors.',
    },
    {
      title: 'Flexible Employment Frameworks',
      description: 'Offering on-roll, off-roll, short-term, contractual, and internship models tailored to immediate and long-range goals.',
    },
    {
      title: 'Comprehensive Business Consulting',
      description: 'Bridging human resource execution with broader enterprise support, turnkey projects, and specialized services.',
    },
    {
      title: 'Headquartered in Wadala, Mumbai',
      description: 'Founded in 2020, serving expanding enterprises through a collaborative network of 284+ associated members.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#fefae0] text-[#01472e] rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-20 shadow-forest overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Professional Visual Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-forest border-4 border-[#e9edc9] bg-[#ccd5ae] group">
              <img
                src={aboutImage}
                alt="SkillTech team collaborating in a modern corporate Mumbai office"
                className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Badge Frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#01472e]/90 via-[#01472e]/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="bg-[#fefae0]/95 backdrop-blur-md rounded-[1.8rem] p-4 border border-[#01472e]/15 shadow-sm text-[#01472e]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#01472e]" />
                    <p className="text-[10px] uppercase tracking-wide-label font-bold text-[#01472e]">
                      CULTURE &bull; PURPOSE
                    </p>
                  </div>
                  <p className="text-sm font-bold text-[#01472e] mt-1 font-display uppercase tracking-tight">
                    &ldquo;A Culture of Collaboration, Growth and Impact&rdquo;
                  </p>
                  <p className="text-[11px] text-[#01472e]/70 mt-0.5">
                    Good People &bull; Great Work &bull; A Brighter Tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              kicker="About SkillTech"
              title="Connecting Talent with Opportunities"
              subtitle="SkillTech is a modern business consulting and HR workforce solutions provider founded in 2020 and headquartered in Wadala, Mumbai, Maharashtra."
            />

            <div className="text-[#01472e] text-base leading-relaxed space-y-3.5">
              <p>
                Operating with a core team size of <strong className="font-bold">51–200</strong> and an active network of <strong className="font-bold">284+ associated members</strong>, SkillTech supports organizations across sectors with adaptable talent strategies that match dynamic commercial demands.
              </p>
              <p className="text-[#01472e]/80">
                Whether enterprises require long-term on-roll executives, scalable off-roll project staff, immediate milestone contractors, or emerging early-career talent, SkillTech provides structured, compliant, and end-to-end recruitment support.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-[2rem] bg-[#e9edc9]/50 border border-[#01472e]/15 transition-all duration-300 hover:bg-[#ccd5ae]/40 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#01472e] text-[#fefae0] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#01472e]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-[#01472e]/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
