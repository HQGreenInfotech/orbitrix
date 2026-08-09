import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden

        /* Space for fixed navbar */
        pt-32
        sm:pt-36
        lg:pt-40
      "
    >
    

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[25%]

          h-[420px]
          w-[420px]

          rounded-full
          bg-cyan-400/[0.07]

          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[30%]

          h-[500px]
          w-[500px]

          rounded-full
          bg-blue-600/[0.10]

          blur-[140px]
        "
      />

    

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1400px]

          px-5
          pb-20

          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            w-full

            items-center

            gap-12

            lg:grid-cols-[1fr_0.9fr]
            lg:gap-16
            xl:gap-20
          "
        >

        

          <div
            className="
              group
              relative

              overflow-hidden

              rounded-[32px]

              border
              border-white/[0.08]

              bg-white/[0.025]

              p-6
              sm:p-8
              lg:p-10

              backdrop-blur-xl

              shadow-[0_25px_80px_rgba(0,0,0,0.18)]
            "
          >
        
            <div
              className="
                pointer-events-none
                absolute
                left-6
                right-6
                top-0

                h-px

                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
              "
            />

         
            <div
              className="
                pointer-events-none
                absolute

                -left-20
                top-1/2

                h-40
                w-40

                -translate-y-1/2

                rounded-full

                bg-cyan-400/[0.06]

                blur-3xl

                transition-all
                duration-700

                group-hover:bg-cyan-400/[0.10]
              "
            />

            <div className="relative z-10">
              <HeroContent />
            </div>
          </div>

         

          <div
            className="
              group
              relative

              flex
              min-h-[380px]

              items-center
              justify-center

              overflow-hidden

              rounded-[36px]

              border
              border-white/[0.08]

              bg-white/[0.02]

              p-6

              backdrop-blur-xl

              shadow-[0_30px_100px_rgba(0,0,0,0.20)]

              sm:min-h-[460px]
              lg:min-h-[540px]
            "
          >
          
            <div
              className="
                pointer-events-none
                absolute
                left-8
                right-8
                top-0

                h-px

                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
              "
            />

        
            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-1/2

                h-[2px]
                w-[55%]

                -translate-x-1/2

                bg-gradient-to-r
                from-transparent
                via-cyan-400/60
                to-transparent

                blur-[1px]
              "
            />

       
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                h-[280px]
                w-[280px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-cyan-400/[0.07]

                blur-[90px]

                transition-all
                duration-700

                group-hover:scale-125
                group-hover:bg-cyan-400/[0.11]
              "
            />

            <div className="relative z-10 w-full">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0

          h-32

          bg-gradient-to-t
          from-[#081B4B]
          to-transparent
        "
      />
    </section>
  );
}

export default Hero;