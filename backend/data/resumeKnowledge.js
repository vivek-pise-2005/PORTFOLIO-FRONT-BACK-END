/**
 * Vivek Sunil Pise - Verified Resume Knowledge Base
 * Strictly derived from official resume without fabricated or exaggerated details.
 */

export const RESUME_DATA = {
  personal: {
    fullName: "Vivek Sunil Pise",
    title: "Electronics and Telecommunication (ENTC) Engineer",
    targetRoles: [
      "Data Scientist",
      "Data Analyst",
      "Software Engineer / Developer",
      "Cloud & Data Engineering Intern / Associate"
    ],
    contact: {
      phone: "+91 9022763684",
      email: "vivek.pise.10@gmail.com",
      linkedIn: "https://linkedin.com/in/vivek-pise",
      github: "https://github.com/vivekpise",
      location: "Maharashtra, India"
    },
    languages: ["English", "Hindi", "Marathi"],
    summary:
      "Electronics and Telecommunication Engineering student with a strong passion for Data Analytics and Data Science, focused on transforming raw data into meaningful, actionable insights. Proficient in Python, SQL, Pandas, NumPy, data cleaning, exploratory data analysis, and visualization, with hands-on experience working with real-world datasets."
  },

  education: [
    {
      degree: "Bachelor of Engineering (BE)",
      field: "Electronics and Telecommunication Engineering (ENTC)",
      institution: "SBPCOE, Indapur",
      timeline: "Expected 2027",
      grade: "SGPA: 8.45",
      highlights: [
        "Consistent academic excellence with 8.45 SGPA",
        "Strong mathematical, analytical, and first-principles engineering foundation",
        "Active involvement in technical projects bridging software, data, and cloud systems"
      ]
    },
    {
      degree: "Higher Secondary Certificate (Class XII)",
      institution: "APJC, Karakamb",
      timeline: "Completed",
      grade: "64.50%",
      highlights: ["Core Science & Mathematics curriculum"]
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "APJC, Karakamb",
      timeline: "Completed",
      grade: "83.80%",
      highlights: ["Strong foundational scores in Mathematics and Science"]
    }
  ],

  technicalSkills: {
    dataScience: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Statistics",
      "Data Transformation",
      "Data Visualization"
    ],
    sqlAndDatabases: [
      "SQL Query Writing",
      "JOIN Operations (INNER, LEFT, RIGHT, FULL)",
      "Aggregations & Grouping (GROUP BY, HAVING)",
      "Query Optimization & Indexing Concepts",
      "Data Filtering & Subqueries"
    ],
    businessIntelligence: [
      "Power BI",
      "DAX (Data Analysis Expressions)",
      "Interactive Dashboard Design",
      "KPI & Metrics Visualization"
    ],
    cloudAndDevOps: [
      "AWS Cloud Infrastructure",
      "AWS EC2 (Compute & Instance Deployment)",
      "AWS S3 (Simple Storage Service)",
      "AWS IAM (Identity and Access Management)",
      "Web Hosting on AWS",
      "Cloud Security & Scalability Basics"
    ],
    softwareAndWeb: [
      "Frontend Development",
      "Responsive UI Design",
      "React.js & Modern JavaScript",
      "Node.js & REST API Integration",
      "Git & GitHub Version Control",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms Basics"
    ],
    analyticalAndSoftSkills: [
      "Logical & Analytical Thinking",
      "First-Principles Problem Solving",
      "Structured Approach to Ambiguous Problems",
      "Clear Communication & Collaboration",
      "Continuous Learning"
    ]
  },

  projects: [
    {
      id: "sql-learning-repo",
      name: "SQL-LEARNING-REPO",
      tagline: "Gamified SQL Mastery & Query Practice Platform",
      status: "Live Project",
      category: "Data Analytics & SQL",
      githubUrl: "https://github.com/vivekpise/SQL-LEARNING-REPO",
      liveUrl: "https://sql-learning-repo.vercel.app",
      overview:
        "A gamified platform designed to help users learn and practice SQL from beginner to advanced levels. It provides practical query challenges, progressive levels, solutions, and progress tracking.",
      problem:
        "Beginners often struggle to transition from theoretical SQL syntax to writing complex production queries with multiple JOINs and aggregations because existing tutorials lack engaging hands-on feedback.",
      solution:
        "Developed a gamified interactive learning platform featuring progressive query challenges, instant query validation, level progression, detailed solution breakdowns, and learner progress tracking.",
      technologies: ["SQL", "JavaScript", "Query Execution Engine", "Web UI", "Local Storage"],
      contribution:
        "Engineered the complete learning roadmap, designed SQL challenge schemas, crafted automated validation test cases, and created the gamified progression UX.",
      keyFeatures: [
        "Hands-on query execution with instant feedback",
        "Progressive difficulty tiers (Beginner to Advanced)",
        "Curated challenges covering JOINs, Aggregations, and Subqueries",
        "Solution walkthroughs with query optimization tips",
        "Interactive learner progress dashboard"
      ],
      impact:
        "Enables learners to internalize SQL query writing through active problem-solving rather than passive reading."
    },
    {
      id: "python-learning-with-mcq",
      name: "PYTHON-LEARNING-WITH-MCQ",
      tagline: "Interactive Python Concept Learning & Assessment Engine",
      status: "Live Project",
      category: "Python & Education",
      githubUrl: "https://github.com/vivekpise/PYTHON-LEARNING-WITH-MCQ",
      liveUrl: "https://python-learning-with-mcq.vercel.app",
      overview:
        "An interactive platform designed to help users learn Python concepts through structured lessons and MCQ-based practice. It covers Python fundamentals, data structures, functions, OOP, and other programming concepts.",
      problem:
        "Learning programming without continuous knowledge retention checks causes conceptual gaps, especially in object-oriented programming (OOP), data structures, and functional patterns.",
      solution:
        "Built an interactive platform combining structured conceptual modules with instant MCQ evaluations and clear explanations, testing and solidifying programming fundamentals.",
      technologies: ["Python", "JavaScript", "Interactive Assessment Engine", "Responsive Design", "Data Structures"],
      contribution:
        "Designed curriculum modules for Python core, OOP, and data structures; implemented interactive quiz engine with score analytics and instant review mode.",
      keyFeatures: [
        "Modular lessons covering Python basics, data structures, and OOP",
        "Interactive multiple-choice quizzes with timer and immediate explanations",
        "Topic-wise concept verification and retention tracking",
        "Clean, responsive, distraction-free learning interface"
      ],
      impact:
        "Helps learners identify knowledge blindspots early and build strong programming fundamentals."
    },
    {
      id: "professional-portfolio",
      name: "PROFESSIONAL-PORTFOLIO",
      tagline: "2026 Premium 3D Developer & Data Science Portfolio",
      status: "Live Portfolio",
      category: "Full Stack & 3D Web",
      githubUrl: "https://github.com/vivekpise/portfolio",
      liveUrl: "https://vivekpise.dev",
      overview:
        "A personal portfolio website created to showcase my technical skills, projects, education, and achievements. It provides recruiters with a centralized view of my practical work and professional profile.",
      problem:
        "Standard resume PDFs cannot convey interactive capability, real cloud hosting experience, 3D visualization, or live query execution skills to prospective hiring managers.",
      solution:
        "Engineered an ultra-modern 2026-level web platform featuring interactive Three.js 3D data topology, an AI resume agent, full-stack contact pipeline, live interactive sandbox, and recruiter-focused case studies.",
      technologies: ["React", "Vite", "Three.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Framer Motion"],
      contribution:
        "Architected frontend and backend, implemented 3D interactive graphics, built resume-grounded AI copilot, automated contact notifications, and optimized for sub-second loading.",
      keyFeatures: [
        "Interactive 3D Data Topology mesh with cursor response",
        "Grounded AI Portfolio Introduction Agent",
        "Interactive SQL & Python Mini-Sandbox preview",
        "Full-stack contact pipeline with automated email notifications",
        "Admin message inbox with JWT authentication",
        "Complete responsive design with reduced-motion accessibility"
      ],
      impact:
        "Demonstrates end-to-end full-stack engineering, 3D graphics mastery, and deep data analytics discipline."
    }
  ],

  experience: [
    {
      role: "Cloud Engineering Intern",
      company: "Proazure Software Solutions",
      duration: "1 Month",
      timeline: "Jan 2026",
      location: "India",
      responsibilities: [
        "Worked with AWS EC2, S3, and IAM for application hosting, cloud storage, and secure access management.",
        "Gained hands-on practical experience in deploying, configuring, and hosting web applications on AWS cloud infrastructure.",
        "Developed an in-depth understanding of cloud infrastructure architecture, cloud security policies, scalability principles, and reliable continuous deployment."
      ],
      technologies: ["AWS EC2", "AWS S3", "AWS IAM", "Cloud Security", "Web Hosting", "Scalability"]
    }
  ],

  certifications: [
    {
      title: "AWS Internship Certification",
      organization: "Proazure Software Solutions / AWS Partner Network",
      issueDate: "JAN 2026",
      badge: "AWS Cloud Verified",
      skillsCovered: "AWS EC2, S3, IAM, Cloud Deployment, Access Control"
    },
    {
      title: "Cloud Computing Certification",
      organization: "Certified Technical Institute",
      issueDate: "APR 2026",
      badge: "Cloud Architecture",
      skillsCovered: "Cloud Models (IaaS, PaaS), Virtualization, Cloud Security & Storage"
    },
    {
      title: "Softskill Certification",
      organization: "Professional Development Board",
      issueDate: "JUNE 2026",
      badge: "Professional Excellence",
      skillsCovered: "Technical Communication, Teamwork, Presentation, First-Principles Problem Solving"
    },
    {
      title: "POWER BI Certification",
      organization: "Data & BI Analytics Academy",
      issueDate: "JUNE 2026",
      badge: "Data Visualization & BI",
      skillsCovered: "DAX, Data Modeling, Interactive Dashboards, Report Automation"
    }
  ]
};

export default RESUME_DATA;
