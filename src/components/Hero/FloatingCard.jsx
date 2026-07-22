// src/components/Hero/FloatingCard.jsx

import { motion } from "framer-motion";

function FloatingCard({ title, subtitle, icon: Icon, color, bg, className }) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        ${className}
        bg-white
        rounded-2xl
        shadow-xl
        border
        border-gray-100
        p-4
        flex
        items-center
        gap-3
        min-w-35
      `}
    >
      <div
        className={`
        w-12
        h-12
        rounded-xl
        ${bg}
        flex
        items-center
        justify-center
      `}
      >
        <Icon className={`${color} text-2xl`} />
      </div>

      <div>
        <h4 className="font-semibold">{title}</h4>

        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default FloatingCard;
