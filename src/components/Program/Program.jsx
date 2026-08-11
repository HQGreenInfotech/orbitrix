import ProgramHeader from "./ProgramHeader";
import ProgramTimeline from "./ProgramTimeline";
import PricingSection from "./PricingSection";
import ProgramCTA from "./ProgramCTA";

function Program() {
  return (
    <section
      id="program"
      className="
        relative
        overflow-hidden
        bg-[#071838]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Subtle background light */}
      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/[0.035]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          top-[45%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/[0.035]
          blur-[150px]
        "
      />

      {/* Very subtle grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <ProgramHeader />

        <div className="mt-20 lg:mt-28">
          <ProgramTimeline />
        </div>

        <div className="mt-24 lg:mt-32">
          <PricingSection />
        </div>

        <ProgramCTA />
      </div>
    </section>
  );
}

export default Program;