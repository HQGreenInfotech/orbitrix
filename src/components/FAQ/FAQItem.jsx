import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.3 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.07]
      "
    >
      {/* Question */}
      <button
        type="button"
        onClick={onClick}
        className="
          flex
          w-full
          cursor-pointer
          items-center
          justify-between
          gap-5
          px-7
          py-6
          text-left
        "
      >
        <h3
          className="
            text-base
            font-bold
            leading-relaxed
            text-white
            md:text-lg
          "
        >
          {faq.question}
        </h3>

        {/* Icon */}
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            text-cyan-400
            transition-all
            duration-300
            group-hover:bg-cyan-400/15
          "
        >
          {isOpen ? (
            <FaMinus size={13} />
          ) : (
            <FaPlus size={13} />
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
              duration: 0.3,
            }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7">
              <div
                className="
                  border-l-2
                  border-cyan-400/50
                  pl-5
                "
              >
                <p
                  className="
                    text-sm
                    leading-7
                    text-slate-300
                    md:text-base
                  "
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default FAQItem;