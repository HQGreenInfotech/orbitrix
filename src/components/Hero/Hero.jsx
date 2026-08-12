import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#071838]
        pt-28
        pb-16
        sm:pt-32
        lg:pt-36
      "
    >
    

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
      

        <div
          className="
            absolute
            -left-40
            top-[35%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-400/[0.055]
            blur-[140px]
          "
        />

       

        <div
          className="
            absolute
            -right-40
            top-[40%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/[0.045]
            blur-[140px]
          "
        />

       

        <div
          className="
            absolute
            left-1/2
            top-[50%]
            h-[400px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.018]
            blur-[120px]
          "
        />
      </div>

     

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1200px]
          px-5
          sm:px-6
          lg:px-8
        "
      >
       

        <div className="mx-auto max-w-5xl text-center">
          <HeroContent />
        </div>

     

        <div
          className="
            mx-auto
            mt-14
            w-full
            max-w-[720px]
            sm:mt-16
            lg:mt-20
          "
        >
          <HeroImage />
        </div>

       

        <div
          className="
            mx-auto
            mt-14
            max-w-5xl
            border-t
            border-white/[0.08]
            pt-10
            sm:mt-16
            sm:pt-12
          "
        >
          <HeroStats />
        </div>
      </div>

    

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-28
          bg-gradient-to-t
          from-[#071838]
          to-transparent
        "
      />
    </section>
  );
}

export default Hero;