import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", form);

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        backdrop-blur-xl
        lg:p-10
      "
    >
      

      <h2 className="text-3xl font-black text-white">
        Send Us a Message
      </h2>

      <p className="mt-3 text-slate-300">
        Fill out the form below and we'll get back to you shortly.
      </p>

     

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            mt-6
            rounded-xl
            border
            border-green-400/20
            bg-green-400/10
            p-4
            text-sm
            font-medium
            text-green-300
          "
        >
          Message submitted successfully!
        </motion.div>
      )}

     

      <div className="mt-8 space-y-5">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            text-white
            placeholder:text-slate-400
            outline-none
            transition
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-400/20
          "
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            text-white
            placeholder:text-slate-400
            outline-none
            transition
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-400/20
          "
        />

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            text-white
            placeholder:text-slate-400
            outline-none
            transition
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-400/20
          "
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            text-white
            outline-none
            transition
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-400/20
          "
        >
          <option value="" className="bg-[#081B4B]">
            Select Service
          </option>

          <option className="bg-[#081B4B]">
            Website Development
          </option>

          <option className="bg-[#081B4B]">
            Software Development
          </option>

          <option className="bg-[#081B4B]">
            Mobile App Development
          </option>

          <option className="bg-[#081B4B]">
            AI Solutions
          </option>

          <option className="bg-[#081B4B]">
            Digital Marketing
          </option>

          <option className="bg-[#081B4B]">
            Educational Coding
          </option>

          <option className="bg-[#081B4B]">
            Robotics
          </option>

          <option className="bg-[#081B4B]">
            Logo Design
          </option>
        </select>

        <textarea
          rows={6}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message..."
          required
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            text-white
            placeholder:text-slate-400
            outline-none
            transition
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-400/20
          "
        />

        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 15px 40px rgba(34,211,238,.25)",
          }}
          whileTap={{
            scale: 0.97,
          }}
          type="submit"
          className="
            flex
            w-full
            cursor-pointer
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            py-4
            font-bold
            text-white
            shadow-lg
            transition-all
            duration-300
          "
        >
          Send Message
          <FaPaperPlane />
        </motion.button>
      </div>
    </motion.form>
  );
}

export default ContactForm;