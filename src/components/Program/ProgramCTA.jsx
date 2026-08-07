import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProgramCTA() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        relative
        mt-32
        overflow-hidden
        rounded-[40px]
        border
        border-cyan-400/20
        bg-white/5
        backdrop-blur-2xl
        p-12
        lg:p-20
        text-center
        shadow-[0_20px_80px_rgba(0,0,0,.35)]
      "
    >
      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] rounded-full bg-cyan-500/15 blur-[140px]" />

      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] rounded-full bg-violet-500/15 blur-[140px]" />

      {/* Badge */}
      <span
        className="
          inline-block
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-6
          py-2
          font-semibold
          tracking-wider
          text-cyan-400
        "
      >
        🚀 Admissions Open 2026
      </span>

      {/* Heading */}
      <h2 className="mt-8 text-4xl lg:text-6xl font-black leading-tight text-white">
        Ready To Build
        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
          Your Tech Career?
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
        Learn from experienced mentors, build real-world projects,
        master AI-powered development, and become industry-ready
        in just <span className="font-semibold text-cyan-400">3 Months.</span>
      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
        <button
          onClick={() => navigate("/contact")}
          className="
            flex
            cursor-pointer
            items-center
            justify-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-4
            font-bold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_15px_40px_rgba(34,211,238,.35)]
          "
        >
          Enroll Now
          <FaArrowRight />
        </button>

        <button
          onClick={() => navigate("/contact")}
          className="
            cursor-pointer
            rounded-full
            border
            border-cyan-400/30
            bg-white/5
            px-8
            py-4
            font-bold
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-white/10
            hover:scale-105
          "
        >
          Book Free Counselling
        </button>
      </div>
    </motion.section>
  );
}

export default ProgramCTA;