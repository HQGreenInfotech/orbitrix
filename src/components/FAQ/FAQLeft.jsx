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
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
    >
      {/* Glow Effects */}

      <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[140px]" />

      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-5
          py-2
          text-sm
          font-semibold
          text-cyan-400
        "
      >
        Need Help?
      </span>

      {/* Heading */}

      <h2 className="mt-6 text-4xl font-black leading-tight text-white">
        Still Have
        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Questions?
        </span>
      </h2>

      {/* Description */}

      <p className="mt-6 text-slate-300 leading-8">
        Our experts are ready to help you with website development,
        software solutions, AI projects, robotics, digital marketing,
        and coding programs.
      </p>

      {/* Contact Cards */}

      <div className="mt-10 space-y-5">
        {[
          {
            icon: FaPhoneAlt,
            title: "Phone",
            value: "+91 8078611491",
          },
          {
            icon: FaEnvelope,
            title: "Email",
            value: "manager.orbitixtechnologies@gmail.com",
          },
          {
            icon: FaWhatsapp,
            title: "WhatsApp",
            value: "Chat With Us Anytime",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-white/10
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <Icon />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-300">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}

      <div className="relative z-20 mt-10">
  <Link
    to="/contact"
    className="
      group
      inline-flex
      items-center
      gap-3
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      px-7
      py-4
      font-bold
      text-white
      cursor-pointer
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_15px_40px_rgba(34,211,238,.35)]
      active:scale-95
      relative
      z-20
    "
  >
    Contact Us

    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
</div>

      
    </motion.div>
  );
}

export default FAQLeft;