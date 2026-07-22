import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Pricing from "../components/Pricing";
import WhyChoose from "../components/WhyChooseUs/WhyChoose";
// import Roadmap from "../components/Roadmap";
import EnrollCTA from "../components/EnrollCTA/EnrollCTA";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/FAQ";
import Program from "../components/Program";

function Home() {
  return (
    <>
      <Hero />

      <About /> 

      <Services />

      <Pricing />

      <Program />

      <WhyChoose />

      {/* <Roadmap /> */}

      <FAQ />

      <EnrollCTA />


      <Contact />

     

      
    </>
  );
}

export default Home;