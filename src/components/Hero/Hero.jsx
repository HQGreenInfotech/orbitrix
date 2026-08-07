// import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#081B4B]">
      {/* <BackgroundEffects /> */}

      <div
        className="
        relative
        z-10
        max-w-[1400px]
        mx-auto

        min-h-screen

        pt-40
        pb-20

        px-6
        lg:px-10

        grid
        lg:grid-cols-2
        gap-20

        items-center
      "
      >
        <HeroContent />

        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;