/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './sections/HeroSection.tsx';
import { SnapshotSection } from './sections/SnapshotSection.tsx';
import { AboutSection } from './sections/AboutSection.tsx';
import { ServicesOverviewSection } from './sections/ServicesOverviewSection.tsx';
import { WorkforceModelsSection } from './sections/WorkforceModelsSection.tsx';
import { DetailedWorkforceSection } from './sections/DetailedWorkforceSection.tsx';
import { ProcessTimelineSection } from './sections/ProcessTimelineSection.tsx';
import { EcosystemSection } from './sections/EcosystemSection.tsx';
import { WhySkillTechSection } from './sections/WhySkillTechSection.tsx';
import { CareersSection } from './sections/CareersSection.tsx';
import { ContactSection } from './sections/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { GoDaddyGuideModal } from './components/GoDaddyGuideModal.tsx';
import { CareerApplyModal } from './components/CareerApplyModal.tsx';
import { WorkforceModel } from './data/companyData.ts';

export default function App() {
  const [isGoDaddyModalOpen, setIsGoDaddyModalOpen] = useState(false);
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] =
    useState('Recruitment & Talent Sourcing');

  const scrollToContact = (service?: string) => {
    if (service) {
      setSelectedServiceForContact(service);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWorkforceSolutions = () => {
    const el = document.getElementById('workforce-solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectModel = (model: WorkforceModel) => {
    scrollToContact(`${model.name} Hiring`);
  };

  return (
    <div className="min-h-screen bg-[#ccd5ae] text-[#01472e] selection:bg-[#01472e] selection:text-[#fefae0] antialiased relative">
      {/* Persistent SVG Fractal Noise Overlay (0.04 opacity across viewport as specified) */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Fixed Header Navigation (Pill-shaped, no red ribbon) */}
      <Navbar onOpenContact={() => scrollToContact()} />

      <main className="relative z-10">
        {/* Hero Section (Sage #ccd5ae background, Anton display text, floating organic cards) */}
        <HeroSection
          onTalkToUs={() => scrollToContact()}
          onExploreSolutions={scrollToWorkforceSolutions}
        />

        {/* Company Snapshot Section (Olive #e9edc9, rounded-t-[5rem]) */}
        <SnapshotSection />

        {/* About SkillTech (Cream #fefae0, rounded-t-[5rem]) */}
        <AboutSection />

        {/* What We Do / Capabilities (Olive #e9edc9, rounded-t-[5rem], Anton header, blur-reveal cards) */}
        <ServicesOverviewSection
          onSelectService={(service) => scrollToContact(service)}
        />

        {/* Workforce Solutions: 5 Interactive Models (Forest #01472e, rounded-t-[5rem]) */}
        <WorkforceModelsSection onSelectModel={handleSelectModel} />

        {/* Detailed Service Sections: 01 to 05 (Sage #ccd5ae, rounded-t-[5rem]) */}
        <DetailedWorkforceSection
          onSelectModelForContact={(model) => scrollToContact(model)}
        />

        {/* How We Work: 8-Step Timeline (Cream #fefae0, rounded-t-[5rem]) */}
        <ProcessTimelineSection onStartProcess={() => scrollToContact()} />

        {/* Service Ecosystem: 12 Services Bento Grid (Olive #e9edc9, rounded-t-[5rem]) */}
        <EcosystemSection
          onSelectEcosystemService={(service) => scrollToContact(service)}
        />

        {/* Why SkillTech? (Sage #ccd5ae, rounded-t-[5rem]) */}
        <WhySkillTechSection />

        {/* Careers Section (Forest #01472e, rounded-t-[5rem]) */}
        <CareersSection
          onExploreOpportunities={() => setIsCareerModalOpen(true)}
        />

        {/* Contact Section (Cream #fefae0, rounded-t-[5rem], Wadala address & skilltechc2c@gmail.com) */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* Footer (Forest #01472e, rounded-t-[5rem], 12-col grid with underline newsletter) */}
      <Footer onOpenGoDaddyGuide={() => setIsGoDaddyModalOpen(true)} />

      {/* Production & GoDaddy Domain Setup Modal */}
      <GoDaddyGuideModal
        isOpen={isGoDaddyModalOpen}
        onClose={() => setIsGoDaddyModalOpen(false)}
      />

      {/* Candidate Profile / Career Opportunities Modal */}
      <CareerApplyModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
      />
    </div>
  );
}
