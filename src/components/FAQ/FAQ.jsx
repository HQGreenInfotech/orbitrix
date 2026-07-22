import { Container, SectionTitle } from "../Common";

import FAQLeft from "./FAQLeft";
import FAQRight from "./FAQRight";

function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"></div>

      <Container>
        {/* Section Title */}
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Everything You Need To Know"
          subtitle="Find answers to the most common questions about Orbitix Technology, our services, development process, pricing, and educational programs."
          center
        />

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-12 mt-20">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <FAQLeft />
          </div>

          {/* Right Side */}
          <div className="lg:col-span-3">
            <FAQRight />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;