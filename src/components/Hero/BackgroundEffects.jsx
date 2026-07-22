function BackgroundEffects() {
  return (
    <>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-[140px] opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-[140px] opacity-30"></div>

      <div className="absolute left-1/2 top-1/2 w-72 h-72 bg-indigo-300 rounded-full blur-[120px] opacity-20"></div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#00000020 1px, transparent 1px),linear-gradient(90deg,#00000020 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
    </>
  );
}

export default BackgroundEffects;