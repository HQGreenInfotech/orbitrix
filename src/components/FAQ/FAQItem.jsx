import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/10
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
          transition-all
        "
      >
        <h3
          className="
            text-lg
            md:text-xl
            font-bold
            text-white
            leading-relaxed
          "
        >
          {faq.question}
        </h3>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="
            shrink-0
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            shadow-[0_0_30px_rgba(34,211,238,.35)]
          "
        >
          {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
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
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.25 }}
              className="px-7 pb-7"
            >
              <div
                className="
                  border-l-4
                  border-cyan-400
                  pl-5
                "
              >
                <p
                  className="
                    text-slate-300
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