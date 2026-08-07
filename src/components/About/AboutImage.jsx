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
        src="/image.png"
        alt="Orbitix Technology"
        className="rounded-3xl shadow-2xl"
      />

      <div className="absolute
bottom-8
left-8
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-2xl
p-6
shadow-2xl">
        <h2 className="text-4xl font-bold text-gray-900"> 
          {/*  text-cyan-400 */}
          5+
        </h2>

        <p className="text-slate-200">Years Experience</p>
      </div>
    </motion.div>
  );
}

export default AboutImage;