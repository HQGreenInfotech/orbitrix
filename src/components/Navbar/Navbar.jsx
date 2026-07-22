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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-30
        transition-all
        duration-500
        ${scrolled ? "pt-3" : "pt-0"}
      `}
    >
      <div
        className={`
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          transition-all
          duration-500

          ${
            scrolled
              ? `
                px-6
                py-2.5
                rounded-full
                bg-white/20
                backdrop-blur-2xl
                border border-white/30
                shadow-[0_10px_40px_rgba(0,0,0,0.15)]
              `
              : `
                px-6
                py-4
              `
          }
        `}
      >
        <Logo />

        <DesktopMenu />

        <button
          className="
            hidden
            lg:block
            px-5
            py-2.5
            text-sm
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-xl
          "
        >
          Get Started
        </button>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}

export default Navbar;