import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";
import ServiceBackground from "./ServiceBackground";
import { services } from "./servicesData";

function Services() {
  return (
    <section
    id="services"
      className="relative
      overflow-hidden
      py-32
      bg-gradient-to-b
      from-slate-50
      to-white"
    >
      <ServiceBackground />

      <div className="relative container mx-auto px-6">

        <motion.div
          initial={{ opacity:0,y:50 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span
            className="inline-block
            px-5 py-2
            rounded-full
            bg-blue-100
            text-blue-600
            font-semibold"
          >
            OUR SERVICES
          </span>

          <h2
            className="text-5xl
            lg:text-6xl
            font-black
            mt-6"
          >
            Technology That
            <span
              className="block
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-purple-600
              bg-clip-text
              text-transparent"
            >
              Powers Innovation
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            From websites to AI, robotics, education,
            software development and digital marketing —
            Orbitix Technologies delivers complete digital
            transformation under one roof.
          </p>
        </motion.div>

        <div
          className="grid
          lg:grid-cols-3
          md:grid-cols-2
          gap-10
          mt-24"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;