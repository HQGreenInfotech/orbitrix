import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="w-full text-center"
    >
     
      <div
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/[0.08]
          px-5
          py-2
          text-[10px]
          font-semibold
          uppercase
          tracking-[3px]
          text-cyan-300
          sm:text-xs
        "
      >
        Orbitix Technologies
      </div>

     
      <h1
        className="
          mx-auto
          mt-7
          max-w-6xl
          text-4xl
          font-black
          leading-[1.05]
          tracking-[-1.5px]
          text-white
          sm:text-5xl
          sm:tracking-[-2px]
          md:text-6xl
          lg:text-7xl
          xl:text-[76px]
        "
      >
        We Build Modern Digital{" "}
        <span
          className="
            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-cyan-300
            bg-clip-text
            text-transparent
          "
        >
          Solutions
        </span>{" "}
        That Help Businesses Grow
      </h1>

     
      <p
        className="
          mx-auto
          mt-7
          max-w-3xl
          text-base
          leading-7
          text-white/60
          sm:text-lg
          sm:leading-8
        "
      >
        Orbitix Technology helps startups, businesses and educational
        institutions build modern websites, software, AI solutions,
        mobile applications and digital experiences.
      </p>

     
      <div className="mt-9 flex justify-center">
        <HeroButtons />
      </div>
    </motion.div>
  );
}

export default HeroContent;