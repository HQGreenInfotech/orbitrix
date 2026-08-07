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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
        space-y-6
      "
    >
      <h3 className="text-3xl font-black text-white">
        Send Us a Message
      </h3>

      <p className="text-slate-300">
        Fill out the form below and we'll get back to you shortly.
      </p>

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

        <option className="bg-[#081B4B]">Website Development</option>
        <option className="bg-[#081B4B]">Software Development</option>
        <option className="bg-[#081B4B]">Mobile App Development</option>
        <option className="bg-[#081B4B]">AI Solutions</option>
        <option className="bg-[#081B4B]">Digital Marketing</option>
        <option className="bg-[#081B4B]">Educational Coding</option>
        <option className="bg-[#081B4B]">Robotics</option>
        <option className="bg-[#081B4B]">Logo Design</option>
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
          rounded-xl
          border
          border-white/10
          bg-white/5
          p-4
          text-white
          placeholder:text-slate-400
          outline-none
          resize-none
          transition
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-400/20
        "
      />

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
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
          hover:shadow-[0_15px_40px_rgba(34,211,238,.35)]
        "
      >
        Send Message
        <FaPaperPlane />
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;