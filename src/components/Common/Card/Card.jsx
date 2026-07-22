function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      bg-white
      rounded-3xl
      shadow-lg
      border
      border-slate-100
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      ${className}
    `}
    >
      {children}
    </div>
  );
}

export default Card;