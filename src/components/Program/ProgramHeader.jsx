import { motion } from "framer-motion";

function ProgramHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center"
    >
      {/* Badge */}
      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-6
          py-3
          text-sm
          font-semibold
          uppercase
          tracking-widest
          text-cyan-400
        "
      >
         The Program
      </span>

      {/* Heading */}
      <h2
        className="
          mt-8
          text-5xl
          lg:text-6xl
          font-black
          leading-tight
          text-white
        "
      >
        Three Months.

        <br />

        <span
          className="
            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-violet-400
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
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          leading-9
          text-slate-300
        "
      >
        Learn modern <span className="text-cyan-400 font-semibold">Full Stack Development</span>,
        build real-world projects, master AI-powered development,
        create an impressive portfolio, and prepare for technical
        interviews with expert mentorship. Become industry-ready
        in just <span className="font-semibold text-cyan-400">12 Weeks.</span>
      </p>
    </motion.div>
  );
}

export default ProgramHeader;