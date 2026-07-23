import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Program", path: "/program" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
          className="
            lg:hidden
            fixed
            top-20
            left-4
            right-4
            z-50
            rounded-3xl
            bg-white/95
            backdrop-blur-xl
            border
            border-slate-200
            shadow-2xl
            overflow-hidden
          "
        >
          <div className="flex flex-col py-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-8 py-4 text-lg font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="px-6 pt-4 pb-2">
              <button
                className="
                  w-full
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  font-semibold
                  hover:scale-[1.02]
                  duration-300
                "
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;