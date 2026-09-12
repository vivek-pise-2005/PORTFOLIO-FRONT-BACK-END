import React, { useState } from 'react';
import {
  Terminal,
  Play,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Database,
  Code2,
  RefreshCw,
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SQL_SANDBOX_CHALLENGE, PYTHON_QUIZ_CHALLENGES } from '../../data/portfolioData';

const LiveCodeSandbox = () => {
  const [activeTab, setActiveTab] = useState('sql'); // 'sql' or 'python'
  
  // SQL Sandbox State
  const [sqlQuery, setSqlQuery] = useState(SQL_SANDBOX_CHALLENGE.starterQuery);
  const [queryResult, setQueryResult] = useState(null);
  const [sqlExecuted, setSqlExecuted] = useState(false);

  // Python Quiz State
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const currentQuiz = PYTHON_QUIZ_CHALLENGES[currentQuizIdx];

  const handleRunSQL = () => {
    setSqlExecuted(true);
    // Validate if query contains essential SQL clauses
    const lower = sqlQuery.toLowerCase();
    const isValid =
      lower.includes('select') &&
      lower.includes('join') &&
      lower.includes('group by');

    if (isValid) {
      setQueryResult({
        success: true,
        data: SQL_SANDBOX_CHALLENGE.sampleData,
        message: 'Query executed successfully! 3 records returned in 12ms.'
      });
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    } else {
      setQueryResult({
        success: false,
        message: 'Query requires proper JOIN and GROUP BY clauses to calculate aggregations.'
      });
    }
  };

  const handleResetSQL = () => {
    setSqlQuery(SQL_SANDBOX_CHALLENGE.starterQuery);
    setQueryResult(null);
    setSqlExecuted(false);
  };

  const handleSelectQuizOption = (idx) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitQuizAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    if (selectedOption === currentQuiz.correct) {
      setQuizScore((prev) => prev + 1);
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
    }
  };

  const handleNextQuiz = () => {
    if (currentQuizIdx < PYTHON_QUIZ_CHALLENGES.length - 1) {
      setCurrentQuizIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Loop or restart
      setCurrentQuizIdx(0);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  return (
    <section id="sandbox" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold mb-3 font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE PREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Try Vivek's Project Capabilities Live
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Experience the interactive concepts behind <span className="text-emerald-400 font-semibold">SQL-LEARNING-REPO</span> and <span className="text-cyan-400 font-semibold">PYTHON-LEARNING-WITH-MCQ</span> directly in this live mini-sandbox.
          </p>

          {/* Mode Switcher */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('sql')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                activeTab === 'sql'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>SQL Query Sandbox</span>
            </button>

            <button
              onClick={() => setActiveTab('python')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                activeTab === 'python'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Python & Data MCQ Engine</span>
            </button>
          </div>
        </div>

        {/* Sandbox Body */}
        <div className="bg-[#0d111c]/95 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* SQL Sandbox View */}
          {activeTab === 'sql' && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                    <Database className="w-3.5 h-3.5" />
                    <span>CHALLENGE: {SQL_SANDBOX_CHALLENGE.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                    {SQL_SANDBOX_CHALLENGE.scenario}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetSQL}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
                    title="Reset Query"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleRunSQL}
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-2 rounded-xl text-xs shadow-md shadow-emerald-500/20 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Query</span>
                  </button>
                </div>
              </div>

              {/* Schema Hint */}
              <div className="py-3 flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400">
                <span className="text-slate-500 font-semibold uppercase">Tables:</span>
                {SQL_SANDBOX_CHALLENGE.schema.map((s, idx) => (
                  <span key={idx} className="bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                    <strong className="text-cyan-400">{s.table}</strong> ({s.cols})
                  </span>
                ))}
              </div>

              {/* Code Editor Area */}
              <div className="mt-2 relative">
                <textarea
                  value={sqlQuery}
                  onChange={(e) => setSqlQuery(e.target.value)}
                  rows={5}
                  className="w-full bg-[#07090e] border border-slate-700/80 rounded-2xl p-4 text-emerald-300 font-mono text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-y"
                  placeholder="Write your SQL query here..."
                  spellCheck={false}
                />
              </div>

              {/* Results View */}
              {sqlExecuted && queryResult && (
                <div className="mt-6 animate-in fade-in duration-200">
                  {queryResult.success ? (
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-3">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{queryResult.message}</span>
                      </div>
                      <div className="overflow-x-auto rounded-xl border border-slate-800">
                        <table className="w-full text-left text-xs font-mono">
                          <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                            <tr>
                              <th className="px-4 py-2.5">Customer Name</th>
                              <th className="px-4 py-2.5">City</th>
                              <th className="px-4 py-2.5">Orders Count</th>
                              <th className="px-4 py-2.5">Total Spent</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/60 bg-[#07090e]/60">
                            {queryResult.data.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-800/40">
                                <td className="px-4 py-2.5 font-semibold text-slate-200">{row.customer}</td>
                                <td className="px-4 py-2.5 text-slate-400">{row.city}</td>
                                <td className="px-4 py-2.5 text-slate-400">{row.orderCount}</td>
                                <td className="px-4 py-2.5 text-emerald-400 font-bold">{row.totalSpent}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-400">
                        💡 <strong>Optimization Note:</strong> In production PostgreSQL/MySQL, creating a composite index on <code className="text-cyan-400">orders(customer_id, amount)</code> ensures this aggregation executes with an index scan rather than a full table scan.
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-red-950/30 border border-red-800/40 rounded-xl text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{queryResult.message}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Python & Data Quiz View */}
          {activeTab === 'python' && (
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Question {currentQuizIdx + 1} of {PYTHON_QUIZ_CHALLENGES.length}
                  </span>
                  <span className="text-xs text-slate-400">Data Analytics Assessment</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-bold">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Score: {quizScore}</span>
                </div>
              </div>

              {/* Question */}
              <div className="my-6">
                <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  {currentQuiz.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuiz.options.map((opt, oIdx) => {
                  let optionClass = 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700';

                  if (selectedOption === oIdx) {
                    optionClass = 'bg-cyan-500/15 border-cyan-500 text-cyan-200';
                  }

                  if (isAnswerSubmitted) {
                    if (oIdx === currentQuiz.correct) {
                      optionClass = 'bg-emerald-500/20 border-emerald-500 text-emerald-200';
                    } else if (selectedOption === oIdx) {
                      optionClass = 'bg-red-500/20 border-red-500 text-red-200';
                    }
                  }

                  return (
                    <div
                      key={oIdx}
                      onClick={() => handleSelectQuizOption(oIdx)}
                      className={`p-4 rounded-2xl border text-xs sm:text-sm font-mono cursor-pointer transition-all flex items-center justify-between ${optionClass}`}
                    >
                      <span>{opt}</span>
                      {isAnswerSubmitted && oIdx === currentQuiz.correct && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {isAnswerSubmitted && selectedOption === oIdx && oIdx !== currentQuiz.correct && (
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation Banner */}
              {isAnswerSubmitted && (
                <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs text-slate-300 leading-relaxed mb-6 animate-in fade-in">
                  <strong className="text-emerald-400">Explanation:</strong> {currentQuiz.explanation}
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-500">Test concepts from Vivek's Python MCQ project</span>
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitQuizAnswer}
                    disabled={selectedOption === null}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold text-xs transition-all"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuiz}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-xs shadow-md transition-all"
                  >
                    {currentQuizIdx < PYTHON_QUIZ_CHALLENGES.length - 1 ? 'Next Question →' : 'Restart Quiz ↺'}
                  </button>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default LiveCodeSandbox;
