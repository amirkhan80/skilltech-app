import React, { useState } from 'react';
import { X, CheckCircle, ArrowUpRight } from 'lucide-react';

interface CareerApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareerApplyModal: React.FC<CareerApplyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredModel: 'On-Roll Hiring',
    skills: '',
    experienceLevel: 'Fresher / Early-Career',
    portfolioOrLinkedin: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid contact phone number';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredModel: 'On-Roll Hiring',
      skills: '',
      experienceLevel: 'Fresher / Early-Career',
      portfolioOrLinkedin: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01472e]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-[#fefae0] border border-[#01472e]/20 rounded-[2.5rem] max-w-xl w-full p-6 sm:p-8 shadow-forest my-8 text-[#01472e] max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-[#01472e]/15">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wide-label text-[#01472e]/70">
              CANDIDATE INTAKE
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e] mt-0.5">
              JOIN THE TALENT NETWORK
            </h3>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-[#01472e]/10 text-[#01472e] hover:bg-[#01472e]/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 bg-[#01472e] text-[#fefae0] rounded-full flex items-center justify-center mx-auto shadow-forest">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-display text-2xl uppercase tracking-tight text-[#01472e]">
              APPLICATION RECEIVED
            </h4>
            <p className="text-xs sm:text-sm text-[#01472e]/80 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Your profile has been added to SkillTech’s Mumbai talent registry. Our advisory team will reach out for matching requirements.
            </p>
            <p className="text-xs text-[#01472e]/70">
              For direct queries, write to: <span className="font-bold underline">skilltechc2c@gmail.com</span>
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-8 py-3 bg-[#01472e] text-[#fefae0] rounded-full text-xs font-bold uppercase tracking-ultra shadow-forest"
              >
                DONE
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-full border border-[#01472e]/20 text-xs sm:text-sm text-[#01472e] bg-[#e9edc9]/50 focus:outline-none focus:ring-2 focus:ring-[#01472e]"
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-700 mt-1 font-semibold">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="rahul@example.com"
                  className="w-full px-4 py-2.5 rounded-full border border-[#01472e]/20 text-xs sm:text-sm text-[#01472e] bg-[#e9edc9]/50 focus:outline-none focus:ring-2 focus:ring-[#01472e]"
                />
                {errors.email && (
                  <p className="text-[11px] text-red-700 mt-1 font-semibold">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-full border border-[#01472e]/20 text-xs sm:text-sm text-[#01472e] bg-[#e9edc9]/50 focus:outline-none focus:ring-2 focus:ring-[#01472e]"
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-700 mt-1 font-semibold">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1">
                  Preferred Model
                </label>
                <select
                  value={formData.preferredModel}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredModel: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-full border border-[#01472e]/20 text-xs sm:text-sm text-[#01472e] bg-[#e9edc9]/50 focus:outline-none focus:ring-2 focus:ring-[#01472e]"
                >
                  <option value="On-Roll Hiring">On-Roll (Permanent)</option>
                  <option value="Off-Roll Staffing">Off-Roll Staffing</option>
                  <option value="Short-Term Projects">Short-Term Projects</option>
                  <option value="Contractual Jobs">Contractual Jobs</option>
                  <option value="Internship Hiring">Internship Programs</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1">
                  Experience Level
                </label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, experienceLevel: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-full border border-[#01472e]/20 text-xs sm:text-sm text-[#01472e] bg-[#e9edc9]/50 focus:outline-none focus:ring-2 focus:ring-[#01472e]"
                >
                  <option value="Fresher / Early-Career">Fresher / Student (0–1 yrs)</option>
                  <option value="Mid-Level Professional">Mid-Level Professional (2–5 yrs)</option>
                  <option value="Senior Specialist">Senior Specialist (5–10 yrs)</option>
                  <option value="Executive / Leadership">Executive / Leadership (10+ yrs)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.portfolioOrLinkedin}
                  onChange={(e) =>
                    setFormData({ ...formData, portfolioOrLinkedin: e.target.value })
                  }
                  placeholder="https://linkedin.com/in/..."
                  className="w-full px-4 py-2.5 rounded-full border border-[#01472e]/20 text-xs sm:text-sm text-[#01472e] bg-[#e9edc9]/50 focus:outline-none focus:ring-2 focus:ring-[#01472e]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1">
                Primary Skills &amp; Domain
              </label>
              <input
                type="text"
                value={formData.skills}
                onChange={(e) =>
                  setFormData({ ...formData, skills: e.target.value })
                }
                placeholder="e.g. Sales, Operations, Engineering, Accounting, Design"
                className="w-full px-4 py-2.5 rounded-full border border-[#01472e]/20 text-xs sm:text-sm text-[#01472e] bg-[#e9edc9]/50 focus:outline-none focus:ring-2 focus:ring-[#01472e]"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#01472e]/15">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-5 py-2 text-xs font-bold uppercase tracking-ultra text-[#01472e]/70 hover:text-[#01472e] cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#01472e] text-[#fefae0] hover:bg-[#01472e]/90 rounded-full text-xs font-bold uppercase tracking-ultra cursor-pointer shadow-forest transition-all"
              >
                <span>SUBMIT PROFILE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
