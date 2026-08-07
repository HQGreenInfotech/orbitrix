import { Container, SectionTitle } from "../Common";
import FAQLeft from "./FAQLeft";
import FAQRight from "./FAQRight";

function FAQ() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Base Background */}
      <div className="absolute inset-0 -z-20 bg-[#081B4B]" />

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

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-64
          top-20
          w-[650px]
          h-[650px]
          rounded-full
          bg-cyan-500/15
          blur-[180px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-56
          bottom-0
          w-[520px]
          h-[520px]
          rounded-full
          bg-blue-500/15
          blur-[180px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2
          w-[700px]
          h-[300px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <Container>

        <SectionTitle
          badge="Frequently Asked Questions"
          title="Everything You Need To Know"
          subtitle="Find answers to the most common questions about Orbitix Technologies, our services, development process, pricing, and educational programs."
          center
        />

        <div className="grid lg:grid-cols-5 gap-12 mt-20">

          <div className="lg:col-span-2">
            <FAQLeft />
          </div>

          <div className="lg:col-span-3">
            <FAQRight />
          </div>

        </div>

      </Container>

    </section>
  );
}

export default FAQ;