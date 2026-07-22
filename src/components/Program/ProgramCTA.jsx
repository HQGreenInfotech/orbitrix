import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function ProgramCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        mt-28
        rounded-[40px]
        overflow-hidden
        bg-gradient-to-r
        from-blue-700
        via-cyan-600
        to-indigo-700
        p-12
        lg:p-20
        text-center
        text-white
        shadow-[0_30px_80px_rgba(37,99,235,0.35)]
      "
    >
      <span
        className="
          inline-flex
          items-center
          px-5
          py-2
          rounded-full
          bg-white/20
          backdrop-blur
          font-semibold
        "
      >
        🚀 Admissions Open 2026
      </span>

      <h2 className="mt-8 text-4xl lg:text-6xl font-black leading-tight">
        Ready To Build
        <br />
        Your Tech Career?
      </h2>

      <p className="mt-8 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
        Learn from experienced mentors, build real-world projects,
        master AI-powered development, and become industry-ready
        in just 3 months.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
        <button
          className="
            px-8
            py-4
            rounded-full
            bg-white
            text-blue-700
            font-bold
            flex
            items-center
            justify-center
            gap-3
            hover:scale-105
            duration-300
          "
        >
          Enroll Now
          <FaArrowRight />
        </button>

        <button
          className="
            px-8
            py-4
            rounded-full
            border
            border-white/50
            bg-white/10
            backdrop-blur
            font-bold
            hover:bg-white/20
            duration-300
          "
        >
          Book Free Counselling
        </button>
      </div>
    </motion.div>
  );
}

export default ProgramCTA;