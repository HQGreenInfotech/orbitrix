import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function ProgramCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className="
        relative
        bg-white
        rounded-3xl
        p-8
        border
        border-slate-200
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        duration-300
      "
    >
      {/* Month */}

      <div
        className="
          inline-flex
          items-center
          justify-center
          px-5
          py-2
          rounded-full
          bg-blue-100
          text-blue-700
          font-bold
          text-sm
        "
      >
        {item.month}
      </div>

      {/* Title */}

      <h3 className="text-3xl font-black text-slate-900 mt-6">
        {item.title}
      </h3>

      {/* Topics */}

      <ul className="mt-8 space-y-4">
        {item.topics.map((topic, i) => (
          <li
            key={i}
            className="flex items-center gap-4"
          >
            <FaCheckCircle className="text-green-500 text-lg" />

            <span className="text-slate-600">
              {topic}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ProgramCard;