import { motion } from "framer-motion";
import { FaBullseye, FaHeart, FaRocket } from "react-icons/fa";

const cards = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    desc: "To empower businesses, startups, educational institutions and aspiring professionals with innovative digital solutions and practical technology education that creates real-world impact.",
  },
  {
    icon: FaHeart,
    title: "Our Approach",
    desc: "We believe in learning by building. Every project and training program is designed around modern technologies, hands-on experience and industry best practices.",
  },
  {
    icon: FaRocket,
    title: "Why Orbitix",
    desc: "From website development and mobile applications to AI, robotics, embedded systems and digital marketing, we provide complete technology solutions under one roof.",
  },
];

function AboutMore() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-38
        lg:py-32
        bg-[#081B4B]
      "
    >
      {/* Subtle liquid light */}
      <div
        className="
          absolute
          -left-40
          top-20
          w-[420px]
          h-[420px]
          rounded-full
          bg-cyan-400/[0.035]
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/[0.04]
          blur-[130px]
          pointer-events-none
        "
      />

      {/* Small center light */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[300px]
          h-[300px]
          rounded-full
          bg-cyan-400/[0.02]
          blur-[100px]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-4">
              <span className="h-8 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />

              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-cyan-300
                  text-sm
                  font-semibold
                "
              >
                About Orbitix
              </p>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-7
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-black
                leading-[1.05]
                tracking-[-2px]
                text-white
                max-w-[650px]
              "
            >
              Empowering Modern{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-400
                  to-blue-600
                  bg-clip-text
                  text-transparent
                "
              >
                Businesses
              </span>{" "}
              through Technology
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                text-base
                lg:text-lg
                leading-8
                text-slate-300
                max-w-[600px]
              "
            >
              Orbitix Technology is a technology-driven company dedicated to
              delivering innovative digital solutions and industry-focused
              learning experiences. We help startups, businesses, educational
              institutions and aspiring professionals transform ideas into
              reality through website development, software engineering,
              artificial intelligence, robotics, embedded systems, digital
              marketing and practical technical training.
            </p>

            <p
              className="
                mt-5
                text-base
                lg:text-lg
                leading-8
                text-slate-400
                max-w-[600px]
              "
            >
              Our mission is to bridge the gap between education and industry
              by combining creativity, innovation and real-world project
              experience, enabling individuals and organizations to grow with
              confidence in the digital era.
            </p>

            {/* Stats */}
            <div
              className="
                mt-12
                grid
                grid-cols-2
                sm:grid-cols-4
                gap-6
                border-t
                border-white/[0.08]
                pt-8
              "
            >
              <div>
                <h3 className="text-3xl lg:text-4xl font-black text-white">
                  2025
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Founded
                </p>
              </div>

              <div>
                <h3 className="text-3xl lg:text-4xl font-black text-white">
                  100+
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl lg:text-4xl font-black text-white">
                  500+
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-3xl lg:text-4xl font-black text-white">
                  50+
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Happy Clients
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
    delay: 0.1,
  }}
  viewport={{ once: true, amount: 0.2 }}
  className="relative"
>
  {/* Soft vertical liquid line */}
  <div
    className="
      absolute
      left-0
      top-5
      bottom-5
      w-px
      bg-gradient-to-b
      from-transparent
      via-cyan-400/20
      to-transparent
    "
  />

  <div className="relative space-y-5 pl-4">
    {cards.map((card, index) => {
      const Icon = card.icon;

      return (
        <motion.div
          key={card.title}
          initial={{
            opacity: 0,
            x: 30,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2 + index * 0.15,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          whileHover={{
            x: 8,
            scale: 1.015,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          className={`
            group
            relative
            overflow-hidden
            flex
            items-start
            gap-5
            rounded-[24px]
            p-6
            lg:p-7

            ${index === 1 ? "lg:ml-8" : ""}

            bg-white/[0.035]
            border
            border-white/[0.08]
            backdrop-blur-md

            transition-all
            duration-500

            hover:bg-white/[0.055]
            hover:border-cyan-400/25
            hover:shadow-[0_15px_50px_rgba(0,0,0,0.18)]
          `}
        >
          {/* Moving liquid light */}
          <motion.div
            initial={{
              x: "-120%",
              opacity: 0,
            }}
            whileHover={{
              x: "120%",
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-0
              bottom-0
              left-0
              w-24
              pointer-events-none
              bg-gradient-to-r
              from-transparent
              via-cyan-300/[0.08]
              to-transparent
              skew-x-[-20deg]
            "
          />

          {/* Top liquid highlight */}
          <div
            className="
              absolute
              top-0
              left-10
              right-10
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-300/20
              to-transparent
            "
          />

          {/* Small floating glow */}
          <motion.div
            animate={{
              y: [0, -5, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            className="
              absolute
              -right-8
              -top-8
              w-24
              h-24
              rounded-full
              bg-cyan-400/10
              blur-2xl
              pointer-events-none
            "
          />

          {/* Icon */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
              relative
              z-10
              flex
              items-center
              justify-center
              w-14
              h-14
              min-w-14
              rounded-2xl

              bg-gradient-to-br
              from-blue-500/20
              to-cyan-400/10

              border
              border-cyan-300/10

              text-cyan-300
              text-xl

              transition-colors
              duration-300

              group-hover:border-cyan-300/30
              group-hover:text-cyan-200
            "
          >
            <Icon />
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            <h3
              className="
                text-xl
                lg:text-2xl
                font-bold
                text-white
                transition-colors
                duration-300
                group-hover:text-cyan-50
              "
            >
              {card.title}
            </h3>

            <p
              className="
                mt-2
                text-sm
                lg:text-base
                leading-7
                text-slate-400
                transition-colors
                duration-300
                group-hover:text-slate-300
              "
            >
              {card.desc}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMore;