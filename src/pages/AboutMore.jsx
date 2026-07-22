import { motion } from "framer-motion";
import {
  FaBullseye,
  FaHeart,
  FaRocket,
} from "react-icons/fa";

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
    <section className="relative overflow-hidden bg-slate-50 py-40">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />

      <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-200/30 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.35em] text-sm font-semibold text-blue-600">
              About Orbitix Technology
            </p>

            <h2 className="mt-6 text-4xl lg:text-6xl font-black leading-tight text-slate-900">
              Empowering Businesses
              <br />
              through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                {" "}
                Technology,
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Innovation
              </span>{" "}
              &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Practical Learning
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600 max-w-2xl">
              Orbitix Technology is a technology-driven company dedicated to
              delivering innovative digital solutions and industry-focused
              learning experiences. We help startups, businesses, educational
              institutions and aspiring professionals transform ideas into
              reality through website development, software engineering,
              artificial intelligence, robotics, embedded systems, digital
              marketing and practical technical training.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600 max-w-2xl">
              Our mission is to bridge the gap between education and industry by
              combining creativity, innovation and real-world project
              experience, enabling individuals and organizations to grow with
              confidence in the digital era.
            </p>

            {/* Statistics */}

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-4xl font-black text-slate-900">2025</h3>

                <p className="mt-2 text-slate-500 font-medium">
                  Founded
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-slate-900">100+</h3>

                <p className="mt-2 text-slate-500 font-medium">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-slate-900">500+</h3>

                <p className="mt-2 text-slate-500 font-medium">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-slate-900">50+</h3>

                <p className="mt-2 text-slate-500 font-medium">
                  Happy Clients
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="
                    group
                    flex
                    gap-6
                    rounded-3xl
                    bg-white
                    p-8
                    border
                    border-slate-200
                    shadow-lg
                    hover:shadow-2xl
                    hover:border-blue-200
                    transition-all
                    duration-500
                  "
                >
                  <div
                    className="
                      w-16
                      h-16
                      shrink-0
                      rounded-2xl
                      bg-gradient-to-br
                      from-blue-600
                      to-cyan-500
                      text-white
                      flex
                      items-center
                      justify-center
                      text-2xl
                      transition-all
                      duration-500
                      group-hover:rotate-6
                      group-hover:scale-110
                    "
                  >
                    <Icon />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-8">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMore;