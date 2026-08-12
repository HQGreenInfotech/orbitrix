import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function FAQLeft() {
  const contactItems = [
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
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{
        once: true,
      }}
      className="
        relative
        lg:sticky
        lg:top-28
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        lg:p-10
      "
    >
     
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-60
          w-60
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-20
          h-72
          w-72
          rounded-full
          bg-blue-600/10
          blur-[140px]
        "
      />

      <div className="relative z-10">
      
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

       
        <h2
          className="
            mt-6
            text-3xl
            font-black
            leading-tight
            text-white
            sm:text-4xl
          "
        >
          Still Have

          <span
            className="
              block
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            Questions?
          </span>
        </h2>

      
        <p
          className="
            mt-6
            leading-8
            text-slate-300
          "
        >
          Our experts are ready to help you with website
          development, software solutions, AI projects,
          robotics, digital marketing, and coding programs.
        </p>

       
        <div className="mt-10 space-y-4">
          {contactItems.map((item) => {
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
                  hover:bg-white/[0.08]
                "
              >
                
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    text-cyan-400
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <Icon />
                </div>

              
                <div className="min-w-0">
                  <h4 className="font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-1 break-words text-sm text-slate-400">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      
        <Link
          to="/contact"
          className="
            group
            mt-8
            inline-flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-cyan-400/25
            bg-cyan-400/[0.07]
            px-6
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:border-cyan-400/50
            hover:bg-cyan-400/[0.12]
          "
        >
          Contact Our Team

          <FaArrowRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>
    </motion.div>
  );
}

export default FAQLeft;