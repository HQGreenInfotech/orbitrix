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
    <header className="fixed top-0 left-0 w-full z-50 py-6">
  <div
    className="
      max-w-[1450px]
      mx-auto
      h-[82px]

      rounded-full

      bg-[#0A1738]/80
      backdrop-blur-2xl

      border border-white/10

      shadow-[0_20px_60px_rgba(0,0,0,.35)]

      flex
      items-center
      justify-between

      px-10
    "
  >
    <Logo />

    <DesktopMenu />

    <button
      className="
        h-14
        px-8
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        to-blue-600
        text-white
        font-semibold
        shadow-xl
      "
    >
      Get Started
    </button>
  </div>
</header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;