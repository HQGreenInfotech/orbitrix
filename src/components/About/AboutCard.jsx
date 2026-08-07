import { motion } from "framer-motion";

function AboutCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
        group
rounded-2xl
bg-white/5
backdrop-blur-xl
border
border-white/10
p-8
transition
duration-300
hover:bg-white/10
hover:border-cyan-400/30
      "
    >
    

      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-br
         bg-cyan-500/15
          flex
          items-center
          justify-center
          mb-6
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        <Icon className="text-3xl text-cyan-400" />
      </div>

      

      <h3 className="text-2xl font-bold text-white mb-3">
        {feature.title}
      </h3>


      <p className="text-slate-300 leading-8">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default AboutCard;