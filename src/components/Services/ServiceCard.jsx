import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ y: [0, -4, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.15 },
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: index * 0.2,
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -16,
        scale: 1.03,
        rotateX: 6,
        rotateY: -6,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
        p-8
        transition-all
        duration-500
        hover:bg-white/10
        hover:border-cyan-400/30
      "
    >
      {/* Hover Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-blue-500/10
          via-cyan-500/10
          to-purple-500/10
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
          bg-gradient-to-r
          from-cyan-400/20
          via-blue-500/10
          to-violet-400/20
          blur-xl
          -z-10
        "
      />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 18,
          scale: 1.15,
          y: -4,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className={`
          relative
          w-20
          h-20
          rounded-3xl
          ${service.bg}
          flex
          items-center
          justify-center
          mb-8
          shadow-lg
        `}
      >
        <Icon
          className={`text-4xl ${service.color}`}
        />
      </motion.div>

      {/* Title */}
      <motion.h3
        whileHover={{ x: 4 }}
        transition={{ duration: 0.25 }}
        className="
          text-2xl
          font-bold
          text-white
          mb-5
          transition-colors
          duration-300
          group-hover:text-cyan-300
        "
      >
        {service.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        whileHover={{ x: 2 }}
        transition={{ duration: 0.25 }}
        className="
          text-slate-300
          leading-8
          mb-8
          transition-colors
          duration-300
          group-hover:text-slate-200
        "
      >
        {service.description}
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ x: 6 }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className="
          flex
          items-center
          gap-3
          text-cyan-400
          font-semibold
          transition-all
          duration-300
          group-hover:text-white
        "
      >
        Learn More

        <motion.span
          whileHover={{ x: 4 }}
        >
          <FaArrowRight />
        </motion.span>
      </motion.button>

      {/* Floating Orb */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-20
          -right-20
          w-44
          h-44
          rounded-full
          bg-gradient-to-br
          from-blue-500/10
          to-cyan-400/10
        "
      />
    </motion.div>
  );
}

export default ServiceCard;