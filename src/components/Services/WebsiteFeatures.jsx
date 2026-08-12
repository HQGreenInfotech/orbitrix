import { motion } from "framer-motion";
import { websiteFeatures } from "./servicesData";

function WebsiteFeatures() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[36px]

        border
        border-white/[0.09]

        bg-white/[0.025]

        p-7
        sm:p-10
        lg:p-14

        backdrop-blur-2xl

        shadow-[0_30px_100px_rgba(0,0,0,0.25)]
      "
    >
    
      <div
        className="
          pointer-events-none
          absolute
          left-10
          right-10
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
        "
      />

      <div className="relative z-10">
   
        <div className="max-w-2xl">
          <span
            className="
              text-xs
              font-semibold
              tracking-[0.2em]
              text-cyan-400
            "
          >
            WEBSITE PACKAGE
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              leading-tight
              text-white

              sm:text-4xl
              lg:text-5xl
            "
          >
            Everything you need
            <span className="text-cyan-400">
              {" "}to launch.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              leading-7
              text-slate-300
            "
          >
            Every website includes the essential features
            required for a professional, secure and
            mobile-friendly digital presence.
          </p>
        </div>

        <div
          className="
            mt-12

            grid
            grid-cols-1
            gap-3

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
        {websiteFeatures.map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={item.id}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -3,
      }}
      className="
        group
        flex
        cursor-pointer
        items-center
        gap-4

        rounded-xl

        border
        border-white/[0.07]

        bg-white/[0.025]

        px-4
        py-3

        transition-all
        duration-300

        hover:border-cyan-400/40
        hover:bg-cyan-400/[0.06]
        hover:shadow-[0_8px_25px_rgba(34,211,238,0.08)]
      "
    >
   
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center

          rounded-lg

          border
          border-white/[0.08]

          bg-white/[0.04]

          transition-all
          duration-300

          group-hover:border-cyan-400/30
          group-hover:bg-cyan-400/10
        "
      >
        <Icon
          className="
            text-base
            text-cyan-400

            transition-transform
            duration-300

            group-hover:scale-110
          "
        />
      </div>

     
      <span
        className="
          text-sm
          font-medium
          leading-5
          text-slate-300

          transition-colors
          duration-300

          group-hover:text-white
        "
      >
        {item.title}
      </span>

      <span
        className="
          ml-auto

          text-slate-600

          transition-all
          duration-300

          group-hover:translate-x-1
          group-hover:text-cyan-400
        "
      >
        →
      </span>
    </motion.div>
  );
})}
        </div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2

          h-px
          w-[35%]

          -translate-x-1/2

          bg-cyan-400/30

          blur-sm
        "
      />
    </section>
  );
}

export default WebsiteFeatures;