import { motion } from "framer-motion";

function AboutImage() {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <img
        src="/hero.png"
        alt="Orbitix Technology"
        className="rounded-3xl shadow-2xl"
      />

      <div className="absolute bottom-8 left-8 bg-white rounded-3xl p-6 shadow-xl">
        <h2 className="text-4xl font-bold text-blue-600">
          5+
        </h2>

        <p>Years Experience</p>
      </div>
    </motion.div>
  );
}

export default AboutImage;