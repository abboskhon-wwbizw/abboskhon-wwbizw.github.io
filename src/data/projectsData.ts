import reactCryptoHub from "../images/projects/react-crypto-hub/react-crypto-hub.png";
import {
  AIConfirmationPoint,
  AIConnectedCompanies,
  AIConversation,
  AIIntroPage,
} from "../images/projects/fair-ai/index";

import {
  FairAppBuyerSearch,
  FairAppNotification,
  FairAppOrderTicket,
  FairAppSellerFirst,
  FairAppStoreProducts,
  FairAppCover,
} from "../images/projects/fair-app";
import { GreenCartApp } from "../images/projects/greencart-app";
export interface Project {
  id: number;
  title: string;
  description: string;
  projectCover?: string | null;
  longDescription?: string;
  techStack: string[];
  category: string;
  type: "detail" | "external";
  externalUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  images?: string[]; // Legacy support
  media?: string[]; // New property that supports both images and videos
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Fair App B2B SaaS",
    description:
      "A full-stack B2B solution with advanced features like real-time inventory, payment processing, statement reports and more",
    longDescription:
      "A comprehensive e-commerce platform built with modern web technologies. This project showcases frontend development skills with a focus on user experience, performance, and scalability. The platform includes features like real-time inventory management, advanced search and filtering, and a comprehensive admin dashboard for managing products, orders, and customers.",
    techStack: ["React", "Flutter", "Tailwind CSS"],
    category: "Full Stack",
    type: "detail",

    media: [
      "https://youtube.com/shorts/o0pWYGU3Tto?feature=share",
      FairAppSellerFirst,
      FairAppNotification,
      FairAppOrderTicket,
      FairAppBuyerSearch,
      FairAppStoreProducts,
    ],
    projectCover: FairAppCover,
    features: [
      "Real-time inventory management",
      "Advanced product search and filtering",
      "User authentication and profiles",
      "Shopping cart and wishlist functionality",
      "Order tracking and history",
      "Excel/PDF export for order tickets and statement reports",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing real-time inventory updates",
      "Optimizing database queries for performance",
      "Creating a responsive UI for various devices",
      "Bridge code for executing natively in both iOS (Safari) and Android (Chrome)",
      "Creating engaging user experience",
      "Handling offline functionality",
      "Integrating with various governmental APIs",
    ],

    outcomes: [
      "Wrote 60% of the codebase in React (JavaScript) and 20% in TypeScript for type safety",
      "Reduced page load times by 60% through optimization and moving to styled css",
      "Built a scalable architecture that supports future growth",
      "Authored over 1,160 commits, contributing ~156,000 additions and ~70,000 deletions across the project",
    ],
  },
  {
    id: 2,
    title: "Fair AI Chatbot",
    description:
      "A comprehensive analytics platform with interactive charts, real-time data processing, and custom reporting.",
    longDescription:
      "Fair AI Chatbot is an advanced multi-modal, multi-agent AI system designed to streamline business analytics and decision-making. Leveraging cutting-edge technologies like LangGraph, LangChain, and FastAPI, the platform interprets complex user queries in natural language and transforms them into actionable insights. Its real-time data processing engine keeps dashboards and reports up to date, while customizable visualizations and interactive charts help users explore data intuitively. With support for multiple user roles, role-based permissions, and seamless integration with over 15 external data sources, the system empowers organizations to handle large datasets efficiently and make data-driven decisions faster than ever. Key features like dynamic ReAct agents, automatic fuzzy matching, and multilingual query support ensure that even ambiguous or varied user inputs are accurately understood and processed, significantly enhancing the overall user experience and business intelligence capabilities.",
    techStack: ["Python", "LangGraph", "LangChain", "FastAPI"],
    category: "AI/ML",
    type: "detail",
    projectCover: AIIntroPage,
    media: [
      AIIntroPage,
      AIConversation,
      AIConfirmationPoint,
      AIConnectedCompanies,
    ],
    features: [
      "Multi-Modal Multi-Agent AI system",
      "Real-time data processing and updates",
      "Utilized multiple models for different tasks",
      "ReAct agent for dynamic decision-making",
      "Parsing queries based on user intent",
      "Multi-user access with role-based permissions",
      "Mobile-responsive design",
      "Handling large datasets with efficient algorithms",
    ],
    challenges: [
      "Handling ambiguous user queries",
      "Automatic fuzzy matching of data",
      "Multiple language support for user queries",
      "Fetching data from backend APIs to reduce latency",
      "Caching frequently accessed data",
    ],
    outcomes: [
      "Decreased average response time to user queries by 60% through caching and efficient backend integration",
      "Enabled business teams to generate custom reports in under 30 seconds, reducing reporting time by 75%",
      "Improved accuracy of data parsing and intent recognition, achieving a 95% user satisfaction score",
      "Integrated seamlessly with over 15 external data sources, expanding data coverage and insights",
    ],
  },

  {
    id: 3,
    title: "Greencart E-Commerce Full Stack App",
    description:
      "A full-stack e-commerce application with a focus on user experience and performance.",
    techStack: ["React", "Tailwind CSS", "Next.js"],
    category: "Frontend",
    type: "external",
    externalUrl: "https://react-greencart.vercel.app/",
    projectCover: GreenCartApp,
  },
  {
    id: 4,
    title: "Crypto Price Tracker",
    description:
      "A fully React-based project that uses CoinGecko API for cryptocurrency price tracking.",
    techStack: ["React", "Pure CSS"],
    category: "Frontend",
    githubUrl: "https://github.com/abboskhon-wwbizw/react-crypto-hub",
    type: "external",
    projectCover: reactCryptoHub,
    externalUrl:
      "https://685e076895873d845bf3b65e--spectacular-concha-63b325.netlify.app/",
  },
];
