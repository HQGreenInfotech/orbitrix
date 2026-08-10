import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";
import ServiceBackground from "./ServiceBackground";
import WebsiteFeatures from "./WebsiteFeatures";
import { services } from "./servicesData";

function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#071943]
        py-28
        lg:py-36
      "
    >
      {/* Background */}
      <ServiceBackground />

      {/* Content */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
        "
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Label */}
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/[0.06]
              px-6
              py-2
              text-sm
              font-semibold
              tracking-[0.18em]
              text-cyan-400
              backdrop-blur-sm
            "
          >
            OUR SERVICES
          </span>

          {/* Heading */}
          <h2
            className="
              mt-7
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
            "
          >
            Technology That
            <span
              className="
                block
                text-cyan-400
              "
            >
              Powers Innovation
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-7
              text-base
              lg:text-lg
              leading-8
              text-slate-300
              max-w-2xl
              mx-auto
            "
          >
            From websites to AI, robotics, education,
            software development and digital marketing,
            Orbitix Technologies delivers complete
            digital transformation under one roof.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </motion.div>

        {/* Website Features */}
        <div className="mt-24">
          <WebsiteFeatures />
        </div>
      </div>
    </section>
  );
}

export default Services;