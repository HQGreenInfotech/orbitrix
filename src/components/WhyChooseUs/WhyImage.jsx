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
      {/* Cyan Glow */}
      <div
        className="
          absolute
          -z-10
          w-[520px]
          h-[520px]
          rounded-full
          bg-cyan-500/20
          blur-[160px]
        "
      />

      {/* Main Image */}
      <motion.img
        src="/team.png"
        alt="Orbitix Technology Team"
        loading="lazy"
        animate={{ y: [0, -12, 0] }}
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
          border
          border-white/10
          shadow-[0_30px_80px_rgba(0,0,0,.45)]
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#081B4B]/60 via-transparent to-transparent" />

      {/* Projects Card */}
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -6,
        }}
        className="
          absolute
          left-6
          bottom-6
          flex
          items-center
          gap-4
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          px-6
          py-5
          shadow-xl
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-cyan-500/20
          "
        >
          <FolderKanban
            size={26}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h2 className="text-3xl font-black text-white">
            100+
          </h2>

          <p className="text-slate-300">
            Projects Delivered
          </p>
        </div>
      </motion.div>

      {/* Clients Card */}
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -6,
        }}
        className="
          absolute
          right-6
          top-6
          flex
          items-center
          gap-4
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          px-6
          py-5
          shadow-xl
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-blue-500/20
          "
        >
          <Users
            size={26}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h2 className="text-3xl font-black text-white">
            50+
          </h2>

          <p className="text-slate-300">
            Happy Clients
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WhyImage;