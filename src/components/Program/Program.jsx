import ProgramHeader from "./ProgramHeader";
import ProgramTimeline from "./ProgramTimeline";
import PricingSection from "./PricingSection";

function Program() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <ProgramHeader />

        {/* Timeline */}
        <ProgramTimeline />

        {/* Pricing */}
        <PricingSection />

      </div>
    </section>
  );
}

export default Program;