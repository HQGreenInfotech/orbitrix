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
        group
        relative
        w-full
        max-w-[650px]

        rounded-3xl

        overflow-hidden

        border
        border-white/10

        bg-[#09152F]/80
        backdrop-blur-2xl

        shadow-[0_40px_120px_rgba(0,0,0,0.45)]

        transition-all
        duration-500

        hover:border-cyan-400/20
        hover:shadow-[0_40px_120px_rgba(6,182,212,0.12)]
      "
    >
     
      <div
        className="
          pointer-events-none
          absolute
          -top-20
          left-1/2

          h-40
          w-72

          -translate-x-1/2

          rounded-full

          bg-cyan-400/10

          blur-3xl

          opacity-60

          transition-all
          duration-700

          group-hover:bg-cyan-400/20
          group-hover:opacity-100
        "
      />

  
      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          right-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
        "
      />

    
      <div
        className="
          relative
          z-10

          flex
          items-center
          justify-between

          h-14

          px-5

          border-b
          border-white/10

          bg-white/[0.025]
          backdrop-blur-xl
        "
      >
    
        <div className="flex items-center gap-2">
          <span
            className="
              h-3
              w-3
              rounded-full
              bg-red-400

              shadow-[0_0_10px_rgba(248,113,113,0.35)]
            "
          />

          <span
            className="
              h-3
              w-3
              rounded-full
              bg-yellow-400

              shadow-[0_0_10px_rgba(250,204,21,0.35)]
            "
          />

          <span
            className="
              h-3
              w-3
              rounded-full
              bg-green-400

              shadow-[0_0_10px_rgba(74,222,128,0.35)]
            "
          />
        </div>

      
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2

            text-sm
            font-medium

            text-slate-400

            tracking-wide
          "
        >
          videoCoding.jsx
        </div>

     
        <div
          className="
            flex
            items-center
            gap-2

            text-xs
            text-slate-500
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full

              bg-cyan-400

              shadow-[0_0_8px_rgba(34,211,238,0.8)]
            "
          />

          Live
        </div>
      </div>

    
      <div
        className="
          relative
          z-10

          p-7
          sm:p-8

          font-mono
          text-[14px]
          sm:text-[15px]

          leading-8

          overflow-x-auto
        "
      >
      
        <div className="flex">
          <div
            className="
              mr-6
              select-none

              text-right

              text-slate-600

              text-sm
              leading-8
            "
          >
            {code.map((_, i) => (
              <div key={i}>
                {String(i + 1).padStart(2, "0")}
              </div>
            ))}
          </div>

       
          <div className="min-w-max">
            {code.map((line, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.4,
                }}
                className="
                  whitespace-pre

                  text-slate-300
                "
              >
                {line}
              </motion.div>
            ))}

         
            <motion.span
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              className="
                ml-1
                text-cyan-400

                drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
              "
            >
              |
            </motion.span>
          </div>
        </div>
      </div>

     
      <div
        className="
          pointer-events-none

          absolute
          bottom-0
          left-1/2

          h-[2px]
          w-[45%]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-cyan-400/60
          to-transparent

          blur-[1px]
        "
      />
    </motion.div>
  );
}