import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

function FooterContact() {
  return (
    <div>
      <h3 className="mb-8 text-xl font-bold text-white">
        Contact
      </h3>

      <div className="space-y-5">

        {/* Phone */}
        <div className="flex items-start gap-4">
          <FaPhone
            className="
              mt-1
              shrink-0
              text-cyan-400
              text-lg
            "
          />

          <a
            href="tel:+918078611491"
            className="text-white/80 transition hover:text-cyan-400"
          >
            +91 8078611491
          </a>
        </div>

        {/* Manager Email */}
        <div className="flex items-start gap-4">
          <FaEnvelope
            className="
              mt-1
              shrink-0
              text-cyan-400
              text-lg
            "
          />

          <a
            href="mailto:manager.orbitixtechnologies@gmail.com"
            className="
              min-w-0
              break-all
              text-white/80
              transition
              hover:text-cyan-400
            "
          >
            manager.orbitixtechnologies@gmail.com
          </a>
        </div>

        {/* Admin Email */}
        <div className="flex items-start gap-4">
          <FaEnvelope
            className="
              mt-1
              shrink-0
              text-cyan-400
              text-lg
            "
          />

          <a
            href="mailto:admin.orbitixtechnologies@gmail.com"
            className="
              min-w-0
              break-all
              text-white/80
              transition
              hover:text-cyan-400
            "
          >
            admin.orbitixtechnologies@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <FaLocationDot
            className="
              mt-1
              shrink-0
              text-cyan-400
              text-lg
            "
          />

          <span className="text-white/80">
          
         Udaipur, Rajasthan, India
          </span>
        </div>

      </div>
    </div>
  );
}

export default FooterContact;