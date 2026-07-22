import { motion } from "framer-motion";
import { FaArrowRight, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterTopCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        rounded-[36px]
        bg-gradient-to-r
        from-blue-700
        via-cyan-600
        to-indigo-700
        px-8
        py-16
        lg:px-20
        mb-16
        shadow-2xl
      "
    >
      {/* Decorative Circles */}

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

      <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left */}

        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-white/20
              backdrop-blur-md
              px-5
              py-2
              rounded-full
              text-white
              mb-6
            "
          >
            <FaRocket />

            <span className="text-sm font-semibold">
              Let's Build Something Amazing
            </span>
          </div>

          <h2
            className="
              text-4xl
              lg:text-5xl
              font-black
              text-white
              leading-tight
            "
          >
            Ready to Grow
            <br />
            Your Business?
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-blue-100
              leading-8
              max-w-xl
            "
          >
            From websites and mobile apps to AI, robotics,
            software development and digital marketing —
            Orbitix Technology is your trusted technology partner.
          </p>
        </div>

        {/* Right */}

        <div className="flex flex-col sm:flex-row lg:justify-end gap-5">

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              bg-white
              text-blue-700
              px-8
              py-4
              rounded-full
              font-bold
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
            "
          >
            Start Your Project

            <FaArrowRight />
          </Link>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-full
              border-2
              border-white
              text-white
              font-bold
              hover:bg-white
              hover:text-blue-700
              transition-all
              duration-300
            "
          >
            Book Free Consultation
          </Link>

        </div>

      </div>
    </motion.div>
  );
}

export default FooterTopCTA;