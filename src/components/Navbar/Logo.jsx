import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="
        relative
        flex
        items-center
        justify-center
        h-14
        w-36
        rounded-full
        overflow-hidden
        group
      "
    >
      {/* Logo glow */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-cyan-400/10
          blur-xl
          opacity-70
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      {/* Small highlight */}
      <span
        className="
          absolute
          -top-5
          -right-3
          h-14
          w-14
          rounded-full
          bg-cyan-400/10
          blur-2xl
        "
      />

      <img
        src="/orbitix.png"
        alt="Orbitix Technologies"
        className="
          relative
          z-10
          h-12
          w-auto
          max-w-[130px]
          object-contain
          drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
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