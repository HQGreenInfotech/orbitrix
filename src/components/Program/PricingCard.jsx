import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function PricingCard({ plan, index }) {
  const popular = plan.badge === "Most Popular";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
      }}
      className={`
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        p-7
        backdrop-blur-2xl
        transition-all
        duration-500
        sm:p-9

        ${
          popular
            ? `
              border-cyan-400/30
              bg-cyan-400/[0.045]
              shadow-[0_25px_90px_rgba(34,211,238,0.10)]
            `
            : `
              border-white/[0.09]
              bg-white/[0.035]
              shadow-[0_25px_80px_rgba(0,0,0,0.25)]
              hover:border-cyan-400/25
              hover:bg-white/[0.05]
            `
        }
      `}
    >

      <div
        className="
          pointer-events-none
          absolute
          left-8
          right-8
          top-0
          h-px
          bg-white/20
        "
      />
      {popular && (
        <div
          className="
            absolute
            right-5
            top-5
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/[0.08]
            px-3
            py-1.5
            text-xs
            font-semibold
            text-cyan-300
          "
        >
          MOST POPULAR
        </div>
      )}

   
      <p
        className="
          text-xs
          font-semibold
          tracking-[0.2em]
          text-cyan-400
        "
      >
        {plan.title}
      </p>


      <h3
        className="
          mt-4
          text-2xl
          font-bold
          text-white
          sm:text-3xl
        "
      >
        {plan.subtitle}
      </h3>


      <div className="mt-8">
        <span
          className="
            text-4xl
            font-black
            text-white
            sm:text-5xl
          "
        >
          {plan.price}
        </span>

        <p className="mt-2 text-sm text-slate-400">
          {plan.duration}
        </p>
      </div>


      <div className="my-8 h-px bg-white/[0.08]" />

    
      <ul className="flex-1 space-y-4">
        {plan.features.map((feature, i) => (
          <li
            key={i}
            className="flex items-start gap-3"
          >
            <FaCheckCircle
              className="
                mt-1
                shrink-0
                text-sm
                text-cyan-400
              "
            />

            <span
              className="
                text-sm
                leading-6
                text-slate-300
              "
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className="
          group/button
          mt-10
          flex
          w-full
          cursor-pointer
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-cyan-400/25
          bg-cyan-400/[0.07]
          px-5
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-cyan-400/50
          hover:bg-cyan-400/[0.12]
        "
      >
        {plan.button}

        <span
          className="
            transition-transform
            duration-300
            group-hover/button:translate-x-1
          "
        >
          ↗
        </span>
      </button>
    </motion.div>
  );
}

export default PricingCard;