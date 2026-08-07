import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${scrolled ? "py-3" : "py-5"}
        `}
      >
        <div
          className={`
            max-w-[1400px]
            mx-auto
            flex
            items-center
            justify-between
            transition-all
            duration-500

            ${
              scrolled
                ? `
                  px-7
                  py-3
                  rounded-full
                  bg-[#0E235F]/70
                  backdrop-blur-xl
                  border
                  border-white/10
                  shadow-[0_15px_45px_rgba(0,0,0,.35)]
                `
                : `
                  px-6
                  py-2
                `
            }
          `}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* CTA */}
          <button
            className="
              hidden
              lg:flex
              items-center
              justify-center
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_10px_30px_rgba(34,211,238,.35)]
            "
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="
              lg:hidden
              text-white
              text-2xl
              cursor-pointer
              transition
              duration-300
              hover:text-cyan-400
            "
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;