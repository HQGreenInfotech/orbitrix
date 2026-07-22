import { motion } from "framer-motion";

function ProgramHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center max-w-4xl mx-auto"
    >
      {/* Small Badge */}

      <span
        className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-blue-100
          text-blue-700
          font-semibold
          uppercase
          tracking-widest
          text-sm
        "
      >
        🚀 The Program
      </span>

      {/* Heading */}

      <h2
        className="
          mt-8
          text-5xl
          lg:text-6xl
          font-black
          leading-tight
          text-slate-900
        "
      >
        Three Months.

        <br />

        <span
          className="
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-indigo-600
            bg-clip-text
            text-transparent
          "
        >
          One Clear Path
        </span>

        <br />

        From Beginner to Builder.
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          text-lg
          text-slate-600
          leading-9
          max-w-3xl
          mx-auto
        "
      >
        Learn modern web development with live classes, real-world
        projects, AI tools, portfolio building, and career mentorship.
        Our structured roadmap is designed to make you industry-ready
        in just three months.
      </p>
    </motion.div>
  );
}

export default ProgramHeader;