import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function PricingCard({ plan, index }) {
  const popular = plan.badge === "Most Popular";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        p-8
        flex
        flex-col
        border
        transition-all
        duration-500

        ${
          popular
            ? `
              bg-gradient-to-br
              from-cyan-500
              via-blue-600
              to-indigo-700
              text-white
              border-cyan-300/30
              shadow-[0_20px_60px_rgba(34,211,238,.35)]
            `
            : `
              bg-white/5
              backdrop-blur-xl
              border-white/10
              text-white
              shadow-[0_20px_60px_rgba(0,0,0,.35)]
              hover:border-cyan-400/30
              hover:bg-white/10
            `
        }
      `}
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -bottom-24
          -right-24
          w-60
          h-60
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

      {/* Badge */}
      {popular && (
        <span
          className="
            absolute
            top-5
            right-5
            px-4
            py-2
            rounded-full
            bg-white/20
            backdrop-blur
            text-sm
            font-bold
          "
        >
          ⭐ Most Popular
        </span>
      )}

      {/* Title */}
      <p
        className={`uppercase tracking-[3px] text-sm font-semibold ${
          popular ? "text-cyan-100" : "text-cyan-400"
        }`}
      >
        {plan.title}
      </p>

      {/* Subtitle */}
      <h3 className="mt-4 text-3xl font-black">
        {plan.subtitle}
      </h3>

      {/* Price */}
      <div className="mt-8">
        <h2 className="text-5xl font-black">
          {plan.price}
        </h2>

        <p
          className={`mt-2 ${
            popular
              ? "text-white/80"
              : "text-slate-400"
          }`}
        >
          / {plan.duration}
        </p>
      </div>

      {/* Divider */}
      <div
        className={`my-8 h-px ${
          popular
            ? "bg-white/20"
            : "bg-white/10"
        }`}
      />

      {/* Features */}
      <ul className="space-y-4 flex-1">
        {plan.features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-3"
          >
            <FaCheckCircle
              className={
                popular
                  ? "text-yellow-300"
                  : "text-cyan-400"
              }
            />

            <span
              className={
                popular
                  ? "text-white"
                  : "text-slate-300"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`
          mt-10
          w-full
          cursor-pointer
          rounded-xl
          py-4
          font-bold
          transition-all
          duration-300

          ${
            popular
              ? `
                bg-white
                text-blue-700
                hover:bg-slate-100
                hover:scale-105
              `
              : `
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                hover:scale-105
                hover:shadow-[0_15px_35px_rgba(34,211,238,.35)]
              `
          }
        `}
      >
        {plan.button}
      </button>
    </motion.div>
  );
}

export default PricingCard;