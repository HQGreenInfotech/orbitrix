import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Program from "../components/Program";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-32">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-32">
        <About />
      </section>

      <section id="services" className="scroll-mt-32">
        <Services />
      </section>

      <section id="program" className="scroll-mt-32">
        <Program />
      </section>

      <section id="faq" className="scroll-mt-32">
        <FAQ />
      </section>

      <section id="contact" className="scroll-mt-32">
        <Contact />
      </section>
    </>
  );
}

export default Home;