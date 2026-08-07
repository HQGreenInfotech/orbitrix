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
        py-32
      "
    >
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
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