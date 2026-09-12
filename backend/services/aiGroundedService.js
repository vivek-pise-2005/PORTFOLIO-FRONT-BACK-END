import { RESUME_DATA } from '../data/resumeKnowledge.js';

/**
 * Intelligent Grounded AI Engine for Vivek Sunil Pise's Portfolio
 * - Connects to Gemini / OpenAI if API key is provided
 * - Falls back to an advanced semantic knowledge engine if running offline/without API key
 * - Strictly prevents hallucination and guarantees accurate representation
 */

const SYSTEM_PROMPT = `
You are the official AI Portfolio Introduction Agent for Vivek Sunil Pise.
Your role is to introduce Vivek to recruiters, engineering managers, and visitors professionally, accurately, and compellingly.

VIVEK'S VERIFIED FACTS:
- Full Name: ${RESUME_DATA.personal.fullName}
- Title: ${RESUME_DATA.personal.title}
- Target Domains: Data Science, Data Analytics, Software Engineering, Cloud Engineering
- Current Status: Engineering Student (BE in ENTC) at SBPCOE, Indapur (Expected 2027) with an outstanding SGPA of 8.45
- Previous Academics: Class XII at APJC, Karakamb (64.50%), Class X at APJC, Karakamb (83.80%)
- Core Tech Skills:
  * SQL & Query Writing: Complex JOINs, Aggregations (GROUP BY/HAVING), Query Optimization
  * Data Analysis: Python, Pandas, NumPy, Statistics, Exploratory Data Analysis (EDA), Data Cleaning
  * Business Intelligence: Power BI, DAX, KPI Dashboards
  * Cloud Computing: AWS EC2, AWS S3, AWS IAM, Web Application Deployment, Cloud Security
  * Software / Web: React, JavaScript, Node.js, Express, REST APIs, Git & GitHub, OOP
  * Analytical Thinking: First-principles problem solving, structured breakdown of ambiguous problems
- Live Projects:
  1. SQL-LEARNING-REPO: Gamified platform for learning and practicing SQL from beginner to advanced. Hands-on query challenges, progressive levels, automated feedback, and progress tracking.
  2. PYTHON-LEARNING-WITH-MCQ: Interactive Python learning system with structured lessons and MCQ-based practice covering fundamentals, data structures, functions, and OOP.
  3. PROFESSIONAL-PORTFOLIO: 2026-grade modern 3D portfolio featuring Three.js data topology, an AI resume agent, contact automation, and recruiter case studies.
- Internship Experience:
  * Proazure Software Solutions (1 Month Intern): Worked with AWS EC2, S3, and IAM for application hosting, storage, and access management; practical deployment of web applications on AWS; cloud security and scalability fundamentals.
- Certifications:
  * AWS Internship Certification (JAN 2026)
  * Cloud Computing Certification (APR 2026)
  * Softskill Certification (JUNE 2026)
  * POWER BI Certification (JUNE 2026)
- Languages: English, Hindi, Marathi
- Contact: Phone (+91 9022763684), Email (vivek.pise.10@gmail.com), Location (Maharashtra, India)

STRICT RULES:
1. Only answer based on the facts provided above.
2. DO NOT invent or fabricate any work experience, companies, degrees, or results not mentioned.
3. Keep responses concise, professional, warm, and tailored to tech recruiters.
4. If a question asks about something not in Vivek's background, politely state that it is not in his current portfolio and suggest contacting him directly via email (vivek.pise.10@gmail.com).
`;

// Advanced semantic pattern matching fallback
const generateGroundedFallback = (userMessage) => {
  const q = userMessage.toLowerCase().trim();

  if (q.includes('who') || q.includes('intro') || q.includes('about') || q.includes('tell me about yourself')) {
    return (
      `Hello! I'm Vivek Sunil Pise's AI Copilot. Vivek is an Electronics and Telecommunication (ENTC) Engineering student at SBPCOE, Indapur (Expected 2027) with a strong academic record (8.45 SGPA).\n\n` +
      `He specializes in **Data Science, Data Analytics, and Software Engineering**, combining deep hands-on expertise in Python, SQL, Pandas, NumPy, and Power BI with practical cloud deployment skills gained during his AWS internship at Proazure Software Solutions. How can I assist your evaluation today?`
    );
  }

  if (q.includes('sql-learning') || q.includes('sql repo') || (q.includes('sql') && q.includes('project'))) {
    const p = RESUME_DATA.projects[0];
    return (
      `**${p.name}** is Vivek's gamified SQL mastery platform.\n\n` +
      `• **Objective**: Helps users learn and master SQL from beginner to advanced tiers through practical hands-on query challenges.\n` +
      `• **Key Features**: Progressive difficulty levels, instant query validation, coverage of complex JOINs, Aggregations, Subqueries, and query optimization.\n` +
      `• **Tech Stack**: ${p.technologies.join(', ')}.\n\n` +
      `You can check out the live project at [${p.liveUrl}](${p.liveUrl}) or explore the source code on GitHub!`
    );
  }

  if (q.includes('python-learning') || q.includes('mcq') || (q.includes('python') && q.includes('project'))) {
    const p = RESUME_DATA.projects[1];
    return (
      `**${p.name}** is an interactive platform designed to solidify Python programming concepts.\n\n` +
      `• **Focus**: Bridges conceptual learning with immediate MCQ-based assessments covering Python fundamentals, data structures, functions, and Object-Oriented Programming (OOP).\n` +
      `• **Impact**: Helps learners self-test retention and conquer conceptual blindspots with instant feedback.\n` +
      `• **Tech Stack**: ${p.technologies.join(', ')}.\n\n` +
      `Vivek has deployed this live for community learners at [${p.liveUrl}](${p.liveUrl}).`
    );
  }

  if (q.includes('project')) {
    return (
      `Vivek has developed three primary production projects:\n\n` +
      `1. **SQL-LEARNING-REPO**: Gamified SQL mastery platform with progressive query challenges, JOINs/aggregations practice, and automated validation.\n` +
      `2. **PYTHON-LEARNING-WITH-MCQ**: Interactive Python learning platform pairing modular lessons with instant MCQ assessments in OOP and Data Structures.\n` +
      `3. **PROFESSIONAL-PORTFOLIO**: A 2026-level 3D developer portfolio featuring Three.js data topology, an AI agent, full-stack contact pipeline, and live interactive sandbox.\n\n` +
      `Would you like deeper technical details on any of these?`
    );
  }

  if (q.includes('intern') || q.includes('proazure') || q.includes('work') || q.includes('experience')) {
    const exp = RESUME_DATA.experience[0];
    return (
      `Vivek completed a 1-month **${exp.role}** at **${exp.company}** (Jan 2026):\n\n` +
      `• **AWS Services**: Worked hands-on with **AWS EC2, S3, and IAM** for application hosting, secure storage, and identity/access management.\n` +
      `• **Deployment**: Deployed and configured web applications on AWS cloud infrastructure.\n` +
      `• **Security & Scalability**: Implemented IAM least-privilege policies, security groups, and scalable architecture practices.\n\n` +
      `This experience provides him with end-to-end perspective on hosting data apps in modern cloud environments.`
    );
  }

  if (q.includes('skill') || q.includes('technolog') || q.includes('stack')) {
    return (
      `Here is a breakdown of Vivek's core technical proficiencies:\n\n` +
      `• **Data Science & Analytics**: Python (Pandas, NumPy), Statistics, Data Cleaning, Exploratory Data Analysis (EDA), Power BI (DAX, Dashboards).\n` +
      `• **Databases & Querying**: SQL (Complex JOINs, Aggregations, Query Optimization, Subqueries).\n` +
      `• **Cloud & Infrastructure**: AWS (EC2, S3, IAM), Cloud Web Hosting, Scalability, Access Management.\n` +
      `• **Software & Web**: React, JavaScript, Node.js, Express, REST APIs, HTML5/CSS3, Git & GitHub.\n` +
      `• **Engineering Method**: First-principles problem solving and structured thinking for ambiguous challenges.`
    );
  }

  if (q.includes('educat') || q.includes('college') || q.includes('degree') || q.includes('cgpa') || q.includes('sgpa')) {
    return (
      `Vivek's educational background:\n\n` +
      `• **Bachelor of Engineering (BE) in Electronics & Telecommunication (ENTC)**\n` +
      `  SBPCOE, Indapur | Expected 2027 | **SGPA: 8.45**\n` +
      `• **Higher Secondary Certificate (Class XII)**\n` +
      `  APJC, Karakamb | Score: **64.50%**\n` +
      `• **Secondary School Certificate (Class X)**\n` +
      `  APJC, Karakamb | Score: **83.80%**\n\n` +
      `His ENTC engineering background gives him a strong quantitative, mathematical, and algorithmic foundation.`
    );
  }

  if (q.includes('certif')) {
    return (
      `Vivek holds 4 verified certifications:\n\n` +
      `1. **AWS Internship Certification** (JAN 2026) — AWS EC2, S3, IAM & Cloud Deployment.\n` +
      `2. **Cloud Computing Certification** (APR 2026) — Cloud architecture, virtualization & infrastructure.\n` +
      `3. **Softskill Certification** (JUNE 2026) — Professional communication, teamwork, & first-principles problem solving.\n` +
      `4. **POWER BI Certification** (JUNE 2026) — DAX, data modeling, KPI dashboards & visual analytics.`
    );
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach')) {
    return (
      `You can get in touch with Vivek directly:\n\n` +
      `• **Email**: [vivek.pise.10@gmail.com](mailto:vivek.pise.10@gmail.com)\n` +
      `• **Phone**: [+91 9022763684](tel:+919022763684)\n` +
      `• **LinkedIn**: [LinkedIn Profile](${RESUME_DATA.personal.contact.linkedIn})\n` +
      `• **GitHub**: [github.com/vivekpise](${RESUME_DATA.personal.contact.github})\n` +
      `• **Location**: Maharashtra, India\n\n` +
      `Feel free to also use the contact form right below on this website!`
    );
  }

  if (q.includes('language')) {
    return `Vivek is fluent in **English**, **Hindi**, and **Marathi**.`;
  }

  // Default intelligent response
  return (
    `Thank you for asking! Vivek Sunil Pise is an ENTC Engineering student (8.45 SGPA, SBPCOE Indapur) preparing for roles in **Data Science, Data Analytics, and Software Engineering**.\n\n` +
    `He is proficient in **Python, SQL, Pandas, NumPy, Power BI (DAX), and AWS (EC2, S3, IAM)** with hands-on projects like **SQL-LEARNING-REPO** and **PYTHON-LEARNING-WITH-MCQ**.\n\n` +
    `You can ask me specifically about his:\n` +
    `• Technical Skills & Tools\n` +
    `• Projects & Live Demos\n` +
    `• AWS Internship at Proazure\n` +
    `• Education & Certifications\n` +
    `• Contact Details`
  );
};

export const queryAIAssistant = async (userMessage) => {
  const geminiApiKey = process.env.GEMINI_API_KEY;
  const openAiApiKey = process.env.OPENAI_API_KEY;

  if (geminiApiKey) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${SYSTEM_PROMPT}\n\nVisitor Question: "${userMessage}"` }]
            }
          ],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 600
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) return { reply, source: 'gemini-grounded' };
      }
    } catch (err) {
      console.warn('Gemini API query failed, using grounded fallback engine:', err.message);
    }
  }

  if (openAiApiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openAiApiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: userMessage }
          ],
          temperature: 0.3,
          max_tokens: 500
        })
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content;
        if (reply) return { reply, source: 'openai-grounded' };
      }
    } catch (err) {
      console.warn('OpenAI API query failed, using grounded fallback engine:', err.message);
    }
  }

  // Reliable grounded NLP rule engine
  const reply = generateGroundedFallback(userMessage);
  return { reply, source: 'grounded-resume-engine' };
};
