import React, { useState } from 'react';
import {
  BarChart3,
  Database,
  PieChart,
  Cloud,
  Code2,
  Cpu,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';

const iconMap = {
  BarChart3: BarChart3,
  Database: Database,
  PieChart: PieChart,
  Cloud: Cloud,
  Code2: Code2,
  Cpu: Cpu
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...SKILLS_DATA.map((s) => s.category)];

  const displayedCategories =
    activeTab === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-3 font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Practical proficiencies across data science, database query optimization, cloud hosting, and software engineering verified through projects and certifications.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group, index) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-[#0d111c]/90 border border-slate-800/90 hover:border-slate-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-2xl bg-slate-800/80 text-emerald-400 border border-slate-700/60 group-hover:border-emerald-500/40 group-hover:text-emerald-300 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base tracking-tight">{group.category}</h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{group.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5 my-4">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                            Verified
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">{skill.highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{group.skills.length} core competencies</span>
                  <span className="text-emerald-400">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
