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
      <nav
        className={`
          fixed
          top-6
          left-1/2
          -translate-x-1/2
          z-50
          w-[95%]
          max-w-7xl
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-[#081B4B]/90 backdrop-blur-xl shadow-2xl"
              : "bg-[#081B4B]/70 backdrop-blur-xl"
          }
          border border-white/10
          rounded-full
        `}
      >
        <div className="flex items-center justify-between px-8 py-4">
          <Logo />

          <DesktopMenu />

          <button
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
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Get Started
          </button>

          <button
            className="lg:hidden text-white text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;