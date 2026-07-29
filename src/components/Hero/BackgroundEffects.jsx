function BackgroundEffects() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Top Left Blur */}
      <div
        className="
          absolute
          -top-24
          -left-24
          w-64
          h-64
          sm:w-80
          sm:h-80
          lg:w-96
          lg:h-96
          rounded-full
          bg-blue-300
          opacity-30
          blur-[100px]
          lg:blur-[140px]
        "
      />

      {/* Bottom Right Blur */}
      <div
        className="
          absolute
          -bottom-24
          -right-24
          w-64
          h-64
          sm:w-80
          sm:h-80
          lg:w-96
          lg:h-96
          rounded-full
          bg-cyan-300
          opacity-30
          blur-[100px]
          lg:blur-[140px]
        "
      />

      {/* Center Blur */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-52
          h-52
          sm:w-64
          sm:h-64
          lg:w-72
          lg:h-72
          rounded-full
          bg-indigo-300
          opacity-20
          blur-[90px]
          lg:blur-[120px]
        "
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

export default BackgroundEffects;