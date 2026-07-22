import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundEffects from "./BackgroundEffects";

function Hero() {
  return (
    <section id="home" className="min-h-screen pt-36">
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto min-h-screen px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-20">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
}

export default Hero;