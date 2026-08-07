import { motion } from "framer-motion";

function WhyCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
        transition-all
        duration-500
        hover:border-cyan-400/30
        hover:bg-white/10
      "
    >
      {/* Hover Background */}
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

      {/* Left Glow Line */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          origin-top
          scale-y-0
          bg-gradient-to-b
          from-cyan-400
          to-blue-600
          transition-transform
          duration-500
          group-hover:scale-y-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          mb-6
          flex
          h-18
          w-18
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/15
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
          group-hover:bg-cyan-500
          group-hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
        "
      >
        <Icon
          size={30}
          className="
            text-cyan-400
            transition-all
            duration-500
            group-hover:text-white
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className="
            text-2xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-300
          "
        >
          {item.title}
        </h3>

        <p className="mt-4 leading-8 text-slate-300">
          {item.description}
        </p>
      </div>

      {/* Decorative Glow */}
      <div
        className="
          absolute
          -right-16
          -bottom-16
          h-40
          w-40
          rounded-full
          bg-cyan-500/10
          blur-3xl
          transition-transform
          duration-700
          group-hover:scale-150
        "
      />
    </motion.div>
  );
}

export default WhyCard;