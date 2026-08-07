import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";
import FloatingCard from "./FloatingCard";
import { heroCards } from "./heroData";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="
      relative
      flex
      justify-center
      items-center
      "
    >

      <CodeEditor />

      {heroCards.map(card => (
        <FloatingCard
          key={card.id}
          {...card}
          className={card.position}
        />
      ))}

    </motion.div>
  );
}