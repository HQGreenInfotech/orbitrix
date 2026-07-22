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
            `font-medium transition-colors duration-300 ${
              isActive
                ? "text-blue-600"
                : "text-slate-700 hover:text-blue-600"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default DesktopMenu;