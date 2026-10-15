import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, Sparkles, MapPin, Clock, ExternalLink } from 'lucide-react';
import { BIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding Celebration',
    date: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = {
    phone: BIO_DATA.phone,
    phoneDisplay: BIO_DATA.phoneDisplay,
    facebook: BIO_DATA.facebook,
    facebookUrl: BIO_DATA.facebookUrl,
    email: BIO_DATA.email,
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Obra Creations Inquiry] ${formData.eventType} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Daniel,\n\nI would love to inquire about your photography and video services for our upcoming milestone:\n\nClient Name: ${formData.name}\nContact Email: ${formData.email}\nPhone/WhatsApp: ${formData.phone || 'N/A'}\nEvent Type: ${formData.eventType}\nTarget Date: ${formData.date || 'TBD'}\nLocation/Venue: ${formData.location || 'TBD'}\n\nVision & Details:\n${formData.message}\n\nLooking forward to hearing from you!\nBest regards,\n${formData.name}`
    );
    
    // Open email client
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0c10] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Studio Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Let's Create Together</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-normal leading-tight">
                Turn Your Fleeting Moments into an Obra
              </h2>
              <p className="text-stone-400 font-sans-clean text-sm sm:text-base mt-4 font-light leading-relaxed">
                Connect with us directly across our official communication channels to reserve dates or discuss your creative vision.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              {/* Contact Number Card */}
              <div className="p-5 rounded-2xl bg-[#13151e] border border-white/10 hover:border-sky-400/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-mono">
                      Contact Number
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    Call / SMS / WhatsApp
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-mono text-white font-semibold select-all pl-0.5 mb-3">
                  {contactInfo.phone}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Directly</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.phone, 'phone')}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedItem === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-xs">Copied</span>
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

              {/* Facebook Card */}
              <div className="p-5 rounded-2xl bg-[#13151e] border border-white/10 hover:border-sky-400/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      {/* Facebook custom crisp SVG */}
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-mono">
                      Facebook Page
                    </span>
                  </div>
                  <span className="text-[11px] text-sky-400 font-mono px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                    Official Page
                  </span>
                </div>
                <div className="text-sm sm:text-base font-mono text-sky-200 font-medium select-all pl-0.5 mb-3 break-all">
                  {contactInfo.facebook}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={contactInfo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-white/10 hover:bg-white/15 text-white font-medium text-xs rounded-xl border border-white/10 transition-all cursor-pointer"
                  >
                    <span>Visit Facebook Page</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-300" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.facebook, 'facebook')}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                    title="Copy Facebook URL"
                  >
                    {copiedItem === 'facebook' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-xs">Copied</span>
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

              {/* E-Mail Card */}
              <div className="p-5 rounded-2xl bg-[#13151e] border border-white/10 hover:border-sky-400/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-mono">
                      E-Mail
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-400 font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                    Direct Inbox
                  </span>
                </div>
                <div className="text-sm sm:text-base font-mono text-sky-200 font-medium select-all pl-0.5 mb-3 break-all">
                  {contactInfo.email}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Inquiry for Obra Creations`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-white/10 hover:bg-white/15 text-white font-medium text-xs rounded-xl border border-white/10 transition-all cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email Directly</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.email, 'email')}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedItem === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-xs">Copied</span>
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
            </div>

            {/* Studio Availability & Guarantees */}
            <div className="space-y-3 pt-2 text-xs text-stone-400">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-200 font-medium">Responsive Turnaround:</strong> Inquiries receive comprehensive package proposals within 24 hours.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-200 font-medium">Coverage:</strong> Metro Manila, Luzon, Visayas, Mindanao, and destination events worldwide.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Tailored Inquiry Form */}
          <div className="lg:col-span-7 bg-[#12141c] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-serif-luxury text-white mb-2">
              Book a Consultation or Request a Quote
            </h3>
            <p className="text-xs text-stone-400 mb-6 font-light">
              Fill out your milestone details below to generate a pre-formatted inquiry directly to our studio inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria & Gabriel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="Wedding Celebration">Wedding Celebration</option>
                    <option value="Prenuptial & Engagement Session">Prenuptial & Engagement</option>
                    <option value="Milestone Debut (18th Birthday)">Milestone Debut</option>
                    <option value="Special Event & Corporate Gala">Special Event & Gala</option>
                    <option value="Cinematic Drone / Commercial">Aerial Drone / Commercial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Location / Venue
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tagaytay / Boracay"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Your Vision, Story or Questions
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about the vibe you envision, specific coverage requests (e.g., Photo Session, Aerials, Same-Day Edit), or any questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-semibold text-sm rounded-xl transition-all shadow-lg shadow-sky-500/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Us</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs text-center">
                  Inquiry opened in your email client! If it didn't open automatically, please send directly to <strong>{contactInfo.email}</strong>.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
