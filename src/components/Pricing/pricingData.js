import {
  FaGlobe,
  FaPenNib,
  FaBriefcase,
  FaBullhorn,
  FaCode,
  FaMobileAlt,
  FaRobot,
  FaLayerGroup,
} from "react-icons/fa";

export const pricingPlans = [

  {
    id: 1,
    title: "Website Development",
    subtitle: "Special Launch Offer",
    price: "₹1999",
    oldPrice: "₹2499",
    discount: "₹499 OFF",
    icon: FaGlobe,
    popular: false,
    offer: true,

    features: [
      "Responsive Website",
      "Modern UI Design",
      "SEO Friendly",
      "Mobile Optimized",
      "Free Hosting Support",
    ],

    button: "Get Website",
  },


  {
    id: 2,
    title: "Combo Offer",
    subtitle: "Best Value",
    price: "₹499 / Month",
    icon: FaLayerGroup,
    popular: true,

    features: [
      "Website Development",
      "Professional Logo",
      "Digital Marketing FREE",
      "Google Business Profile",
      "6 Months Support",
    ],

    button: "Claim Offer",
  },


  {
    id: 3,
    title: "Digital Marketing",
    price: "₹500 / Month",
    icon: FaBullhorn,

    features: [
      "Facebook Marketing",
      "Instagram Marketing",
      "Google Business Profile",
      "SEO Optimization",
      "Monthly Report",
    ],

    button: "Start Marketing",
  },

 
  {
    id: 4,
    title: "Logo Design",
    price: "₹399",
    icon: FaPenNib,

    features: [
      "Professional Logo",
      "PNG + JPG",
      "Transparent Background",
      "Commercial Use",
      "Source File",
    ],

    button: "Enquiry",
     link: "/contact",
  },

  
  {
    id: 5,
    title: "Business Branding",
    price: "₹699",
    icon: FaBriefcase,

    features: [
      "Logo Design",
      "Business Card",
      "Letterhead",
      "Envelope",
      "Social Media Kit",
    ],

    button: "Get Started",
  },

  {
    id: 6,
    title: "Software Development",
    price: "Custom Quote ",
    icon: FaCode,

    features: [
      "ERP Software",
      "CRM System",
      "Inventory System",
      "POS Software",
      "Custom Dashboard",
      "* Pricing as Per Requirement"
    ],

    button: "Request Quote",
  },


  {
    id: 7,
    title: "Mobile App Development",
    price: "Starting ₹4999",
    icon: FaMobileAlt,

    features: [
      "Android App",
      "iOS App",
      "React Native",
      "Firebase",
      "Play Store Support",
    ],

    button: "Build App",
  },

  // 8. AI Solutions
  {
    id: 8,
    title: "AI Solutions",
    price: "Custom Pricing",
    icon: FaRobot,

    features: [
      "AI Chatbot",
      "WhatsApp Bot",
      "OpenAI Integration",
      "Automation",
      "AI Website Assistant",
      "* Pricing as Per Requirement"
    ],

    button: "Explore AI",
  },
];