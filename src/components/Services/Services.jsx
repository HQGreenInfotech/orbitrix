import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";
import ServiceBackground from "./ServiceBackground";
import WebsiteFeatures from "./WebsiteFeatures";
import ServicesCTA from "./ServicesCTA";
import Pricing from "../Pricing/index"

import { services } from "./servicesData";

function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#071838]
        py-24
        sm:py-28
        lg:py-32
      "
    >
     
      <ServiceBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
       

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="max-w-3xl"
        >
      
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-400/20
              bg-white/[0.035]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_10px_rgba(34,211,238,0.8)]
              "
            />

            <span
              className="
                text-xs
                font-semibold
                tracking-[0.2em]
                text-cyan-300
              "
            >
              OUR SERVICES
            </span>
          </div>

          <h2
            className="
              mt-7
              max-w-3xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Digital solutions

            <span className="block text-cyan-400">
              built for growth.
            </span>
          </h2>

  
          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-slate-300
              lg:text-lg
            "
          >
            From websites and software to AI, robotics,
            education and digital marketing, Orbitix
            Technologies builds practical digital solutions
            for modern businesses.
          </p>
        </motion.div>


        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>


        <div className="mt-24 lg:mt-32">
          <WebsiteFeatures />
        </div>

        

        <div className="mt-24 lg:mt-32">
          <Pricing />
        </div>


        <ServicesCTA />
      </div>
    </section>
  );
}

export default Services;