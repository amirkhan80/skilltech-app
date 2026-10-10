import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Building2, MapPin, Mail, Phone } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { COMPANY_INFO } from '../data/companyData.ts';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Recruitment',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: initialService,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const serviceOptions = [
    'Recruitment & Talent Sourcing',
    'On-Roll Hiring',
    'Off-Roll Staffing',
    'Short-Term Projects',
    'Contractual Jobs',
    'Internship Hiring',
    'Workspace Solutions',
    'Other Enterprise Support',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    if (!formData.companyName.trim()) {
      errs.companyName = 'Company Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Corporate email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone)) {
      errs.phone = 'Please provide a valid contact phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your requirement';
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
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceRequired: 'Recruitment & Talent Sourcing',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#fefae0] text-[#01472e] rounded-t-[3.5rem] sm:rounded-t-[5rem] -mt-10 sm:-mt-14 relative z-20 shadow-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Context & Headquarters Info with exact Address and Email */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              kicker="Contact Us"
              title="Let's Connect"
              subtitle="Tell us about your workforce requirement or business opportunity."
            />

            <div className="space-y-4 text-sm text-[#01472e]">
              <div className="p-6 rounded-[2.5rem] bg-[#e9edc9]/70 border border-[#01472e]/15 space-y-4 shadow-forest-sm">
                {/* Official Headquarters Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#01472e] text-[#fefae0] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase tracking-tight text-[#01472e]">
                      Headquarters Address
                    </h4>
                    <p className="mt-1 text-sm font-medium text-[#01472e] leading-snug">
                      Dosti Shoppe Link, 2nd Floor, Office No. 23, Wadala, Mumbai – 400037
                    </p>
                    <p className="text-[11px] text-[#01472e]/70 mt-1 uppercase font-bold tracking-wide">
                      Maharashtra, India &bull; Est. {COMPANY_INFO.founded}
                    </p>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-[#01472e]/15">
                  <div className="w-10 h-10 rounded-full bg-[#01472e] text-[#fefae0] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase tracking-tight text-[#01472e]">
                      Email Inquiries
                    </h4>
                    <a
                      href="mailto:skilltechc2c@gmail.com"
                      className="mt-0.5 inline-block text-sm font-bold text-[#01472e] hover:underline"
                    >
                      skilltechc2c@gmail.com
                    </a>
                    <p className="text-[11px] text-[#01472e]/70 mt-0.5">
                      Direct inbox for client workforce requirements &amp; consultations
                    </p>
                  </div>
                </div>

                {/* Company Capacity */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-[#01472e]/15">
                  <div className="w-10 h-10 rounded-full bg-[#01472e] text-[#fefae0] flex items-center justify-center shrink-0 shadow-sm">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase tracking-tight text-[#01472e]">
                      Network Scale
                    </h4>
                    <p className="mt-0.5 text-xs sm:text-sm text-[#01472e]/85">
                      51–200 Core Team &bull; 284+ Associated Members
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-[1.8rem] bg-[#ccd5ae]/40 border border-[#01472e]/15 text-xs text-[#01472e] leading-relaxed">
                <strong className="font-bold">Rapid Response:</strong> Requirement intake and candidate shortlisting coordination typically initiate within 24 to 48 hours for verified enterprise engagements.
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#e9edc9]/70 border border-[#01472e]/15 rounded-[2.5rem] p-6 sm:p-9 shadow-forest relative overflow-hidden">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#01472e] text-[#fefae0] rounded-full flex items-center justify-center mx-auto shadow-forest">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e]">
                    ENQUIRY SUBMITTED SUCCESSFULLY
                  </h3>
                  <p className="text-sm text-[#01472e]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding{' '}
                    <span className="font-bold underline">{formData.serviceRequired}</span>{' '}
                    for <strong>{formData.companyName}</strong> has been received by our Wadala, Mumbai operations team.
                  </p>
                  <p className="text-xs text-[#01472e]/70">
                    A confirmation has been logged for <span className="font-bold">skilltechc2c@gmail.com</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-8 py-3 bg-[#01472e] text-[#fefae0] hover:bg-[#01472e]/90 rounded-full text-xs font-bold uppercase tracking-ultra shadow-forest transition-all cursor-pointer"
                    >
                      SUBMIT ANOTHER REQUIREMENT
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1"
                      >
                        Full Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Anand Verma"
                        className={`w-full px-4 py-3 rounded-full border text-xs sm:text-sm text-[#01472e] bg-[#fefae0] placeholder:text-[#01472e]/40 focus:outline-none focus:ring-2 focus:ring-[#01472e] transition-colors ${
                          errors.fullName ? 'border-red-600 bg-red-50' : 'border-[#01472e]/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-700 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1"
                      >
                        Company Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        placeholder="e.g. Apex Enterprises Pvt Ltd"
                        className={`w-full px-4 py-3 rounded-full border text-xs sm:text-sm text-[#01472e] bg-[#fefae0] placeholder:text-[#01472e]/40 focus:outline-none focus:ring-2 focus:ring-[#01472e] transition-colors ${
                          errors.companyName ? 'border-red-600 bg-red-50' : 'border-[#01472e]/20'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-red-700 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1"
                      >
                        Corporate Email <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="anand@company.com"
                        className={`w-full px-4 py-3 rounded-full border text-xs sm:text-sm text-[#01472e] bg-[#fefae0] placeholder:text-[#01472e]/40 focus:outline-none focus:ring-2 focus:ring-[#01472e] transition-colors ${
                          errors.email ? 'border-red-600 bg-red-50' : 'border-[#01472e]/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-700 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1"
                      >
                        Phone Number <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-full border text-xs sm:text-sm text-[#01472e] bg-[#fefae0] placeholder:text-[#01472e]/40 focus:outline-none focus:ring-2 focus:ring-[#01472e] transition-colors ${
                          errors.phone ? 'border-red-600 bg-red-50' : 'border-[#01472e]/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-700 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label
                      htmlFor="serviceRequired"
                      className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1"
                    >
                      Service Required
                    </label>
                    <select
                      id="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceRequired: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-full border border-[#01472e]/20 text-xs sm:text-sm text-[#01472e] bg-[#fefae0] focus:outline-none focus:ring-2 focus:ring-[#01472e]"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] font-bold uppercase tracking-wide-label text-[#01472e] mb-1"
                    >
                      Workforce Requirement Details <span className="text-red-700">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Specify role, skills, headcount, timeline, or deployment model needed..."
                      className={`w-full px-4 py-3 rounded-[1.5rem] border text-xs sm:text-sm text-[#01472e] bg-[#fefae0] placeholder:text-[#01472e]/40 focus:outline-none focus:ring-2 focus:ring-[#01472e] transition-colors ${
                        errors.message ? 'border-red-600 bg-red-50' : 'border-[#01472e]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-700 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#01472e] text-[#fefae0] hover:bg-[#01472e]/90 active:scale-[0.98] rounded-full text-xs font-bold uppercase tracking-ultra shadow-forest transition-all duration-200 cursor-pointer disabled:opacity-70 hover:scale-[1.02]"
                    >
                      <span>{isSubmitting ? 'PROCESSING...' : 'SUBMIT ENQUIRY'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
