import { motion } from "framer-motion";

function AboutCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
        group
        bg-white
        rounded-3xl
        p-8
        shadow-lg
        border
        border-gray-100
        transition-all
        duration-300
        hover:shadow-2xl
        hover:border-blue-200
      "
    >
      {/* Icon */}

      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-br
          from-blue-100
          to-cyan-100
          flex
          items-center
          justify-center
          mb-6
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        <Icon className="text-3xl text-blue-600" />
      </div>

      {/* Title */}

      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        {feature.title}
      </h3>

      {/* Description */}

      <p className="text-slate-600 leading-8">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default AboutCard;