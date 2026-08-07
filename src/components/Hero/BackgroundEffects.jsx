function BackgroundEffects() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#081B4B]" />

      {/* Primary Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(135deg,#081B4B_0%,#102B72_45%,#081B4B_100%)]
        "
      />

      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.18) 1px, transparent 0)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* Top Left Glow */}
      <div
        className="
          absolute
          -left-56
          top-10
          w-[650px]
          h-[650px]
          rounded-full
          bg-cyan-400/18
          blur-[180px]
        "
      />

      {/* Top Right Glow */}
      <div
        className="
          absolute
          -right-44
          top-0
          w-[520px]
          h-[520px]
          rounded-full
          bg-violet-500/15
          blur-[180px]
        "
      />

      {/* Bottom Center Glow */}
      <div
        className="
          absolute
          left-1/2
          bottom-[-180px]
          -translate-x-1/2
          w-[850px]
          h-[420px]
          rounded-full
          bg-cyan-500/10
          blur-[220px]
        "
      />

      {/* Soft Light Behind Hero Image */}
      <div
        className="
          absolute
          right-[12%]
          top-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-400/8
          blur-[160px]
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}

export default BackgroundEffects;