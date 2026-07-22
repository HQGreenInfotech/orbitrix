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
    title: "React",
    subtitle: "Frontend",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-100",
    position: "top-10 left-0",
  },

  {
    id: 2,
    title: "Node.js",
    subtitle: "Backend",
    icon: FaNodeJs,
    color: "text-green-600",
    bg: "bg-green-100",
    position: "top-0 right-10",
  },

  {
    id: 3,
    title: "MongoDB",
    subtitle: "Database",
    icon: SiMongodb,
    color: "text-green-700",
    bg: "bg-green-100",
    position: "bottom-36 left-4",
  },

  {
    id: 4,
    title: "AI",
    subtitle: "Solutions",
    icon: FaRobot,
    color: "text-purple-600",
    bg: "bg-purple-100",
    position: "bottom-0 right-0",
  },

  {
    id: 5,
    title: "Mobile Apps",
    subtitle: "Android & iOS",
    icon: FaMobileAlt,
    color: "text-orange-500",
    bg: "bg-orange-100",
    position: "top-1/2 -left-10",
  },

  {
    id: 6,
    title: "Web Apps",
    subtitle: "Modern UI",
    icon: FaGlobe,
    color: "text-blue-600",
    bg: "bg-blue-100",
    position: "top-1/2 -right-8",
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