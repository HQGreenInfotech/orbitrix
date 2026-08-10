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

    // Home page section
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    // Separate page
    window.location.href = `/${id === "home" ? "" : id}`;
  };

  return (
    <nav
      className="
        flex
        items-center
        gap-1
        rounded-2xl
        bg-white/[0.025]
        border
        border-white/[0.05]
        p-1
      "
    >
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

              px-4
              xl:px-5
              py-2.5

              rounded-xl

              text-sm
              xl:text-base
              font-medium

              cursor-pointer

              transition-all
              duration-300

              ${
                isActive
                  ? `
                    bg-cyan-400/[0.10]
                    text-cyan-300
                    border
                    border-cyan-400/[0.12]
                  `
                  : `
                    text-white/65
                    border
                    border-transparent

                    hover:bg-white/[0.04]
                    hover:text-white
                  `
              }
            `}
          >
            <span>{item.name}</span>

            {/* Active indicator */}
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