import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          z-50

          w-[94%]
          max-w-7xl

          rounded-full
          border
          border-white/10

          transition-all
          duration-300

          ${
            scrolled
              ? "bg-[#081B4B]/95 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.35)]"
              : "bg-[#081B4B]/75 backdrop-blur-xl"
          }
        `}
      >
        <div
          className="
            flex
            items-center
            justify-between
            gap-6

            h-[76px]
            px-5
            sm:px-7
            lg:px-8
          "
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <DesktopMenu />
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="
              hidden
              lg:flex
              items-center
              justify-center

              h-12
              px-8

              rounded-full

              bg-gradient-to-r
              from-cyan-500
              to-blue-600

              text-white
              font-semibold

              cursor-pointer

              shadow-[0_8px_25px_rgba(6,182,212,0.25)]

              transition-all
              duration-300

              hover:scale-105
              hover:shadow-[0_10px_35px_rgba(6,182,212,0.4)]
            "
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
            className="
              lg:hidden

              flex
              items-center
              justify-center

              w-11
              h-11

              rounded-full

              bg-white/5
              border
              border-white/10

              text-white
              text-xl

              cursor-pointer

              transition-all
              duration-300

              hover:bg-white/10
              hover:border-cyan-400/30
            "
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;