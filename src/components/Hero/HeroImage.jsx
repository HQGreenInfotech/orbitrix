import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";
import { heroCards } from "./heroData";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center items-center"
    >
      {/* Laptop */}

      <motion.img
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        src="/laptop.png"
        alt="Laptop"
        className="w-full max-w-6xl drop-shadow-2xl relative z-20"
      />

      {/* Floating Cards */}

      {heroCards.map((card) => (
        <FloatingCard
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          icon={card.icon}
          color={card.color}
          bg={card.bg}
          className={card.position}
        />
      ))}
    </motion.div>
  );
}

export default HeroImage;