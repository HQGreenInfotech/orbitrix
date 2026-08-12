import { motion } from "framer-motion";

const code = [
  {
    type: "code",
    parts: [
      { text: "const", color: "text-cyan-400" },
      { text: " services ", color: "text-white" },
      { text: "= [", color: "text-white" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "  'Website Development'", color: "text-emerald-400" },
      { text: ",", color: "text-slate-500" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "  'Mobile Apps'", color: "text-emerald-400" },
      { text: ",", color: "text-slate-500" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "  'UI/UX Design'", color: "text-emerald-400" },
      { text: ",", color: "text-slate-500" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "  'Artificial Intelligence'", color: "text-emerald-400" },
      { text: ",", color: "text-slate-500" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "  'Digital Marketing'", color: "text-emerald-400" },
      { text: ",", color: "text-slate-500" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "];", color: "text-white" },
    ],
  },
  {
    type: "empty",
  },
  {
    type: "code",
    parts: [
      { text: "services", color: "text-white" },
      { text: ".map", color: "text-cyan-400" },
      { text: "(createSolution)", color: "text-white" },
      { text: ";", color: "text-slate-500" },
    ],
  },
];

export default function CodeEditor() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        group
        relative
        w-full
        overflow-hidden

        rounded-[24px]

        border
        border-white/[0.10]

        bg-[#06142a]

        shadow-[0_25px_70px_rgba(0,0,0,0.38)]

        transition-all
        duration-500

        hover:border-cyan-400/25
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
      "
    >
      

      <div
        className="
          pointer-events-none
          absolute
          -top-24
          left-1/2

          h-48
          w-96

          -translate-x-1/2

          rounded-full

          bg-cyan-400/[0.06]

          blur-[80px]

          transition-all
          duration-700

          group-hover:bg-cyan-400/[0.10]
        "
      />

      

      <div
        className="
          relative
          z-10

          flex
          h-14
          items-center
          justify-between

          border-b
          border-white/[0.07]

          bg-white/[0.025]

          px-5
        "
      >
      

        <div className="flex items-center gap-2">
          <span
            className="
              h-3
              w-3
              rounded-full
              bg-red-400
            "
          />

          <span
            className="
              h-3
              w-3
              rounded-full
              bg-yellow-400
            "
          />

          <span
            className="
              h-3
              w-3
              rounded-full
              bg-green-400
            "
          />
        </div>

    

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2

            text-xs
            font-medium
            tracking-wide

            text-white/45
          "
        >
          orbitix.tsx
        </div>

      

        <div
          className="
            flex
            items-center
            gap-2

            text-[11px]
            font-medium
            text-white/40
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-400
              shadow-[0_0_10px_rgba(34,211,238,0.8)]
            "
          />

          Live
        </div>
      </div>

      

      <div
        className="
          relative
          z-10

          px-5
          py-6

          sm:px-7
          sm:py-7

          font-mono
          text-[12px]
          leading-[2.25]

          sm:text-[13px]
          lg:text-[14px]
        "
      >
        <div className="flex">
         

          <div
            className="
              mr-5
              select-none

              text-right

              text-[11px]
              leading-[2.25]

              text-white/20

              sm:mr-7
              sm:text-xs
            "
          >
            {code.map((_, index) => (
              <div key={index}>
                {String(index + 1).padStart(2, "0")}
              </div>
            ))}
          </div>

        

          <div className="min-w-0 flex-1">
            {code.map((line, index) => {
              if (line.type === "empty") {
                return (
                  <div
                    key={index}
                    className="h-3"
                  />
                );
              }

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.35,
                  }}
                  className="whitespace-pre"
                >
                  {line.parts.map((part, partIndex) => (
                    <span
                      key={partIndex}
                      className={part.color}
                    >
                      {part.text}
                    </span>
                  ))}
                </motion.div>
              );
            })}

           

            <motion.span
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="
                ml-1
                text-cyan-400
              "
            >
              |
            </motion.span>
          </div>
        </div>
      </div>



      <div
        className="
          relative
          z-10

          flex
          items-center
          justify-between

          border-t
          border-white/[0.06]

          bg-white/[0.015]

          px-5
          py-3

          text-[10px]
          text-white/30
        "
      >
        <span>Orbitix Technology</span>

        <span className="text-cyan-400/70">
          Ready
        </span>
      </div>

      

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2

          h-px
          w-1/2

          -translate-x-1/2

          bg-cyan-400/40

          blur-[2px]

          transition-all
          duration-500

          group-hover:w-3/4
          group-hover:bg-cyan-400/70
        "
      />
    </motion.div>
  );
}