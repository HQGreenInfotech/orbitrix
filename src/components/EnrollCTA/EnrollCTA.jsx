import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaLaptopCode,
  FaProjectDiagram,
  FaCertificate,
  FaUserGraduate,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: FaLaptopCode,
    title: "Live Classes",
  },
  {
    icon: FaProjectDiagram,
    title: "Industry Projects",
  },
  {
    icon: FaCertificate,
    title: "Certification",
  },
  {
    icon: FaUserGraduate,
    title: "Placement Assistance",
  },
  {
    icon: FaUsers,
    title: "1-on-1 Mentorship",
  },
  {
    icon: FaUsers,
    title: "Community Access",
  },
];

function EnrollCTA() {
  const navigate = useNavigate();

  return (
    <section
      className="
      relative
      overflow-hidden
      py-20
      lg:py-28
      bg-gradient-to-br
      from-slate-900
      via-blue-900
      to-cyan-900
    "
    >
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
            START LEARNING TODAY
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Start
            <br />

            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Your Tech Journey?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            Master Full Stack Development, Artificial Intelligence,
            Robotics, Digital Marketing and Software Engineering through
            live classes, real-world projects and industry mentorship.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 gap-6 text-center text-white md:grid-cols-4">
          <div>
            <FaStar className="mx-auto mb-2 text-2xl text-yellow-400" />
            <p className="font-semibold">4.9/5 Rating</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">500+</h3>
            <p className="text-gray-300">Students</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">100+</h3>
            <p className="text-gray-300">Projects</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
            <p className="text-gray-300">Industry Mentors</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button
            onClick={() => navigate("/contact")}
            className="
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-8
              py-4
              font-bold
              text-white
              shadow-2xl
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Enroll Now
            <FaArrowRight />
          </button>

          <button
            onClick={() => navigate("/brochure")}
            className="
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-full
              border
              border-white/30
              bg-white/10
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-lg
              transition-all
              duration-300
              hover:bg-white/20
            "
          >
            <FaDownload />
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

export default EnrollCTA;