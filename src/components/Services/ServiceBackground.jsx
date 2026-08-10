import { motion } from "framer-motion";

function ServiceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base */}
      <div className="absolute inset-0 bg-[#071943]" />

      {/* Large upper-left light */}
      <div
        className="
          absolute
          -top-72
          -left-72
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-600/[0.16]
          blur-[140px]
        "
      />

      {/* Cyan atmospheric glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-180px]
          bottom-[-220px]
          w-[650px]
          h-[650px]
          rounded-full
          bg-cyan-400/[0.18]
          blur-[150px]
        "
      />

      {/* Blue center glow */}
      <div
        className="
          absolute
          left-1/2
          top-[42%]
          -translate-x-1/2
          w-[600px]
          h-[400px]
          rounded-full
          bg-blue-500/[0.07]
          blur-[130px]
        "
      />

      {/* Subtle technology grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* Soft horizontal light */}
      <div
        className="
          absolute
          left-1/2
          top-[25%]
          -translate-x-1/2
          w-[80%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/20
          to-transparent
        "
      />

      {/* Bottom atmospheric fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-64
          bg-gradient-to-t
          from-[#071943]
          via-transparent
          to-transparent
        "
      />

      {/* Edge vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(3,10,30,0.45)_100%)]
        "
      />
    </div>
  );
}

export default ServiceBackground;