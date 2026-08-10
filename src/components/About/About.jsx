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
        sm:py-28
        lg:py-32
      "
    >
    
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20

          h-[400px]
          w-[400px]

          rounded-full

          bg-cyan-400/[0.035]

          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[35%]

          h-[450px]
          w-[450px]

          rounded-full

          bg-blue-500/[0.04]

          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/3

          h-[250px]
          w-[350px]

          rounded-full

          bg-cyan-400/[0.025]

          blur-[120px]
        "
      />

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
        "
      >
      
        <div
          className="
            grid
            items-center

            gap-10

            lg:grid-cols-2
            lg:gap-12
            xl:gap-16
          "
        >
     

          <div className="relative min-w-0">
            <AboutContent />
          </div>

     

          <div className="relative min-w-0">
            <AboutImage />
          </div>
        </div>

        
        <div
          className="
            mt-16
            grid

            gap-5

            sm:mt-20
            sm:grid-cols-2

            lg:mt-24
            lg:grid-cols-4
            lg:gap-6
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

export default About;