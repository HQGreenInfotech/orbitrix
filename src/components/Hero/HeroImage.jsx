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
        items-center
        justify-center

        w-full
        min-h-[500px]

        lg:min-h-[600px]

        mt-10
        lg:mt-0
      "
    >
    
      <div
        className="
          pointer-events-none
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-[350px]
          h-[350px]

          sm:w-[450px]
          sm:h-[450px]

          rounded-full

          bg-cyan-400/10
          blur-[120px]
        "
      />

  
      <div className="relative z-10 w-full flex justify-center">
        <CodeEditor />
      </div>


      {heroCards.map((card) => (
        <FloatingCard
          key={card.id}
          {...card}
        />
      ))}
    </motion.div>
  );
}