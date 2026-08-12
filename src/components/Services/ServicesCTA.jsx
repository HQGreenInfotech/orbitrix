import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ServicesCTA() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        relative
        mt-16
        overflow-hidden

        rounded-[34px]

        border
        border-white/[0.10]

        bg-white/[0.035]

        p-7
        sm:p-10
        lg:p-12

        backdrop-blur-xl

        shadow-[0_25px_90px_rgba(0,0,0,0.25)]
      "
    >
     
      <div
        className="
          pointer-events-none
          absolute
          left-10
          right-10
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10

          flex
          flex-col
          gap-8

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div className="max-w-2xl">
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-cyan-400
            "
          >
            Have a project in mind?
          </span>

          <h3
            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            Let's build something
            <span className="text-cyan-400">
              {" "}useful.
            </span>
          </h3>

          <p
            className="
              mt-4
              leading-7
              text-slate-300
            "
          >
            Tell us what you're building and we'll help
            turn your idea into a practical digital solution.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            to="/contact"
            className="
              group

              inline-flex
              items-center
              gap-3

              rounded-2xl

              border
              border-cyan-400/30

              bg-cyan-400/[0.08]

              px-6
              py-4

              font-semibold
              text-white

              backdrop-blur-xl

              transition-all
              duration-500

              hover:-translate-y-1
              hover:border-cyan-400/60
              hover:bg-cyan-400/[0.13]
              hover:shadow-[0_15px_45px_rgba(34,211,238,0.18)]
            "
          >
            Start a Project

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesCTA;