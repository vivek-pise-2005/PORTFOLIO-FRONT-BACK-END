import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  FileText,
  Mail,
  Phone,
  Bot,
  Terminal,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Lock,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const CommandPalette = ({
  isOpen,
  onClose,
  onOpenAI,
  onOpenAdmin,
  onShowToast
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'ai-copilot',
      title: "Ask Vivek's AI Co-pilot",
      subtitle: "Instant answers about Vivek's resume & skills",
      icon: Bot,
      category: 'AI Assistant',
      action: () => {
        onClose();
        onOpenAI();
      }
    },
    {
      id: 'download-resume',
      title: 'Download Verified Resume (PDF)',
      subtitle: 'Official Vivek Sunil Pise Resume',
      icon: FileText,
      category: 'Resume',
      action: () => {
        window.open('/resume.pdf', '_blank');
        onClose();
        onShowToast?.('Opening verified resume PDF...');
      }
    },
    {
      id: 'copy-email',
      title: 'Copy Email Address',
      subtitle: PERSONAL_INFO.contact.email,
      icon: Mail,
      category: 'Contact',
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
        onClose();
        onShowToast?.('Email copied to clipboard: vivek.pise.10@gmail.com');
      }
    },
    {
      id: 'call-phone',
      title: 'Call Vivek',
      subtitle: PERSONAL_INFO.contact.phone,
      icon: Phone,
      category: 'Contact',
      action: () => {
        window.location.href = `tel:${PERSONAL_INFO.contact.phone}`;
        onClose();
      }
    },
    {
      id: 'try-sandbox',
      title: 'Try Interactive SQL & Python Sandbox',
      subtitle: 'Solve live query challenges on the portfolio',
      icon: Terminal,
      category: 'Interactive',
      action: () => {
        onClose();
        document.getElementById('sandbox')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'nav-projects',
      title: 'View Projects & Case Studies',
      subtitle: 'SQL-LEARNING-REPO, PYTHON-LEARNING-WITH-MCQ',
      icon: Code2,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'nav-skills',
      title: 'Explore Technical Skills',
      subtitle: 'Python, SQL, Power BI, AWS Cloud',
      icon: Sparkles,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'nav-experience',
      title: 'View AWS Cloud Experience',
      subtitle: 'Proazure Software Solutions Internship',
      icon: Briefcase,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'nav-education',
      title: 'View Education & Certifications',
      subtitle: 'SBPCOE Indapur (8.45 SGPA), 4 Certifications',
      icon: GraduationCap,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'open-github',
      title: 'Visit GitHub Profile',
      subtitle: PERSONAL_INFO.contact.github,
      icon: ExternalLink,
      category: 'Links',
      action: () => {
        window.open(PERSONAL_INFO.contact.github, '_blank');
        onClose();
      }
    },
    {
      id: 'open-linkedin',
      title: 'Visit LinkedIn Profile',
      subtitle: PERSONAL_INFO.contact.linkedIn,
      icon: ExternalLink,
      category: 'Links',
      action: () => {
        window.open(PERSONAL_INFO.contact.linkedIn, '_blank');
        onClose();
      }
    },
    {
      id: 'admin-portal',
      title: 'Open Admin Management Portal',
      subtitle: 'View contact submissions and dashboard stats',
      icon: Lock,
      category: 'Admin',
      action: () => {
        onClose();
        onOpenAdmin();
      }
    }
  ];

  const filtered = actions.filter((item) => {
    const q = query.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filtered, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-[#0d111c] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-[#07090e]">
          <Search className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, skill, or section..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-slate-700">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-slate-500 text-sm">
              No matching commands or sections found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? 'bg-slate-800/90 text-white' : 'text-slate-300 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center space-x-3 truncate">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-medium leading-none mb-1">{item.title}</div>
                      <div className="text-xs text-slate-400 truncate">{item.subtitle}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono shrink-0 ml-2">
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-slate-800/70 bg-[#07090e]/80 text-[11px] text-slate-500 font-mono">
          <div className="flex items-center space-x-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>esc to close</span>
          </div>
          <span>Vivek Sunil Pise Portfolio</span>
        </div>

      </div>
    </div>
  );
};

export default CommandPalette;
