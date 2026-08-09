import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const sections = [
  "home",
  "about",
  "services",
  "program",
  "faq",
  "contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();

  // --------------------------------
  // Scroll + Section Detection
  // --------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once when page loads
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --------------------------------
  // React Router Page Detection
  // --------------------------------
  useEffect(() => {
    const pathname = location.pathname;

    const pageMap = {
      "/": "home",
      "/about": "about",
      "/services": "services",
      "/program": "program",
      "/faq": "faq",
      "/contact": "contact",
    };

    if (pageMap[pathname]) {
      setActiveSection(pageMap[pathname]);
    }
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`
          fixed
          top-4
          left-1/2
          -translate-x-1/2
          z-50

          w-[94%]
          max-w-7xl

          rounded-[28px]

          border
          border-white/10

          overflow-hidden

          transition-all
          duration-500

          ${
            scrolled
              ? `
                bg-white/[0.045]
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              `
              : `
                bg-white/[0.025]
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(0,0,0,0.15)]
              `
          }
        `}
      >
        {/* Top glass reflection */}
        <div
          className="
            pointer-events-none
            absolute
            top-0
            left-0
            right-0
            h-px

            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
          "
        />

        {/* Bottom cyan highlight */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2

            w-[40%]
            h-[2px]

            bg-gradient-to-r
            from-transparent
            via-cyan-400/70
            to-transparent

            blur-[1px]
          "
        />

        {/* Bottom ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[-20px]
            left-1/2
            -translate-x-1/2

            w-[45%]
            h-12

            bg-cyan-400/10
            blur-3xl
          "
        />

        {/* Navbar content */}
        <div
          className="
            relative
            z-10

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
            <DesktopMenu activeSection={activeSection} />
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

              border
              border-white/10

              shadow-[0_8px_25px_rgba(6,182,212,0.25)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:scale-105

              hover:shadow-[0_10px_35px_rgba(6,182,212,0.45)]
            "
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="
              lg:hidden

              flex
              items-center
              justify-center

              w-11
              h-11

              rounded-full

              bg-white/[0.06]
              backdrop-blur-md

              border
              border-white/10

              text-white
              text-xl

              cursor-pointer

              transition-all
              duration-300

              hover:bg-cyan-400/10
              hover:border-cyan-400/30
              hover:text-cyan-300

              active:scale-95
            "
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default Navbar;