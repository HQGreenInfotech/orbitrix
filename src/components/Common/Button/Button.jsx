function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "bg-slate-900 text-white hover:bg-slate-800",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",

    white:
      "bg-white text-slate-900 hover:bg-gray-100",
  };

  return (
    <button
      className={`
      px-7
      py-3
      rounded-xl
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      ${variants[variant]}
      ${className}
    `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;