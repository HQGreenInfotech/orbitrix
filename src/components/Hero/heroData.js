// src/components/Hero/heroData.js

import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";

import {
  SiMongodb,
} from "react-icons/si";

export const heroCards = [
  {
    id: 1,
    title: "Web Development",
    subtitle: "Modern Websites",
    icon: FaGlobe,
    color: "text-blue-500",
    bg: "bg-blue-500/20",
    position: "top-10 -left-6",
  },

  {
    id: 2,
    title: "AI Solutions",
    subtitle: "Automation",
    icon: FaRobot,
    color: "text-violet-400",
    bg: "bg-violet-500/20",
    position: "top-12 -right-6",
  },

  {
    id: 3,
    title: "Mobile Apps",
    subtitle: "Android & iOS",
    icon: FaMobileAlt,
    color: "text-orange-400",
    bg: "bg-orange-500/20",
    position: "bottom-20 left-0",
  },

  {
    id: 4,
    title: "Node.js",
    subtitle: "Backend",
    icon: FaNodeJs,
    color: "text-green-400",
    bg: "bg-green-500/20",
    position: "bottom-12 right-2",
  },
];

export const heroStats = [
  {
    number: "100+",
    label: "Projects",
  },
  {
    number: "50+",
    label: "Clients",
  },
  {
    number: "99%",
    label: "Success Rate",
  },
];