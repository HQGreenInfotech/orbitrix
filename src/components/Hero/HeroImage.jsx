import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";
import FloatingCard from "./FloatingCard";
import { heroCards } from "./heroData";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        relative
        flex
        w-full
        max-w-full
        items-center
        justify-center

        min-h-[420px]
        sm:min-h-[500px]
        lg:min-h-[540px]

        mt-6
        lg:mt-0

        overflow-visible
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[260px]
          w-[260px]

          sm:h-[360px]
          sm:w-[360px]

          lg:h-[420px]
          lg:w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400/[0.07]

          blur-[100px]

          transition-transform
          duration-700
        "
      />

      {/* Secondary blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[10%]

          h-32
          w-32

          rounded-full

          bg-blue-500/[0.06]

          blur-[80px]
        "
      />

      {/* Code editor */}
      <div
        className="
          relative
          z-10

          flex
          w-full
          max-w-[620px]

          items-center
          justify-center

          px-2
          sm:px-4
        "
      >
        <CodeEditor />
      </div>

      {/* Floating cards */}
      {heroCards.map((card) => (
        <FloatingCard
          key={card.id}
          {...card}
        />
      ))}
    </motion.div>
  );
}