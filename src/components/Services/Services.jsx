import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";
import ServiceBackground from "./ServiceBackground";
import WebsiteFeatures from "./WebsiteFeatures";
import { services } from "./servicesData";

function Services() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#061B3A]
      "
    >
      {/* Background */}
      <ServiceBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-6
              py-2
              text-sm
              font-semibold
              text-cyan-400
            "
          >
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-black leading-tight text-white">
            Technology That

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Powers Innovation
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            From websites to AI, robotics, education,
            software development and digital marketing,
            Orbitix Technologies delivers complete
            digital transformation under one roof.
          </p>
        </motion.div>

        {/* Service Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Website Features */}

        <WebsiteFeatures />

      </div>
    </section>
  );
}

export default Services;