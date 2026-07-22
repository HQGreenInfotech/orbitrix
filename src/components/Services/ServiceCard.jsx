import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: .6,
        delay: index * .15,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        rotateX: 8,
        rotateY: -8,
      }}
      className="group relative overflow-hidden rounded-3xl
      backdrop-blur-xl
      bg-white/60
      border border-white/40
      shadow-xl
      p-8"
    >
      
      <div
        className="absolute inset-0
        opacity-0
        group-hover:opacity-100
        duration-500
        bg-gradient-to-br
        from-blue-500/10
        via-cyan-500/10
        to-purple-500/10"
      />

      <div
        className={`relative w-20 h-20 rounded-3xl
        ${service.bg}
        flex items-center justify-center
        mb-8
        group-hover:scale-110
        group-hover:rotate-12
        duration-500`}
      >
        <Icon
          className={`text-4xl ${service.color}`}
        />
      </div>

      <h3 className="text-2xl font-bold mb-5">
        {service.title}
      </h3>

      <p className="text-gray-600 leading-8 mb-8">
        {service.description}
      </p>

      <button
        className="flex items-center gap-3
        text-blue-600
        font-semibold
        group-hover:gap-5
        duration-300"
      >
        Learn More

        <FaArrowRight />
      </button>

      <div
        className="absolute
        -bottom-20
        -right-20
        w-44
        h-44
        rounded-full
        bg-gradient-to-br
        from-blue-500/10
        to-cyan-400/10
        group-hover:scale-150
        duration-700"
      />
    </motion.div>
  );
}

export default ServiceCard;