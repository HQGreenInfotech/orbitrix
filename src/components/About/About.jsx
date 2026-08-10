import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutCard from "./AboutCard";
import { features } from "./aboutData";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
       
      "
    >
      {/* Subtle liquid background - top left */}
      <div
        className="
          absolute
          -top-32
          -left-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-cyan-400/[0.04]
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Subtle liquid background - right */}
      <div
        className="
          absolute
          top-[35%]
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Small liquid highlight */}
      <div
        className="
          absolute
          bottom-0
          left-1/3
          w-[300px]
          h-[180px]
          rounded-full
          bg-cyan-400/[0.025]
          blur-[90px]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section */}
        <div
          className="
            relative
            grid
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* Very subtle liquid surface behind content */}
          <div
            className="
              absolute
              -inset-6
              rounded-[3rem]
              bg-white/[0.012]
              border
              border-white/[0.04]
              backdrop-blur-[2px]
              pointer-events-none
            "
          />

          <div className="relative z-10">
            <AboutContent />
          </div>

          <div className="relative z-10">
            <AboutImage />
          </div>
        </div>

        {/* Feature Cards */}
        <div
          className="
            relative
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
            lg:gap-8
            mt-20
            lg:mt-24
          "
        >
          {features.map((feature, index) => (
            <AboutCard
              key={index}
              feature={feature}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;