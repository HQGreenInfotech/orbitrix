import { motion } from "framer-motion";

function WhyCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-5
        transition-all
        duration-300
        hover:border-white/[0.15]
        hover:bg-white/[0.045]
      "
    >
  

      <div
        className="
          absolute
          left-0
          top-0
          h-px
          w-0
          bg-gradient-to-r
          from-violet-400
          to-emerald-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />

     

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/[0.08]
          bg-white/[0.04]
          text-violet-300
          transition-all
          duration-300
          group-hover:border-violet-400/20
          group-hover:bg-violet-400/[0.10]
          group-hover:text-violet-200
        "
      >
        <Icon size={20} />
      </div>

   

      <div className="mt-5">
        <h3
          className="
            text-base
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-violet-200
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-slate-500
          "
        >
          {item.description}
        </p>
      </div>

     

      <div
        className="
          mt-5
          text-xs
          font-semibold
          text-slate-600
          transition-colors
          duration-300
          group-hover:text-emerald-300
        "
      >
        Learn more →
      </div>
    </motion.div>
  );
}

export default WhyCard;