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
      className="relative
  overflow-hidden
  py-40
bg-[radial-gradient(circle_at_top_left,#1d4ed833_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed22_0%,transparent_40%),linear-gradient(180deg,#0B1023_0%,#121D3A_50%,#111827_100%)]"
    >
      {/* Left Glow */}
      <div
        className="
  absolute
  -left-60
  top-24
  w-[600px]
  h-[600px]
  rounded-full
  bg-cyan-500/15
  blur-[180px]
  "
      />

      {/* Right Glow */}
      <div
        className="
  absolute
  -right-52
  bottom-0
  w-[500px]
  h-[500px]
  rounded-full
  bg-violet-600/20
  blur-[180px]
  "
      />

      {/* Small Center Glow */}
      <div
        className="
  absolute
right-0
top-1/2
-translate-y-1/2
w-[500px]
h-[500px]
rounded-full
bg-cyan-500/10
blur-[180px]
  "
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-[3px] rounded-full bg-cyan-400" />

              <p className="uppercase tracking-[.35em] text-cyan-300 text-sm">
                ABOUT ORBITIX
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-2px] text-white max-w-[650px]">
  Empowering Modern
  <br />

  Businesses through

  <br />

  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
    Technology,
    Innovation &
    Practical Learning
  </span>
</h2>
            </div>

            <p className="mt-10 text-lg leading-9 text-slate-300 max-w-[560px]">
              Orbitix Technology is a technology-driven company dedicated to
              delivering innovative digital solutions and industry-focused
              learning experiences. We help startups, businesses, educational
              institutions and aspiring professionals transform ideas into
              reality through website development, software engineering,
              artificial intelligence, robotics, embedded systems, digital
              marketing and practical technical training.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-300 max-w-[560px]">
              Our mission is to bridge the gap between education and industry by
              combining creativity, innovation and real-world project
              experience, enabling individuals and organizations to grow with
              confidence in the digital era.
            </p>

            <div
              className="mt-16
flex
flex-wrap
gap-12
border-t
border-white/10
pt-10"
            >
              <div>
                <h3 className="text-4xl font-black text-white">2025</h3>

                <p className="mt-2 text-slate-400 font-medium">Founded</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-white">100+</h3>

                <p className="mt-2 text-slate-400 font-medium">Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-white">500+</h3>

                <p className="mt-2 text-slate-400 font-medium">Students</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-white">50+</h3>

                <p className="mt-2 text-slate-300 font-medium">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
           className="space-y-6 max-w-[500px] ml-auto"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={`
group
flex
items-start
gap-6

rounded-[28px]

p-8

bg-white/[0.06]

backdrop-blur-2xl

border
border-white/10

shadow-[0_20px_80px_rgba(0,0,0,.35)]

transition-all
duration-500

hover:bg-white/[0.08]
hover:border-cyan-400/30
hover:-translate-y-2

${index === 1 ? "lg:ml-12" : ""}
`}
                >
                  <div
                    className="
                      
w-16
h-16
min-w-16
rounded-2xl
                     
                      bg-gradient-to-br
                      from-blue-600
                      to-cyan-500
                      text-white
                      flex
                      items-center
                      justify-center
                      text-xl lg:text-2xl
                      transition-all
                      duration-500
                      group-hover:rotate-6
                      group-hover:scale-110
                    "
                  >
                    <Icon />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-slate-300 leading-8">{card.desc}</p>
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
