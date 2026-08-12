import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        min-h-[360px]
        overflow-hidden
        rounded-[30px]

        border
        border-white/[0.09]

        bg-white/[0.035]

        p-7
        sm:p-8

        backdrop-blur-xl

        shadow-[0_20px_70px_rgba(0,0,0,0.22)]

        transition-all
        duration-500

        hover:border-cyan-400/30
        hover:bg-white/[0.055]
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.32)]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-6
          right-6
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-24
          w-24
          rounded-bl-[70px]
          border-b
          border-l
          border-cyan-400/[0.08]
        "
      />

      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 4,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 15,
        }}
        className="
          relative
          z-10
          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-2xl

          border
          border-cyan-400/20

          bg-cyan-400/[0.08]

          shadow-[0_10px_30px_rgba(34,211,238,0.08)]

          transition-all
          duration-300

          group-hover:border-cyan-400/40
          group-hover:bg-cyan-400/[0.12]
        "
      >
        <Icon
          className={`
            text-2xl
            ${service.color}
            transition-all
            duration-300
            group-hover:text-cyan-300
          `}
        />
      </motion.div>

      <span
        className="
          absolute
          right-7
          top-7

          font-mono
          text-xs
          tracking-[0.2em]

          text-white/20

          transition-colors
          duration-300

          group-hover:text-cyan-400/50
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10 mt-8">
        <h3
          className="
            text-2xl
            font-bold
            leading-tight
            text-white

            transition-colors
            duration-300

            group-hover:text-cyan-100
          "
        >
          {service.title}
        </h3>

        <div
          className="
            mt-4
            h-px
            w-12

            bg-cyan-400/50

            transition-all
            duration-500

            group-hover:w-20
            group-hover:bg-cyan-400
          "
        />

        <p
          className="
            mt-5
            max-w-md

            text-sm
            leading-7

            text-slate-300

            transition-colors
            duration-300

            group-hover:text-slate-200
          "
        >
          {service.description}
        </p>
      </div>

      <div
        className="
          absolute
          bottom-7
          left-7
          right-7

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-sm
            font-semibold
            text-white/50

            transition-colors
            duration-300

            group-hover:text-cyan-300
          "
        >
          Explore service
        </span>

        <span
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-white/[0.04]

            text-white/60

            transition-all
            duration-300

            group-hover:border-cyan-400/40
            group-hover:bg-cyan-400/10
            group-hover:text-cyan-300
            group-hover:rotate-45
          "
        >
          <FaArrowUpRightFromSquare className="text-sm" />
        </span>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2

          h-[2px]
          w-0

          -translate-x-1/2

          bg-cyan-400

          shadow-[0_0_18px_rgba(34,211,238,0.45)]

          transition-all
          duration-500

          group-hover:w-24
        "
      />
    </motion.article>
  );
}

export default ServiceCard;
