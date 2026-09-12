import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

const AIFloatingTrigger = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onClick}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-extrabold px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
        title="Ask Vivek's AI Co-pilot"
      >
        {/* Glow pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-40 blur group-hover:opacity-75 animate-pulse transition-opacity"></span>

        <div className="relative flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center text-black">
            <Bot className="w-4 h-4 text-black" />
          </div>
          <span className="text-xs tracking-wide">Ask AI Co-pilot</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </button>
    </div>
  );
};

export default AIFloatingTrigger;
