import React from 'react';
import {
  Briefcase,
  Cloud,
  Server,
  ShieldCheck,
  Database,
  CheckCircle2,
  Calendar,
  MapPin,
  ExternalLink,
  Award
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-3 font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cloud Infrastructure & Hosting Internship
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Hands-on enterprise cloud experience provisioning and securing web applications using Amazon Web Services.
          </p>
        </div>

        {/* Experience Timeline Item */}
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div
            key={idx}
            className="bg-[#0d111c]/95 border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl backdrop-blur-md relative overflow-hidden"
          >
            {/* Top Row: Role, Company & Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    {exp.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {exp.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-base text-emerald-400 font-medium">
                  {exp.company}
                </p>
              </div>

              <div className="flex sm:flex-col sm:items-end gap-3 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.timeline}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Middle: Responsibilities & Impact */}
            <div className="py-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-mono">
                Key Responsibilities & Learning Outcomes
              </h4>
              <div className="space-y-3">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AWS Visual Architecture Breakdown */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 my-4">
              <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <Cloud className="w-4 h-4 text-cyan-400" />
                <span>AWS Services & Architecture Applied</span>
              </h5>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2 font-bold text-white mb-1">
                    <Server className="w-4 h-4 text-cyan-400" />
                    <span>AWS EC2</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Virtual compute provisioning, Linux instance setup, web server configuration, and port security groups.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2 font-bold text-white mb-1">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span>AWS S3</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Bucket lifecycle policies, static asset distribution, permissions, and reliable object storage.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2 font-bold text-white mb-1">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                    <span>AWS IAM</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Role-based access control (RBAC), least-privilege policies, user credential management, and security keys.
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 mr-2 font-mono">Tech Stack:</span>
              {exp.technologies.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs px-3 py-1 rounded-xl bg-slate-800 text-slate-200 border border-slate-700/60 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;
