import { motion } from "framer-motion";
import { FolderKanban, Users } from "lucide-react";

function WhyImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
     

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          top-1/2
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-violet-500/[0.10]
          blur-[120px]
        "
      />

    

      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/[0.10]
          bg-[#0A1020]
          p-2
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        "
      >
        <motion.img
          src="/team.png"
          alt="Orbitix Technology Team"
          loading="lazy"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-[360px]
            w-full
            rounded-[22px]
            object-cover
            sm:h-[450px]
            lg:h-[500px]
          "
        />

  

        <div
          className="
            pointer-events-none
            absolute
            inset-2
            rounded-[22px]
            bg-gradient-to-t
            from-[#050A16]/70
            via-transparent
            to-transparent
          "
        />
      </div>

  

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="
          absolute
          -bottom-6
          left-5
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/[0.10]
          bg-[#101629]/90
          px-4
          py-3
          shadow-[0_20px_50px_rgba(0,0,0,0.4)]
          backdrop-blur-xl
          sm:left-8
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-violet-400/[0.12]
            text-violet-300
          "
        >
          <FolderKanban size={21} />
        </div>

        <div>
          <p className="text-xl font-black text-white">
            100+
          </p>

          <p className="text-xs text-slate-500">
            Projects Delivered
          </p>
        </div>
      </motion.div>

  

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="
          absolute
          -right-3
          top-6
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/[0.10]
          bg-[#101629]/90
          px-4
          py-3
          shadow-[0_20px_50px_rgba(0,0,0,0.4)]
          backdrop-blur-xl
          sm:right-5
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-emerald-400/[0.12]
            text-emerald-300
          "
        >
          <Users size={21} />
        </div>

        <div>
          <p className="text-xl font-black text-white">
            50+
          </p>

          <p className="text-xs text-slate-500">
            Happy Clients
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WhyImage;