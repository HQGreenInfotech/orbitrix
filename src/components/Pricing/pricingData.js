import { FaPenNib, FaBriefcase } from "react-icons/fa";

export const pricingPlans = [
  {
    id: 1,
    title: "Starter Logo Package",
    price: "₹399",
    icon: FaPenNib,
    popular: false,
    features: [
      "Professional Logo Design",
      "High Resolution PNG",
      "Transparent Background",
      "JPEG Version",
      "Commercial Use",
    ],
    button: "Order Now",
  },

  {
    id: 2,
    title: "Business Branding Package",
    price: "₹699",
    icon: FaBriefcase,
    popular: true,
    features: [
      "Professional Logo Design",
      "Business Card Design",
      "Letter Head Design",
      "Envelope Design",
      "Intro Video",
    ],
    button: "Get Started",
  },
];