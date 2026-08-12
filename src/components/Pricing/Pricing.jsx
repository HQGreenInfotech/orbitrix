import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { pricingPlans } from "./pricingData";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/[0.05]
            px-5
            py-2
            text-xs
            font-semibold
            tracking-[0.2em]
            text-cyan-400
            backdrop-blur-xl
          "
        >
          SPECIAL OFFERS
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            leading-tight
            text-white
            sm:text-5xl
          "
        >
          Simple pricing.

          <span className="block text-cyan-400">
            Practical solutions.
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-8
            text-slate-300
            lg:text-lg
          "
        >
          Choose a ready-made solution or talk to us
          about a custom digital product for your business.
        </p>
      </motion.div>


      <div
        className="
          mt-14
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          relative
          mt-16
          overflow-hidden
          rounded-[32px]
          border
          border-white/[0.09]
          bg-white/[0.025]
          p-8
          backdrop-blur-2xl
          sm:p-10
          lg:p-12
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
            via-white/25
            to-transparent
          "
        />

        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-7
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
                tracking-[0.2em]
                text-cyan-400
              "
            >
              Need something custom?
            </span>

            <h3
              className="
                mt-3
                text-2xl
                font-bold
                text-white
                sm:text-3xl
              "
            >
              Let's build the right solution.
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-slate-300
              "
            >
              Custom website, software, mobile application,
              AI solution or marketing strategy — tell us
              what you need.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-cyan-400/30
              bg-cyan-400/[0.07]
              px-6
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/60
              hover:bg-cyan-400/[0.12]
            "
          >
            Request a Quote

            <FaArrowRight
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Pricing;