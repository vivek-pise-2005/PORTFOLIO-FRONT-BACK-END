import React from 'react';
import {
  FileText,
  Code2,
  Bot,
  Mail,
  Github,
  Linkedin,
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  GraduationCap,
  Cloud,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const Hero = ({ onOpenAI }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Profile Picture Avatar */}
        <div className="relative mb-6 group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-emerald-500 via-cyan-400 to-indigo-500 shadow-2xl shadow-emerald-500/25 group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#07090e]">
              <img
                src="/profile.jpeg"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          {/* Glowing Status Dot */}
          <span className="absolute bottom-1 right-2 w-5 h-5 bg-emerald-500 border-4 border-[#07090e] rounded-full shadow-md" title="Available for hire"></span>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md mb-6 shadow-lg shadow-emerald-500/10 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-emerald-300 font-mono tracking-wide">
            Available for Data Science & Software Roles • Expected 2027
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="block text-slate-100">{PERSONAL_INFO.name}</span>
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Data Science & Engineering
          </span>
        </h1>

        {/* Dynamic Title / Tagline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl font-medium mb-3">
          Electronics & Telecommunication Engineer <span className="text-emerald-400 font-mono font-semibold">(8.45 SGPA)</span> specializing in transforming raw data into actionable business intelligence.
        </p>

        {/* Summary Description */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-8">
          {PERSONAL_INFO.summary}
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Vivek_Sunil_Pise_Resume.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all text-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700/80 hover:border-slate-600 shadow-md hover:scale-[1.02] active:scale-95 transition-all text-sm"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>

          <button
            onClick={onOpenAI}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 hover:from-indigo-600/40 hover:to-purple-600/40 text-indigo-300 font-semibold px-5 py-3.5 rounded-xl border border-indigo-500/30 hover:border-indigo-500/50 shadow-md hover:scale-[1.02] active:scale-95 transition-all text-sm"
          >
            <Bot className="w-4 h-4 text-indigo-400" />
            <span>Ask AI Co-pilot</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium px-5 py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 transition-all text-sm"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-3 mb-14 text-slate-400">
          <a
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 hover:text-white border border-slate-700/60 hover:border-slate-600 transition-all"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.contact.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 hover:text-cyan-400 border border-slate-700/60 hover:border-slate-600 transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.contact.email}`}
            className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 hover:text-emerald-400 border border-slate-700/60 hover:border-slate-600 transition-all"
            title="Email Vivek"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${PERSONAL_INFO.contact.phone}`}
            className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 hover:text-teal-400 border border-slate-700/60 hover:border-slate-600 transition-all"
            title="Call Vivek"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Verified Metrics / Highlights Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {PERSONAL_INFO.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#0d111c]/80 border border-slate-800 hover:border-emerald-500/40 backdrop-blur-md transition-all hover:-translate-y-1 text-left group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors font-mono">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">{metric.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5 truncate">{metric.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
