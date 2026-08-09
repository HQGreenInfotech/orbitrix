import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // --------------------------------
  // 1. Navbar background on scroll
  // --------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --------------------------------
  // 2. Detect active section on HOME
  // --------------------------------
  useEffect(() => {
    // Only observe sections on Home page
    if (location.pathname !== "/") {
      return;
    }

    const sections = document.querySelectorAll("section[id]");

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,

        // Because your navbar is fixed
        rootMargin: "-120px 0px -45% 0px",

        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  // --------------------------------
  // 3. Active page for React Router
  // --------------------------------

  const getActiveSection = () => {
    // Home
    if (location.pathname === "/") {
      return activeSection;
    }

    // Separate pages
    if (location.pathname === "/about") {
      return "about";
    }

    if (location.pathname === "/services") {
      return "services";
    }

    if (location.pathname === "/program") {
      return "program";
    }

    if (location.pathname === "/faq") {
      return "faq";
    }

    if (location.pathname === "/contact") {
      return "contact";
    }

    return "";
  };

  const currentActiveSection = getActiveSection();

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
          <Logo />

          {/* Desktop */}
          <div className="hidden lg:flex items-center">
            <DesktopMenu
              activeSection={currentActiveSection}
            />
          </div>

          {/* CTA */}
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

          {/* Mobile button */}
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

      <MobileMenu
        open={open}
        setOpen={setOpen}
        activeSection={currentActiveSection}
      />
    </>
  );
}

export default Navbar;