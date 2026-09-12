import React from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  Sparkles,
  BookOpen,
  CheckCircle2,
  PieChart,
  Cloud,
  FileCheck
} from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../../data/portfolioData';

const EducationCertifications = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold mb-3 font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>CREDENTIALS & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Professional Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Grounded in rigorous engineering fundamentals and validated with industry certifications in cloud computing, data analytics, and business intelligence.
          </p>
        </div>

        {/* Two Column Layout: Left Education, Right Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">Academic History</h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-slate-800 ml-4 pl-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors"></span>

                  <div className="p-5 rounded-2xl bg-[#0d111c]/90 border border-slate-800 hover:border-slate-700 transition-all text-left">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {edu.grade}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{edu.timeline}</span>
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1">
                      {edu.degree} {edu.field && `• ${edu.field}`}
                    </h4>
                    <p className="text-sm text-cyan-300 mb-2 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Cards */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">Industry Certifications</h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-[#0d111c]/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200 group text-left"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700/60 group-hover:text-cyan-300">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-slate-400">{cert.organization}</p>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pl-10">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationCertifications;
