import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function ProgramCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
        transition-all
        duration-500
        hover:bg-white/10
        hover:border-cyan-400/30
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-cyan-500/10
          via-blue-500/10
          to-violet-500/10
        "
      />

      {/* Background Glow */}
      <div
        className="
          absolute
          -bottom-20
          -right-20
          w-52
          h-52
          rounded-full
          bg-cyan-400/10
          blur-3xl
          transition-transform
          duration-700
          group-hover:scale-150
        "
      />

      {/* Month Badge */}
      <div
        className="
          relative
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-cyan-500/15
          border
          border-cyan-400/20
          px-5
          py-2
          text-sm
          font-bold
          text-cyan-400
        "
      >
        {item.month}
      </div>

      {/* Title */}
      <h3
        className="
          relative
          mt-6
          text-3xl
          font-black
          text-white
          transition-colors
          duration-300
          group-hover:text-cyan-300
        "
      >
        {item.title}
      </h3>

      {/* Topics */}
      <ul className="relative mt-8 space-y-5">
        {item.topics.map((topic, i) => (
          <li
            key={i}
            className="flex items-center gap-4"
          >
            <FaCheckCircle
              className="
                text-cyan-400
                text-lg
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span className="text-slate-300 leading-7">
              {topic}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ProgramCard;