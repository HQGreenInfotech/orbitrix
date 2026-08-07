import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFire,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PricingCard({ plan }) {
  const Icon = plan.icon;
  const navigate = useNavigate();

  const colors = {
    "Combo Offer": {
      icon: "from-orange-500 to-red-500",
      button: "from-orange-500 to-red-500",
    },

    "Digital Marketing": {
      icon: "from-green-500 to-emerald-500",
      button: "from-green-500 to-emerald-500",
    },

    "Logo Design": {
      icon: "from-purple-500 to-pink-500",
      button: "from-purple-500 to-pink-500",
    },

    "Business Branding": {
      icon: "from-indigo-500 to-blue-500",
      button: "from-indigo-500 to-blue-500",
    },

    "Software Development": {
      icon: "from-slate-700 to-slate-900",
      button: "from-slate-700 to-slate-900",
    },

    "Mobile App Development": {
      icon: "from-pink-500 to-rose-500",
      button: "from-pink-500 to-rose-500",
    },

    "AI Solutions": {
      icon: "from-teal-500 to-emerald-500",
      button: "from-teal-500 to-emerald-500",
    },
  };

  const theme = colors[plan.title] || {
    icon: "from-cyan-500 to-blue-600",
    button: "from-cyan-500 to-blue-600",
  };

  return (
    <motion.div
       initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  className={`
    relative
    overflow-hidden
    rounded-3xl
    p-8
    flex
    flex-col
    h-full
    transition-all
    duration-500

    ${
      plan.offer
        ? "bg-gradient-to-br from-blue-700 via-cyan-600 to-blue-500 text-white shadow-2xl"
        : "bg-white border border-gray-200 shadow-xl"
    }
  `}
    >
      {/* Badge */}

      {plan.offer && (
        <span className="absolute right-5 top-5 rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur">
          🔥 LIMITED OFFER
        </span>
      )}

      {plan.popular && !plan.offer && (
        <span className="absolute right-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow">
          ⭐ MOST POPULAR
        </span>
      )}

      {/* Icon */}

      <div
        className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${theme.icon} shadow-xl`}
      >
        <Icon className="text-4xl text-white" />
      </div>

      {/* Title */}

      <h3
        className={`text-2xl font-black ${
          plan.offer ? "text-white" : "text-gray-900"
        }`}
      >
        {plan.title}
      </h3>

      {/* Subtitle */}

      {plan.subtitle && (
        <p
          className={`mt-2 ${
            plan.offer ? "text-white/80" : "text-gray-500"
          }`}
        >
          {plan.subtitle}
        </p>
      )}

      {/* Price */}

      <div className="mt-6">
        {plan.oldPrice && (
          <p
            className={`line-through ${
              plan.offer ? "text-white/70" : "text-gray-400"
            }`}
          >
            {plan.oldPrice}
          </p>
        )}

        <h2
          className={`text-5xl font-black ${
            plan.offer
              ? "text-white"
              : `bg-gradient-to-r ${theme.icon} bg-clip-text text-transparent`
          }`}
        >
          {plan.price}
        </h2>

        {plan.discount && (
          <div
            className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold
            ${
              plan.offer
                ? "bg-white/20 text-white"
                : "bg-red-50 text-red-600"
            }`}
          >
            <FaFire />
            {plan.discount}
          </div>
        )}
      </div>

      <div
        className={`my-8 h-px ${
          plan.offer ? "bg-white/20" : "bg-gray-200"
        }`}
      />

      {/* Features */}


<div className="flex-1 space-y-4 mt-8">
  {plan.features.map((feature) => (
    <div
      key={feature}
      className="flex items-center gap-3"
    >
      <FaCheckCircle
        className={
          plan.offer
            ? "text-green-300"
            : "text-green-500"
        }
      />

      <span
        className={
          plan.offer
            ? "text-white"
            : "text-gray-700"
        }
      >
        {feature}
      </span>
    </div>
  ))}
</div>

      {/* Button */}

     <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => navigate("/contact")}
  className={`
    mt-10
    w-full
    py-4
    rounded-xl
    bg-gradient-to-r
    ${theme.button}
    text-white
    font-bold
    shadow-lg
    flex
    items-center
    justify-center
    transition-all
    duration-300
    cursor-pointer
  `}
>
  {plan.button}
</motion.button>

      {/* Glow */}

      <div
        className={`absolute -right-20 -bottom-20 h-56 w-56 rounded-full blur-3xl
        ${
          plan.offer
            ? "bg-white/10"
            : "bg-cyan-500/10"
        }`}
      />
    </motion.div>
  );
}

export default PricingCard;