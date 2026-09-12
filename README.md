# Vivek Sunil Pise — 2026 Developer Portfolio & Data Science Showcase

An ultra-modern, 2026-level developer portfolio website and full-stack system designed for **Vivek Sunil Pise**, an Electronics & Telecommunication (ENTC) Engineering student at SBPCOE Indapur (8.45 SGPA) aspiring for roles in **Data Science, Data Analytics, and Software Engineering**.

The platform features an interactive Three.js 3D Data Mesh topology, an embedded AI introduction agent strictly grounded in his verified resume, live interactive SQL & Python preview sandboxes, automated contact processing with dual email notifications, and an authenticated administrative dashboard.

---

## 🌟 Key Highlights & Features

1. **Interactive 3D Visual Experience (Three.js)**
   - Custom WebGL Data Topology neural graph symbolizing data analytics and interconnected machine learning nodes.
   - Dynamic cursor parallax reaction and scroll interpolation.
   - Built-in `prefers-reduced-motion` detection and frame-budget optimizations for lower-power devices.

2. **Resume-Grounded AI Co-pilot (No Hallucinations)**
   - Instant interactive drawer (`Ask AI Co-pilot` button / floating trigger).
   - Strict persona boundary: Answers recruiter questions regarding skills, academic grades (8.45 SGPA), projects, AWS internship, and contact details strictly from Vivek's verified resume.
   - Dual-engine architecture: Automatically links to Google Gemini or OpenAI when an API key is provided, and operates with an intelligent deterministic semantic fallback NLP engine if no key is present.

3. **Engineering Project Case Studies**
   - **`SQL-LEARNING-REPO`**: Gamified SQL mastery platform with progressive query challenges, JOINs/aggregations practice, and automated validation.
   - **`PYTHON-LEARNING-WITH-MCQ`**: Interactive Python learning platform pairing modular lessons with instant MCQ assessments in OOP and Data Structures.
   - **`PROFESSIONAL-PORTFOLIO`**: 2026-grade modern 3D portfolio featuring Three.js data topology, an AI agent, full-stack contact pipeline, and live interactive sandbox.
   - Interactive deep-dive modal for each project with Problem, Solution, Contribution, Features, and Live Demos.

4. **Live Interactive SQL & Python Mini-Sandbox**
   - Embedded right on the website so recruiters can experience Vivek's platforms within 10 seconds!
   - Run sample queries against a relational schema with instant result validation and optimization tips.
   - Solve interactive Python / Data Analytics MCQs with instant feedback and celebratory confetti.

5. **Cloud Experience & Architecture Breakdown**
   - Details from 1-month internship at **Proazure Software Solutions**.
   - Interactive AWS architecture card covering **AWS EC2** (hosting), **AWS S3** (storage), and **AWS IAM** (security policies & access control).

6. **Verified Education & 4 Industry Certifications**
   - **BE in ENTC** from SBPCOE, Indapur (Expected 2027) — **8.45 SGPA**.
   - Higher Secondary (XII) — 64.50% | Secondary (X) — 83.80%.
   - Certifications: AWS Internship (Jan 2026), Cloud Computing (Apr 2026), Softskill (June 2026), Power BI (June 2026).

7. **Full-Stack Contact Automation & Admin Inbox**
   - Frontend form with client-side regex validation and honeypot spam protection.
   - Dual Nodemailer notifications: instant alert to Vivek and professional acknowledgement auto-responder to the sender.
   - JWT-authenticated Admin Portal (`/admin` / lock button) with message status toggle (`unread`, `read`, `replied`), search/filter, and system telemetry.

8. **Spotlight Command Palette (`Ctrl+K` / `Cmd+K`)**
   - Fast fuzzy navigation across all sections.
   - One-click resume PDF download, email copy, telephone call, and AI launcher.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite 5, Tailwind CSS, Three.js, Lucide React, Canvas Confetti
- **Backend**: Node.js, Express.js, Mongoose, JSON Web Token (JWT), Bcrypt.js, Helmet, CORS, Express-Rate-Limit, Nodemailer, Validator
- **Database**: MongoDB (with seamless in-memory fallback store)
- **Deployment Targets**: Vercel / Netlify (Frontend), Render / Railway (Backend), MongoDB Atlas (Database)

---

## 📁 Repository Structure

```text
├── frontend/
│   ├── public/
│   │   ├── resume.pdf                # Official verified downloadable resume
│   │   ├── favicon.svg               # Cyberpunk hexagon VP logo
│   │   └── index.html                # SEO & Open Graph metadata
│   ├── src/
│   │   ├── components/
│   │   │   ├── 3d/                   # Three.js Data Topology canvas
│   │   │   ├── ai/                   # AI Assistant drawer & floating triggers
│   │   │   ├── common/               # Navbar, Footer, Command Palette, Toast
│   │   │   ├── interactive/          # Live SQL & Python Mini-Sandbox
│   │   │   ├── sections/             # Hero, About, Skills, Projects, Experience, Education, Resume, Contact
│   │   │   └── admin/                # Authenticated Admin Inbox & Metrics modal
│   │   ├── data/
│   │   │   └── portfolioData.js      # Verified resume facts & challenge datasets
│   │   ├── services/
│   │   │   └── api.js                # Frontend HTTP client
│   │   ├── App.jsx                   # Central layout
│   │   ├── index.css                 # Dark futuristic Tailwind styles
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js                     # MongoDB connection with graceful in-memory fallback
│   ├── controllers/
│   │   ├── contactController.js      # Contact form handling & spam trap
│   │   ├── aiController.js           # AI Co-pilot endpoint
│   │   ├── adminController.js        # Admin auth, messages & metrics
│   │   └── githubController.js       # Repos with in-memory caching
│   ├── data/
│   │   └── resumeKnowledge.js        # Complete grounded knowledge base
│   ├── middleware/
│   │   ├── authMiddleware.js         # JWT bearer authentication
│   │   ├── rateLimiter.js            # Abuse prevention
│   │   └── errorHandler.js           # Production error safety
│   ├── models/
│   │   └── ContactMessage.js         # Schema with dual-store capability
│   ├── routes/                       # /api/contact, /api/ai, /api/admin, /api/github
│   ├── services/
│   │   ├── aiGroundedService.js      # Gemini/OpenAI API + deterministic NLP engine
│   │   └── emailService.js           # Nodemailer notifications & auto-responder
│   ├── .env                          # Local environment variables
│   ├── .env.example                  # Environment template
│   ├── server.js                     # Express server entrypoint
│   └── package.json
│
├── .env.example
├── package.json                      # Root workspace orchestrator
└── README.md
```

---

## 🚀 Quickstart & Local Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (Tested on Node v24)
- **npm**: v9.0.0 or later

### 2. Installation
Install all dependencies in root, backend, and frontend:
```bash
# In the root directory:
npm run install:all
```
*Or manually:*
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3. Running Locally
Run both backend and frontend concurrently:
```bash
# In the root directory:
npm run dev
```

- **Frontend Application**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`
- **API Health Check**: `http://localhost:5000/api/health`

---

## ⚙️ Environment Variables Configuration

Refer to `backend/.env.example`:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `PORT` | Backend port | `5000` |
| `NODE_ENV` | Environment mode | `development` |
| `MONGODB_URI` | MongoDB Connection String (Atlas or local) | *Optional (Falls back to in-memory store if unset)* |
| `ADMIN_USER` | Admin Console Username | `admin` |
| `ADMIN_PASS` | Admin Console Password | `VivekAdmin2026!` |
| `JWT_SECRET` | Secret key for admin JWT tokens | `vivek-portfolio-super-secret-jwt-key-2026` |
| `CONTACT_RECEIVER_EMAIL` | Email where contact submissions are sent | `vivek.pise.10@gmail.com` |
| `SMTP_HOST` | SMTP server host (e.g. Gmail) | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_USER` | SMTP username / email | `your-email@gmail.com` |
| `SMTP_PASS` | SMTP password or App Password | `your-app-password` |
| `GEMINI_API_KEY` | Google Gemini API key (optional) | *Grounded fallback active if unset* |
| `OPENAI_API_KEY` | OpenAI API key (optional) | *Grounded fallback active if unset* |
| `GITHUB_USERNAME` | GitHub handle for public repositories | `vivekpise` |

---

## 🔒 Security Practices Implemented

- **No Exposed Secrets**: Frontend contains zero API keys or backend credentials.
- **Input Sanitization & Validation**: Inputs validated with `validator` and HTML-escaped.
- **Spam Protection**: Invisible honeypot field (`botField`) traps automated scrapers and bots.
- **Rate Limiting**: Express rate limiters protect the contact form (10 req / 15 min), AI chat (40 req / 5 min), and admin login (10 attempts / 15 min).
- **HTTP Headers**: Protected with `helmet` and custom `cors` configuration.
- **JWT Protection**: Administrative routes (`/api/admin/*`) require cryptographically verified bearer tokens.

---

## ☁️ Deployment Guide

### Deploying Frontend (Vercel / Netlify)
1. Push the code to a GitHub repository.
2. Link the repository to **Vercel** or **Netlify**.
3. Set **Root Directory** to `frontend`.
4. Set **Build Command** to `npm run build` and **Output Directory** to `dist`.
5. Under Environment Variables, set `VITE_API_URL` to your live backend URL (e.g. `https://portfolio-backend.onrender.com`).

### Deploying Backend (Render / Railway)
1. Create a new Web Service on **Render** or **Railway**.
2. Set **Root Directory** to `backend`.
3. Set **Build Command** to `npm install` and **Start Command** to `node server.js`.
4. Add your environment variables (`MONGODB_URI`, `ADMIN_USER`, `ADMIN_PASS`, `JWT_SECRET`, `SMTP_HOST`, `GEMINI_API_KEY`, etc.).

### Database (MongoDB Atlas)
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database user and allow network access from `0.0.0.0/0`.
3. Copy the connection string into `MONGODB_URI`.

---

## 👤 Candidate Profile & Contact

- **Candidate**: Vivek Sunil Pise
- **Degree**: Bachelor of Engineering in Electronics and Telecommunication (ENTC)
- **Institution**: SBPCOE, Indapur (Expected 2027)
- **Academic SGPA**: 8.45
- **Email**: [vivek.pise.10@gmail.com](mailto:vivek.pise.10@gmail.com)
- **Phone**: [+91 9022763684](tel:+919022763684)
- **LinkedIn**: [linkedin.com/in/vivek-pise](https://linkedin.com/in/vivek-pise)
- **GitHub**: [github.com/vivekpise](https://github.com/vivekpise)
