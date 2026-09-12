import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Maximize2,
  X,
  Database,
  Terminal,
  Cpu
} from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Data Analytics & SQL', 'Python & Education', 'Full-Stack & 3D Web'];

  const filteredProjects =
    filter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-3 font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Case Studies & Live Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Practical platforms built to solve real learning problems in SQL query optimization, Python fundamentals, and modern full-stack web applications.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0d111c]/90 border border-slate-800/90 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Header Badges */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Title & Summary */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Problem Statement Snippet */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 mb-4 text-xs">
                  <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    Problem & Solution
                  </div>
                  <p className="text-slate-400 line-clamp-2">{project.solution}</p>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-lg border border-slate-700/60 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] bg-slate-800/50 text-slate-500 px-2 py-0.5 rounded-lg font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>

                <div className="flex items-center space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-all"
                    title="View GitHub Source"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-all"
                    title="Open Live Project"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0d111c] border border-slate-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#07090e]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {selectedProject.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 scrollbar-thin scrollbar-thumb-slate-700">
              
              {/* Overview */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                  Project Overview
                </h4>
                <p className="leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800 text-slate-200">
                  {selectedProject.overview || selectedProject.summary}
                </p>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-red-950/15 border border-red-800/30 text-xs leading-relaxed">
                  <h5 className="font-bold text-red-400 mb-1.5 uppercase font-mono tracking-wider">The Problem</h5>
                  <p className="text-slate-300">{selectedProject.problemStatement}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-950/15 border border-emerald-800/30 text-xs leading-relaxed">
                  <h5 className="font-bold text-emerald-400 mb-1.5 uppercase font-mono tracking-wider">The Solution</h5>
                  <p className="text-slate-300">{selectedProject.solution}</p>
                </div>
              </div>

              {/* My Contribution */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                  Vivek's Engineering Contribution
                </h4>
                <p className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-200 text-xs leading-relaxed">
                  {selectedProject.contribution}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 font-mono">
                  Key Architectural Features
                </h4>
                <div className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 font-mono">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Links */}
            <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#07090e] flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-semibold shadow-lg shadow-emerald-500/20 transition-all"
              >
                <span>Launch Live Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
