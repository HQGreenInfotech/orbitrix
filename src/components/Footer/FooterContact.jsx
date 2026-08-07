import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function FooterContact() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold text-white">
        Contact
      </h3>

      <div className="space-y-5 text-slate-300">

        <div className="flex items-start gap-3">
          <FaPhoneAlt className="mt-1 text-cyan-400" />
          <span>+91 8078611491</span>
        </div>

        <div className="flex items-start gap-3">
          <FaEnvelope className="mt-1 text-cyan-400" />
          <span>
            manager.orbitixtechnologies@gmail.com
          </span>
        </div>
        <div className="flex items-start gap-3">
          <FaEnvelope className="mt-1 text-cyan-400" />
          <span>
            admin.orbitixtechnologies@gmail.com
          </span>
        </div>

        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="mt-1 text-cyan-400" />
          <span>
            Durgapur, West Bengal
          </span>
        </div>

      </div>
    </div>
  );
}

export default FooterContact;