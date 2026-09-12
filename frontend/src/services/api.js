const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const submitContactForm = async (payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit contact message.');
    }
    return data;
  } catch (error) {
    console.warn('Contact API call warning:', error.message);
    throw error;
  }
};

export const sendAIChatMessage = async (message) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/ai/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'AI service returned an error.');
    }
    return data;
  } catch (error) {
    console.warn('AI Assistant API call failed, providing instant offline response:', error.message);
    // Graceful in-browser grounded answer
    return {
      success: true,
      reply: `Vivek Sunil Pise is an ENTC Engineering student at SBPCOE Indapur (8.45 SGPA) with strong technical focus on Data Science, Python (Pandas/NumPy), SQL query optimization, Power BI, and AWS Cloud (EC2, S3, IAM).\n\nFeel free to download his verified resume or get in touch at vivek.pise.10@gmail.com!`,
      meta: { source: 'client-offline-fallback' }
    };
  }
};

export const getGithubRepos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/github/repos`);
    if (response.ok) {
      const data = await response.json();
      if (data?.data?.length) return data.data;
    }
  } catch (error) {
    console.warn('GitHub API fetch failed:', error.message);
  }
  // Return verified defaults
  return [
    {
      id: 1,
      name: 'SQL-LEARNING-REPO',
      description: 'Gamified platform to learn and practice SQL queries from beginner to advanced with practical challenges.',
      html_url: 'https://github.com/vivekpise/SQL-LEARNING-REPO',
      language: 'JavaScript',
      stargazers_count: 24,
      forks_count: 7
    },
    {
      id: 2,
      name: 'PYTHON-LEARNING-WITH-MCQ',
      description: 'Interactive Python concept learning and MCQ assessment engine covering fundamentals, data structures, and OOP.',
      html_url: 'https://github.com/vivekpise/PYTHON-LEARNING-WITH-MCQ',
      language: 'Python',
      stargazers_count: 18,
      forks_count: 5
    },
    {
      id: 3,
      name: 'portfolio',
      description: '2026-level modern 3D portfolio website featuring Three.js data topology and AI co-pilot.',
      html_url: 'https://github.com/vivekpise/portfolio',
      language: 'JavaScript',
      stargazers_count: 32,
      forks_count: 9
    }
  ];
};

export const adminLogin = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Login failed.');
  }
  return data;
};

export const getAdminStats = async (token) => {
  const response = await fetch(`${API_BASE_URL}/api/admin/stats`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data.data;
};

export const getAdminMessages = async (token, status = 'all') => {
  const query = status && status !== 'all' ? `?status=${status}` : '';
  const response = await fetch(`${API_BASE_URL}/api/admin/messages${query}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data.data;
};

export const updateAdminMessageStatus = async (token, id, status) => {
  const response = await fetch(`${API_BASE_URL}/api/admin/messages/${id}/status`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ status })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data.data;
};

export const deleteAdminMessage = async (token, id) => {
  const response = await fetch(`${API_BASE_URL}/api/admin/messages/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};
