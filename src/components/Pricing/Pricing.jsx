import { pricingPlans } from "./pricingData";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase">
            Pricing
          </p>

          <h2 className="text-5xl font-black">
            Branding Packages
          </h2>

          <p className="mt-5 text-gray-500">
            Affordable branding solutions for startups,
            businesses and creators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;