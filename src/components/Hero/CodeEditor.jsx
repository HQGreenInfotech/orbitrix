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
      { text: ",", color: "text-orange-400" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "  'Mobile Apps'", color: "text-emerald-400" },
      { text: ",", color: "text-orange-400" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "  'UI/UX Design'", color: "text-emerald-400" },
      { text: ",", color: "text-orange-400" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "  'Artificial Intelligence'", color: "text-emerald-400" },
      { text: ",", color: "text-orange-400" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "  'Digital Marketing'", color: "text-emerald-400" },
      { text: ",", color: "text-orange-400" },
    ],
  },
  {
    type: "code",
    parts: [
      { text: "];", color: "text-orange-400" },
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
      { text: ";", color: "text-orange-400" },
    ],
  },
];

export default function CodeEditor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="
        group
        relative
        w-full
        max-w-[700px]

        overflow-hidden
        rounded-[28px]

        border
        border-white/[0.14]

        bg-[#06142f]/90
        backdrop-blur-2xl

        shadow-[0_35px_100px_rgba(0,0,0,0.45)]

        transition-all
        duration-500

        hover:border-cyan-400/30
        hover:shadow-[0_35px_110px_rgba(6,182,212,0.15)]
      "
    >
      {/* ================================================= */}
      {/* TOP GLOW */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -top-24
          left-1/2

          h-48
          w-80

          -translate-x-1/2

          rounded-full
          bg-cyan-400/[0.08]

          blur-[70px]

          transition-all
          duration-700

          group-hover:bg-cyan-400/[0.14]
        "
      />

      {/* ================================================= */}
      {/* TOP BORDER LIGHT */}
      {/* ================================================= */}

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

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10

          flex
          h-16

          items-center
          justify-between

          border-b
          border-white/[0.10]

          bg-white/[0.025]

          px-5
          sm:px-6

          backdrop-blur-xl
        "
      >
        {/* Traffic lights */}

        <div className="flex items-center gap-2.5">
          <span
            className="
              h-3.5
              w-3.5
              rounded-full

              bg-red-400

              shadow-[0_0_12px_rgba(248,113,113,0.45)]
            "
          />

          <span
            className="
              h-3.5
              w-3.5
              rounded-full

              bg-yellow-400

              shadow-[0_0_12px_rgba(250,204,21,0.45)]
            "
          />

          <span
            className="
              h-3.5
              w-3.5
              rounded-full

              bg-green-400

              shadow-[0_0_12px_rgba(74,222,128,0.45)]
            "
          />
        </div>

        {/* File name */}

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2

            text-sm
            sm:text-base

            font-semibold
            tracking-wide

            text-slate-300
          "
        >
          videoCoding.jsx
        </div>

        {/* Live */}

        <div
          className="
            flex
            items-center
            gap-2

            text-xs
            sm:text-sm

            font-medium
            text-slate-400
          "
        >
          <span
            className="
              h-2
              w-2

              rounded-full

              bg-cyan-400

              shadow-[0_0_12px_rgba(34,211,238,0.9)]

              animate-pulse
            "
          />

          <span>Live</span>
        </div>
      </div>

      {/* ================================================= */}
      {/* CODE AREA */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10

          overflow-x-auto

          px-5
          py-7

          sm:px-7
          sm:py-8

          font-mono
          text-[14px]
          sm:text-[15px]
          lg:text-[16px]

          leading-[2.8]
        "
      >
        <div className="flex min-w-max">
          {/* Line numbers */}

          <div
            className="
              mr-6
              sm:mr-8

              select-none

              text-right

              text-[13px]
              sm:text-sm

              leading-[2.8]

              text-slate-600
            "
          >
            {code.map((_, index) => (
              <div key={index}>
                {String(index + 1).padStart(2, "0")}
              </div>
            ))}
          </div>

          {/* Code */}

          <div className="flex-1">
            {code.map((line, index) => {
              if (line.type === "empty") {
                return (
                  <div
                    key={index}
                    className="h-5"
                  />
                );
              }

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="
                    whitespace-pre
                    transition-all
                    duration-300
                  "
                >
                  {line.parts.map((part, partIndex) => (
                    <span
                      key={partIndex}
                      className={`
                        ${part.color}

                        transition-all
                        duration-300
                      `}
                    >
                      {part.text}
                    </span>
                  ))}
                </motion.div>
              );
            })}

            {/* Cursor */}

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

                drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]
              "
            >
              |
            </motion.span>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* BOTTOM LIGHT */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          bottom-0
          left-1/2

          h-px
          w-[45%]

          -translate-x-1/2

          bg-cyan-400/50

          blur-[2px]

          transition-all
          duration-500

          group-hover:w-[65%]
          group-hover:bg-cyan-400/80
        "
      />

      {/* ================================================= */}
      {/* CORNER GLOW */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          bottom-[-100px]
          right-[-100px]

          h-64
          w-64

          rounded-full

          bg-blue-500/[0.08]

          blur-[90px]
        "
      />
    </motion.div>
  );
}