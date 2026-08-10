import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      aria-label="Orbitix Technologies"
      className="
        group
        relative
        flex
        items-center
        justify-center

        h-[82px]
        w-[190px]

        shrink-0
        overflow-visible
      "
    >
      {/* Very subtle glow */}
      <span
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2

          h-16
          w-40

          rounded-full
          bg-cyan-400/10
          blur-3xl

          opacity-70
          transition-all
          duration-500

          group-hover:opacity-100
          group-hover:scale-110
        "
      />

      {/* Logo */}
      <img
        src="/orbitix1.png"
        alt="Orbitix Technologies"
        className="
          relative
          z-10

          h-[82px]
          w-auto
          max-w-[175px]

          object-contain

          drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]

          transition-all
          duration-500

          group-hover:scale-105
          group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.55)]
        "
      />
    </Link>
  );
}

export default Logo;