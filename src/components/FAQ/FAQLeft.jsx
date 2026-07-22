import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function FAQLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        sticky
        top-28
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-gradient-to-br
          from-blue-600
          via-cyan-500
          to-indigo-700
          p-8
          text-white
          shadow-2xl
        "
      >
        {/* Background Blur */}
        <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-20 -left-16 w-56 h-56 bg-cyan-300/20 rounded-full blur-3xl"></div>

        {/* Small Badge */}
        <span
          className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-white/20
            text-sm
            font-semibold
            backdrop-blur-md
            mb-5
          "
        >
          Need Help?
        </span>

        {/* Heading */}
        <h2
          className="
            text-3xl
            font-black
            leading-tight
            mb-5
          "
        >
          Still Have Questions?
        </h2>

        <p
          className="
            text-blue-100
            leading-8
            mb-8
          "
        >
          Our experts are always ready to help you with website development,
          software solutions, AI projects, robotics, digital marketing, and
          coding programs.
        </p>

        {/* Contact List */}
        <div className="space-y-5">
          {/* Phone */}
          <div
            className="
              flex
              items-center
              gap-4
              p-4
              rounded-2xl
              bg-white/10
              backdrop-blur-lg
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-white/20
                flex
                items-center
                justify-center
                text-xl
              "
            >
              <FaPhoneAlt />
            </div>

            <div>
              <h4 className="font-semibold">Phone</h4>

              <p className="text-blue-100 text-sm">+91 XXXXX XXXXX</p>
            </div>
          </div>

          {/* Email */}
          <div
            className="
              flex
              items-center
              gap-4
              p-4
              rounded-2xl
              bg-white/10
              backdrop-blur-lg
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-white/20
                flex
                items-center
                justify-center
                text-xl
              "
            >
              <FaEnvelope />
            </div>

            <div>
              <h4 className="font-semibold">Email</h4>

              <p className="text-blue-100 text-sm">
                orbitixtechnology@gmail.com
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div
            className="
              flex
              items-center
              gap-4
              p-4
              rounded-2xl
              bg-white/10
              backdrop-blur-lg
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-white/20
                flex
                items-center
                justify-center
                text-xl
              "
            >
              <FaWhatsapp />
            </div>

            <div>
              <h4 className="font-semibold">WhatsApp</h4>

              <p className="text-blue-100 text-sm">Chat With Us Anytime</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="
    mt-10
    inline-flex
    items-center
    gap-3
    bg-white
    text-blue-700
    px-7
    py-4
    rounded-2xl
    font-bold
    hover:scale-105
    transition
    duration-300
    shadow-xl
  "
        >
          Contact Us
          <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
}

export default FAQLeft;
