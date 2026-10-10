import React from 'react';
import { ArrowUpRight, Sparkles, Compass } from 'lucide-react';
import heroImage from '../assets/images/hero_corporate_workforce_1791022671886.jpg';
import aboutImage from '../assets/images/about_workforce_collaboration_1791022688199.jpg';
import { COMPANY_INFO } from '../data/companyData.ts';

interface HeroSectionProps {
  onTalkToUs: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onTalkToUs,
  onExploreSolutions,
}) => {
  const letters = 'SKILLTECH'.split('');

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#ccd5ae] text-[#01472e] overflow-hidden flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#01472e]/10 border border-[#01472e]/20 text-[10px] sm:text-xs font-bold uppercase tracking-ultra">
            <span className="w-1.5 h-1.5 rounded-full bg-[#01472e]" />
            <span>EXECUTIVE WORKFORCE &bull; MUMBAI, INDIA</span>
          </div>

          <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-ultra text-[#01472e]/70">
            EST. 2020 &bull; 284+ ASSOCIATED MEMBERS
          </span>
        </div>

        {/* Centerpiece: Massive 'Anton' Display Text (23vw / fluid font size) */}
        <div className="relative py-2 sm:py-6 select-none overflow-visible">
          <h1
            className="font-display text-[19vw] sm:text-[21vw] lg:text-[22vw] text-[#01472e] tracking-tight leading-[0.78] uppercase text-center sm:text-left flex flex-wrap justify-center sm:justify-start"
            style={{ letterSpacing: '-0.05em' }}
          >
            {letters.map((char, index) => (
              <span
                key={index}
                className="inline-block transition-transform hover:-translate-y-2 duration-300"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {char}
              </span>
            ))}
          </h1>

          {/* Floating Organic Image 1 (Top Right) */}
          <div className="hidden md:block absolute -top-8 right-0 lg:right-6 w-56 lg:w-72 aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-forest border-4 border-[#fefae0] animate-float z-20">
            <img
              src={heroImage}
              alt="SkillTech corporate boardroom"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[#01472e]/15 mix-blend-multiply pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 bg-[#fefae0]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-ultra text-[#01472e] flex items-center justify-between">
              <span>MUMBAI HQ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#01472e]" />
            </div>
          </div>

          {/* Floating Organic Image 2 (Bottom Left / Center) */}
          <div className="hidden lg:block absolute -bottom-10 right-80 w-44 aspect-square rounded-[2.5rem] overflow-hidden shadow-forest border-4 border-[#fefae0] animate-float-reverse z-20">
            <img
              src={aboutImage}
              alt="Team collaboration"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[#01472e]/10 pointer-events-none" />
          </div>
        </div>

        {/* Subhead and Action Row */}
        <div className="mt-8 pt-6 border-t border-[#01472e]/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Left Column: Descriptive text */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-block text-xs font-black uppercase tracking-wide-label text-[#01472e]">
              &mdash; {COMPANY_INFO.heroHeadline}
            </div>
            <p className="text-base sm:text-lg lg:text-xl font-normal text-[#01472e] leading-snug max-w-xl">
              From Boardroom to Frontline &mdash; Flexible talent models for changing business needs. Connecting talent, projects, and business opportunities across India.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onTalkToUs}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#01472e] text-[#fefae0] text-xs font-bold uppercase tracking-ultra shadow-forest hover:bg-[#01472e]/90 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>INITIATE HIRING</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreSolutions}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#fefae0] text-[#01472e] border border-[#01472e]/20 text-xs font-bold uppercase tracking-ultra hover:bg-[#e9edc9] transition-all cursor-pointer"
              >
                <span>5 DEPLOYMENT MODELS</span>
              </button>
            </div>
          </div>

          {/* Right Column: Location / Origin Labels */}
          <div className="md:col-span-5 flex flex-col justify-end space-y-3 md:text-right">
            <div className="text-[10px] font-bold uppercase tracking-wide-label text-[#01472e]/70">
              OFFICE HEADQUARTERS
            </div>
            <div className="text-sm sm:text-base font-bold text-[#01472e]">
              {COMPANY_INFO.address}
            </div>
            <div className="flex md:justify-end items-center gap-3 text-xs font-bold tracking-ultra text-[#01472e]">
              <span className="px-3 py-1 rounded-full bg-[#fefae0]/80 border border-[#01472e]/15">
                ON-ROLL
              </span>
              <span className="px-3 py-1 rounded-full bg-[#fefae0]/80 border border-[#01472e]/15">
                OFF-ROLL
              </span>
              <span className="px-3 py-1 rounded-full bg-[#fefae0]/80 border border-[#01472e]/15">
                CONTRACTUAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
