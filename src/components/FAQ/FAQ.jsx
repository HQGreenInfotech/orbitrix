import { Container, SectionTitle } from "../Common";
import FAQLeft from "./FAQLeft";
import FAQRight from "./FAQRight";

function FAQ() {
  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#081B4B]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      
      <div className="absolute inset-0 bg-[#081B4B]" />

     
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

    
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#081B4B]/95
          via-[#102B72]/90
          to-[#081B4B]/95
        "
      />

     
      <div
        className="
          pointer-events-none
          absolute
          -left-64
          top-20
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-500/15
          blur-[180px]
        "
      />

  
      <div
        className="
          pointer-events-none
          absolute
          -right-56
          bottom-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-blue-500/15
          blur-[180px]
        "
      />

    
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[300px]
          w-[700px]
          -translate-x-1/2
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

       
        <div
          className="
            mt-16
            grid
            gap-10
            lg:mt-20
            lg:grid-cols-5
            lg:gap-12
          "
        >
          
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