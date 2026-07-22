import WhyImage from "./WhyImage";
import WhyCard from "./WhyCard";
import { whyChoose } from "./whyData";

function WhyChoose() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200/30 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-cyan-200/20 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <span className="inline-block text-blue-600 font-semibold tracking-[0.25em] uppercase">
            Why Orbitix
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
            Why Choose
            <br />

            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Orbitix Technologies
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-8">
            We combine innovation, creativity and modern technologies to build
            high-performance digital products that help businesses grow.
          </p>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left */}

          <WhyImage />

          {/* Right */}

          <div className="space-y-6">

            {whyChoose.map((item, index) => (
              <WhyCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;