import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      <button
        className="
       px-8
py-4
rounded-full
bg-gradient-to-r
from-cyan-500
to-blue-600
hover:from-cyan-400
hover:to-blue-500
text-white
font-semibold
shadow-xl
shadow-cyan-500/20
transition-all
duration-300
hover:scale-105
flex
items-center
gap-3
cursor-pointer
        
      "
      >
        Get Free Consultation
        <FaArrowRight />
      </button>
      <Link to="/services">
  <button
    className="
      group
      relative
      overflow-hidden

      px-8
      py-4

      rounded-full

      border
      border-white/15

      bg-white/[0.05]
      backdrop-blur-xl

      text-white
      font-semibold

      shadow-[0_8px_30px_rgba(0,0,0,0.15)]

      transition-all
      duration-500

      hover:-translate-y-1
      hover:scale-[1.03]

      hover:border-cyan-400/50
      hover:bg-cyan-400/[0.08]

      hover:shadow-[0_12px_40px_rgba(34,211,238,0.25)]

      active:scale-95

      cursor-pointer
    "
  >
    {/* Moving glass shine */}
    <span
      className="
        pointer-events-none
        absolute
        inset-0

        -translate-x-full

        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent

        skew-x-[-20deg]

        transition-transform
        duration-700

        group-hover:translate-x-full
      "
    />

    {/* Cyan glow */}
    <span
      className="
        pointer-events-none
        absolute
        left-1/2
        bottom-0

        h-8
        w-20

        -translate-x-1/2
        translate-y-5

        rounded-full

        bg-cyan-400/30
        blur-xl

        opacity-0

        transition-all
        duration-500

        group-hover:translate-y-2
        group-hover:opacity-100
      "
    />

    {/* Text */}
    <span className="relative z-10 flex items-center gap-2">
      Explore Services

      <span
        className="
          inline-block
          transition-transform
          duration-300

          group-hover:translate-x-1
        "
      >
        →
      </span>
    </span>
  </button>
</Link>
    </div>
  );
}

export default HeroButtons;
