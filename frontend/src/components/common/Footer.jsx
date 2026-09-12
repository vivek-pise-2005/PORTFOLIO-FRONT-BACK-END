import React from 'react';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Phone,
  Heart,
  FileText,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const Footer = ({ onOpenAI, onOpenCommandPalette }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#07090e] py-14 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Summary */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                8.45 SGPA
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Electronics & Telecommunication Engineer • SBPCOE Indapur • Data Science & Software Engineering Aspirant.
            </p>
          </div>

          {/* Socials & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-all"
              title="Email Vivek"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.contact.phone}`}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-teal-400 border border-slate-800 transition-all"
              title="Call Vivek"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-emerald-500 text-slate-300 hover:text-black border border-slate-800 transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Legal / Tech Notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© 2026 Vivek Sunil Pise. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Resume PDF
            </a>
            <button onClick={onOpenAI} className="hover:text-emerald-400 transition-colors">
              AI Co-pilot
            </button>
            <button onClick={onOpenCommandPalette} className="hover:text-cyan-400 transition-colors">
              Command Palette
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
