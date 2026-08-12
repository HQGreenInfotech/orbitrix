import { motion } from "framer-motion";
import WhyImage from "./WhyImage";
import WhyCard from "./WhyCard";
import { whyChoose } from "./whyData";

function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="
        relative
        overflow-hidden
        bg-[#050A16]
        py-24
        sm:py-28
        lg:py-32
      "
    >
     

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[-180px]
            top-[25%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-violet-500/[0.08]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-180px]
            bottom-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-emerald-400/[0.06]
            blur-[150px]
          "
        />
      </div>

   

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
       

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-400/20
              bg-violet-400/[0.08]
              px-5
              py-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[3px]
              text-violet-300
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Why Choose Us
          </span>

          <h2
            className="
              mt-7
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-1.5px]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Technology With
            <br />

            <span
              className="
                bg-gradient-to-r
                from-violet-400
                via-fuchsia-400
                to-emerald-300
                bg-clip-text
                text-transparent
              "
            >
              Purpose & Impact
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
              sm:leading-8
            "
          >
            We combine technology, creativity and practical thinking to
            build digital solutions that are reliable, scalable and designed
            around real business needs.
          </p>
        </motion.div>

     

        <div
          className="
            mt-16
            grid
            items-center
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >
         

          <WhyImage />

       

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[3px]
                text-emerald-400
              "
            >
              Built For Growth
            </span>

            <h3
              className="
                mt-4
                max-w-xl
                text-3xl
                font-black
                leading-tight
                text-white
                sm:text-4xl
              "
            >
              More than development.
              <span className="text-slate-500">
                {" "}
                We build digital experiences that move businesses forward.
              </span>
            </h3>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-8
                text-slate-400
              "
            >
              From modern websites and applications to AI-powered tools,
              educational platforms and custom software, our approach
              focuses on performance, usability and long-term value.
            </p>

         

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-4
                "
              >
                <p className="text-sm font-semibold text-white">
                  Business First
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Technology aligned with your actual goals.
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-4
                "
              >
                <p className="text-sm font-semibold text-white">
                  Modern Stack
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Reliable tools built for modern products.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      

        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-slate-500
                "
              >
                Our Difference
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-white
                  sm:text-3xl
                "
              >
                Why businesses choose Orbitix
              </h3>
            </div>
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {whyChoose.map((item, index) => (
              <WhyCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;