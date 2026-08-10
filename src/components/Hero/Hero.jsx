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
        pt-28
        sm:pt-32
        lg:pt-36
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[25%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-400/[0.045]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[20%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500/[0.04]
          blur-[140px]
        "
      />

      {/* Main Container */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
          pb-20
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-8
            lg:grid-cols-2
            lg:gap-10
            xl:gap-12
          "
        >
          {/* LEFT PANEL */}

          <div
            className="
              group
              relative
              w-full
              overflow-hidden

              rounded-[32px]

              border
              border-white/[0.09]

              bg-white/[0.025]

              p-6
              sm:p-8
              lg:p-9
              xl:p-10

              backdrop-blur-2xl

              shadow-[0_30px_90px_rgba(0,0,0,0.25)]

              transition-all
              duration-500

              hover:border-cyan-300/[0.15]
            "
          >
            {/* Top reflection */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-8
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
              "
            />

            {/* Internal glow */}

            <div
              className="
                pointer-events-none
                absolute
                -left-28
                top-1/3

                h-64
                w-64

                rounded-full

                bg-cyan-400/[0.035]

                blur-[100px]

                transition-transform
                duration-700

                group-hover:scale-125
              "
            />

            <div className="relative z-10">
              <HeroContent />
            </div>
          </div>

          {/* RIGHT PANEL */}

          <div
            className="
              group
              relative
              flex
              w-full
              min-w-0

              items-center
              justify-center

              overflow-hidden

              rounded-[36px]

              border
              border-white/[0.09]

              bg-white/[0.018]

              p-4
              sm:p-5
              lg:p-6

              backdrop-blur-2xl

              shadow-[0_35px_100px_rgba(0,0,0,0.28)]

              transition-all
              duration-500

              hover:border-cyan-300/[0.14]
            "
          >
            {/* Top reflection */}

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
                via-white/25
                to-transparent
              "
            />

            {/* Center glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                h-[260px]
                w-[260px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-cyan-400/[0.035]

                blur-[100px]

                transition-all
                duration-700

                group-hover:scale-125
              "
            />

            <div className="relative z-10 w-full min-w-0">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#071838]
          to-transparent
        "
      />
    </section>
  );
}

export default Hero;