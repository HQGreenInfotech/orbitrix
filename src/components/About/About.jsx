import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutCard from "./AboutCard";
import { features } from "./aboutData";

function About() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <AboutContent />

          <AboutImage />

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          {features.map((feature, index) => (
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