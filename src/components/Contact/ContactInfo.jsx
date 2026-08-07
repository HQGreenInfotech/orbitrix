import { motion } from "framer-motion";
import { contactInfo } from "./contactData";
import SocialLinks from "./SocialLinks";

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        lg:p-10
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative z-10">
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
            uppercase
            tracking-wider
            text-cyan-400
          "
        >
          Contact Us
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-4xl lg:text-5xl font-black leading-tight text-white">
          Let's Build
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Something Amazing
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 leading-8 text-slate-300">
          Whether you're looking for website development,
          software solutions, AI integration, robotics,
          or educational programs, we're here to help you
          transform your ideas into reality.
        </p>

        {/* Contact Cards */}
        <div className="mt-10 space-y-5">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-white/10
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    text-xl
                    text-white
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    {item.title}
                  </h4>

                  <div className="mt-1 space-y-1">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          block
                          text-slate-300
                          transition-colors
                          hover:text-cyan-400
                        "
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-300">
                        {item.value}
                      </p>
                    )}

                    {item.value2 &&
                      (item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            block
                            text-slate-300
                            transition-colors
                            hover:text-cyan-400
                          "
                        >
                          {item.value2}
                        </a>
                      ) : (
                        <p className="text-slate-300">
                          {item.value2}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="mt-10">
          <SocialLinks />
        </div>
      </div>
    </motion.div>
  );
}

export default ContactInfo;