import { motion } from "framer-motion";
import ProgramCard from "./ProgramCard";
import { roadmap } from "./programData";

function ProgramTimeline() {
  return (
    <section className="relative mt-28">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span
          className="
            inline-block
            px-6
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-400/20
            text-cyan-400
            font-semibold
            uppercase
            tracking-widest
            text-sm
          "
        >
          Learning Roadmap
        </span>

        <h2 className="mt-6 text-4xl lg:text-5xl font-black text-white">
          Your
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            {" "}3-Month Journey
          </span>
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-slate-300 leading-8">
          Every month is carefully designed to help you progress from
          beginner to professional through practical learning,
          real-world projects, and career preparation.
        </p>
      </motion.div>

      {/* Timeline Line (Desktop) */}
      <div className="hidden lg:block absolute top-[310px] left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-400/50 to-cyan-500/20" />

      {/* Cards */}
      <div className="relative grid gap-8 lg:grid-cols-3">
        {roadmap.map((item, index) => (
          <ProgramCard
            key={item.month}
            item={item}
            index={index}
          />
        ))}
      </div>

    </section>
  );
}

export default ProgramTimeline;