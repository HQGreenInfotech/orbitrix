import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
    >
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl">
        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>

        <p className="uppercase tracking-[4px] text-cyan-300 text-sm font-semibold">
          Building the Future with Technology
        </p>
      </div>

      <h1 className="mt-10 text-6xl lg:text-7xl font-black leading-[1.05] text-white">
        Digital Solutions
        <br />

        <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Built
        </span>{" "}
        for
        <br />

        Modern Businesses
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">
        Orbitix Technology helps startups, businesses and educational
        institutions build modern websites, AI solutions, mobile apps and
        digital experiences.
      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-16">
        <HeroStats />
      </div>
    </motion.div>
  );
}

export default HeroContent;