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
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,
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
  if (location.pathname === "/") {
    return activeSection;
  }

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
      {/* ================================
          NAVBAR
      ================================= */}
      <nav
        className={`
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          z-50

          w-[94%]
          max-w-7xl

          rounded-[28px]

          border
          border-white/[0.10]

          bg-[#081B4B]/50
          backdrop-blur-2xl

          shadow-[0_15px_50px_rgba(0,0,0,0.25)]

          transition-all
          duration-500

          ${
            scrolled
              ? `
                bg-[#07183F]/75
                shadow-[0_20px_65px_rgba(0,0,0,0.35)]
              `
              : `
                bg-[#081B4B]/50
              `
          }
        `}
      >
        {/* ================================
            GLASS TOP REFLECTION
        ================================= */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-8
            top-0
            h-px
            bg-white/20
          "
        />

        {/* ================================
            NAVBAR CONTENT
        ================================= */}
        <div
          className="
            relative
            flex
            items-center
            justify-between
            gap-6

            h-[72px]

            px-4
            sm:px-6
            lg:px-7
          "
        >
          {/* ================================
              LOGO
          ================================= */}
          <div
            className="
              relative
              flex
              items-center
              justify-center

              w-[92px]
              h-[52px]

              rounded-2xl

              bg-white/[0.025]

              border
              border-white/[0.06]

              transition-all
              duration-300

              hover:bg-white/[0.05]
              hover:border-cyan-400/20
            "
          >
            <Logo />
          </div>

          {/* ================================
              DESKTOP MENU
          ================================= */}
          <div className="hidden lg:flex items-center">
            <DesktopMenu
              activeSection={currentActiveSection}
            />
          </div>

          {/* ================================
              GET STARTED
          ================================= */}
          <Link
            to="/contact"
            className="
              hidden
              lg:flex

              items-center
              justify-center
              gap-2

              h-11
              px-7

              rounded-2xl

              bg-blue-400

              text-[#06183F]

              font-semibold

              shadow-[0_8px_30px_rgba(34,211,238,0.20)]

              transition-all
              duration-300

              hover:bg-cyan-300
              hover:-translate-y-0.5

              hover:shadow-[0_12px_35px_rgba(34,211,238,0.30)]

              active:translate-y-0
            "
          >
            <span>Get Started</span>

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </Link>

          {/* ================================
              MOBILE MENU BUTTON
          ================================= */}
          <button
            type="button"
            aria-label={
              open ? "Close menu" : "Open menu"
            }
            aria-expanded={open}
            onClick={() =>
              setOpen((prev) => !prev)
            }
            className="
              lg:hidden

              flex
              items-center
              justify-center

              w-11
              h-11

              rounded-2xl

              bg-white/[0.05]
              backdrop-blur-md

              border
              border-white/[0.10]

              text-white
              text-lg

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

      {/* ================================
          MOBILE MENU
      ================================= */}
      <MobileMenu
        open={open}
        setOpen={setOpen}
        activeSection={currentActiveSection}
      />
    </>
  );
}

export default Navbar;