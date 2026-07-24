import { motion } from "framer-motion";
import { pricingPlans } from "./pricingData";
import PricingCard from "./PricingCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-6 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Special Offers
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Choose the Perfect Service
            <span className="block text-blue-600">
              for Your Business Growth
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            From websites and branding to AI solutions and digital marketing,
            Orbitix Technologies provides complete digital services designed to
            help startups, businesses, and entrepreneurs grow online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 p-10 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-black">Need a Custom Solution?</h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Looking for a custom website, software, mobile application, AI
            solution, or digital marketing strategy? Let's discuss your project
            and create a solution tailored to your business.
          </p>

          <Link to="/contact">
            <button
              className="
      mt-8
      inline-flex
      items-center
      gap-3
      rounded-full
      bg-white
      px-8
      py-4
      font-bold
      text-blue-700
      shadow-lg
      transition
      hover:scale-105
     cursor-pointer
    "
            >
              Request Free Quote
              <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
