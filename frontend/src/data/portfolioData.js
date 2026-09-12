/**
 * Vivek Sunil Pise - Verified Portfolio Data
 * Grounded 100% in verified resume facts.
 */

export const PERSONAL_INFO = {
  name: "Vivek Sunil Pise",
  shortName: "Vivek Pise",
  title: "Electronics and Telecommunication (ENTC) Engineer",
  taglines: [
    "Data Science Aspirant",
    "Data Analytics Specialist",
    "Software & Full-Stack Developer",
    "AWS Cloud Certified"
  ],
  summary:
    "Electronics and Telecommunication Engineering student with a strong passion for Data Analytics and Data Science, focused on transforming raw data into meaningful, actionable insights. Proficient in Python, SQL, Pandas, NumPy, data cleaning, exploratory data analysis, and visualization, with hands-on experience working with real-world datasets.",
  aboutDetailed:
    "I am an Electronics and Telecommunication Engineering student at SBPCOE, Indapur (Expected 2027) maintaining an 8.45 SGPA. My engineering foundation emphasizes first-principles logical thinking, mathematical rigor, and systematic problem solving. I channel these capabilities into Data Analytics and Software Development—mastering SQL query optimization, Python data pipelines with Pandas & NumPy, Power BI dashboards, and AWS cloud hosting.",
  contact: {
    phone: "+91 9022763684",
    email: "vivek.pise.10@gmail.com",
    linkedIn: "https://linkedin.com/in/vivek-pise",
    github: "https://github.com/vivekpise",
    location: "Maharashtra, India"
  },
  metrics: [
    { label: "Academic SGPA", value: "8.45", sub: "SBPCOE, Indapur (BE ENTC)" },
    { label: "Live Projects", value: "3+", sub: "SQL, Python & 3D Web" },
    { label: "Industry Certifications", value: "4", sub: "AWS, Cloud, Power BI & Softskills" },
    { label: "Cloud Experience", value: "AWS", sub: "EC2, S3, IAM Deployment" }
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Full Professional Proficiency" },
    { name: "Marathi", level: "Native / Bilingual Proficiency" }
  ]
};

export const SKILLS_DATA = [
  {
    category: "Data Science & Analytics",
    icon: "BarChart3",
    description: "Extracting actionable intelligence and statistical patterns from complex datasets",
    skills: [
      { name: "Python", highlight: "Pandas, NumPy, Scripting" },
      { name: "Exploratory Data Analysis (EDA)", highlight: "Data cleaning, anomaly detection" },
      { name: "Statistics & Probability", highlight: "Descriptive, inferential metrics" },
      { name: "Data Cleaning", highlight: "Handling missing values, outlier treatment" },
      { name: "Data Visualization", highlight: "Pattern recognition & trend insights" }
    ]
  },
  {
    category: "SQL & Databases",
    icon: "Database",
    description: "Architecting high-performance queries and relational data models",
    skills: [
      { name: "SQL Query Writing", highlight: "Complex SELECT, filters & formatting" },
      { name: "JOIN Operations", highlight: "INNER, LEFT, RIGHT, FULL outer joins" },
      { name: "Aggregations", highlight: "GROUP BY, HAVING, Window functions" },
      { name: "Query Optimization", highlight: "Indexing principles & execution efficiency" },
      { name: "Relational Schemas", highlight: "Entity relationships & constraints" }
    ]
  },
  {
    category: "Business Intelligence",
    icon: "PieChart",
    description: "Transforming enterprise data into interactive executive dashboards",
    skills: [
      { name: "Power BI", highlight: "Certified BI Analytics Specialist" },
      { name: "DAX (Data Analysis Expressions)", highlight: "Calculated measures & columns" },
      { name: "Interactive Dashboards", highlight: "Cross-filtering & visual storytelling" },
      { name: "KPI Metrics Design", highlight: "Business performance monitoring" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    description: "Hands-on cloud architecture and reliable web application hosting",
    skills: [
      { name: "AWS EC2", highlight: "Compute instances, security groups & hosting" },
      { name: "AWS S3", highlight: "Object storage, static web hosting & policies" },
      { name: "AWS IAM", highlight: "Least privilege roles, users & credentials" },
      { name: "Cloud Deployment", highlight: "Web app provisioning & live hosting" },
      { name: "Cloud Security", highlight: "Access management & network rules" }
    ]
  },
  {
    category: "Software & Web Development",
    icon: "Code2",
    description: "Building responsive, modern, and performant web applications",
    skills: [
      { name: "Frontend Development", highlight: "React.js, modern ES6+ JavaScript" },
      { name: "Responsive UI/UX", highlight: "Tailwind CSS, mobile-first design" },
      { name: "Backend & APIs", highlight: "Node.js, Express.js REST architectures" },
      { name: "Version Control", highlight: "Git, GitHub branch workflows" },
      { name: "Object-Oriented Programming", highlight: "Clean, modular code structure" }
    ]
  },
  {
    category: "Analytical & Core Engineering",
    icon: "Cpu",
    description: "First-principles problem breakdown and technical communication",
    skills: [
      { name: "Logical Thinking", highlight: "Structured approach to ambiguous problems" },
      { name: "First-Principles Method", highlight: "Deconstructing problems to fundamentals" },
      { name: "ENTC Engineering", highlight: "Hardware-software integration & signals" },
      { name: "Softskills Certified", highlight: "Collaborative teamwork & presentation" }
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: "sql-learning-repo",
    title: "SQL-LEARNING-REPO",
    category: "Data Analytics & SQL",
    badge: "Live Project",
    summary:
      "A gamified platform designed to help users learn and practice SQL from beginner to advanced levels through hands-on query challenges.",
    problemStatement:
      "Beginner and intermediate learners often find theoretical database syntax dry and lack an immediate query feedback loop to test complex JOINs, group aggregations, and optimization strategies.",
    solution:
      "Created a gamified interactive learning platform with progressive levels, practical query challenges, automated validation against mock database tables, detailed solution breakdowns, and personalized progress tracking.",
    technologies: ["SQL", "JavaScript", "Query Execution Sandbox", "Gamified UX", "Local Storage"],
    contribution:
      "Designed the end-to-end curriculum structure, authored real-world challenge datasets, implemented automatic query syntax verification, and crafted the gamified level-progression interface.",
    keyFeatures: [
      "Progressive tiers: Beginner, Intermediate, and Advanced SQL challenges",
      "Comprehensive challenge coverage: JOINs, Aggregations, Subqueries, and Filtering",
      "Instant query evaluation with result verification against target schemas",
      "Step-by-step solution explanations with query optimization rationale",
      "Local progress tracking allowing learners to resume their learning path"
    ],
    githubUrl: "https://github.com/vivekpise/SQL-LEARNING-REPO",
    liveUrl: "https://sql-learning-repo.vercel.app",
    stats: { levels: "15+ Challenges", focus: "Query Optimization", rating: "Hands-on Practice" }
  },
  {
    id: "python-learning-with-mcq",
    title: "PYTHON-LEARNING-WITH-MCQ",
    category: "Python & Education",
    badge: "Live Project",
    summary:
      "An interactive platform designed to help users learn Python concepts through structured lessons and MCQ-based practice.",
    problemStatement:
      "Memorizing Python syntax without targeted conceptual testing often leads to confusion when dealing with data structures, functions, and Object-Oriented Programming (OOP) paradigms.",
    solution:
      "Engineered an interactive learning portal that combines concise conceptual lesson cards with instant multiple-choice assessments, enabling learners to immediately evaluate comprehension and retain key principles.",
    technologies: ["Python", "JavaScript", "Assessment Engine", "OOP Patterns", "Responsive UI"],
    contribution:
      "Authored modular lessons spanning Python fundamentals to OOP and data structures; built the dynamic quiz engine featuring instant explanations, score analytics, and review modes.",
    keyFeatures: [
      "Structured concept modules: Fundamentals, Data Structures, Functions, and OOP",
      "Immediate MCQ evaluation with detailed answer explanations",
      "Score tracker and topic mastery indicators",
      "Intuitive, distraction-free responsive design for desktop and mobile learners"
    ],
    githubUrl: "https://github.com/vivekpise/PYTHON-LEARNING-WITH-MCQ",
    liveUrl: "https://python-learning-with-mcq.vercel.app",
    stats: { modules: "Core to OOP", format: "Interactive MCQ", result: "Mastery Retention" }
  },
  {
    id: "professional-portfolio",
    title: "PROFESSIONAL-PORTFOLIO",
    category: "Full-Stack & 3D Web",
    badge: "Live Portfolio",
    summary:
      "A personal portfolio website created to showcase my technical skills, projects, education, and achievements, providing recruiters with a centralized view of my practical work.",
    problemStatement:
      "Static resumes do not showcase interactive engineering capability, cloud hosting skills, 3D graphics rendering, or live coding previews to tech recruiters.",
    solution:
      "Designed and developed a cutting-edge 2026-level developer portfolio incorporating interactive Three.js 3D data topology, an AI resume agent, full-stack contact automation, and a live SQL/Python mini-sandbox.",
    technologies: ["React", "Vite", "Three.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Framer Motion"],
    contribution:
      "Spearheaded full-stack development, created custom Three.js 3D data mesh canvas, built grounded AI assistant endpoint, and implemented automated email notifications.",
    keyFeatures: [
      "Interactive 3D Data Topology mesh reacting dynamically to cursor and scroll",
      "Grounded AI Portfolio Copilot strictly representing verified resume facts",
      "Interactive SQL & Python Mini-Sandbox for live in-browser testing",
      "Full-stack contact pipeline with automated email notifications & Admin Inbox",
      "Command Palette (Ctrl+K) for instant keyboard navigation",
      "Responsive design with reduced-motion accessibility"
    ],
    githubUrl: "https://github.com/vivekpise/portfolio",
    liveUrl: "https://vivekpise.dev",
    stats: { tech: "Three.js + React", speed: "Sub-second Load", security: "JWT + Rate Limit" }
  }
];

export const EXPERIENCE_DATA = [
  {
    company: "Proazure Software Solutions",
    role: "Cloud Engineering Intern",
    duration: "1 Month",
    timeline: "JAN 2026",
    location: "India",
    badge: "AWS Cloud Verified",
    summary:
      "Hands-on experience configuring, deploying, and securing web applications using core Amazon Web Services infrastructure.",
    responsibilities: [
      "Worked with AWS EC2, S3, and IAM for application hosting, storage, and access management.",
      "Gained practical experience in deploying and hosting web applications on AWS cloud infrastructure.",
      "Developed an understanding of cloud infrastructure, security, scalability, and reliable application deployment."
    ],
    technologies: ["AWS EC2", "AWS S3", "AWS IAM", "Cloud Security", "Web Hosting", "Access Control"]
  }
];

export const EDUCATION_DATA = [
  {
    degree: "Bachelor of Engineering (BE)",
    field: "Electronics and Telecommunication (ENTC) Engineering",
    institution: "SBPCOE, Indapur",
    timeline: "Expected 2027",
    grade: "SGPA: 8.45",
    highlight: "First-Class with Distinction trajectory (8.45 SGPA)",
    description:
      "Comprehensive engineering curriculum covering analytical problem solving, digital signal processing, computing fundamentals, and systems integration."
  },
  {
    degree: "Higher Secondary Certificate (Class XII)",
    field: "Science & Mathematics",
    institution: "APJC, Karakamb",
    timeline: "Completed",
    grade: "Score: 64.50%",
    highlight: "State Board Examination",
    description: "Core coursework in Physics, Chemistry, Mathematics, and Computer Science."
  },
  {
    degree: "Secondary School Certificate (Class X)",
    field: "General Curriculum",
    institution: "APJC, Karakamb",
    timeline: "Completed",
    grade: "Score: 83.80%",
    highlight: "Distinction in Mathematics & Science",
    description: "Strong foundational academic performance with high scores in quantitative subjects."
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: "aws-internship",
    title: "AWS Internship Certification",
    organization: "Proazure Software Solutions / AWS Cloud",
    date: "JAN 2026",
    credentialId: "AWS-INT-2026-01",
    badge: "Cloud Infrastructure",
    description:
      "Practical validation of hands-on deployment on AWS EC2, object storage via S3, IAM user access policies, and cloud web hosting."
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing Certification",
    organization: "Technical Institute of Cloud Systems",
    date: "APR 2026",
    credentialId: "CC-CERT-2026-04",
    badge: "Cloud Architecture",
    description:
      "Comprehensive certification in cloud service models (IaaS, PaaS, SaaS), cloud storage, virtualization, and network security."
  },
  {
    id: "softskill-cert",
    title: "Softskill Certification",
    organization: "Professional Development Board",
    date: "JUNE 2026",
    credentialId: "SS-CERT-2026-06",
    badge: "Professional Excellence",
    description:
      "Endorsement of technical communication, team collaboration, first-principles presentation, and structured workplace problem solving."
  },
  {
    id: "power-bi-cert",
    title: "POWER BI Certification",
    organization: "Data & Business Intelligence Academy",
    date: "JUNE 2026",
    credentialId: "PBI-CERT-2026-06",
    badge: "BI & Visual Analytics",
    description:
      "In-depth mastery of DAX formulas, multi-table relational data modeling, custom KPI measures, and executive dashboard design."
  }
];

// Sample Interactive Challenge Data for the Live Mini-Sandbox
export const SQL_SANDBOX_CHALLENGE = {
  title: "Analyze Top Customers by Order Volume",
  scenario:
    "You have a table `customers (id, name, city)` and `orders (id, customer_id, amount)`. Write a query to find the total order amount spent by each customer in 'Pune', sorted descending by total spent.",
  schema: [
    { table: "customers", cols: "id INT, name VARCHAR, city VARCHAR" },
    { table: "orders", cols: "id INT, customer_id INT, amount DECIMAL" }
  ],
  sampleData: [
    { customer: "Aarav Sharma", city: "Pune", totalSpent: "₹18,500", orderCount: 3 },
    { customer: "Neha Patil", city: "Pune", totalSpent: "₹14,200", orderCount: 2 },
    { customer: "Vivek Pise", city: "Pune", totalSpent: "₹22,400", orderCount: 4 }
  ],
  starterQuery: "SELECT c.name, SUM(o.amount) AS total_spent\nFROM customers c\nJOIN orders o ON c.id = o.customer_id\nWHERE c.city = 'Pune'\nGROUP BY c.name\nORDER BY total_spent DESC;",
  targetHint: "Notice how JOIN links the customer to their orders, while GROUP BY aggregates the amounts per customer."
};

export const PYTHON_QUIZ_CHALLENGES = [
  {
    question: "In Python data analytics, which Pandas method is most appropriate to inspect summary statistics (mean, std, min, max, percentiles) of numerical columns?",
    options: [
      "df.info()",
      "df.describe()",
      "df.summary()",
      "df.values()"
    ],
    correct: 1,
    explanation: "`df.describe()` generates descriptive statistics that summarize the central tendency, dispersion, and shape of a dataset's distribution."
  },
  {
    question: "In SQL, what is the key difference between the WHERE clause and the HAVING clause?",
    options: [
      "WHERE is used for strings; HAVING is used for integers",
      "HAVING filters rows before grouping; WHERE filters after grouping",
      "WHERE filters rows before aggregation; HAVING filters groups after aggregation",
      "There is no difference; they are aliases"
    ],
    correct: 2,
    explanation: "`WHERE` filters individual records prior to the `GROUP BY` operation, whereas `HAVING` filters aggregated group results."
  },
  {
    question: "Which AWS service is specifically designed for object storage with high durability (99.999999999%) and direct static web hosting?",
    options: [
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
      "Amazon IAM"
    ],
    correct: 1,
    explanation: "Amazon S3 (Simple Storage Service) is built for object storage, offering 11 9s of durability and native static web hosting capabilities."
  }
];
