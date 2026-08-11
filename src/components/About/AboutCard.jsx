import { motion } from "framer-motion";

function AboutCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 90,
        damping: 14,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        p-8
        transition-all
        duration-500
        hover:bg-white/10
        hover:border-cyan-400/40
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]
      "
    >
     
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          bg-gradient-to-br
          from-cyan-500/10
          via-transparent
          to-blue-500/10
        "
      />

 
      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.15,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className="
          relative
          z-10
          w-16
          h-16
          rounded-2xl
          bg-cyan-500/15
          flex
          items-center
          justify-center
          mb-6
        "
      >
        <Icon className="text-3xl text-cyan-400" />
      </motion.div>

  
      <motion.h3
        whileHover={{ x: 5 }}
        className="
          relative
          z-10
          text-2xl
          font-bold
          text-white
          mb-3
        "
      >
        {feature.title}
      </motion.h3>

   
      <p
        className="
          relative
          z-10
          text-slate-300
          leading-8
        "
      >
        {feature.description}
      </p>

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
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