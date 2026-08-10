import { motion } from "framer-motion";

function AboutCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative

        overflow-hidden

        rounded-[26px]

        border
        border-white/10

        bg-white/[0.035]

        p-6

        backdrop-blur-2xl

        shadow-[0_20px_60px_rgba(0,0,0,0.18)]

        transition-all
        duration-500

        hover:border-cyan-400/25
        hover:bg-white/[0.055]

        hover:shadow-[0_25px_70px_rgba(34,211,238,0.12)]
      "
    >
     

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10

          h-28
          w-28

          rounded-full

          bg-cyan-400/[0.05]

          blur-3xl

          transition-all
          duration-500

          group-hover:scale-150
        "
      />

      

      <div
        className="
          pointer-events-none
          absolute
          left-5
          right-5
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
        "
      />

    

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        className="
          relative
          z-10

          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-2xl

          border
          border-cyan-400/15

          bg-cyan-400/[0.08]

          text-cyan-400

          transition-all
          duration-300

          group-hover:bg-cyan-400/[0.14]
        "
      >
        <Icon className="text-2xl" />
      </motion.div>

   

      <h3
        className="
          relative
          z-10

          mt-5

          text-xl
          font-bold

          text-white
        "
      >
        {feature.title}
      </h3>

    

      <p
        className="
          relative
          z-10

          mt-3

          text-sm
          leading-7

          text-white/60

          transition-colors
          duration-300

          group-hover:text-white/75
        "
      >
        {feature.description}
      </p>

     

      <div
        className="
          absolute
          bottom-0
          left-0

          h-[2px]
          w-0

          bg-gradient-to-r
          from-cyan-400
          to-blue-500

          transition-all
          duration-500

          group-hover:w-full
        "
      />
    </motion.div>
  );
}

export default AboutCard;