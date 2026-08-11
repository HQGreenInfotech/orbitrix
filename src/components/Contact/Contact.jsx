import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#061638] py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[150px]" />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================
            HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl pt-5 text-center"
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
            Contact Us
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-white
              md:text-5xl
              lg:text-6xl
            "
          >
            Let's Build Something
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you need a website, software, AI solution, mobile app,
            branding, or digital marketing, we're here to help you grow your
            business.
          </p>
        </motion.div>

        {/* =========================
            CONTACT CONTENT
        ========================== */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <ContactInfo />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;