import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQItem({
  faq,
  isOpen,
  onClick,
}) {
  return (
    <motion.div
      layout
      transition={{
        duration: 0.35,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* Question */}

      <button
        onClick={onClick}
        className="
          w-full
          flex
          items-center
          justify-between
          gap-5
          text-left
          px-7
          py-6
          hover:bg-slate-50
          transition
        "
      >
        <h3
          className="
            text-lg
            md:text-xl
            font-bold
            text-slate-800
            leading-relaxed
          "
        >
          {faq.question}
        </h3>

        {/* Icon */}

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.05 : 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            shrink-0
            w-11
            h-11
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            flex
            items-center
            justify-center
            text-white
            shadow-lg
          "
        >
          {isOpen ? (
            <FaMinus size={15} />
          ) : (
            <FaPlus size={15} />
          )}
        </motion.div>
      </button>

      {/* Answer */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{
                y: -10,
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                px-7
                pb-7
              "
            >
              <div
                className="
                  border-l-4
                  border-blue-600
                  pl-5
                "
              >
                <p
                  className="
                    text-slate-600
                    leading-8
                    text-base
                  "
                >
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default FAQItem;