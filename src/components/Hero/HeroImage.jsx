import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";
import { heroCards } from "./heroData";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="relative h-[650px] flex items-center justify-center"
    >
      <div className="absolute w-[520px] h-[520px] rounded-full bg-cyan-500/15 blur-[150px]" />

      <motion.img
        src="/laptop.png"
        alt="Orbitix"

        animate={{
          y: [0, -10, 0],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
        }}

        className="
        relative
        z-20
        max-w-[620px]
        w-full
        object-contain
      "
      />

      {heroCards.map((card) => (
        <FloatingCard key={card.id} {...card} />
      ))}
    </motion.div>
  );
}

export default HeroImage;