// src/coursesData.js
export const courses = [
  {
    id: "mern",
    name: "Fullstack Development (MERN)",
    description:
      "Master MongoDB, Express, React, and Node.js with hands-on projects to become an industry-ready fullstack developer.",
    img: "https://wallpapercave.com/wp/wp8903890.jpg",
    price: "₹12,999",
    duration: "4 Months",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: HTML",
        topics: [
          "HTML Document Structure",
          "Headings, Paragraphs, Lists, Links, Images",
          "Forms & Input Elements",
          "Semantic Tags (header, section, footer, article)",
          "Tables and Multimedia (video, audio, iframe)",
          "HTML5 Features (localStorage, data attributes)",
        ],
      },
      {
        module: "Module 2: CSS",
        topics: [
          "Selectors and Specificity",
          "CSS Variables and Units (em, rem, vh, vw)",
          "Box Model, Margins, Padding, Borders",
          "Flexbox and Grid Layouts",
          "Positioning and Display Properties",
          "Transitions, Transforms, and Animations",
          "Media Queries and Responsive Design",
          ,
        ],
      },
      {
        module: "Module 3: Git & GitHub",
        topics: [
          "Version Control Basics",
          "Common Git Commands (init, add, commit, push, pull, clone)",
          "Branching and Merging",
          "Working with Remote Repositories",
          "GitHub Workflow (forks, pull requests, issues)",
          "Using .gitignore and Managing Commits",
        ],
      },
      {
        module: "Module 4: JavaScript",
        topics: [
          "Variables and Data Types",
          "Functions and Arrow Functions",
          "Conditionals and Loops",
          "Arrays and Objects",
          "DOM Manipulation and Event Handling",
          "ES6+ Features (let, const, spread, rest, modules)",
          "Promises and Async/Await",
          "Fetch API and Working with JSON",
          "Object-Oriented Programming (Classes, Prototypes)",
          "Functional Programming (map, filter, reduce)",
        ],
      },
      {
        module: "Module 5: React.js",
        topics: [
          "JSX and Component Structure",
          "Props and State Management",
          "React Hooks (useState, useEffect, useRef, useContext, useReducer)",
          "Context API for Global State",
          "Routing with React Router DOM",
          "Axios for API Integration",
          "Conditional Rendering and Forms",
          "Error Boundaries and Lazy Loading",
          "Performance Optimization (React.memo, useCallback, useMemo)",
        ],
      },
      {
        module: "Module 6: Redux Toolkit",
        topics: [
          "Why Redux Toolkit",
          "Setting Up Redux Toolkit (@reduxjs/toolkit)",
          "Store, Slice, and Reducer Concepts",
          "Using configureStore() and createSlice()",
          "Dispatching Actions and Selecting State",
          "useDispatch and useSelector Hooks",
          "Async Actions with createAsyncThunk",
          "State Persistence with Redux Persist",
        ],
      },
      {
        module: "Module 7: Node.js",
        topics: [
          "Introduction to Node.js Architecture",
          "npm and Package Management",
          "Modules (Built-in, Custom, Third-party)",
          "File System and Streams",
          "Asynchronous Programming and Event Loop",
          "Environment Variables and Error Handling",
        ],
      },
      {
        module: "Module 8: Express.js",
        topics: [
          "Setting Up an Express Server",
          "Routing and Middleware",
          "Handling HTTP Requests and Responses",
          "CRUD Operations and REST APIs",
          "Authentication (JWT, bcrypt)",
          "Error Handling Middleware",
          "CORS and Security",
        ],
      },
      {
        module: "Module 9: MongoDB",
        topics: [
          "Introduction to NoSQL Databases",
          "CRUD Operations (Create, Read, Update, Delete)",
          "Mongoose ODM (Schemas, Models, Queries)",
          "Relationships (1:1, 1:Many, Many:Many)",
          "Validation and Indexing",
          "Aggregation Pipelines and Virtuals",
          "Connecting MongoDB Atlas with Node.js",
        ],
      },
      {
        module: "Module 10: Full Stack Integration & Deployment",
        topics: [
          "Connecting React with Express and MongoDB",
          "JWT Authentication and Protected Routes",
          "Axios Integration and Error Handling",
          "File Uploads with Multer",
          "Environment Variables (dotenv)",
          "Deployment on Render, Vercel, or Netlify",
        ],
      },
    ],
  },

  // ✅ React Course (Full)
  {
    id: "react",
    name: "Frontend Development with React",
    description:
      "Learn to build fast, scalable, and interactive user interfaces with React, React Router, and Redux Toolkit.",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60",
    price: "₹1,999",
    duration: "1 Months",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1 — React Basics & Setup",
        topics: [
          "Introduction to React",
          "Components overview",
          "Environment setup",
          "Create React App / Vite",
          "Folder structure",
          "JSX",
          "Function vs Class components",
          "Reusable components",
        ],
      },
      {
        module: "Module 2 — Rendering & Styling",
        topics: [
          "Fragments",
          "Rendering with .map()",
          "Conditional rendering",
          "Props",
          "CSS Modules",
          "Tailwind integration",
        ],
      },
      {
        module: "Module 3 — Events & Props Advanced",
        topics: [
          "Passing components as children",
          "Event handling",
          "Passing functions via props",
        ],
      },
      {
        module: "Module 4 — State Management (Basic)",
        topics: [
          "useState Hook",
          "State vs Props",
          "Spread operator",
          "Functional updates",
          "Forms in React",
          "useRef Hook",
          "React Icons",
          "How React renders (Virtual DOM)",
        ],
      },
      {
        module: "Module 5 — Context & Reducers",
        topics: ["Context API", "useReducer Hook", "React DevTools"],
      },
      {
        module: "Module 6 — API & useEffect",
        topics: [
          "Fetch API",
          "Data fetching",
          "Loading states",
          "Cleanup function",
          "Advanced useEffect cases",
        ],
      },
      {
        module: "Module 7 — Advanced Hooks",
        topics: ["useCallback", "useMemo", "Custom Hooks"],
      },
      {
        module: "Module 8 — React Router",
        topics: [
          "Router setup",
          "Layout routes",
          "Navigation",
          "Link & NavLink",
          "Loaders",
          "Actions",
          "Form submission in Routing",
        ],
      },
      {
        module: "Module 9 — Redux",
        topics: [
          "Why Redux",
          "Redux architecture",
          "Store, Reducers, Dispatch",
          "React + Redux integration",
        ],
      },
      {
        module: "Module 10 — Redux Toolkit",
        topics: [
          "Need for Toolkit",
          "createSlice",
          "createAsyncThunk",
          "Simplified Reducers",
          "Toolkit best practices",
        ],
      },
    ],
  },

  // ✅ Backend Course (Node.js + Express)
  {
    id: "backend",
    name: "Backend Development (Node.js + Express)",
    description:
      "Learn to design and build powerful backends and APIs using Node.js, Express, and MongoDB.",
    img: "https://wallpaperbat.com/img/818850-nodejs-hd-wallpaper-and-background.png",
    price: "₹4,999",
    duration: "1 Months",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: Node.js Fundamentals",
        topics: [
          "Introduction to Node.js",
          "npm and Modules",
          "File System, Streams, and Events",
          "Event Loop and Async Programming",
        ],
      },
      {
        module: "Module 2: Express.js",
        topics: [
          "Setting Up Express Server",
          "Routing and Middleware",
          "CRUD Operations and REST APIs",
          "Error Handling and Validation",
        ],
      },
      {
        module: "Module 3: Authentication & Security",
        topics: [
          "JWT Authentication",
          "bcrypt Password Hashing",
          "CORS, Helmet, and Security Practices",
        ],
      },
      {
        module: "Module 4: MongoDB Integration",
        topics: [
          "Connecting to MongoDB Atlas",
          "Mongoose Models and Schemas",
          "CRUD Operations",
          "Population and Relationships",
        ],
      },
      {
        module: "Module 5: Deployment",
        topics: ["Environment Variables", "Deployment on vercel"],
      },
    ],
  },

  // ✅ JavaScript Basic
  // {
  //   id: "js-basic",
  //   name: "JavaScript Basics",
  //   description:
  //     "Start your journey into programming with JavaScript — the foundation of web development.",
  //   img: "https://wallpaperbat.com/img/343227-javascript-wallpaper-javascript.jpg",
  //   price: "₹699",
  //   duration: "7 days",
  //   demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //   syllabus: [
  //     {
  //       module: "Module 1: Core Concepts",
  //       topics: [
  //         "Introduction to JS",
  //         "Variables, Data Types, Operators",
  //         "Conditionals and Loops",
  //         "Functions and Scope",
  //       ],
  //     },
  //     {
  //       module: "Module 2: DOM & Events",
  //       topics: ["Selecting Elements", "Event Listeners", "DOM Manipulation"],
  //     },
  //   ],
  // },

  // ✅ JavaScript Advanced
  {
    id: "js-complete",
    name: "JavaScript Complete Course (Basic to Advanced)",
    description:
      "Master JavaScript from the ground up — start with the basics, learn DOM manipulation, and progress to advanced ES6+, async programming, and OOP concepts.",
    img: "https://wallpaperbat.com/img/364232-graphics.png",
    price: "₹1,999",
    duration: "15days",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: JavaScript Basics",
        topics: [
          "Introduction to JavaScript and Setup",
          "Variables (var, let, const)",
          "Data Types and Type Conversion",
          "Operators and Expressions",
          "Conditional Statements (if, else, switch)",
          "Loops (for, while, do-while)",
          "Functions and Scope",
        ],
      },
      {
        module: "Module 2: DOM and Events",
        topics: [
          "The Document Object Model (DOM)",
          "Selecting and Modifying Elements",
          "Event Handling (click, input, submit)",
          "Form Validation using JS",
          "LocalStorage and SessionStorage",
          "Basic Projects: To-Do App, Calculator",
        ],
      },
      {
        module: "Module 3: Intermediate JavaScript",
        topics: [
          "Arrays and Objects Deep Dive",
          "Array Methods (map, filter, reduce, forEach)",
          "String and Date Manipulation",
          "Error Handling (try, catch, finally)",
          "JSON and Data Parsing",
          "Module Exports and Imports (intro to ES Modules)",
        ],
      },
      {
        module: "Module 4: Advanced JavaScript",
        topics: [
          "ES6+ Features (Destructuring, Spread, Rest, Template Literals)",
          "Arrow Functions and Default Parameters",
          "Closures, Callbacks, and Higher-Order Functions",
          "Promises, Async/Await, and Fetch API",
          "Event Loop and Execution Context",
          "Prototypes, Classes, and Inheritance",
        ],
      },
      {
        module: "Module 5: Real-World Applications",
        topics: [
          "API Integration (REST APIs with Fetch and Axios)",
          "Asynchronous Operations and Error Handling",
          "Building Interactive UI with Vanilla JS",
          "Debugging and Performance Optimization",
          "Project: Weather App using OpenWeather API",
        ],
      },
      {
        module: "Module 6: Final Projects & Interview Prep",
        topics: [
          "Mini Projects: Quiz App, E-commerce Cart, Notes App",
          "JavaScript Best Practices and Code Quality",
          "Common Interview Questions and Logic Building",
          "Version Control with Git & GitHub (Basics)",
          "Final Capstone Project Submission",
        ],
      },
    ],
  },
  // ✅ CSS Course
  {
    id: "css",
    name: "CSS Mastery",
    description:
      "Learn how to style and design beautiful, responsive websites with modern CSS techniques.",
    img: "https://wallpaperaccess.com/full/2987572.jpg",
    price: "₹1,999",
    duration: "15 days",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1 — CSS Introduction & Stylesheets",
        topics: [
          "Inline CSS",
          "Internal CSS",
          "External Stylesheets",
          "When to use which type",
        ],
      },
      {
        module: "Module 2 — CSS Typography & Developer Tools",
        topics: [
          "Font families and weights",
          "Color properties",
          "Text styling",
          "Using browser developer tools",
        ],
      },
      {
        module: "Module 3 — CSS Box Model",
        topics: ["Margin", "Padding", "Border", "Content box vs Border box"],
      },
      {
        module: "Module 4 — Display Property",
        topics: [
          "Inline elements",
          "Block elements",
          "Inline-block",
          "Visibility vs Display",
        ],
      },
      {
        module: "Module 5 — CSS Positioning",
        topics: ["Static", "Relative", "Absolute", "Fixed", "Sticky"],
      },
      {
        module: "Module 6 — CSS Units",
        topics: ["px, %, vw, vh", "em vs rem", "Responsive sizing"],
      },
      {
        module: "Module 7 — Float & Overflow",
        topics: ["Float", "Clear", "Overflow handling"],
      },
      {
        module: "Module 8 — Flexbox",
        topics: [
          "Flex container & items",
          "Justify-content",
          "Align-items",
          "Gap",
          "Flex-wrap",
          "Real-world layouts",
        ],
      },
      {
        module: "Module 9 — Media Queries & CSS Variables",
        topics: ["Responsive breakpoints", "Using custom CSS variables"],
      },
      { module: "Module 10 — Shadows", topics: ["Box-shadow", "Text-shadow"] },
      {
        module: "Module 11 — CSS Animations",
        topics: ["Keyframes", "Animation-timing", "Chaining animations"],
      },
      {
        module: "Module 12 — CSS Transitions",
        topics: [
          "Transition properties",
          "Hover transitions",
          "Smooth UI effects",
        ],
      },
      {
        module: "Module 13 — 2D Transforms",
        topics: ["Scale", "Rotate", "Skew", "Translate"],
      },
      {
        module: "Module 14 — CSS Grid",
        topics: [
          "Grid container & items",
          "Grid tracks, gaps, and areas",
          "Complete layout with Grid",
        ],
      },
      {
        module: "Module 15 — Grid Advanced",
        topics: ["Auto-fit", "Minmax", "Template areas"],
      },
      {
        module: "Module 16 — Pseudo-Classes & Pseudo-Elements",
        topics: [
          ":hover, :active, :focus",
          ":nth-child, :first-child, :last-child",
          "::before and ::after",
          "Styling interactive UI elements",
        ],
      },
    ],
  },

  // ✅ Git & GitHub Course
  {
    id: "git",
    name: "Git & GitHub",
    description:
      "Master version control, collaboration, and project management using Git and GitHub.",
    img: "https://wallpaperbat.com/img/8622048-git-and-github-at-work.jpg",
    price: "₹999",
    duration: "7 Days",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: Git Basics",
        topics: [
          "Version Control Overview",
          "Installing and Configuring Git",
          "Common Commands (init, add, commit, status)",
        ],
      },
      {
        module: "Module 2: GitHub Workflow",
        topics: [
          "Pushing and Pulling Repos",
          "Branching and Merging",
          "Pull Requests and Issues",
          "Using .gitignore",
        ],
      },
    ],
  },

  // ✅ MongoDB Course
  {
    id: "mongodb",
    name: "MongoDB Essentials",
    description:
      "Learn to design and manage databases with MongoDB — the most popular NoSQL database.",
    img: "https://wallpapercave.com/wp/wp8724894.png",
    price: "₹2,000",
    duration: "15days",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: Introduction & CRUD",
        topics: [
          "NoSQL Concepts",
          "CRUD Operations in Mongo Shell",
          "Data Modeling and Collections",
        ],
      },
      {
        module: "Module 2: Mongoose ODM",
        topics: [
          "Schemas and Models",
          "Relationships (1:1, 1:Many)",
          "Aggregation and Indexing",
        ],
      },
    ],
  },

  {
    id: "cn",
    name: "Computer Networks (CN)",
    description:
      "Learn how data travels across the internet. Understand networking layers, protocols, IP addressing, and security — with real-world examples and diagrams.",
    img: "https://wallpaperaccess.com/full/12481513.jpg",
    price: "₹699",
    duration: "3 Days",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: Introduction to Networking",
        topics: [
          "Basics of Data Communication",
          "Network Topologies and Types (LAN, MAN, WAN)",
          "Transmission Modes and Media",
          "Network Devices (Router, Switch, Hub, Repeater)",
        ],
      },
      {
        module: "Module 2: OSI & TCP/IP Models",
        topics: [
          "7 Layers of OSI Model Explained",
          "TCP/IP Model and Comparison with OSI",
          "Encapsulation and Decapsulation Process",
          "Real-Life Example: How Internet Works",
        ],
      },
      {
        module: "Module 3: IP Addressing & Routing",
        topics: [
          "IPv4 and IPv6 Addressing",
          "Subnetting and Supernetting",
          "Static vs Dynamic Routing",
          "Routing Protocols (RIP, OSPF, BGP)",
        ],
      },
      {
        module: "Module 4: Data Link & Transport Layer",
        topics: [
          "Error Detection and Correction (Parity, CRC)",
          "Flow Control and ARQ Protocols",
          "TCP vs UDP",
          "Port Numbers and Sockets",
        ],
      },
      {
        module: "Module 5: Network Security & Applications",
        topics: [
          "Firewalls, VPN, and Proxy Servers",
          "Encryption and Network Attacks",
          "HTTP, HTTPS, FTP, DNS, SMTP Protocols",
          "Socket Programming Basics",
        ],
      },
    ],
  },
  {
    id: "os",
    name: "Operating System (OS) Basics",
    description:
      "Get started with the core fundamentals of Operating Systems — understand how OS manages processes and resources.",
    img: "https://wallpaperaccess.com/full/4911012.jpg",
    price: "₹699",
    duration: "3 Days",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: Introduction to Operating Systems",
        topics: [
          "What is an Operating System?",
          "Functions and Components of OS",
          "Types of Operating Systems (Batch, Time-Sharing, Real-Time)",
          "System Calls and Kernel Overview",
        ],
      },
      {
        module: "Module 2: Process Management Basics",
        topics: [
          "Concept of Process and Threads",
          "Process States and Life Cycle",
          "CPU Scheduling Basics (FCFS, SJF, RR)",
          "Introduction to Deadlocks",
        ],
      },
    ],
  },
];
