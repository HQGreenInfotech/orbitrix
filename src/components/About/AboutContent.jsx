import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-400/20
          bg-white/[0.04]
          px-4
          py-2
          text-sm
          font-semibold
          tracking-[0.2em]
          text-cyan-400
          backdrop-blur-xl
        "
      >
        ABOUT ORBITIX
      </span>

      <h2 className="mt-5 text-5xl font-bold leading-tight text-white">
        We Build{" "}
        <span className="text-cyan-400">
          Modern Digital Solutions
        </span>
      </h2>

      <p className="mt-8 leading-8 text-slate-300">
        Orbitix Technologies provides Website Development,
        Software Development, AI Solutions, Robotics,
        Educational Coding, Mobile Apps and Digital Marketing
        under one roof.
      </p>

      {/* Premium button */}
      <Link
        to="/about-more"
        className="
          group
          relative
          inline-flex
          items-center
          justify-center
          gap-3

          mt-10
          px-7
          py-4

          rounded-2xl
          overflow-hidden

          border
          border-cyan-400/30

          bg-white/[0.06]
          backdrop-blur-xl

          text-white
          font-semibold

          shadow-[0_10px_35px_rgba(6,182,212,0.12)]

          transition-all
          duration-500

          hover:-translate-y-1
          hover:border-cyan-300/60
          hover:bg-cyan-400/10
          hover:shadow-[0_15px_45px_rgba(6,182,212,0.30)]
        "
      >
        {/* Moving shine */}
        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-cyan-400/20
            to-transparent

            transition-transform
            duration-700

            group-hover:translate-x-full
          "
        />

        {/* Top reflection */}
        <span
          className="
            absolute
            top-0
            left-4
            right-4
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/50
            to-transparent
          "
        />

        {/* Glow */}
        <span
          className="
            pointer-events-none
            absolute
            -inset-2
            rounded-2xl
            bg-cyan-400/10
            blur-xl

            opacity-0
            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        />

        <span className="relative z-10">
          Explore More
        </span>

        {/* Arrow */}
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

            shadow-[0_4px_15px_rgba(6,182,212,0.35)]

            transition-all
            duration-500

            group-hover:translate-x-1
            group-hover:scale-110
          "
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}

export default AboutContent;