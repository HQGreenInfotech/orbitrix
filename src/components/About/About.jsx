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
        bg-[#061B3A]
        py-28
      "
    >
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AboutContent />
          <AboutImage />
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
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