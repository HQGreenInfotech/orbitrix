import { motion } from "framer-motion";

const code = [
  "const services = [",
  "  'Website Development',",
  "  'Mobile Apps',",
  "  'UI/UX Design',",
  "  'Artificial Intelligence',",
  "  'Digital Marketing',",
  "];",
  "",
  "services.map(createSolution);",
];

export default function CodeEditor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
      w-full
      max-w-[650px]
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      bg-[#09152F]
      shadow-[0_40px_120px_rgba(0,0,0,.45)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">

        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"/>
          <div className="w-3 h-3 rounded-full bg-yellow-400"/>
          <div className="w-3 h-3 rounded-full bg-green-400"/>
        </div>

        <p className="text-slate-400 text-sm">
          videCoding.jsx
        </p>
      </div>

      <div className="p-8 font-mono text-[15px] leading-8">

        {code.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: i * .25
            }}
            className="text-slate-300"
          >
            {line}
          </motion.div>
        ))}

        <motion.span
          animate={{
            opacity:[1,0,1]
          }}
          transition={{
            repeat:Infinity,
            duration:1
          }}
          className="text-cyan-400"
        >
          |
        </motion.span>

      </div>
    </motion.div>
  );
}