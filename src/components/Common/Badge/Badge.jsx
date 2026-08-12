function Badge({
  children,
  className = "",
}) {
  return (
    <span
      className={`
      inline-flex
      items-center
      px-4
      py-2
      rounded-full
      bg-blue-100
      text-blue-600
      font-semibold
      text-sm
      ${className}
    `}
    >
      {children}
    </span>
  );
}

export default Badge;