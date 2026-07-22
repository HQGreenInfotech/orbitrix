import { motion } from "framer-motion";

function FeatureCard({ icon: Icon, title }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      className="
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      rounded-2xl
      p-5
      flex
      flex-col
      items-center
      justify-center
      text-center
      gap-3
      transition-all
      "
    >
      <Icon className="text-4xl text-cyan-300" />

      <h3 className="font-semibold text-white">
        {title}
      </h3>
    </motion.div>
  );
}

export default FeatureCard;