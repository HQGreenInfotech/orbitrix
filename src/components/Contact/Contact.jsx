import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-50"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
}

export default Contact;