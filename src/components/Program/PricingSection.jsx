import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { pricing } from "./programData";

function PricingSection() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 bg-[#081B4B]" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081B4B]/95 via-[#102B72]/90 to-[#081B4B]/95" />

      <div className="absolute -left-52 top-20 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[180px]" />

      <div className="absolute -right-44 bottom-10 w-[450px] h-[450px] rounded-full bg-violet-500/15 blur-[180px]" />

      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >

          <span
            className="
              inline-block
              px-6
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400/20
              text-cyan-400
              font-semibold
              uppercase
              tracking-widest
            "
          >
            Program Fee
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-black text-white leading-tight">
            Pick the Path
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              That's Right For You
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Flexible EMI options available.
            Learn from industry experts,
            build real-world projects and become
            job-ready in just three months.
          </p>

        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          {pricing.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default PricingSection;