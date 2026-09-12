import React, { useState, useEffect } from 'react';
import DataTopologyCanvas from './components/3d/DataTopologyCanvas';
import ScrollProgress from './components/common/ScrollProgress';
import Navbar from './components/common/Navbar';
import CommandPalette from './components/common/CommandPalette';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import LiveCodeSandbox from './components/interactive/LiveCodeSandbox';
import Experience from './components/sections/Experience';
import EducationCertifications from './components/sections/EducationCertifications';
import ResumeSection from './components/sections/ResumeSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/common/Footer';
import AIAssistantModal from './components/ai/AIAssistantModal';
import AIFloatingTrigger from './components/ai/AIFloatingTrigger';
import AdminDashboardModal from './components/admin/AdminDashboardModal';
import Toast from './components/common/Toast';

function App() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  // Keyboard shortcut listener for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      
      {/* 3D Background Data Topology Canvas */}
      <DataTopologyCanvas />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar
        onOpenAI={() => setIsAIOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenAI={() => setIsAIOpen(true)} />
        <About onOpenAI={() => setIsAIOpen(true)} />
        <Skills />
        <Projects />
        <LiveCodeSandbox />
        <Experience />
        <EducationCertifications />
        <ResumeSection onShowToast={showToast} />
        <ContactSection onOpenAdmin={() => setIsAdminOpen(true)} onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer
        onOpenAI={() => setIsAIOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Floating AI Trigger */}
      <AIFloatingTrigger onClick={() => setIsAIOpen(true)} />

      {/* AI Assistant Modal */}
      <AIAssistantModal isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenAI={() => setIsAIOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onShowToast={showToast}
      />

      {/* Admin Dashboard Modal */}
      <AdminDashboardModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Alert */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />

    </div>
  );
}

export default App;
