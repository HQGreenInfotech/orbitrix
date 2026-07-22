import { motion } from "framer-motion";

function RoadmapCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
    >
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color}
        flex items-center justify-center text-white text-3xl mb-6`}
      >
        <Icon />
      </div>

      <span className="text-sm font-bold text-blue-600">
        {item.month}
      </span>

      <h3 className="text-2xl font-bold mt-2 mb-5">
        {item.title}
      </h3>

      <div className="space-y-3">
        {item.topics.map((topic) => (
          <div
            key={topic}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>

            <p>{topic}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default RoadmapCard;