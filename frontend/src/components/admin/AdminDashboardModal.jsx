import React, { useState, useEffect } from 'react';
import {
  Lock,
  X,
  Mail,
  Trash2,
  CheckCircle,
  Clock,
  RefreshCw,
  Search,
  Filter,
  BarChart,
  Shield,
  KeyRound,
  ExternalLink
} from 'lucide-react';
import {
  adminLogin,
  getAdminStats,
  getAdminMessages,
  updateAdminMessageStatus,
  deleteAdminMessage
} from '../../services/api';

const AdminDashboardModal = ({ isOpen, onClose, onShowToast }) => {
  const [token, setToken] = useState(() => sessionStorage.getItem('vp_admin_token') || '');
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('VivekAdmin2026!');
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard Data
  const [stats, setStats] = useState(null);
  const [messages, setMessages] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);

    try {
      const res = await adminLogin(username, password);
      if (res.token) {
        setToken(res.token);
        sessionStorage.setItem('vp_admin_token', res.token);
        onShowToast?.('Authenticated successfully as Administrator.');
      }
    } catch (err) {
      setLoginError(err.message || 'Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken('');
    sessionStorage.removeItem('vp_admin_token');
    setMessages([]);
    setStats(null);
  };

  const loadData = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const [sData, mData] = await Promise.all([
        getAdminStats(token),
        getAdminMessages(token, filterStatus)
      ]);
      setStats(sData);
      setMessages(mData);
    } catch (err) {
      if (err.message?.includes('denied') || err.message?.includes('expired')) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && token) {
      loadData();
    }
  }, [isOpen, token, filterStatus]);

  const handleStatusChange = async (msgId, newStatus) => {
    try {
      await updateAdminMessageStatus(token, msgId, newStatus);
      setMessages((prev) =>
        prev.map((m) => (m._id === msgId ? { ...m, status: newStatus } : m))
      );
      onShowToast?.(`Message marked as ${newStatus}.`);
    } catch (err) {
      onShowToast?.('Failed to update status.');
    }
  };

  const handleDelete = async (msgId) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      await deleteAdminMessage(token, msgId);
      setMessages((prev) => prev.filter((m) => m._id !== msgId));
      onShowToast?.('Message deleted.');
    } catch (err) {
      onShowToast?.('Failed to delete message.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d111c] border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#07090e]">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Portfolio Admin Console</h3>
              <p className="text-xs text-slate-400">Manage contact inquiries, system health & metrics</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {token && (
              <button
                onClick={loadData}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Refresh Data"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
            )}
            {token && (
              <button
                onClick={handleLogout}
                className="text-xs text-slate-400 hover:text-red-400 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-red-500/30 transition-colors"
              >
                Logout
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-700">
          
          {!token ? (
            /* Login Form */
            <div className="max-w-md mx-auto py-8">
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Administrator Login</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Access the submissions inbox and message management
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 font-mono">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-[#07090e] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 font-mono">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#07090e] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    required
                  />
                </div>

                {loginError && (
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-200">
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-xs shadow-md hover:opacity-90 transition-all"
                >
                  {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
                </button>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 text-center">
                  💡 Default dev credentials: <code className="text-emerald-400">admin</code> / <code className="text-emerald-400">VivekAdmin2026!</code>
                </div>
              </form>
            </div>
          ) : (
            /* Logged-in Dashboard */
            <div className="space-y-6">
              
              {/* Stats Cards */}
              {stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs text-slate-400 block mb-1">Total Inquiries</span>
                    <span className="text-2xl font-bold text-white font-mono">{stats.totalMessages}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs text-yellow-400 block mb-1">Unread</span>
                    <span className="text-2xl font-bold text-yellow-300 font-mono">{stats.unreadMessages}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs text-emerald-400 block mb-1">Replied</span>
                    <span className="text-2xl font-bold text-emerald-300 font-mono">{stats.repliedMessages}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs text-cyan-400 block mb-1">Database Mode</span>
                    <span className="text-xs font-bold text-slate-200 font-mono">{stats.database?.type || 'Online'}</span>
                  </div>
                </div>
              )}

              {/* Filters & Search */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  {['all', 'unread', 'read', 'replied'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setFilterStatus(st)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                        filterStatus === st
                          ? 'bg-emerald-500 text-black'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by sender or content..."
                    className="w-full sm:w-60 bg-[#07090e] border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-slate-600"
                  />
                </div>
              </div>

              {/* Messages Table */}
              <div className="space-y-3">
                {messages.length === 0 ? (
                  <div className="p-8 text-center text-slate-500 text-sm bg-slate-900/40 rounded-2xl border border-slate-800">
                    No messages match the current criteria.
                  </div>
                ) : (
                  messages
                    .filter((m) =>
                      searchQuery
                        ? m.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.message?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.subject?.toLowerCase().includes(searchQuery.toLowerCase())
                        : true
                    )
                    .map((msg) => (
                      <div
                        key={msg._id}
                        className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all text-left"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm">{msg.name}</span>
                            <span className="text-xs text-cyan-400 font-mono">&lt;{msg.email}&gt;</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <select
                              value={msg.status}
                              onChange={(e) => handleStatusChange(msg._id, e.target.value)}
                              className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2 py-1 text-[11px] font-mono focus:outline-none"
                            >
                              <option value="unread">Unread</option>
                              <option value="read">Read</option>
                              <option value="replied">Replied</option>
                              <option value="archived">Archived</option>
                            </select>

                            <button
                              onClick={() => handleDelete(msg._id)}
                              className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800 transition-colors"
                              title="Delete Message"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-xs font-semibold text-emerald-400 mb-1">
                          {msg.subject}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line mb-3">
                          {msg.message}
                        </p>

                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-800/60">
                          <span>Received: {new Date(msg.createdAt).toLocaleString()}</span>
                          <span>IP: {msg.ipAddress}</span>
                        </div>
                      </div>
                    ))
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default AdminDashboardModal;
