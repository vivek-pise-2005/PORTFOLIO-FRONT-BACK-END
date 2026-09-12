import React from 'react';
import {
  GraduationCap,
  Target,
  Cpu,
  Globe,
  Bot,
  Sparkles,
  CheckCircle2,
  Brain,
  Database,
  Cloud
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const About = ({ onOpenAI }) => {
  const pillars = [
    {
      icon: Brain,
      title: "First-Principles Thinking",
      desc: "Structured, mathematical deconstruction of ambiguous problem statements down to fundamental data truths."
    },
    {
      icon: Database,
      title: "Data-Driven Engineering",
      desc: "Proficient in translating complex SQL queries, JOINs, and Pandas pipelines into clean, actionable business decisions."
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment Focus",
      desc: "Practical experience with AWS EC2, S3, and IAM ensures data applications are hosted securely and reliably."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-3 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Precision meets Data Intelligence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Combining an Electronics & Telecommunication engineering mindset with modern data science and full-stack software architecture.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detailed Story Card */}
          <div className="lg:col-span-7 bg-[#0d111c]/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-emerald-500 to-cyan-500 shrink-0 overflow-hidden shadow-lg shadow-emerald-500/20">
                <img src="/profile.jpeg" alt="Vivek Sunil Pise" className="w-full h-full object-cover rounded-[14px]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Who I Am & What I Do</span>
                </h3>
                <p className="text-xs text-emerald-400 font-mono">Vivek Sunil Pise • ENTC Engineer (8.45 SGPA)</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-5">
              {PERSONAL_INFO.aboutDetailed}
            </p>

            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              My engineering education at <strong>SBPCOE, Indapur (8.45 SGPA)</strong> has trained me in structured analytical thinking, hardware-software abstraction, and computational algorithms. Through real projects like <strong>SQL-LEARNING-REPO</strong> and <strong>PYTHON-LEARNING-WITH-MCQ</strong>, plus cloud internship at <strong>Proazure Software Solutions</strong>, I have cultivated hands-on mastery in building robust, production-ready applications.
            </p>

            {/* AI Agent Callout Banner */}
            <div className="bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-indigo-500/15 border border-emerald-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Have questions about my resume?</h4>
                  <p className="text-xs text-slate-400">Ask my verified AI Co-pilot for an instant introduction.</p>
                </div>
              </div>
              <button
                onClick={onOpenAI}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>Launch Co-pilot</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Core Engineering Pillars & Languages */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Pillars */}
            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0d111c]/80 border border-slate-800 hover:border-slate-700 transition-all text-left"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-slate-800/80 text-emerald-400 border border-slate-700/60 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">{pillar.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Languages Spoken */}
            <div className="p-6 rounded-2xl bg-[#0d111c]/80 border border-slate-800 text-left">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-bold text-white">Languages</h4>
              </div>
              <div className="space-y-2">
                {PERSONAL_INFO.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">{lang.name}</span>
                    <span className="text-slate-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
