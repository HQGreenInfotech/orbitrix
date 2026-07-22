import { motion } from "framer-motion";

function Reveal({
  children,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .6,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;