import { motion } from "framer-motion";
import { FolderKanban, Users } from "lucide-react";

function WhyImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex justify-center overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -left-10 -top-10 w-60 h-60 rounded-full bg-blue-500/20 blur-[100px]" />

      {/* Main Image */}
      <motion.img
        src="/team.png"
        alt="Orbitix Technology Team"
        loading="lazy"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          w-full
          max-w-xl
          h-[420px]
          sm:h-[500px]
          lg:h-[600px]
          object-cover
          rounded-3xl
          shadow-2xl
          transition-transform
          duration-500
          hover:scale-[1.02]
        "
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Projects Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="
          absolute
          bottom-4
          left-4
          sm:bottom-8
          sm:left-8
          bg-white/90
          backdrop-blur-xl
          border
          border-white/40
          rounded-2xl
          shadow-2xl
          px-4
          py-4
          sm:px-6
          sm:py-5
          flex
          items-center
          gap-3
        "
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white">
          <FolderKanban size={26} />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            100+
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Projects Delivered
          </p>
        </div>
      </motion.div>

      {/* Clients Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="
          absolute
          top-6
          right-4
          sm:top-4
          sm:right-2
          bg-white/90
          backdrop-blur-xl
          border
          border-white/40
          rounded-2xl
          shadow-2xl
          px-4
          py-4
          sm:px-6
          sm:py-5
          flex
          items-center
          gap-3
        "
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cyan-600 flex items-center justify-center text-white">
          <Users size={26} />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            50+
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Happy Clients
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WhyImage;