import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="
        relative
        flex
        min-h-[380px]
        w-full
        items-center
        justify-center
        sm:min-h-[420px]
        lg:min-h-[450px]
      "
    >
   

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.05]
          blur-[110px]
          sm:h-[360px]
          sm:w-[360px]
        "
      />

     

      <div className="relative z-10 w-full">
        <CodeEditor />
      </div>

     

      <motion.div
        initial={{
          opacity: 0,
          x: 25,
          y: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -7, 0],
        }}
        transition={{
          opacity: {
            duration: 0.7,
            delay: 0.5,
          },
          x: {
            duration: 0.7,
            delay: 0.5,
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          right-[-8px]
          top-[58%]
          z-20

          w-[190px]

          rounded-[18px]

          bg-cyan-300

          px-5
          py-4

          shadow-[0_18px_50px_rgba(34,211,238,0.18)]

          sm:right-[-12px]
          sm:w-[210px]
          sm:px-6
          sm:py-5
        "
      >
        <div
          className="
            text-3xl
            font-black
            leading-none
            tracking-tight
            text-[#071838]
            sm:text-4xl
          "
        >
          100+
        </div>

        <p
          className="
            mt-2
            text-xs
            font-bold
            leading-5
            text-[#071838]/90
            sm:text-sm
          "
        >
          Live Projects Built
          <br />
          By Our Students
        </p>
      </motion.div>
    </motion.div>
  );
}