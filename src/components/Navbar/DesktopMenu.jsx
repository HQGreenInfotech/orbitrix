import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Program", id: "program" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

function DesktopMenu({ activeSection }) {
  const location = useLocation();
  const navigate = useNavigate();

  const routes = {
    home: "/",
    about: "/about",
    services: "/services",
    program: "/program",
    faq: "/faq",
    contact: "/contact",
  };

  const handleClick = (id) => {
    if (id === "services") {
      navigate("/services");
      return;
    }

    if (location.pathname === "/") {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }

      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        return;
      }
    }

    navigate(routes[id]);
  };

  const sectionMap = {
    home: "home",
    about: "about",

    "why-choose": "about",

    services: "services",

    program: "program",

    courses: "program",

    faq: "faq",
    contact: "contact",
  };

  let currentActiveSection;

  if (location.pathname === "/") {
    currentActiveSection = sectionMap[activeSection] || "home";
  } else {
    currentActiveSection = location.pathname.substring(1);
  }

  return (
    <nav
      className="
        flex
        items-center
        gap-1
        rounded-2xl
        border
        border-white/[0.05]
        bg-white/[0.025]
        p-1
      "
    >
      {menuItems.map((item) => {
        const isActive = currentActiveSection === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleClick(item.id)}
            className={`
              group
              relative
              flex
              items-center
              justify-center
              rounded-xl
              px-4
              py-2.5
              text-sm
              xl:px-5
              xl:text-base
              font-medium
              cursor-pointer
              transition-all
              duration-300

              ${
                isActive
                  ? `
                    border
                    border-cyan-400/[0.12]
                    bg-cyan-400/[0.10]
                    text-cyan-300
                  `
                  : `
                    border
                    border-transparent
                    text-white/65
                    hover:bg-white/[0.04]
                    hover:text-white
                  `
              }
            `}
          >
            <span>{item.name}</span>

            <span
              className={`
                absolute
                bottom-1
                left-1/2
                -translate-x-1/2
                h-[2px]
                rounded-full
                bg-cyan-400
                transition-all
                duration-300

                ${
                  isActive
                    ? "w-5 opacity-100"
                    : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-60"
                }
              `}
            />
          </button>
        );
      })}
    </nav>
  );
}

export default DesktopMenu;
