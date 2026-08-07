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
        absolute
        ${position}
        z-30

        flex
        items-center
        gap-3

        w-[230px]
        px-4
        py-3

        rounded-2xl

        bg-[#163B80]/70
        backdrop-blur-2xl

        border
        border-white/10

        shadow-[0_20px_60px_rgba(0,0,0,.35)]

        transition-all
        duration-500

        hover:-translate-y-2
        hover:scale-105
        hover:border-cyan-400/30
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-12
          h-12
          rounded-xl

          flex
          items-center
          justify-center

          ${bg}

          shadow-lg
        `}
      >
        <Icon className={`text-xl ${color}`} />
      </div>

      {/* Text */}
      <div className="leading-tight">
        <h4 className="text-white text-lg font-semibold">
          {title}
        </h4>

        <p className="text-slate-300 text-sm mt-1">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default FloatingCard;