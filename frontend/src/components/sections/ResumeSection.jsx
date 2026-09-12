import React, { useState } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  CheckCircle2,
  Sparkles,
  Printer,
  Copy,
  Mail,
  Phone
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../../data/portfolioData';

const ResumeSection = ({ onShowToast }) => {
  const [activeResumeTab, setActiveResumeTab] = useState('summary');

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    onShowToast?.('Email copied to clipboard: vivek.pise.10@gmail.com');
  };

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-3 font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Professional Resume
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Review Vivek Sunil Pise's complete academic background, technical skills, verified certifications, and cloud experience.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Vivek_Sunil_Pise_Resume.pdf"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium px-4 py-2.5 rounded-xl border border-slate-700 transition-all text-xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium px-4 py-2.5 rounded-xl border border-slate-800 transition-all text-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print Resume</span>
            </button>
          </div>
        </div>

        {/* Interactive In-Browser Resume Card */}
        <div className="bg-[#0d111c]/95 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
          
          {/* Header of Resume Preview */}
          <div className="border-b border-slate-800 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-emerald-400 text-sm font-semibold mt-1">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  SBPCOE, Indapur • BE (Expected 2027) • SGPA: 8.45
                </p>
              </div>

              <div className="space-y-1 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="hover:text-cyan-300">
                    {PERSONAL_INFO.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <button onClick={handleCopyEmail} className="hover:text-emerald-300 flex items-center gap-1">
                    <span>{PERSONAL_INFO.contact.email}</span>
                    <Copy className="w-3 h-3 opacity-60" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Preview Tabs */}
            <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-slate-800/80">
              {['summary', 'education', 'skills', 'experience', 'certifications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveResumeTab(tab)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider font-mono transition-all ${
                    activeResumeTab === tab
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="text-sm text-slate-300 leading-relaxed min-h-[220px]">
            {activeResumeTab === 'summary' && (
              <div className="space-y-4 animate-in fade-in">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Executive Summary
                </h4>
                <p className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 text-slate-200">
                  {PERSONAL_INFO.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="text-slate-400 block mb-1">Target Roles:</span>
                    <span className="text-white font-semibold">Data Scientist, Data Analyst, Software Engineer</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="text-slate-400 block mb-1">Languages:</span>
                    <span className="text-white font-semibold">English, Hindi, Marathi</span>
                  </div>
                </div>
              </div>
            )}

            {activeResumeTab === 'education' && (
              <div className="space-y-4 animate-in fade-in">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Formal Education
                </h4>
                <div className="space-y-3">
                  {EDUCATION_DATA.map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-start">
                      <div>
                        <div className="font-bold text-white text-sm">{edu.degree}</div>
                        <div className="text-cyan-400 text-xs">{edu.institution}</div>
                        <div className="text-slate-400 text-xs mt-1">{edu.timeline}</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
                        {edu.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeResumeTab === 'skills' && (
              <div className="space-y-4 animate-in fade-in">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Core Technical Skills
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-cyan-400 block text-xs mb-2">Data Science & Analysis</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Python, Pandas, NumPy, Statistics, Exploratory Data Analysis (EDA), Data Cleaning, Power BI (DAX).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-emerald-400 block text-xs mb-2">SQL & Database Querying</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      SQL Query Writing, Complex JOINs, Aggregations, GROUP BY, HAVING, Query Optimization.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-indigo-400 block text-xs mb-2">Cloud Computing</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      AWS EC2, AWS S3, AWS IAM, Web Application Deployment & Cloud Security.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-teal-400 block text-xs mb-2">Software Development</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      React, JavaScript, Node.js, Express, REST APIs, Git & GitHub, OOP.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeResumeTab === 'experience' && (
              <div className="space-y-4 animate-in fade-in">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Internship Experience
                </h4>
                {EXPERIENCE_DATA.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-bold text-white text-sm">{exp.role}</span>
                        <div className="text-cyan-400 text-xs">{exp.company}</div>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">{exp.duration} ({exp.timeline})</span>
                    </div>
                    <ul className="space-y-1.5 mt-3 text-xs text-slate-300">
                      {exp.responsibilities.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeResumeTab === 'certifications' && (
              <div className="space-y-4 animate-in fade-in">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Verified Certifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CERTIFICATIONS_DATA.map((c) => (
                    <div key={c.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-xs font-bold text-white mb-0.5">{c.title}</div>
                      <div className="text-[11px] text-slate-400">{c.organization}</div>
                      <div className="text-[10px] text-cyan-400 font-mono mt-1">{c.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
