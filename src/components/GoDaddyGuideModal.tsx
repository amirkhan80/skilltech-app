import React, { useState } from 'react';
import { X, CheckCircle, Copy, Globe } from 'lucide-react';

interface GoDaddyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoDaddyGuideModal: React.FC<GoDaddyGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01472e]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-[#fefae0] border border-[#01472e]/20 rounded-[2.5rem] max-w-3xl w-full p-6 sm:p-8 shadow-forest my-8 text-[#01472e] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-[#01472e]/15">
          <div>
            <div className="flex items-center gap-2 text-[#01472e] text-[10px] font-bold uppercase tracking-wide-label">
              <Globe className="w-4 h-4" />
              <span>Production Deployment &amp; DNS Guide</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#01472e] mt-1">
              CONNECTING YOUR GODADDY DOMAIN
            </h3>
            <p className="text-xs sm:text-sm text-[#01472e]/70 mt-0.5">
              Production workflow: GitHub &rarr; Vercel / Netlify &rarr; GoDaddy DNS Records
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#01472e]/10 text-[#01472e] hover:bg-[#01472e]/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Steps */}
        <div className="mt-6 space-y-6 text-xs sm:text-sm text-[#01472e]">
          {/* Step 1 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#01472e] text-[#fefae0] font-bold flex items-center justify-center text-xs">
                1
              </span>
              <h4 className="font-display text-lg uppercase tracking-tight text-[#01472e]">
                Build the React Project
              </h4>
            </div>
            <p className="text-[#01472e]/80 pl-9">
              Run the optimized production build command in your terminal. This generates clean static HTML, JS, and CSS in the <code className="px-1.5 py-0.5 bg-[#e9edc9] rounded text-[#01472e] font-mono text-xs">dist/</code> directory.
            </p>
            <div className="pl-9">
              <div className="bg-[#01472e] text-[#fefae0] rounded-full px-4 py-2 font-mono text-xs flex items-center justify-between">
                <span>npm run build</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard('npm run build', 'build')}
                  className="text-[#ccd5ae] hover:text-[#fefae0] inline-flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  {copiedKey === 'build' ? <CheckCircle className="w-3.5 h-3.5 text-[#ccd5ae]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'build' ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#01472e] text-[#fefae0] font-bold flex items-center justify-center text-xs">
                2
              </span>
              <h4 className="font-display text-lg uppercase tracking-tight text-[#01472e]">
                Deploy to Vercel or Netlify via GitHub
              </h4>
            </div>
            <div className="pl-9 space-y-1.5 text-[#01472e]/80">
              <p>1. Push your repository to GitHub.</p>
              <p>2. Connect your repository on <strong>Vercel</strong> (or Netlify).</p>
              <p>
                3. Framework Preset: <code className="px-1.5 py-0.5 bg-[#e9edc9] rounded text-[#01472e] font-mono text-xs">Vite</code> &bull; Build Command: <code className="px-1.5 py-0.5 bg-[#e9edc9] rounded text-[#01472e] font-mono text-xs">npm run build</code> &bull; Output Directory: <code className="px-1.5 py-0.5 bg-[#e9edc9] rounded text-[#01472e] font-mono text-xs">dist</code>
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#01472e] text-[#fefae0] font-bold flex items-center justify-center text-xs">
                3
              </span>
              <h4 className="font-display text-lg uppercase tracking-tight text-[#01472e]">
                Configure DNS in GoDaddy Domain Manager
              </h4>
            </div>
            <div className="pl-9 space-y-2 text-[#01472e]/80">
              <p>
                Log in to GoDaddy &rarr; My Products &rarr; Select your Domain &rarr; <strong>Manage DNS</strong>.
              </p>
              <div className="border border-[#01472e]/20 rounded-[1.5rem] overflow-hidden bg-[#e9edc9]/50">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#01472e] text-[#fefae0] font-bold uppercase tracking-wide">
                    <tr>
                      <th className="p-3">Type</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Value / Target</th>
                      <th className="p-3">TTL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#01472e]/10 font-mono text-[#01472e]">
                    <tr>
                      <td className="p-3 font-bold">A</td>
                      <td className="p-3">@</td>
                      <td className="p-3 font-bold text-[#01472e]">76.76.21.21</td>
                      <td className="p-3 text-[#01472e]/70">1/2 Hour (Default)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">CNAME</td>
                      <td className="p-3">www</td>
                      <td className="p-3 font-bold text-[#01472e]">cname.vercel-dns.com</td>
                      <td className="p-3 text-[#01472e]/70">1/2 Hour (Default)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-[#01472e]/15 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-ultra text-[#01472e]/60">
            SkillTech Deployment Guide
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-7 py-2.5 bg-[#01472e] text-[#fefae0] hover:bg-[#01472e]/90 rounded-full text-xs font-bold uppercase tracking-ultra shadow-forest"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};
