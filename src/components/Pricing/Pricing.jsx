import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { pricingPlans } from "./pricingData";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#061B3A]
        py-28
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-6
              py-2
              text-sm
              font-semibold
              text-cyan-400
            "
          >
            OUR SPECIAL OFFERS
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            Choose the Perfect Service
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              for Your Business Growth
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            From websites and branding to AI solutions and digital marketing,
            Orbitix Technologies provides complete digital services designed
            to help startups, businesses, and entrepreneurs grow online.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-24
            rounded-3xl
            border
            border-cyan-400/20
            bg-white/5
            backdrop-blur-xl
            p-12
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,.35)]
          "
        >
          <h3 className="text-3xl font-black text-white">
            Need a Custom Solution?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Looking for a custom website, software, mobile application,
            AI solution or digital marketing strategy? Let's discuss your
            project and build something amazing together.
          </p>

          <Link
            to="/contact"
            className="
              mt-8
              inline-flex
              cursor-pointer
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-8
              py-4
              font-bold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_15px_40px_rgba(34,211,238,.35)]
            "
          >
            Request Free Quote
            <FaArrowRight />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Pricing;