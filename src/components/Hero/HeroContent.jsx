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
     
     <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2.5">
  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>

  <span className="text-sm font-semibold tracking-wide text-cyan-300">
    BUILDING THE FUTURE WITH TECHNOLOGY
  </span>
</div>

    
     <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
  Digital Solutions
  <br />

  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
    Built for
  </span>

  <br />

  Modern Businesses
</h1>

    
      <p className="mt-8 max-w-2xl text-lg leading-9 text-white">
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