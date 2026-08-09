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

        h-[72px]
        w-[165px]

        shrink-0
        overflow-visible
      "
    >
      {/* Main cyan glow */}
      <span
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2

          h-12
          w-32

          rounded-full
          bg-cyan-400/10
          blur-2xl

          transition-all
          duration-500

          group-hover:bg-cyan-400/20
          group-hover:scale-110
        "
      />

      {/* Bottom light reflection */}
      <span
        className="
          pointer-events-none
          absolute
          bottom-1
          left-1/2
          -translate-x-1/2

          h-[2px]
          w-20

          rounded-full

          bg-gradient-to-r
          from-transparent
          via-cyan-400/60
          to-transparent

          opacity-70
          blur-[1px]
        "
      />

      {/* Logo */}
      <img
        src="/orbitix.png"
        alt="Orbitix Technologies"
        className="
          relative
          z-10

          h-[70px]
          w-auto
          max-w-[145px]

          object-contain

          drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]

          transition-all
          duration-500

          group-hover:scale-105
          group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.7)]
        "
      />
    </Link>
  );
}

export default Logo;