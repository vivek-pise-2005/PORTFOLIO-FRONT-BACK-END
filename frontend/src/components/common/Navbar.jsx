import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Bot,
  FileText,
  Search,
  Sparkles,
  Terminal,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const Navbar = ({ onOpenAI, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Sandbox', href: '#sandbox' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-indigo-500 p-[1.5px] shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="Vivek Sunil Pise"
              className="w-full h-full object-cover rounded-[9px]"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">ENTC • 8.45 SGPA • AWS</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/70 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center space-x-2.5">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center space-x-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white px-3 py-1.5 rounded-xl border border-slate-700/60 text-xs transition-all"
            title="Search and commands (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden lg:inline text-slate-400">Search</span>
            <kbd className="text-[10px] bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-700 text-slate-400 font-mono">
              Ctrl K
            </kbd>
          </button>

          {/* AI Co-pilot Trigger */}
          <button
            onClick={onOpenAI}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/50 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm transition-all"
          >
            <Bot className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Copilot</span>
          </button>

          {/* Resume Download Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Vivek_Sunil_Pise_Resume.pdf"
            className="flex items-center space-x-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-md shadow-emerald-500/20 hover:scale-[1.02] transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={onOpenAI}
            className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          >
            <Bot className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0d111c] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white hover:bg-slate-800/80 px-3 py-2 rounded-lg text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-slate-800 text-slate-200 py-2.5 rounded-xl text-sm"
            >
              <Search className="w-4 h-4 text-emerald-400" />
              <span>Search & Commands</span>
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Vivek_Sunil_Pise_Resume.pdf"
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2.5 rounded-xl text-sm font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
