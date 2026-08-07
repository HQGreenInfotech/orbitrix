import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Program", path: "/program" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-7">
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
  `
    font-medium
    transition-all
    duration-300

    ${
      isActive
        ? "text-cyan-400"
        : "text-slate-300 hover:text-white"
    }
  `
}
          
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default DesktopMenu;