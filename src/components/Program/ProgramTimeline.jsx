import { motion } from "framer-motion";
import ProgramCard from "./ProgramCard";
import { roadmap } from "./programData";

function ProgramTimeline() {
  return (
    <section>
      
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
      >
        <span
          className="
            inline-flex
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/[0.06]
            px-4
            py-2
            text-xs
            font-semibold
            tracking-[0.18em]
            text-cyan-400
          "
        >
          LEARNING ROADMAP
        </span>

        <h2
          className="
            mt-6
            text-3xl
            font-black
            text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          Your{" "}
          <span className="text-cyan-400">
            3-Month Journey
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            leading-7
            text-slate-300
          "
        >
          A practical learning path designed to move you
          from fundamentals to real-world development and
          career preparation.
        </p>
      </motion.div>

   
      <div
        className="
          relative
          grid
          gap-6
          lg:grid-cols-3
        "
      >
      
        <div
          className="
            pointer-events-none
            absolute
            left-[16.66%]
            right-[16.66%]
            top-[-12px]
            hidden
            h-px
            bg-cyan-400/20
            lg:block
          "
        />

        {roadmap.map((item, index) => (
          <div key={item.month} className="relative">
           
            <div
              className="
                absolute
                left-1/2
                top-[-18px]
                z-20
                hidden
                h-3
                w-3
                -translate-x-1/2
                rounded-full
                border
                border-cyan-300/50
                bg-[#071838]
                lg:block
              "
            />

            <ProgramCard
              item={item}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgramTimeline;