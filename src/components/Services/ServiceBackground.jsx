function ServiceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/[0.045]
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          -bottom-48
          -right-40
          h-[550px]
          w-[550px]
          rounded-full
          bg-cyan-400/[0.04]
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-[18%]
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/[0.08]
          to-transparent
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.018]
          [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />
    </div>
  );
}

export default ServiceBackground;
