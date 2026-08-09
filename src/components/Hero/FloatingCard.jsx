import { motion } from "framer-motion";

function FloatingCard({
  title,
  subtitle,
  icon: Icon,
  bg,
  color,
  position,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        group
        absolute
        ${position}
        z-30

        flex
        items-center
        gap-3

        w-[210px]
        sm:w-[230px]

        px-4
        py-3

        rounded-2xl

        bg-[#163B80]/45
        backdrop-blur-2xl

        border
        border-white/[0.12]

        shadow-[0_20px_60px_rgba(0,0,0,0.35)]

        overflow-hidden

        transition-all
        duration-500

        hover:border-cyan-400/40
        hover:bg-[#163B80]/60
        hover:shadow-[0_20px_70px_rgba(34,211,238,0.18)]
      `}
    >
     
      <span
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-[-100%]
          w-1/2

          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent

          skew-x-[-20deg]

          transition-all
          duration-700

          group-hover:left-[130%]
        "
      />

     
      <span
        className="
          pointer-events-none
          absolute

          -bottom-8
          left-1/2

          w-28
          h-10

          -translate-x-1/2

          rounded-full

          bg-cyan-400/10
          blur-2xl

          opacity-0

          transition-all
          duration-500

          group-hover:opacity-100
        "
      />


      <span
        className="
          pointer-events-none
          absolute
          top-0
          left-5
          right-5

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
        "
      />

     
      <div
        className={`
          relative
          z-10

          flex
          items-center
          justify-center

          w-11
          h-11

          shrink-0

          rounded-xl

          ${bg}

          border
          border-white/10

          shadow-[0_8px_25px_rgba(0,0,0,0.2)]

          transition-all
          duration-500

          group-hover:scale-110
        `}
      >
        <Icon
          className={`
            text-lg
            ${color}

            transition-all
            duration-500

            group-hover:scale-110
          `}
        />

       
        <span
          className="
            pointer-events-none
            absolute
            inset-0

            rounded-xl

            bg-cyan-400/10
            blur-lg

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        />
      </div>

      <div className="relative z-10 min-w-0 leading-tight">
        <h4
          className="
            truncate

            text-white
            text-base
            sm:text-lg
            font-semibold

            transition-colors
            duration-300

            group-hover:text-cyan-100
          "
        >
          {title}
        </h4>

        <p
          className="
            truncate

            text-slate-300
            text-xs
            sm:text-sm

            mt-1

            transition-colors
            duration-300

            group-hover:text-slate-200
          "
        >
          {subtitle}
        </p>
      </div>

     
      <span
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2

          h-[1px]
          w-16

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-cyan-400/50
          to-transparent

          opacity-60
        "
      />
    </motion.div>
  );
}

export default FloatingCard;