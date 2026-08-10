import ProgramHeader from "./ProgramHeader";
import ProgramTimeline from "./ProgramTimeline";
import PricingSection from "./PricingSection";

function Program() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-20 " />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081B4B]/95 via-[#102B72]/90 to-[#081B4B]/95" />

      {/* Glow Effects */}
      <div className="absolute -left-60 top-32 w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-[180px]" />

      <div className="absolute -right-52 top-20 w-[500px] h-[500px] rounded-full bg-violet-500/15 blur-[180px]" />

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[650px] h-[250px] rounded-full bg-cyan-500/10 blur-[170px]" />

      {/* Content */}
      <div className="container relative mx-auto px-6">
        <ProgramHeader />

        <div className="mt-24">
          <ProgramTimeline />
        </div>

        <div className="mt-28">
          <PricingSection />
        </div>
      </div>
    </section>
  );
}

export default Program;