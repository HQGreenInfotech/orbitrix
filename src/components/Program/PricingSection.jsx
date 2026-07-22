import PricingCard from "./PricingCard";
import { pricing } from "./programData";

function PricingSection() {
  return (
    <div className="mt-32">

      <div className="text-center max-w-3xl mx-auto">

        <span className="text-blue-600 font-bold uppercase tracking-widest">
          Program Fee
        </span>

        <h2 className="text-5xl font-black mt-5">
          Pick the Path
          <br />
          That's Right for You
        </h2>

        <p className="mt-6 text-slate-600 leading-8">
          Flexible EMI options available.
          Learn from industry experts,
          build real projects and become
          job-ready in just three months.
        </p>

      </div>

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
  );
}

export default PricingSection;