

import { motion } from "framer-motion";

function FloatingCard({
  title,
  subtitle,
  icon: Icon,
  color,
  bg,
  className,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className={`
        absolute
        ${className}

        flex
        items-center
        gap-4

        px-5
        py-4

        min-w-[220px]

        rounded-2xl

        bg-white/8
        backdrop-blur-2xl

        border
        border-white/10

        shadow-[0_20px_60px_rgba(0,0,0,.35)]

        transition-all
        duration-300
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          ${bg}
        `}
      >
        <Icon className={`${color} text-2xl`} />
      </div>

      {/* Content */}
      <div>
        <h4 className="text-white font-semibold text-base">
          {title}
        </h4>

        <p className="mt-1 text-sm text-slate-300">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default FloatingCard;