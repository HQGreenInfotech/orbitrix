import { motion } from "framer-motion";
import { FaCheckCircle, FaFire } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PricingCard({ plan }) {
  const Icon = plan.icon;
  const navigate = useNavigate();

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
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -6,
      }}
      className={`
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        p-7
        backdrop-blur-2xl
        transition-all
        duration-300

        ${
          plan.offer
            ? `
              border-cyan-400/25
              bg-cyan-400/[0.06]
              shadow-[0_20px_60px_rgba(34,211,238,0.08)]
            `
            : `
              border-white/[0.09]
              bg-white/[0.025]
              shadow-[0_20px_60px_rgba(0,0,0,0.20)]
            `
        }

        hover:border-cyan-400/40
        hover:bg-white/[0.045]
        hover:shadow-[0_25px_70px_rgba(34,211,238,0.10)]
      `}
    >
      {/* Top reflection */}
      <div
        className="
          pointer-events-none
          absolute
          left-7
          right-7
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-opacity
          duration-300
          group-hover:via-cyan-300/40
        "
      />

      {/* Offer badge */}
      {plan.offer && (
        <span
          className="
            absolute
            right-5
            top-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-3
            py-1.5
            text-[10px]
            font-bold
            tracking-wider
            text-cyan-300
          "
        >
          <FaFire />
          LIMITED OFFER
        </span>
      )}

      {/* Popular badge */}
      {plan.popular && !plan.offer && (
        <span
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
            text-[10px]
            font-bold
            tracking-wider
            text-cyan-300
          "
        >
          MOST POPULAR
        </span>
      )}

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-cyan-400/20
          bg-cyan-400/[0.06]
          text-cyan-400
          transition-all
          duration-300
          group-hover:border-cyan-400/40
          group-hover:bg-cyan-400/[0.10]
        "
      >
        <Icon
          className="
            text-2xl
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-6
          text-xl
          font-bold
          text-white
          transition-colors
          duration-300
          group-hover:text-cyan-300
        "
      >
        {plan.title}
      </h3>

      {/* Subtitle */}
      {plan.subtitle && (
        <p className="mt-2 text-sm text-slate-400">
          {plan.subtitle}
        </p>
      )}

      {/* Price */}
      <div className="mt-6">
        {plan.oldPrice && (
          <p className="text-sm text-slate-500 line-through">
            {plan.oldPrice}
          </p>
        )}

        <h2
          className="
            mt-1
            text-3xl
            font-black
            text-white
          "
        >
          {plan.price}
        </h2>

        {plan.discount && (
          <span
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/15
              bg-cyan-400/[0.06]
              px-3
              py-1.5
              text-xs
              font-semibold
              text-cyan-300
            "
          >
            <FaFire />
            {plan.discount}
          </span>
        )}
      </div>

      {/* Divider */}
      <div
        className="
          my-7
          h-px
          bg-white/[0.08]
          transition-colors
          duration-300
          group-hover:bg-cyan-400/15
        "
      />

      {/* Features */}
      <ul className="flex-1 space-y-4">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="
              flex
              items-start
              gap-3
              text-sm
              leading-6
              text-slate-300
            "
          >
            <FaCheckCircle
              className="
                mt-1
                shrink-0
                text-sm
                text-cyan-400
              "
            />

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <motion.button
        whileTap={{
          scale: 0.97,
        }}
        onClick={() => navigate("/contact")}
        className="
          group/button
          mt-8
          flex
          w-full
          cursor-pointer
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-cyan-400/25
          bg-cyan-400/[0.06]
          px-5
          py-3.5
          font-semibold
          text-white
          transition-all
          duration-300

          hover:border-cyan-400/60
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
      </motion.button>

      {/* Very subtle bottom light */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-cyan-400/50
          transition-all
          duration-500
          group-hover:w-1/2
        "
      />
    </motion.div>
  );
}

export default PricingCard;