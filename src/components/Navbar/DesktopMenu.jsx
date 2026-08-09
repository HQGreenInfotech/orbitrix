const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Program", id: "program" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

function DesktopMenu({ activeSection }) {
  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="flex items-center gap-8">
      {menuItems.map((item) => {
        const isActive = activeSection === item.id;

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
              py-2

              text-base
              xl:text-lg
              font-semibold

              transition-all
              duration-300

              cursor-pointer

              ${
                isActive
                  ? "text-cyan-400"
                  : "text-white/70 hover:text-white"
              }
            `}
          >
            {item.name}

            {/* Active underline */}
            <span
              className={`
                absolute
                -bottom-1
                left-1/2
                -translate-x-1/2

                h-[2px]
                rounded-full

                bg-gradient-to-r
                from-cyan-400
                to-blue-500

                transition-all
                duration-300

                ${
                  isActive
                    ? "w-6 opacity-100"
                    : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                }
              `}
            />

            {/* Glow */}
            <span
              className={`
                pointer-events-none
                absolute
                -bottom-1
                left-1/2
                -translate-x-1/2

                h-2
                w-8

                rounded-full
                bg-cyan-400/30
                blur-md

                transition-opacity
                duration-300

                ${
                  isActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-70"
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