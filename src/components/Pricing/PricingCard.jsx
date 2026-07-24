import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
  FaFire,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PricingCard({ plan }) {
  const Icon = plan.icon;
  const navigate = useNavigate()


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
    icon: "from-blue-600 to-cyan-500",
    button: "from-blue-600 to-cyan-500",
  };

  

  if (plan.offer) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-cyan-600 to-blue-500 text-white shadow-2xl p-8"
      >
        <span className="absolute top-5 right-5 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-slate-900">
          🔥 LIMITED OFFER
        </span>

        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20">
          <Icon className="text-4xl text-white" />
        </div>

        <h3 className="text-3xl font-black">{plan.title}</h3>

        {plan.subtitle && (
          <p className="mt-2 text-white/80">
            {plan.subtitle}
          </p>
        )}

        <div className="mt-6">
          {plan.oldPrice && (
            <p className="text-xl text-white/70 line-through">
              {plan.oldPrice}
            </p>
          )}

          <h2 className="text-6xl font-black">
            {plan.price}
          </h2>

          {plan.discount && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 font-semibold">
              <FaFire />
              {plan.discount}
            </div>
          )}
        </div>

        <div className="my-8 h-px bg-white/20"></div>

        <div className="space-y-4">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-300" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

       <motion.button
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.03 }}
  onClick={() => navigate("/contact")}
  className={`
    mt-10
    flex
    w-full
    cursor-pointer
    items-center
    justify-center
    gap-3
    rounded-xl
    bg-gradient-to-r
    ${theme.button}
    py-4
    font-bold
    text-white
    shadow-lg
    transition-all
    duration-300
  `}
>
  {plan.button}
  <FaArrowRight />
</motion.button>

        <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
      </motion.div>
    );
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{ duration: 0.35 }}
      className={`relative overflow-hidden rounded-3xl border bg-white p-8 shadow-xl ${
        plan.popular
          ? "border-orange-400 ring-2 ring-orange-100"
          : "border-gray-200"
      }`}
    >
      {plan.popular && (
        <div className="absolute right-5 top-5">
          <span className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
            ⭐ MOST POPULAR
          </span>
        </div>
      )}

      <div
        className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${theme.icon} shadow-xl`}
      >
        <Icon className="text-4xl text-white" />
      </div>

      <h3 className="text-2xl font-extrabold text-gray-900">
        {plan.title}
      </h3>

      {plan.subtitle && (
        <p className="mt-2 text-gray-500">
          {plan.subtitle}
        </p>
      )}

      <div className="mt-6">
        {plan.oldPrice && (
          <p className="text-lg text-gray-400 line-through">
            {plan.oldPrice}
          </p>
        )}

        <h2
          className={`bg-gradient-to-r ${theme.icon} bg-clip-text text-5xl font-black text-transparent`}
        >
          {plan.price}
        </h2>

        {plan.discount && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 font-semibold text-red-600">
            <FaFire />
            {plan.discount}
          </div>
        )}
      </div>

      <div className="my-8 h-px bg-gray-200"></div>

      <div className="space-y-5">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-4"
          >
            <FaCheckCircle className="text-green-500" />
            <span className="text-gray-700">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <motion.button
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.03 }}
  onClick={() => navigate("/contact")}
  className={`
    mt-10
    flex
    w-full
    cursor-pointer
    items-center
    justify-center
    gap-3
    rounded-xl
    bg-gradient-to-r
    ${theme.button}
    py-4
    font-bold
    text-white
    shadow-lg
    transition-all
    duration-300
  `}
>
  {plan.button}
  <FaArrowRight />
</motion.button>

      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>
    </motion.div>
  );
}

export default PricingCard;