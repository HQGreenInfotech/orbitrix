import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";
import { heroCards } from "./heroData";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        flex
        items-center
        justify-center
        h-[650px]
        w-full
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          w-[520px]
          h-[520px]
          rounded-full
          bg-cyan-400/10
          blur-[140px]
          z-0
        "
      />

      {/* Laptop */}
      <motion.img
        src="/laptop.png"
        alt="Orbitix Technologies"

        animate={{
          y: [0, -10, 0],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          relative
          z-20
          w-full
          max-w-[620px]
          object-contain
          drop-shadow-[0_40px_100px_rgba(0,0,0,.45)]
          select-none
          pointer-events-none
        "
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