import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
   { name: "Program", path: "/program" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

function MobileMenu({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="lg:hidden bg-white shadow-xl">
      <div className="flex flex-col p-6 gap-5">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? "text-blue-600"
                  : "text-slate-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;