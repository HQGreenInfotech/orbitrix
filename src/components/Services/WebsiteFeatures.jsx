import { motion } from "framer-motion";
import { websiteFeatures } from "./servicesData";

function WebsiteFeatures() {
  return (
    <section className="mt-28">
      <div className="text-center mb-16">
        <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold uppercase">
          Website Package Includes
        </span>

        <h2 className="mt-5 text-4xl lg:text-5xl font-black">
          Everything Included
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
          Every website comes with premium features designed to help your
          business establish a professional online presence.
        </p>
      </div>

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
              className="
                group
                bg-white
                rounded-3xl
                border
                border-slate-200
                shadow-md
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-2xl
              "
            >
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-2xl
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:bg-blue-600
                "
              >
                <Icon className="text-3xl text-blue-600 group-hover:text-white" />
              </div>

              <h3 className="mt-5 font-bold text-lg leading-7">
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