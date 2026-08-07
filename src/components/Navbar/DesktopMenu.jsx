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
    <nav className="hidden lg:flex items-center gap-14">
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
         className={({ isActive }) =>
`
relative
font-semibold
text-lg
transition-all
duration-300

${
isActive
? "text-cyan-400"
: "text-white/70 hover:text-white"
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