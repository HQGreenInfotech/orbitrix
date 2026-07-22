function ServiceBackground() {
  return (
    <>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 blur-[140px] rounded-full" />

      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}

export default ServiceBackground;