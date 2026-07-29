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
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              top-20
              left-3
              right-3
              z-50
              lg:hidden

              max-h-[80vh]
              overflow-y-auto

              rounded-3xl
              bg-white/95
              backdrop-blur-2xl
              border
              border-slate-200
              shadow-2xl
            "
          >
            <div className="flex flex-col py-3">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    mx-3
                    rounded-xl
                    px-5
                    py-4
                    text-base
                    sm:text-lg
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                    }
                  `
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="px-4 pt-5 pb-4">
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="
                    w-full
                    cursor-pointer
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    py-4
                    text-base
                    sm:text-lg
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    active:scale-95
                  "
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;