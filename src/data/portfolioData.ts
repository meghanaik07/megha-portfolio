export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveDemoAvailable: boolean;
  category: 'Machine Learning' | 'Data Analytics' | 'Web Engineering';
  highlights: string[];
  technicalDetails: {
    problemStatement: string;
    methodology: string;
    keyFindings: string[];
    futureWork: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    context: string;
    focus: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: 'Infosys Springboard' | 'NPTEL' | 'Cisco';
  category: 'Programming' | 'Data' | 'Computer Science' | 'Research';
  skillsCovered: string[];
  summary: string;
  verified: boolean;
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Megha Naik",
    role: "Information Science Engineering Student",
    specialization: "Data Analytics, Artificial Intelligence & Python",
    tagline: "Hi, I'm Megha Naik.",
    supportingText: "An Information Science Engineering student exploring the world of Data Analytics, Artificial Intelligence and Python.",
    shortDescription: "I enjoy turning data into meaningful insights, solving problems and building practical digital experiences.",
    extendedBio: "I am a third-year Information Science Engineering student at Atria Institute of Technology, Bengaluru. My technical journey is driven by curiosity about data analytics, machine learning methods, and building practical applications. I enjoy exploring datasets with Python, writing SQL queries, crafting Power BI visualizations, and working on modern web systems.",
    location: "Bengaluru, Karnataka, India",
    college: "Atria Institute of Technology, Bengaluru",
    degree: "B.E. in Information Science and Engineering (3rd Year)",
    email: "naikmegha2006@gmail.com",
    github: "https://github.com/meghanaik07",
    linkedin: "https://www.linkedin.com/in/megha-naik-5b1582358/",
    availability: "Available for Internships & Student Projects",
  },

  skills: [
    {
      title: "Programming",
      description: "Languages used for scripting, algorithmic problem-solving, and web development.",
      skills: [
        { name: "Python", context: "Data manipulation with Pandas, numerical operations with NumPy, and model prototyping with Scikit-learn.", focus: "Core Language" },
        { name: "JavaScript", context: "Modern ES6+ syntax, asynchronous programming, DOM interactivity, and Node.js backend development.", focus: "Web Development" },
        { name: "HTML", context: "Semantic document structure, accessibility standards, and clean page layouts.", focus: "Markup" },
        { name: "CSS", context: "Responsive styling, modern Flexbox and Grid layouts, and utility styling with Tailwind CSS.", focus: "Styling" },
      ],
    },
    {
      title: "Data Analytics",
      description: "Tools for data extraction, querying, analysis, and visual communication.",
      skills: [
        { name: "SQL", context: "Relational querying, joining tables, filtering records, and aggregating summary statistics.", focus: "Databases" },
        { name: "Excel", context: "Data cleaning, PivotTables, formula calculations (VLOOKUP, XLOOKUP), and exploratory analysis.", focus: "Spreadsheets" },
        { name: "Power BI", context: "Building interactive dashboards, modeling relationships, and defining DAX measures.", focus: "Business Intelligence" },
        { name: "Data Visualization", context: "Designing clear charts, distributions, and trend visuals that convey patterns effectively.", focus: "Visual Analysis" },
      ],
    },
    {
      title: "Other",
      description: "Development tools, collaboration workflows, and foundational intelligent systems.",
      skills: [
        { name: "Git", context: "Branching, committing code changes, and tracking project version history.", focus: "Version Control" },
        { name: "GitHub", context: "Hosting repositories, collaborating on projects, and reviewing code.", focus: "Collaboration" },
        { name: "Machine Learning Fundamentals", context: "Supervised classification, regression, train-test splitting, and handling imbalanced datasets.", focus: "Fundamentals" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "risklens",
      number: "01",
      title: "RiskLens",
      tagline: "Credit Card Fraud Detection using Machine Learning",
      description: "A machine learning project exploring techniques for identifying fraudulent credit card transactions in highly imbalanced datasets.",
      longDescription: "Credit card transaction datasets typically contain a very small percentage of fraudulent activity. RiskLens explores data preprocessing, handling class imbalance using SMOTE (Synthetic Minority Over-sampling Technique), and comparing classification approaches like Logistic Regression and Random Forest.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Logistic Regression", "SMOTE"],
      image: "/src/assets/images/project_risklens_1794284182464.jpg",
      githubUrl: "https://github.com/meghanaik07",
      liveDemoAvailable: true,
      category: "Machine Learning",
      highlights: [
        "Synthetic Minority Over-sampling (SMOTE) to address severe class imbalance",
        "Evaluation using Scikit-learn with Random Forest and Logistic Regression",
        "Analysis of transaction amount patterns, time intervals, and anomaly signals",
        "Interactive simulator demonstrating feature sensitivity and decision boundaries",
      ],
      technicalDetails: {
        problemStatement: "In typical credit card data, legitimate transactions overwhelmingly outnumber fraud, making standard classification models prone to ignoring the minority class.",
        methodology: "Explored feature scaling, applied SMOTE to synthesize minority samples during training, and evaluated model behavior across varying decision thresholds.",
        keyFindings: [
          "Oversampling the minority fraud class with SMOTE helped the classifier detect subtle anomaly patterns more effectively than unweighted training.",
          "Random Forest provided robust non-linear boundaries across multi-feature interactions such as transaction amount and unusual hours.",
        ],
        futureWork: "Exploring unsupervised anomaly detection algorithms such as Isolation Forests for novel pattern discovery.",
      },
    },
    {
      id: "power-bi-dashboards",
      number: "02",
      title: "Power BI Dashboards",
      tagline: "Interactive Dashboards for Exploring and Understanding Data",
      description: "Interactive business intelligence dashboards built in Power BI to transform datasets into structured visual reports.",
      longDescription: "Explored data modeling, relationships between tables, and custom DAX measures in Power BI. Created interactive dashboard views allowing users to filter by region, time periods, and categories to inspect operational and sales trends.",
      technologies: ["Power BI", "Data Visualization", "DAX", "Data Modeling", "Excel"],
      image: "/src/assets/images/project_powerbi_1794284182638.jpg",
      githubUrl: "https://github.com/meghanaik07",
      liveDemoAvailable: true,
      category: "Data Analytics",
      highlights: [
        "Relational data modeling connecting sales records with calendar and category dimensions",
        "Custom DAX calculations for period comparisons and dynamic summaries",
        "Interactive slicers enabling drill-down by region and product segment",
        "Clean, legible layout designed with visual hierarchy and contrast in mind",
      ],
      technicalDetails: {
        problemStatement: "Raw tabular data spread across spreadsheets makes it time-consuming to spot sales trends and compare performance across regional territories.",
        methodology: "Cleaned raw tables, established one-to-many relationship keys in Power BI, created DAX measures for totals and growth comparisons, and configured interactive report pages.",
        keyFindings: [
          "Establishing proper relationship schemas simplified DAX calculations and prevented cross-filtering errors.",
          "Presenting summary KPI cards alongside interactive category charts made exploratory analysis faster and clearer.",
        ],
        futureWork: "Connecting live SQL database feeds for automatic data refresh cycles.",
      },
    },
    {
      id: "tableturn",
      number: "03",
      title: "TableTurn",
      tagline: "Restaurant Reservation and Waitlist Management System",
      description: "A full-stack web application designed to help restaurant staff track dining room table status and manage walk-in waitlists.",
      longDescription: "TableTurn is a full-stack project built using React on the frontend and Node.js with Express and MongoDB on the backend. It features an interactive visual floor plan displaying table availability (Available, Occupied, Reserved) and an active waitlist queue to organize seating during busy dining periods.",
      technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      image: "/src/assets/images/project_tableturn_1794284183460.jpg",
      githubUrl: "https://github.com/meghanaik07",
      liveDemoAvailable: true,
      category: "Web Engineering",
      highlights: [
        "Visual floor plan displaying table status (Available, Occupied, Reserved)",
        "Waitlist management interface with party size tracking and seating actions",
        "Modular React frontend communicating with Node.js and Express backend APIs",
        "Designed with responsive styling for desktop and tablet screens",
      ],
      technicalDetails: {
        problemStatement: "Managing paper waitlists and manually tracking open tables during peak meal hours can cause confusion and delays for restaurant staff.",
        methodology: "Developed reusable React components for table and queue states, supported by Express REST endpoints connected to MongoDB collections for table and reservation data.",
        keyFindings: [
          "A visual table grid gives hosts a quick, unified overview of dining room occupancy.",
          "State management for queue-to-table assignment reduces manual coordinate errors.",
        ],
        futureWork: "Adding SMS notifications to notify guests when their table is ready.",
      },
    },
  ] as Project[],

  certifications: [
    {
      id: "cert-infosys-python",
      title: "Basic Python",
      issuer: "Infosys Springboard",
      category: "Programming",
      skillsCovered: ["Python Syntax", "Control Flow", "Functions", "Data Structures"],
      summary: "Foundational training in Python language syntax, data structures, and core programming concepts.",
      verified: true,
    },
    {
      id: "cert-infosys-ai",
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      category: "Computer Science",
      skillsCovered: ["AI Foundations", "Search Techniques", "Knowledge Representation", "Machine Learning Basics"],
      summary: "Foundational introduction to artificial intelligence concepts, problem-solving methods, and machine learning principles.",
      verified: true,
    },
    {
      id: "cert-infosys-java",
      title: "Java",
      issuer: "Infosys Springboard",
      category: "Programming",
      skillsCovered: ["Core Java", "OOP Principles", "Classes & Objects", "Inheritance"],
      summary: "Object-oriented programming concepts using Java, including classes, inheritance, encapsulation, and polymorphism.",
      verified: true,
    },
    {
      id: "cert-infosys-unix",
      title: "Complete UNIX & Linux OS Fundamentals Training",
      issuer: "Infosys Springboard",
      category: "Computer Science",
      skillsCovered: ["UNIX Commands", "Shell Scripting", "File System Permissions", "Process Management"],
      summary: "Comprehensive training in UNIX and Linux operating systems, shell commands, file hierarchy, permissions, and process management.",
      verified: true,
    },
    {
      id: "cert-infosys-dsa",
      title: "Data Structures and Algorithms",
      issuer: "Infosys Springboard",
      category: "Computer Science",
      skillsCovered: ["Arrays", "Linked Lists", "Stacks", "Queues", "Sorting Algorithms"],
      summary: "Study of essential data structures and algorithms, computational logic, and problem-solving approaches.",
      verified: true,
    },
    {
      id: "cert-nptel-research",
      title: "Research Methodology",
      issuer: "NPTEL",
      category: "Research",
      skillsCovered: ["Scientific Inquiry", "Literature Review", "Data Collection", "Quantitative Analysis"],
      summary: "NPTEL coursework covering structured methods for scientific research, data collection, and quantitative evaluation.",
      verified: true,
    },
    {
      id: "cert-cisco-analytics",
      title: "Data Analytics Essentials",
      issuer: "Cisco",
      category: "Data",
      skillsCovered: ["Data Analysis Process", "Data Cleansing", "SQL Queries", "Data Visualization"],
      summary: "Cisco course covering fundamental data analytics processes, data collection, querying with SQL, and visual storytelling.",
      verified: true,
    },
  ] as Certification[],

  timeline: [
    {
      period: "2022 – 2026",
      title: "B.E. in Information Science & Engineering",
      institution: "Atria Institute of Technology",
      location: "Bengaluru, Karnataka",
      description: "Currently in 3rd year, studying computer science fundamentals, data structures, database management systems, and software engineering principles.",
      achievements: [
        "Active coursework in core computer science subjects and laboratory sessions",
        "Self-directed learning in Python, SQL, and data visualization tools",
        "Developing hands-on projects exploring data analytics and web development",
      ],
      tags: ["Information Science", "Database Systems", "Data Structures", "Algorithms"],
    },
    {
      period: "2023",
      title: "Systems, Programming & Core CS Training",
      institution: "Infosys Springboard & Academic Learning",
      location: "Bengaluru",
      description: "Strengthened core computer science knowledge through coursework in UNIX/Linux operating systems, Java programming, and data structures.",
      achievements: [
        "Completed Infosys Springboard certifications in UNIX/Linux OS Fundamentals, Java, and Data Structures",
        "Practiced Linux command-line operations, permissions, and basic shell scripting",
        "Solved algorithmic problems focusing on fundamental data structures",
      ],
      tags: ["UNIX", "Linux", "Java", "DSA"],
    },
    {
      period: "2024",
      title: "Data Analytics & Visualization Specialization",
      institution: "Cisco, NPTEL & Independent Learning",
      location: "Bengaluru",
      description: "Focused on data analysis workflows, relational database querying with SQL, and building interactive business intelligence reports with Power BI.",
      achievements: [
        "Earned Cisco Data Analytics Essentials and NPTEL Research Methodology certifications",
        "Created multi-page interactive Power BI dashboards with custom DAX calculations",
        "Practiced relational querying, aggregations, and data preparation using SQL and Excel",
      ],
      tags: ["SQL", "Power BI", "Excel", "Data Analytics"],
    },
    {
      period: "2024 – Present",
      title: "Applied Machine Learning & Web Projects",
      institution: "Academic & Independent Project Work",
      location: "Bengaluru",
      description: "Applied programming and data skills to build practical software projects, including credit card fraud detection and a restaurant table reservation system.",
      achievements: [
        "Developed RiskLens: Exploring credit card fraud detection using Python, Scikit-learn, and SMOTE",
        "Built TableTurn: Full-stack restaurant table and waitlist management web application using React, Node.js, Express, and MongoDB",
        "Continuing to expand skills in machine learning algorithms and data engineering",
      ],
      tags: ["Python", "Machine Learning", "Scikit-Learn", "React", "Node.js"],
    },
  ] as TimelineItem[],
};
