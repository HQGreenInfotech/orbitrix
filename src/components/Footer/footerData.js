import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+91 8078611491",
  },
 {
  icon: FaEnvelope,
  title: "Email",
  value: "manager.orbitixtechnologies@gmail.com",
  value2: "admin.orbitixtechnologies@gmail.com",
},
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value:"Udaipur, Rajasthan, India"
  },
  {
    icon: FaClock,
    title: "Working Hours",
    value: "Mon - Sat | 9:00 AM - 7:00 PM",
  },
];

export const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  { name: "Website Development", href: "/services" },
  { name: "Mobile App Development", href: "/services" },
  { name: "AI Solutions", href: "/services" },
  { name: "Robotics", href: "/services" },
  { name: "Digital Marketing", href: "/services" },
];

export const programs = [
  { name: "Full Stack Development", href: "/program" },
  { name: "Python Programming", href: "/program" },
  { name: "Java Programming", href: "/program" },
  { name: "Artificial Intelligence", href: "/program" },
  { name: "Robotics & IoT", href: "/program" },
];

export const socials = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/19C3phpsCn/",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/orbitix_technology?igsh=Zmc1eDZwdmNwbzF5&igsi=Zmc1eDZwdmNwbzF5&utm_source=ig_contact_invite",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/orbitix-technologies-29614b425",
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/918078611491",
  },
];