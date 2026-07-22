import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="group">
      <div
        className="
          relative
          flex
          items-center
          justify-center
          w-52
          h-14
          rounded-3xl
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:scale-105
          overflow-hidden
        "
      >
        {/* Blue Glow */}
        <div
          className="
            absolute
            -top-10
            -left-10
            w-28
            h-28
            bg-blue-500/20
            rounded-full
            blur-3xl
          "
        />

        {/* Cyan Glow */}
        <div
          className="
            absolute
            -bottom-10
            -right-10
            w-28
            h-28
          "
        />

        <img
          // src="/logo.png"
          src="/Logo2.png"
          alt="Orbitix Technology"
          className="
            relative
            z-10
            h-20
            w-auto
            object-contain
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>
    </Link>
  );
}

export default Logo;