import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutCard from "./AboutCard";
import { features } from "./aboutData";

function About() {
  return (
    <section
      className="
      relative
      overflow-hidden
      py-28
      "
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-[#081B4B]" />

      {/* Background Image */}

      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: "url('/pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081B4B]/95 via-[#102B72]/90 to-[#081B4B]/95" />

      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <AboutContent />

          <AboutImage />

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          {features.map((feature,index)=>(

            <AboutCard
            key={feature.id}
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