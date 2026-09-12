import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';
import { sendAIChatMessage } from '../../services/api';

const AIAssistantModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        `Hello! I am **Vivek Sunil Pise's AI Co-pilot**.\n\n` +
        `I am grounded strictly in Vivek's verified credentials: an Electronics & Telecommunication Engineering student (8.45 SGPA at SBPCOE Indapur) specializing in **Data Science, Data Analytics, Python, SQL, and AWS Cloud**.\n\n` +
        `How can I assist your review of Vivek's profile today?`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "What are Vivek's top technical strengths?",
    "Tell me about the SQL-LEARNING-REPO project.",
    "What did Vivek do during his AWS internship?",
    "What is Vivek's academic background and SGPA?",
    "What certifications does Vivek hold?",
    "How can I contact Vivek for an opportunity?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (questionToSend) => {
    const query = questionToSend || input;
    if (!query.trim() || loading) return;

    const userMessage = { role: 'user', content: query.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await sendAIChatMessage(query.trim());
      const botMessage = {
        role: 'assistant',
        content: response.reply || "I apologize, but I am unable to generate a response at this moment. Please feel free to email Vivek directly at vivek.pise.10@gmail.com."
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I had trouble connecting to the knowledge server. Vivek's core skills are Python, SQL, Power BI, and AWS Cloud. Please reach out via email at vivek.pise.10@gmail.com!"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        role: 'assistant',
        content: `Chat cleared. Ask me anything regarding Vivek Sunil Pise's technical projects, AWS experience, education, or skill set!`
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl h-[620px] max-h-[90vh] bg-[#0d111c]/95 border border-slate-700/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#07090e]/80">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl p-[1.5px] bg-gradient-to-tr from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/20 overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Vivek AI"
                  className="w-full h-full object-cover rounded-[9px]"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#07090e] rounded-full animate-pulse"></span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-white text-base">Vivek's AI Co-pilot</h3>
                <span className="text-[10px] uppercase font-semibold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  Resume-Grounded
                </span>
              </div>
              <p className="text-xs text-slate-400">Verified factual persona • Zero hallucinations</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleClear}
              title="Reset conversation"
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Close Assistant"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-sm scrollbar-thin scrollbar-thumb-slate-700">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-emerald-500/40 shrink-0 mt-0.5 shadow-sm">
                  <img src="/profile.jpeg" alt="Vivek AI" className="w-full h-full object-cover" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                    : 'bg-slate-800/80 border border-slate-700/60 text-slate-200 shadow-sm'
                }`}
              >
                <div className="whitespace-pre-line prose-invert">
                  {msg.content}
                </div>
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center space-x-3 text-slate-400 text-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="flex space-x-1.5 bg-slate-800/70 border border-slate-700 px-3 py-2 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries */}
        <div className="px-4 py-2 bg-[#07090e]/60 border-t border-slate-800/70 overflow-x-auto scrollbar-none flex gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              disabled={loading}
              className="text-xs shrink-0 whitespace-nowrap bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-full border border-slate-700/80 transition-all flex items-center gap-1.5"
            >
              <span>{q}</span>
              <ChevronRight className="w-3 h-3 text-emerald-400" />
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#07090e] border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Vivek's resume, skills, or projects..."
              className="flex-1 bg-slate-900/90 text-white placeholder-slate-500 text-sm px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-400 hover:to-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between mt-2 px-1 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Strictly verified resume data
            </span>
            <span>Press Enter to send</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIAssistantModal;
