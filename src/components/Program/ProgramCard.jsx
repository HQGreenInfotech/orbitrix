import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function ProgramCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/[0.09]
        bg-white/[0.035]
        p-7
        backdrop-blur-2xl
        shadow-[0_25px_80px_rgba(0,0,0,0.25)]
        transition-all
        duration-500
        hover:border-cyan-400/25
        hover:bg-white/[0.05]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-8
          right-8
          top-0
          h-px
          bg-white/20
        "
      />

      <div
        className="
          inline-flex
          items-center
          rounded-xl
          border
          border-cyan-400/15
          bg-cyan-400/[0.06]
          px-4
          py-2
          text-xs
          font-semibold
          tracking-[0.15em]
          text-cyan-400
        "
      >
        {item.month}
      </div>

      <div
        className="
          absolute
          right-6
          top-6
          text-5xl
          font-black
          text-white/[0.035]
        "
      >
        0{index + 1}
      </div>
      <h3
        className="
          relative
          mt-6
          text-2xl
          font-bold
          leading-tight
          text-white
          transition-colors
          duration-300
          group-hover:text-cyan-300
          lg:text-3xl
        "
      >
        {item.title}
      </h3>

      <div
        className="
          my-7
          h-px
          w-full
          bg-white/[0.07]
        "
      />
      <ul className="space-y-4">
        {item.topics.map((topic, i) => (
          <li
            key={i}
            className="
              flex
              items-start
              gap-3
            "
          >
            <FaCheckCircle
              className="
                mt-1
                shrink-0
                text-sm
                text-cyan-400
              "
            />

            <span
              className="
                text-sm
                leading-6
                text-slate-300
              "
            >
              {topic}
            </span>
          </li>
        ))}
      </ul>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-cyan-400
          transition-all
          duration-500
          group-hover:w-1/2
        "
      />
    </motion.div>
  );
}

export default ProgramCard;
