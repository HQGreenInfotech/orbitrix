import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundEffects from "./BackgroundEffects";

function Hero() {
  return (
    <section
      id="home"
      className="
     relative
        overflow-hidden
        min-h-screen
        flex
        items-center
      "
    >
         <BackgroundEffects />

      {/* Content */}
      <div
        className="
          relative
    z-10
    max-w-[1400px]
    mx-auto
    min-h-screen
    pt-36
    pb-20
    px-6
    lg:px-8
    grid
    lg:grid-cols-[1.1fr_.9fr]
    items-center
    gap-24
        "
      >
        {/* Left Side */}
        <HeroContent />

        {/* Right Side */}
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;