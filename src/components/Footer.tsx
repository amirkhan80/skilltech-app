import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Shield, FileText, Mail, MapPin } from 'lucide-react';
import { SkillTechLogo } from './SkillTechLogo.tsx';
import { COMPANY_INFO } from '../data/companyData.ts';

interface FooterProps {
  onOpenGoDaddyGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGoDaddyGuide }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'CORE SERVICES', href: '#services' },
    { label: 'WORKFORCE MODELS', href: '#workforce-solutions' },
    { label: '8-STAGE WORKFLOW', href: '#how-we-work' },
    { label: 'ECOSYSTEM', href: '#ecosystem' },
    { label: 'CAREERS', href: '#careers' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'ON-ROLL HIRING', href: '#workforce-solutions' },
    { label: 'OFF-ROLL STAFFING', href: '#workforce-solutions' },
    { label: 'SHORT-TERM PROJECTS', href: '#workforce-solutions' },
    { label: 'CONTRACTUAL SPECIALISTS', href: '#workforce-solutions' },
    { label: 'INTERNSHIP COHORTS', href: '#workforce-solutions' },
    { label: 'WORKSPACE SOLUTIONS', href: '#ecosystem' },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 4000);
    }
  };

  return (
    <footer className="bg-[#01472e] text-[#ccd5ae] pt-16 pb-10 rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-30 shadow-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Structure: 12-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#ccd5ae]/20">
          {/* Left 6 cols: Large newsletter signup with uppercase underline-only input field */}
          <div className="lg:col-span-6 space-y-6">
            <SkillTechLogo theme="dark" showTagline />

            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#fefae0]">
                STAY CONNECTED WITH OUR TALENT ADVISORY
              </h3>
              <p className="text-xs sm:text-sm text-[#ccd5ae]/80 max-w-md leading-relaxed">
                Receive curated market intelligence on hiring cycles, executive availability, and employment frameworks across India.
              </p>
            </div>

            {/* Uppercase underline-only input field as requested */}
            <form onSubmit={handleNewsletterSubmit} className="pt-2 max-w-md">
              <div className="flex items-center border-b-2 border-[#ccd5ae] pb-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="ENTER CORPORATE EMAIL ADDRESS"
                  className="w-full bg-transparent text-xs uppercase tracking-wide-label text-[#fefae0] placeholder:text-[#ccd5ae]/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#fefae0] text-[#01472e] hover:bg-[#ccd5ae] rounded-full text-[10px] font-bold uppercase tracking-ultra shrink-0 transition-all cursor-pointer"
                >
                  SUBSCRIBE
                </button>
              </div>
              {newsletterSubmitted && (
                <p className="text-xs text-[#fefae0] mt-2 font-bold tracking-wide">
                  Thank you! You are subscribed to SkillTech briefings.
                </p>
              )}
            </form>

            {/* Official Headquarters Address & Email */}
            <div className="pt-4 space-y-2 text-xs text-[#ccd5ae]/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#fefae0] shrink-0 mt-0.5" />
                <span className="font-medium text-[#fefae0]">
                  Dosti Shoppe Link, 2nd Floor, Office No. 23, Wadala, Mumbai – 400037
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#fefae0] shrink-0" />
                <a
                  href="mailto:skilltechc2c@gmail.com"
                  className="font-bold text-[#fefae0] hover:underline"
                >
                  skilltechc2c@gmail.com
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenGoDaddyGuide}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#fefae0]/10 border border-[#ccd5ae]/30 text-[10px] font-bold uppercase tracking-ultra text-[#ccd5ae] hover:text-[#fefae0] transition-colors cursor-pointer"
              >
                <span>GODADDY DOMAIN &amp; DNS GUIDE</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right 6 cols: Two columns of links using bold, tracked-out 11px uppercase text */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Nav Column 1 */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wide-label text-[#fefae0] mb-4 border-b border-[#ccd5ae]/20 pb-2">
                NAVIGATION
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[11px] font-bold uppercase tracking-ultra text-[#ccd5ae] hover:text-[#fefae0] transition-colors inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav Column 2 */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wide-label text-[#fefae0] mb-4 border-b border-[#ccd5ae]/20 pb-2">
                WORKFORCE TIERS
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[11px] font-bold uppercase tracking-ultra text-[#ccd5ae] hover:text-[#fefae0] transition-colors inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-4 border-t border-[#ccd5ae]/20">
                <p className="text-[10px] font-bold uppercase tracking-ultra text-[#ccd5ae]/70">
                  ESTABLISHED 2020 &bull; MUMBAI
                </p>
                <p className="text-xs text-[#fefae0] mt-1 font-medium">
                  51–200 Team &bull; 284+ Associated Members
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright and legal links with 30% opacity as requested */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ccd5ae]/30">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#ccd5ae] transition-colors uppercase tracking-ultra text-[10px] font-bold cursor-pointer"
            >
              PRIVACY POLICY
            </button>
            <span>&bull;</span>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#ccd5ae] transition-colors uppercase tracking-ultra text-[10px] font-bold cursor-pointer"
            >
              TERMS &amp; CONDITIONS
            </button>
            <span>&bull;</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#ccd5ae] transition-colors uppercase tracking-ultra text-[10px] font-bold cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy / Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01472e]/80 backdrop-blur-md">
          <div className="bg-[#fefae0] border border-[#01472e]/20 rounded-[2.5rem] max-w-lg w-full p-6 sm:p-8 text-[#01472e] shadow-forest max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#01472e]/15">
              <h3 className="font-display text-xl uppercase tracking-tight text-[#01472e] flex items-center gap-2">
                {legalModal === 'privacy' ? (
                  <>
                    <Shield className="w-5 h-5" />
                    <span>Privacy Policy</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5" />
                    <span>Terms &amp; Conditions</span>
                  </>
                )}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="w-8 h-8 rounded-full bg-[#01472e]/10 text-[#01472e] flex items-center justify-center hover:bg-[#01472e]/20 cursor-pointer"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs text-[#01472e]/85 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>SkillTech</strong> is committed to protecting the privacy of our clients, candidates, and website visitors in accordance with applicable laws in India.
                  </p>
                  <p>
                    <strong>Information Collection:</strong> We collect contact details, corporate requirements, and candidate profiles strictly submitted through our contact forms and inquiry channels.
                  </p>
                  <p>
                    <strong>Contact:</strong> For privacy inquiries, email <span className="font-bold">skilltechc2c@gmail.com</span> or visit our headquarters at Dosti Shoppe Link, 2nd Floor, Office No. 23, Wadala, Mumbai – 400037.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to the <strong>SkillTech</strong> corporate portal. By accessing or using this website, you agree to comply with and be bound by these terms.
                  </p>
                  <p>
                    <strong>Services Overview:</strong> SkillTech provides HR and workforce solutions, including on-roll hiring, off-roll staffing, short-term projects, contractual roles, and early-career internship facilitation.
                  </p>
                  <p>
                    <strong>Jurisdiction:</strong> Governed by the laws of India with jurisdiction in Mumbai, Maharashtra.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-[#01472e]/15 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-6 py-2.5 bg-[#01472e] text-[#fefae0] rounded-full text-xs font-bold uppercase tracking-ultra"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
