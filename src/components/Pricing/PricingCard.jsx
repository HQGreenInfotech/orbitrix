import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

function PricingCard({ plan }) {
  const Icon = plan.icon;

  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{ duration: 0.35 }}
      className={`relative overflow-hidden rounded-3xl border bg-white shadow-xl p-8 transition-all
      ${
        plan.popular
          ? "border-blue-600 ring-2 ring-blue-100"
          : "border-gray-200"
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute top-5 right-5">
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            ⭐ MOST POPULAR
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl mb-6">
        <Icon className="text-white text-4xl" />
      </div>

      {/* Package Title */}
      <h3 className="text-2xl font-extrabold text-gray-900">
        {plan.title}
      </h3>

      {/* Price */}
      <div className="mt-6 flex items-end gap-2">
        <h2 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {plan.price}
        </h2>

        <span className="text-gray-500 mb-2">
          One Time
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-8"></div>

      {/* Features */}
      <div className="space-y-5">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-4"
          >
            <FaCheckCircle className="text-green-500 text-lg" />

            <span className="text-gray-700">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.04 }}
        className={`mt-10 w-full rounded-xl py-4 font-bold text-lg flex justify-center items-center gap-3 transition-all
        ${
          plan.popular
            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
            : "bg-gray-900 text-white hover:bg-blue-600"
        }`}
      >
        {plan.button}

        <FaArrowRight />
      </motion.button>

      {/* Decorative Blur */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
    </motion.div>
  );
}

export default PricingCard;