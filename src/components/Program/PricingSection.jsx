import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { pricing } from "./programData";

function PricingSection() {
  return (
    <section>
      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
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
            tracking-[0.18em]
            text-cyan-400
          "
        >
          PROGRAM FEE
        </span>

        <h2
          className="
            mt-6
            text-3xl
            font-black
            leading-tight
            text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          Choose your{" "}
          <span className="text-cyan-400">
            learning path.
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
          Flexible options designed for beginners and
          aspiring developers. Learn, build and prepare
          for your next opportunity.
        </p>

        <p
          className="
            mt-4
            text-sm
            text-slate-400
          "
        >
          Flexible EMI options available.
        </p>
      </motion.div>

      {/* Cards */}
      <div
        className="
          mt-14
          grid
          gap-6
          lg:grid-cols-2
          lg:gap-8
        "
      >
        {pricing.map((plan, index) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default PricingSection;