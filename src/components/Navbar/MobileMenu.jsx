import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Program", path: "/program" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

function MobileMenu({ open, setOpen }) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setOpen(false);
    navigate("/contact");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="
              fixed
              inset-0
              z-40

              bg-[#020817]/60
              backdrop-blur-md

              lg:hidden
            "
          />
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
              fixed
              top-[88px]
              left-4
              right-4
              z-50

              lg:hidden

              max-h-[80vh]
              overflow-y-auto

              rounded-[28px]

              border
              border-white/[0.10]

              bg-[#081B4B]/80
              backdrop-blur-2xl

              shadow-[0_20px_70px_rgba(0,0,0,0.45)]

              overflow-hidden
            "
          >
           
            <div
              className="
                pointer-events-none
                absolute
                top-0
                left-8
                right-8
                h-px
                bg-white/20
              "
            />
            <div
              className="
                pointer-events-none
                absolute
                -top-24
                right-0

                w-48
                h-48

                rounded-full

                bg-cyan-400/10
                blur-[90px]
              "
            />
            <div className="relative z-10 p-3">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.25,
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                        group
                        relative

                        flex
                        items-center
                        justify-between

                        mx-1
                        my-1

                        rounded-2xl

                        px-5
                        py-4

                        text-base
                        font-semibold

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              bg-cyan-400/[0.12]
                              text-cyan-300
                              border
                              border-cyan-400/20
                            `
                            : `
                              text-slate-300
                              border
                              border-transparent

                              hover:bg-white/[0.05]
                              hover:border-white/[0.08]
                              hover:text-white
                            `
                        }
                      `
                    }
                  >
                    <span>{item.name}</span>

                    <FaArrowRight
                      className="
                        text-xs

                        opacity-0
                        -translate-x-2

                        group-hover:opacity-100
                        group-hover:translate-x-0

                        transition-all
                        duration-300
                      "
                    />
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-4 px-1 pb-1">
                <button
                  type="button"
                  onClick={handleGetStarted}
                  className="
                    group

                    w-full

                    flex
                    items-center
                    justify-center
                    gap-3

                    rounded-2xl

                    bg-cyan-400
                    text-[#06183F]

                    py-4

                    font-bold

                    shadow-[0_10px_30px_rgba(34,211,238,0.20)]

                    transition-all
                    duration-300

                    hover:bg-cyan-300
                    hover:-translate-y-0.5

                    active:scale-[0.98]
                  "
                >
                  <span>Get Started</span>

                  <FaArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
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