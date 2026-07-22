import { useState } from "react";

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
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl p-8 space-y-5"
    >
      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        className="w-full border rounded-xl p-4 outline-none"
      />

      <input
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
        className="w-full border rounded-xl p-4 outline-none"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        className="w-full border rounded-xl p-4 outline-none"
      />

      <select
        name="service"
        onChange={handleChange}
        className="w-full border rounded-xl p-4"
      >
        <option>Select Service</option>

        <option>Website Development</option>

        <option>Software Development</option>

        <option>Digital Marketing</option>

        <option>Educational Coding</option>

        <option>Robotics</option>

        <option>Logo Design</option>
      </select>

      <textarea
        rows="5"
        name="message"
        placeholder="Write your message..."
        onChange={handleChange}
        className="w-full border rounded-xl p-4"
      />

      <button
        className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;