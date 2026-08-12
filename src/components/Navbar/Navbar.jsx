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


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

  
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);



  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sections = document.querySelectorAll("section[id]");

    if (!sections.length) {
      return;
    }

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
        rootMargin: "-100px 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);


  const getActiveSection = () => {
    if (location.pathname === "/") {
      return activeSection;
    }

    const routeMap = {
      "/about": "about",
      "/services": "services",
      "/program": "program",
      "/faq": "faq",
      "/contact": "contact",
    };

    return routeMap[location.pathname] || "";
  };

  const currentActiveSection = getActiveSection();

  return (
    <>

      <nav
        className={`
          fixed
          left-1/2
          top-4
          z-50

          w-[94%]
          max-w-[1280px]

          -translate-x-1/2

          rounded-[24px]

          border
          border-white/[0.10]

          backdrop-blur-2xl

          transition-all
          duration-500

          ${
            scrolled
              ? `
                bg-[#071838]/90
                shadow-[0_18px_55px_rgba(0,0,0,0.35)]
              `
              : `
                bg-[#071838]/65
                shadow-[0_12px_40px_rgba(0,0,0,0.18)]
              `
          }
        `}
      >
        

        <div
          className="
            pointer-events-none
            absolute
            left-8
            right-8
            top-0
            h-px
            bg-white/[0.16]
          "
        />

       

        <div
          className="
            relative

            flex
            h-[68px]
            items-center
            justify-between

            px-4
            sm:px-6
            lg:px-7
          "
        >
         

          <Link
            to="/"
            aria-label="Orbitix Technology home"
            className="
              flex
              h-12
              w-[88px]
              items-center
              justify-center

              transition-transform
              duration-300

              hover:scale-105
            "
          >
            <Logo />
          </Link>

         

          <div className="hidden lg:flex">
            <DesktopMenu
              activeSection={currentActiveSection}
            />
          </div>

  

          <Link
            to="/contact"
            className="
              group

              hidden
              h-11
              items-center
              justify-center
              gap-2

              rounded-2xl

              bg-blue-400

              px-6

              font-semibold
              text-[#06183F]

              shadow-[0_8px_30px_rgba(34,211,238,0.18)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-cyan-300
              hover:shadow-[0_12px_35px_rgba(34,211,238,0.30)]

              active:translate-y-0

              lg:flex
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


          <button
            type="button"
            aria-label={
              open ? "Close menu" : "Open menu"
            }
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-2xl

              border
              border-white/[0.10]

              bg-white/[0.04]

              text-lg
              text-white

              transition-all
              duration-300

              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.08]
              hover:text-cyan-300

              active:scale-95

              lg:hidden
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