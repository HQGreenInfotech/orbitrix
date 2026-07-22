import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-3 rounded-full bg-blue-100/80 backdrop-blur-md px-5 py-2.5 shadow-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>

        <span className="text-sm font-semibold text-blue-700 tracking-wide">
          Building Future with Technology
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900">
        We Build
        <br />

        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
          Websites,
        </span>

        <br />

        Apps & AI
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
        Orbitix Technology helps startups, businesses, and educational
        institutions build modern websites, mobile applications, AI-powered
        solutions, robotics systems, and digital experiences that accelerate
        growth.
      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-14">
        <HeroStats />
      </div>
    </motion.div>
  );
}

export default HeroContent;