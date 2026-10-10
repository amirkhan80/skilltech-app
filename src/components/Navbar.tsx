import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { SkillTechLogo } from './SkillTechLogo.tsx';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        'hero',
        'about',
        'services',
        'workforce-solutions',
        'how-we-work',
        'ecosystem',
        'why-skilltech',
        'careers',
        'contact',
      ];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'MODELS', href: '#workforce-solutions', id: 'workforce-solutions' },
    { label: 'WORKFLOW', href: '#how-we-work', id: 'how-we-work' },
    { label: 'ECOSYSTEM', href: '#ecosystem', id: 'ecosystem' },
    { label: 'CAREERS', href: '#careers', id: 'careers' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onOpenContact) {
      onOpenContact();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Fixed Top Navigation - NO announcement bar (removed as requested) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#fefae0]/85 backdrop-blur-xl shadow-forest-sm border-b border-[#01472e]/10'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Logo in bold uppercase with a hyphen prefix */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hero');
              }}
              className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01472e] rounded-full"
              aria-label="SkillTech Home"
            >
              <SkillTechLogo />
            </a>

            {/* Center: Pill-shaped navigation bar with blur and semi-transparent background */}
            <nav
              className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#01472e]/8 backdrop-blur-xl border border-[#01472e]/15 shadow-sm"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-ultra uppercase transition-all duration-200 ${
                      isActive
                        ? 'bg-[#01472e] text-[#fefae0] shadow-sm'
                        : 'text-[#01472e] hover:bg-[#01472e]/10'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Cart / Contact Pill Button with counter / status */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#01472e] text-[#fefae0] hover:bg-[#01472e]/90 text-[10px] font-bold uppercase tracking-ultra shadow-forest-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>TALK TO US</span>
                <span className="w-5 h-5 rounded-full bg-[#ccd5ae] text-[#01472e] text-[9px] font-extrabold flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3 h-3 stroke-[3]" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-[#01472e]/10 text-[#01472e] hover:bg-[#01472e]/15 transition-colors focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="fixed inset-0 bg-[#01472e]/60 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        <nav
          className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#fefae0] p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out z-50 rounded-l-[2.5rem] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile Navigation"
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-[#01472e]/15">
              <SkillTechLogo />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#01472e] rounded-full hover:bg-[#01472e]/10"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-ultra transition-all ${
                      isActive
                        ? 'bg-[#01472e] text-[#fefae0]'
                        : 'text-[#01472e] hover:bg-[#01472e]/8'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#ccd5ae]" />}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-[#01472e]/15 space-y-3">
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#01472e] text-[#fefae0] text-xs font-bold uppercase tracking-ultra shadow-forest-sm"
            >
              <span>TALK TO US</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] uppercase font-bold tracking-wider text-[#01472e]/70">
              Wadala, Mumbai &bull; Est. 2020
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};
