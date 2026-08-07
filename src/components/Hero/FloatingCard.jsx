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
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className={`
      absolute
      ${position}

      flex
      items-center
      gap-4

      px-5
      py-4

      rounded-2xl

      bg-white/8
      backdrop-blur-xl

      border
      border-white/10

      shadow-2xl
    `}
    >
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
        <Icon className={`text-2xl ${color}`} />
      </div>

      <div>
        <h4 className="text-white font-semibold">
          {title}
        </h4>

        <p className="text-slate-300 text-sm">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default FloatingCard;