import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.tsx';

interface DetailedWorkforceSectionProps {
  onSelectModelForContact: (modelName: string) => void;
}

export const DetailedWorkforceSection: React.FC<DetailedWorkforceSectionProps> = ({
  onSelectModelForContact,
}) => {
  return (
    <section className="py-20 sm:py-24 bg-[#ccd5ae] text-[#01472e] rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-20 shadow-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Execution Frameworks"
          title="In-Depth Workforce Models"
          subtitle="Specific, transparent workflows tailored to meet diverse enterprise manpower and engagement requirements."
          alignment="center"
        />

        <div className="space-y-6 sm:space-y-8">
          {/* 01 On-Roll Hiring */}
          <div
            id="model-on-roll"
            className="rounded-[2.5rem] bg-[#fefae0] border border-[#01472e]/15 p-6 sm:p-8 shadow-forest-sm hover:shadow-forest transition-snappy"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#01472e] uppercase tracking-ultra">
                  <span className="w-5 h-[2px] bg-[#01472e] inline-block" />
                  <span>01 &bull; ON-ROLL HIRING</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e]">
                  LONG-TERM MANPOWER REQUIREMENTS
                </h3>
                <p className="text-xs sm:text-sm text-[#01472e]/80 leading-relaxed">
                  Permanent employment for continuing organizational roles. Designed for strategic core positions requiring dedicated long-term talent retention.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectModelForContact('On-Roll Hiring')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-ultra text-[#01472e] hover:underline cursor-pointer"
                  >
                    <span>REQUEST ON-ROLL TALENT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 bg-[#e9edc9]/60 rounded-[2rem] p-5 sm:p-6 border border-[#01472e]/15">
                <p className="text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-3">
                  Step-by-Step Delivery Process:
                </p>
                <ol className="space-y-2.5">
                  {[
                    'Understand role, skills, experience, location and budget.',
                    'Source candidates through relevant recruitment channels.',
                    'Screen and shortlist against the requirement.',
                    'Coordinate interviews, feedback and selection.',
                    'Support offer communication, documentation and joining.',
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#01472e]">
                      <span className="w-5 h-5 rounded-full bg-[#01472e] text-[#fefae0] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* 02 Off-Roll Staffing */}
          <div
            id="model-off-roll"
            className="rounded-[2.5rem] bg-[#fefae0] border border-[#01472e]/15 p-6 sm:p-8 shadow-forest-sm hover:shadow-forest transition-snappy"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#01472e] uppercase tracking-ultra">
                  <span className="w-5 h-[2px] bg-[#01472e] inline-block" />
                  <span>02 &bull; OFF-ROLL STAFFING</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e]">
                  FLEXIBLE CLIENT WORKFORCE
                </h3>
                <p className="text-xs sm:text-sm text-[#01472e]/80 leading-relaxed">
                  External staffing structure adapted for rapid headcount scaling, outsourced operational shifts, and minimal administrative friction.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectModelForContact('Off-Roll Staffing')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-ultra text-[#01472e] hover:underline cursor-pointer"
                  >
                    <span>REQUEST OFF-ROLL STAFFING</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 bg-[#e9edc9]/60 rounded-[2rem] p-5 sm:p-6 border border-[#01472e]/15">
                <p className="text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-3">
                  Operational Coordination Process:
                </p>
                <ol className="space-y-2.5">
                  {[
                    'Capture client role, skill, location, shift and deployment needs.',
                    'Source, shortlist and deploy suitable candidates.',
                    'Maintain client and deployed workforce coordination.',
                    'Support attendance, documentation and payroll inputs as applicable.',
                    'Handle workforce queries and ongoing coordination.',
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#01472e]">
                      <span className="w-5 h-5 rounded-full bg-[#01472e] text-[#fefae0] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* 03 Short-Term Projects */}
          <div
            id="model-short-term"
            className="rounded-[2.5rem] bg-[#fefae0] border border-[#01472e]/15 p-6 sm:p-8 shadow-forest-sm hover:shadow-forest transition-snappy"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#01472e] uppercase tracking-ultra">
                  <span className="w-5 h-[2px] bg-[#01472e] inline-block" />
                  <span>03 &bull; SHORT-TERM PROJECTS</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e]">
                  TIME-BOUND TALENT SOLUTIONS
                </h3>
                <p className="text-xs sm:text-sm text-[#01472e]/80 leading-relaxed">
                  Talent for time-bound assignments, sprints, and deliverables. Rapid mobilization of specialized skills without long-term overhead obligations.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectModelForContact('Short-Term Projects')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-ultra text-[#01472e] hover:underline cursor-pointer"
                  >
                    <span>DEPLOY PROJECT TALENT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 bg-[#e9edc9]/60 rounded-[2rem] p-5 sm:p-6 border border-[#01472e]/15">
                <p className="text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-3">
                  Key Scope Specifications:
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Defined project scope and deliverables.',
                    'Specific start and end period.',
                    'Quick talent deployment.',
                    'Suitable for temporary capacity requirements.',
                    'Useful for specialized project support.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#01472e]">
                      <CheckCircle2 className="w-4 h-4 text-[#01472e] shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 04 Contractual Jobs */}
          <div
            id="model-contractual"
            className="rounded-[2.5rem] bg-[#fefae0] border border-[#01472e]/15 p-6 sm:p-8 shadow-forest-sm hover:shadow-forest transition-snappy"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#01472e] uppercase tracking-ultra">
                  <span className="w-5 h-[2px] bg-[#01472e] inline-block" />
                  <span>04 &bull; CONTRACTUAL JOBS</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e]">
                  FIXED-TERM &amp; ASSIGNMENT ROLES
                </h3>
                <p className="text-xs sm:text-sm text-[#01472e]/80 leading-relaxed">
                  Defined duration, role and engagement terms. High clarity for both enterprise deliverables and specialized professional agreements.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectModelForContact('Contractual Jobs')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-ultra text-[#01472e] hover:underline cursor-pointer"
                  >
                    <span>HIRE CONTRACT SPECIALISTS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 bg-[#e9edc9]/60 rounded-[2rem] p-5 sm:p-6 border border-[#01472e]/15">
                <p className="text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-3">
                  Engagement Framework:
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Defined role and engagement duration.',
                    'Clear terms and responsibilities.',
                    'Role-specific candidate matching.',
                    'Joining and documentation support.',
                    'HR coordination during the assignment.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#01472e]">
                      <CheckCircle2 className="w-4 h-4 text-[#01472e] shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 05 Internship Hiring */}
          <div
            id="model-internships"
            className="rounded-[2.5rem] bg-[#fefae0] border border-[#01472e]/15 p-6 sm:p-8 shadow-forest-sm hover:shadow-forest transition-snappy"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#01472e] uppercase tracking-ultra">
                  <span className="w-5 h-[2px] bg-[#01472e] inline-block" />
                  <span>05 &bull; INTERNSHIP HIRING</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e]">
                  EARLY-CAREER TALENT PIPELINE
                </h3>
                <p className="text-xs sm:text-sm text-[#01472e]/80 leading-relaxed">
                  Practical exposure and future talent pipeline. Channel motivated students and fresh graduates into monitored corporate projects.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectModelForContact('Internship Hiring')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-ultra text-[#01472e] hover:underline cursor-pointer"
                  >
                    <span>BUILD INTERNSHIP COHORT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 bg-[#e9edc9]/60 rounded-[2rem] p-5 sm:p-6 border border-[#01472e]/15">
                <p className="text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-3">
                  Talent Incubation Pathway:
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Define department, skills, duration and learning objectives.',
                    'Source students and fresh talent.',
                    'Coordinate selection and joining.',
                    'Allocate interns to practical projects.',
                    'Support progress, feedback and completion.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#01472e]">
                      <CheckCircle2 className="w-4 h-4 text-[#01472e] shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
