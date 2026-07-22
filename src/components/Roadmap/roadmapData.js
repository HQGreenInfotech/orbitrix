import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaProjectDiagram,
  FaRobot,
  FaBriefcase,
} from "react-icons/fa";

export const roadmap = [
  {
    month: "Month 01",
    title: "Programming Foundation",
    icon: FaCode,
    color: "from-blue-500 to-cyan-500",
    topics: [
      "Computer Basics",
      "HTML5",
      "CSS3",
      "JavaScript ES6",
      "Git",
      "GitHub",
    ],
  },

  {
    month: "Month 02",
    title: "Frontend Development",
    icon: FaLaptopCode,
    color: "from-cyan-500 to-blue-500",
    topics: [
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "API Integration",
      "React Router",
      "Animations",
    ],
  },

  {
    month: "Month 03",
    title: "Backend Development",
    icon: FaServer,
    color: "from-green-500 to-emerald-500",
    topics: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
      "Authentication",
    ],
  },

  {
    month: "Month 04",
    title: "Full Stack Projects",
    icon: FaProjectDiagram,
    color: "from-purple-500 to-pink-500",
    topics: [
      "E-Commerce",
      "CMS",
      "Admin Panel",
      "Authentication",
      "Deployment",
      "Portfolio",
    ],
  },

  {
    month: "Month 05",
    title: "AI & Robotics",
    icon: FaRobot,
    color: "from-orange-500 to-red-500",
    topics: [
      "OpenAI",
      "Gemini",
      "Prompt Engineering",
      "Robotics",
      "IoT",
      "Automation",
    ],
  },

  {
    month: "Month 06",
    title: "Career Preparation",
    icon: FaBriefcase,
    color: "from-indigo-500 to-violet-500",
    topics: [
      "Resume",
      "GitHub",
      "LinkedIn",
      "Mock Interview",
      "Freelancing",
      "Placement",
    ],
  },
];