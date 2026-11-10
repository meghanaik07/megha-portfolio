import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, ArrowUpRight, MapPin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [preparedDraft, setPreparedDraft] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyDraft = () => {
    if (!preparedDraft) return;
    navigator.clipboard.writeText(preparedDraft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) errors.subject = 'Please provide a subject line';
    if (!formData.message.trim()) {
      errors.message = 'Please include a brief message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please provide at least 10 characters';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const fullDraft = `To: ${PORTFOLIO_DATA.profile.email}\nSubject: ${formData.subject}\n\nHi Megha,\n\n${formData.message}\n\nFrom: ${formData.name}\nReply-To: ${formData.email}`;
      setPreparedDraft(fullDraft);

      // Trigger mailto directly without claiming backend delivery
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi Megha,\n\n${formData.message}\n\nFrom: ${formData.name}\nReply-To: ${formData.email}`
      )}`;

      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Verified Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400">05 / Connect</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
                Let's Connect.
              </h2>
              <p className="text-base text-zinc-300 mt-4 leading-relaxed">
                Interested in collaborating, discussing opportunities or sharing ideas? I'd love to connect.
              </p>
            </div>

            {/* Direct Email Box with One-Click Copy */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                    className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-white truncate"
                  >
                    {PORTFOLIO_DATA.profile.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Verified Online Profiles */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Verified Online Profiles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/40 transition-colors group flex items-center justify-between"
                  title="GitHub Profile (meghanaik07)"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-purple-400" />
                    <div>
                      <span className="text-xs font-medium text-zinc-200 group-hover:text-white block">
                        GitHub
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        meghanaik07
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-purple-300" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/40 transition-colors group flex items-center justify-between"
                  title="LinkedIn Profile (Megha Naik)"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-purple-400" />
                    <div>
                      <span className="text-xs font-medium text-zinc-200 group-hover:text-white block">
                        LinkedIn
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        megha-naik
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-purple-300" />
                </a>
              </div>
            </div>

            {/* Location context */}
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Bengaluru, Karnataka, India · Student at Atria Institute of Technology</span>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80">
              {preparedDraft ? (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 block">
                      Email Draft Prepared
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Your default email application was triggered to send this to{' '}
                      <strong className="text-white font-mono">{PORTFOLIO_DATA.profile.email}</strong>.
                      If your client did not launch, you can copy the draft below or send directly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed max-h-52 overflow-y-auto">
                    {preparedDraft}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={handleCopyDraft}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors"
                    >
                      {copiedDraft ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied Draft</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Message Draft</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
                        formData.subject
                      )}&body=${encodeURIComponent(
                        `Hi Megha,\n\n${formData.message}\n\nFrom: ${formData.name}\nReply-To: ${formData.email}`
                      )}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Reopen Email App</span>
                    </a>

                    <button
                      onClick={() => setPreparedDraft(null)}
                      className="text-xs text-zinc-400 hover:text-zinc-200 px-3 py-2 ml-auto"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Maya Chen"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                        }}
                        className={`w-full text-xs sm:text-sm bg-zinc-950/80 border rounded-lg px-3.5 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                          formErrors.name ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-red-400 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        className={`w-full text-xs sm:text-sm bg-zinc-950/80 border rounded-lg px-3.5 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                          formErrors.email ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Subject / Topic <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Data Analytics Project / Collaboration Inquiry"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (formErrors.subject) setFormErrors({ ...formErrors, subject: '' });
                      }}
                      className={`w-full text-xs sm:text-sm bg-zinc-950/80 border rounded-lg px-3.5 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                        formErrors.subject ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Message <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Share a note about your project, team, or ideas to discuss..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                      }}
                      className={`w-full text-xs sm:text-sm bg-zinc-950/80 border rounded-lg px-3.5 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none transition-colors resize-none ${
                        formErrors.message ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button & Direct Instructions */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-[11px] text-zinc-400">
                      Directly opens mail draft addressed to naikmegha2006@gmail.com
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all shadow-md active:scale-98"
                    >
                      <span>Prepare & Send Email</span>
                      <Send className="w-3.5 h-3.5" />
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
