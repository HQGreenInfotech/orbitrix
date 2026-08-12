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
        y: [0, -8, 0],
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

        w-[175px]
        sm:w-[205px]
        lg:w-[220px]

        px-3
        sm:px-4
        py-3

        rounded-2xl

        /* Liquid glass */
        bg-white/[0.055]
        backdrop-blur-2xl

        border
        border-white/[0.12]

        shadow-[0_15px_50px_rgba(0,0,0,0.3)]

        overflow-hidden

        transition-all
        duration-500

        hover:bg-white/[0.09]
        hover:border-cyan-300/30
        hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]
      `}
    >
  
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
          via-white/40
          to-transparent
        "
      />

  
      <span
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-[-120%]
          w-1/2

          bg-gradient-to-r
          from-transparent
          via-white/15
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
          -bottom-6
          left-1/2

          h-12
          w-24

          -translate-x-1/2

          rounded-full

          bg-cyan-400/10
          blur-2xl

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

     
      <div
        className={`
          relative
          z-10

          flex
          items-center
          justify-center

          w-9
          h-9
          sm:w-10
          sm:h-10

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
            text-base
            sm:text-lg

            ${color}

            transition-transform
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

   
      <div className="relative z-10 min-w-0">
        <h4
          className="
            truncate

            text-white

            text-sm
            sm:text-base

            font-semibold
            leading-tight

            transition-colors
            duration-300

            group-hover:text-cyan-100
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-1

            truncate

            text-white/60

            text-[11px]
            sm:text-xs

            leading-tight

            transition-colors
            duration-300

            group-hover:text-white/80
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

          h-px
          w-14

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-cyan-400/50
          to-transparent
        "
      />
    </motion.div>
  );
}

export default FloatingCard;