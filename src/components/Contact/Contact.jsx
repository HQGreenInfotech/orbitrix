import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#061322] py-24">
      {/* Background Blur */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 pt-10 max-w-4xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-6
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-cyan-400
            "
          >
            Contact US
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Let's Build Something
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you need a website, software, AI solution, mobile app,
            branding, or digital marketing, we're here to help you grow your
            business.
          </p>
        </motion.div>

        {/* Contact Section */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;