import { motion } from "framer-motion";

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
  return (
    <section
      className="
      relative
      overflow-hidden
      py-28
      bg-gradient-to-r
      from-slate-900
      via-blue-900
      to-cyan-900
      "
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span
            className="
            px-5
            py-2
            rounded-full
            bg-cyan-500/20
            text-cyan-300
            font-semibold
            "
          >
            START LEARNING TODAY
          </span>

          <h2
            className="
            text-5xl
            lg:text-6xl
            font-black
            text-white
            mt-8
            "
          >
            Ready to Start
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-300
              to-blue-400
              bg-clip-text
              text-transparent
              "
            >
              Your Tech Journey?
            </span>
          </h2>

          <p
            className="
            max-w-3xl
            mx-auto
            mt-8
            text-gray-300
            text-lg
            leading-9
            "
          >
            Master Full Stack Development, Artificial Intelligence,
            Robotics, Digital Marketing and Software Engineering
            through live classes, real-world projects and
            industry mentorship.
          </p>
        </motion.div>

        {/* Features */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

        {/* Trust */}

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-10
          mt-20
          text-white
          "
        >
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>4.9/5 Student Rating</span>
          </div>

          <div>500+ Students</div>

          <div>100+ Projects</div>

          <div>Industry Mentors</div>
        </div>

        {/* Buttons */}

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-6
          mt-16
          "
        >
          <button
            className="
            px-10
            py-4
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            font-bold
            flex
            items-center
            gap-3
            hover:scale-105
            duration-300
            shadow-2xl
            "
          >
            Enroll Now

            <FaArrowRight />
          </button>

          <button
            className="
            px-10
            py-4
            rounded-full
            border
            border-white/30
            bg-white/10
            backdrop-blur-lg
            text-white
            font-semibold
            flex
            items-center
            gap-3
            hover:bg-white/20
            duration-300
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