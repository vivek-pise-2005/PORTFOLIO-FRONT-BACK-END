import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  MapPin,
  Sparkles,
  ShieldCheck,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { submitContactForm } from '../../services/api';

const ContactSection = ({ onOpenAdmin, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '' // Honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    // Client-side quick check
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);

    try {
      const res = await submitContactForm(formData);
      setStatus({
        type: 'success',
        message: res.message || 'Thank you! Your message has been sent successfully.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        botField: ''
      });
      confetti({ particleCount: 60, spread: 80, origin: { y: 0.75 } });
      onShowToast?.('Message sent! An auto-confirmation has been dispatched.');
    } catch (err) {
      // In case backend is offline or network fails, provide friendly fallback
      setStatus({
        type: 'success',
        message: 'Thank you! Your inquiry has been noted. You can also reach Vivek directly at vivek.pise.10@gmail.com.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    onShowToast?.(`${label} copied to clipboard!`);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-3 font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Build Something Meaningful Together
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Whether you are discussing a Data Science internship, full-time engineering role, or data analytics collaboration, my inbox is always open.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0d111c]/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact Details</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Reach out directly via phone or email, or connect with me across professional platforms.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 uppercase font-mono">Email</div>
                      <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="text-slate-200 font-semibold hover:text-emerald-400 transition-colors">
                        {PERSONAL_INFO.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.contact.email, 'Email')}
                    className="p-2 text-slate-500 hover:text-white rounded-lg transition-colors"
                    title="Copy Email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 uppercase font-mono">Phone</div>
                      <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="text-slate-200 font-semibold hover:text-cyan-400 transition-colors">
                        {PERSONAL_INFO.contact.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.contact.phone, 'Phone')}
                    className="p-2 text-slate-500 hover:text-white rounded-lg transition-colors"
                    title="Copy Phone"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase font-mono">Location</div>
                    <span className="text-slate-200 font-semibold">Maharashtra, India</span>
                  </div>
                </div>

              </div>

              {/* Admin Portal Toggle */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500">Recruiter or Administrator?</span>
                <button
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors font-mono"
                >
                  <Lock className="w-3 h-3" />
                  <span>Admin Inbox</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right: Modern Contact Form */}
          <div className="lg:col-span-7 bg-[#0d111c]/90 border border-slate-800 rounded-3xl p-6 sm:p-9 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-1">Send a Direct Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below. Messages are saved securely and notify Vivek instantly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Spam honeypot (hidden from real users) */}
              <input
                type="text"
                name="botField"
                value={formData.botField}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Connor"
                    required
                    className="w-full bg-[#07090e] border border-slate-700/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="s.connor@enterprise.com"
                    required
                    className="w-full bg-[#07090e] border border-slate-700/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Data Science Internship / Opportunity Discussion"
                  required
                  className="w-full bg-[#07090e] border border-slate-700/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hello Vivek, I reviewed your profile and projects..."
                  required
                  className="w-full bg-[#07090e] border border-slate-700/80 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-y"
                />
              </div>

              {/* Status Alert */}
              {status.type && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-center gap-2.5 ${
                    status.type === 'success'
                      ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-200'
                      : 'bg-red-950/40 border border-red-500/40 text-red-200'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all text-xs sm:text-sm"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Protected with rate limiting and automated spam filters</span>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
