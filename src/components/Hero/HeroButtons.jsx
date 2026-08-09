import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      
      <Link
        to="/contact"
        className="
          group
          relative
          overflow-hidden

          inline-flex
          items-center
          justify-center
          gap-3

          px-8
          py-4

          rounded-full

          bg-gradient-to-r
          from-cyan-500
          to-blue-600

          text-white
          font-semibold

          shadow-[0_10px_30px_rgba(6,182,212,0.25)]

          transition-all
          duration-500

          hover:-translate-y-1
          hover:scale-[1.03]

          hover:from-cyan-400
          hover:to-blue-500

          hover:shadow-[0_15px_45px_rgba(34,211,238,0.35)]

          active:scale-95

          cursor-pointer
        "
      >
      
        <span
          className="
            pointer-events-none
            absolute
            inset-0

            -translate-x-full

            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent

            skew-x-[-20deg]

            transition-transform
            duration-700

            group-hover:translate-x-full
          "
        />

        <span className="relative z-10">
          Get Free Consultation
        </span>

        <FaArrowRight
          className="
            relative
            z-10

            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        />
      </Link>

      
      <Link
        to="/services"
        className="
          group
          relative
          overflow-hidden

          inline-flex
          items-center
          justify-center
          gap-3

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

        
        <span className="relative z-10 flex items-center gap-3">
          Explore Services

          <FaArrowRight
            className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          />
        </span>
      </Link>
    </div>
  );
}

export default HeroButtons;