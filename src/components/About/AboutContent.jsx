import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      

      <div
        className="
          inline-flex
          items-center
          gap-3

          rounded-full

          border
          border-white/10

          bg-white/[0.035]

          px-4
          py-2

          backdrop-blur-xl
        "
      >
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-cyan-400

            shadow-[0_0_10px_rgba(34,211,238,0.8)]
          "
        />

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[3px]
            text-white
          "
        >
          About Orbitix
        </span>
      </div>

    

      <h2
        className="
          mt-6

          text-4xl
          font-black
          leading-[1.08]

          text-white

          sm:text-5xl
          lg:text-[52px]
          xl:text-[56px]
        "
      >
        We Build

        <br />

        <span
          className="
            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-violet-400

            bg-clip-text

            text-transparent
          "
        >
          Modern Digital
        </span>

        <br />

        Solutions
      </h2>

     

      <p
        className="
          mt-7

          max-w-xl

          text-base
          leading-8

          text-white/70

          sm:text-lg
        "
      >
        Orbitix Technologies provides Website Development,
        Software Development, AI Solutions, Robotics,
        Educational Coding, Mobile Apps and Digital Marketing
        under one roof.
      </p>

     

      <Link
        to="/about-more"
        className="
          group
          relative

          mt-8

          inline-flex
          items-center
          gap-3

          overflow-hidden

          rounded-full

          border
          border-white/15

          bg-white/[0.055]

          px-6
          py-3.5

          text-sm
          font-semibold
          text-white

          backdrop-blur-xl

          shadow-[0_10px_35px_rgba(0,0,0,0.18)]

          transition-all
          duration-500

          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:bg-cyan-400/[0.08]

          hover:shadow-[0_15px_45px_rgba(34,211,238,0.20)]

          active:scale-95
        "
      >
        

        <span
          className="
            pointer-events-none
            absolute
            inset-0

            -translate-x-full

            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent

            skew-x-[-20deg]

            transition-transform
            duration-700

            group-hover:translate-x-full
          "
        />

        <span className="relative z-10">
          Explore More
        </span>

        <span
          className="
            relative
            z-10

            flex
            h-8
            w-8

            items-center
            justify-center

            rounded-full

            bg-gradient-to-r
            from-cyan-400
            to-blue-500

            text-white

            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}

export default AboutContent;