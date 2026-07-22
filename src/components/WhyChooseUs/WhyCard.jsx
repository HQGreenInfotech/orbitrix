import { motion } from "framer-motion";

function WhyCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        flex
        items-start
        gap-6
        rounded-3xl
        bg-white/90
        backdrop-blur-xl
        border
        border-slate-200
        p-7
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        hover:border-blue-200
        overflow-hidden
      "
    >
      {/* Left Accent Line */}

      <span
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          bg-gradient-to-b
          from-blue-600
          to-cyan-500
          scale-y-0
          origin-top
          group-hover:scale-y-100
          transition-transform
          duration-300
        "
      />

      {/* Icon */}

      <div
        className="
          w-16
          h-16
          rounded-2xl
          flex
          items-center
          justify-center
          bg-blue-100
          transition-all
          duration-300
          group-hover:bg-blue-600
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        <Icon
          size={30}
          className="
            text-blue-600
            transition-all
            duration-300
            group-hover:text-white
          "
        />
      </div>

      {/* Content */}

      <div>
        <h3 className="text-2xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-3 text-slate-600 leading-7">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default WhyCard;