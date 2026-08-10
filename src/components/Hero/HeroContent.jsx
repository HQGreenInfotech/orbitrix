import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Label */}

      <div
        className="
          inline-flex
          items-center
          gap-3

          rounded-full

          border
          border-white/10

          bg-white/[0.035]

          px-5
          py-2.5

          backdrop-blur-xl
        "
      >
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-cyan-400
            shadow-[0_0_12px_rgba(34,211,238,0.7)]
          "
        />

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[3px]
            text-white
          "
        >
          Building the Future with Technology
        </p>
      </div>

      {/* Heading */}

      <h1
        className="
          mt-8

          text-5xl
          font-black
          leading-[1.02]

          text-white

          sm:text-6xl
          lg:text-7xl
          xl:text-[82px]
        "
      >
        Digital
        <br />

        Solutions
        <br />

        <span className="text-cyan-400">
          Built
        </span>{" "}
        for
        <br />

        Modern
        <br />

        Businesses
      </h1>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-xl

          text-base
          leading-8

          text-white/65

          sm:text-lg
        "
      >
        Orbitix Technology helps startups, businesses and
        educational institutions build modern websites,
        AI solutions, mobile applications and digital
        experiences.
      </p>

      {/* Buttons */}

      <div className="mt-9">
        <HeroButtons />
      </div>

      {/* Stats */}

      <div className="mt-12">
        <HeroStats />
      </div>
    </motion.div>
  );
}

export default HeroContent;