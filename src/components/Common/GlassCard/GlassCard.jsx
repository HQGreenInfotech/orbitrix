function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      backdrop-blur-xl
      bg-white/10
      border
      border-white/20
      rounded-3xl
      p-8
      shadow-xl
      ${className}
    `}
    >
      {children}
    </div>
  );
}

export default GlassCard;