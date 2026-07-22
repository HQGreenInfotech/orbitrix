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
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className={`
        relative
        rounded-3xl
        p-10
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-3
        ${
          popular
            ? "bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)]"
            : "bg-white border border-slate-200 shadow-xl"
        }
      `}
    >
      {popular && (
        <span
          className="
            absolute
            top-6
            right-6
            bg-yellow-400
            text-slate-900
            px-4
            py-2
            rounded-full
            text-sm
            font-bold
          "
        >
          ⭐ Most Popular
        </span>
      )}

      <p
        className={`uppercase tracking-widest text-sm font-semibold ${
          popular ? "text-white/80" : "text-blue-600"
        }`}
      >
        {plan.title}
      </p>

      <h3 className="text-3xl font-black mt-4">
        {plan.subtitle}
      </h3>

      <div className="mt-8">
        <h2 className="text-5xl font-black">
          {plan.price}
        </h2>

        <p
          className={`mt-2 ${
            popular ? "text-white/80" : "text-slate-500"
          }`}
        >
          / {plan.duration}
        </p>
      </div>

      <ul className="mt-10 space-y-4">
        {plan.features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-3"
          >
            <FaCheckCircle
              className={
                popular
                  ? "text-yellow-300"
                  : "text-green-500"
              }
            />

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`
          mt-10
          w-full
          py-4
          rounded-full
          font-bold
          transition
          duration-300
          ${
            popular
              ? "bg-white text-blue-700 hover:bg-slate-100"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }
        `}
      >
        {plan.button}
      </button>
    </motion.div>
  );
}

export default PricingCard;