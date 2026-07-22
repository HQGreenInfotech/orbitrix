import { motion } from "framer-motion";
import { FolderKanban, Users } from "lucide-react";

function WhyImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      {/* Background Glow */}

      <div className="absolute -left-10 -top-10 w-60 h-60 bg-blue-400/20 blur-[100px] rounded-full"></div>

      {/* Image */}

      <motion.img
        src="/team.png"
        alt="Orbitix Technology Team"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          w-full
          max-w-xl
          h-[600px]
          object-cover
          rounded-3xl
          shadow-2xl
          hover:scale-[1.02]
          transition-all
          duration-500
        "
      />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      {/* Projects Card */}

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="
          absolute
          bottom-8
          left-8
          bg-white/90
          backdrop-blur-xl
          border
          border-white/40
          rounded-3xl
          shadow-2xl
          px-6
          py-5
          flex
          items-center
          gap-4
        "
      >
        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
          <FolderKanban size={28} />
        </div>

        <div>
          <h2 className="text-3xl font-black text-slate-900">
            100+
          </h2>

          <p className="text-slate-600 font-medium">
            Projects Delivered
          </p>
        </div>
      </motion.div>

      {/* Clients Card */}

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="
          absolute
          top-8
          right-8
          bg-white/90
          backdrop-blur-xl
          border
          border-white/40
          rounded-3xl
          shadow-2xl
          px-6
          py-5
          flex
          items-center
          gap-4
        "
      >
        <div className="w-14 h-14 rounded-2xl bg-cyan-600 flex items-center justify-center text-white">
          <Users size={28} />
        </div>

        <div>
          <h2 className="text-3xl font-black text-slate-900">
            50+
          </h2>

          <p className="text-slate-600 font-medium">
            Happy Clients
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WhyImage;