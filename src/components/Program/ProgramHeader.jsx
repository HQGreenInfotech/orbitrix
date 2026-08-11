import { motion } from "framer-motion";

function ProgramHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mx-auto max-w-4xl text-center"
    >
      {/* Label */}
      <div
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-cyan-400/20
          bg-white/[0.035]
          px-4
          py-2
          backdrop-blur-xl
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-cyan-400
          "
        />

        <span
          className="
            text-xs
            font-semibold
            tracking-[0.2em]
            text-cyan-300
          "
        >
          THE PROGRAM
        </span>
      </div>

      {/* Heading */}
      <h1
        className="
          mt-8
          text-4xl
          font-black
          leading-[1.05]
          tracking-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        Three Months.
        <br />

        <span className="text-cyan-400">
          One Clear Path.
        </span>

        <br />

        From Beginner to Builder.
      </h1>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-7
          max-w-3xl
          text-base
          leading-8
          text-slate-300
          lg:text-lg
        "
      >
        Learn modern{" "}
        <span className="font-semibold text-cyan-400">
          Full Stack Development
        </span>
        , build real-world projects, master AI-powered
        development, create an impressive portfolio and
        prepare for technical interviews.
      </p>

      {/* Small info */}
      <div
        className="
          mt-8
          flex
          flex-wrap
          items-center
          justify-center
          gap-3
          text-sm
          text-slate-400
        "
      >
        <span>12 Weeks</span>
        <span className="text-cyan-400">•</span>
        <span>Live Classes</span>
        <span className="text-cyan-400">•</span>
        <span>Real Projects</span>
        <span className="text-cyan-400">•</span>
        <span>Career Preparation</span>
      </div>
    </motion.div>
  );
}

export default ProgramHeader;