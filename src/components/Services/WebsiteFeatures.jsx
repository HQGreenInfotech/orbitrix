import { motion } from "framer-motion";
import { websiteFeatures } from "./servicesData";

function WebsiteFeatures() {
  return (
    <section className="relative mt-32">
      {/* Heading */}
      <div className="text-center mb-16">
        <span
          className="
            inline-block
            px-6
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-400/20
            text-cyan-300
            font-semibold
          "
        >
          Website Package Includes
        </span>

        <h2 className="mt-5 text-4xl lg:text-5xl font-black text-white">
          Everything Included
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-slate-300 leading-8">
          Every website comes with premium features designed to help your
          business establish a professional online presence.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {websiteFeatures.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                group
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                p-6
                text-center
                transition-all
                duration-300
                hover:bg-white/10
                hover:border-cyan-400/30
                hover:shadow-[0_20px_60px_rgba(0,0,0,.35)]
              "
            >
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-2xl
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:bg-cyan-500
                  group-hover:scale-110
                "
              >
                <Icon className="text-3xl text-cyan-400 group-hover:text-white" />
              </div>

              <h3 className="mt-5 font-bold text-lg leading-7 text-white">
                {item.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default WebsiteFeatures;