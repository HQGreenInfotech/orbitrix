function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base atmosphere */}
      <div className="absolute inset-0 bg-[#071943]" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.22) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Large soft blue glow - top left */}
      <div
        className="
          absolute
          -left-72
          -top-64
          w-[750px]
          h-[750px]
          rounded-full
          bg-blue-600/[0.14]
          blur-[160px]
        "
      />

      {/* Cyan glow - bottom right */}
      <div
        className="
          absolute
          -right-56
          -bottom-64
          w-[750px]
          h-[650px]
          rounded-full
          bg-cyan-400/[0.16]
          blur-[170px]
        "
      />

      {/* Soft center blue atmosphere */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[450px]
          rounded-full
          bg-blue-500/[0.05]
          blur-[150px]
        "
      />

      {/* Small cyan light */}
      <div
        className="
          absolute
          right-[18%]
          bottom-[15%]
          w-[220px]
          h-[220px]
          rounded-full
          bg-cyan-400/[0.08]
          blur-[100px]
        "
      />

      {/* Subtle horizontal light */}
      <div
        className="
          absolute
          left-1/2
          top-[20%]
          -translate-x-1/2
          w-[70%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/10
          to-transparent
        "
      />

      {/* Dark vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,8,25,0.42)_100%)]
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          left-0
          right-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-[#071943]
          to-transparent
        "
      />
    </div>
  );
}

export default BackgroundEffects;