import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ProgramCTA() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className="
        relative
        mt-24
        overflow-hidden
        rounded-[34px]
        border
        border-white/[0.10]
        bg-white/[0.035]
        p-7
        text-center
        backdrop-blur-2xl
        shadow-[0_30px_100px_rgba(0,0,0,0.25)]
        sm:p-10
        lg:p-14
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
          bg-white/25
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[250px]
          w-[250px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.035]
          blur-[100px]
        "
      />

      <div className="relative z-10">

        <span
          className="
            inline-flex
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/[0.06]
            px-4
            py-2
            text-xs
            font-semibold
            tracking-[0.15em]
            text-cyan-400
          "
        >
          ADMISSIONS OPEN
        </span>

   
        <h2
          className="
            mt-7
            text-3xl
            font-black
            leading-tight
            text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          Ready to build your{" "}
          <span className="text-cyan-400">
            tech career?
          </span>
        </h2>

   
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            leading-7
            text-slate-300
          "
        >
          Learn modern development, build real projects
          and prepare yourself for the technology industry
          in just 12 weeks.
        </p>

      
        <div
          className="
            mt-9
            flex
            flex-col
            justify-center
            gap-3
            sm:flex-row
          "
        >
          <button
            onClick={() => navigate("/contact")}
            className="
              group
              inline-flex
              cursor-pointer
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-cyan-400/30
              bg-cyan-400/[0.08]
              px-6
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/60
              hover:bg-cyan-400/[0.13]
            "
          >
            Enroll Now

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="
              cursor-pointer
              rounded-2xl
              border
              border-white/[0.10]
              bg-white/[0.035]
              px-6
              py-4
              font-semibold
              text-slate-200
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.06]
            "
          >
            Book Free Counselling
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default ProgramCTA;