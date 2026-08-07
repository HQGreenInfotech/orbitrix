import { motion } from "framer-motion";
import WhyImage from "./WhyImage";
import WhyCard from "./WhyCard";
import { whyChoose } from "./whyData";

function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#081B4B]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081B4B]/95 via-[#102B72]/90 to-[#081B4B]/95" />

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-64
          top-20
          w-[650px]
          h-[650px]
          rounded-full
          bg-cyan-500/15
          blur-[180px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-56
          bottom-10
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/15
          blur-[180px]
        "
      />

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <span
            className="
              inline-block
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-6
              py-3
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-cyan-400
            "
          >
            Why Orbitix
          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-white">
            Why Choose

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Orbitix Technologies
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            We combine innovation, creativity and modern technologies to
            deliver fast, secure and scalable digital solutions that help
            startups and businesses grow in today's competitive world.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-20 lg:grid-cols-2">

          <WhyImage />

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