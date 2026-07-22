import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import { contactInfo } from "./footerData";

const icons = [
  <FaMapMarkerAlt />,
  <FaPhoneAlt />,
  <FaEnvelope />,
];

function FooterContact() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-8">
        Contact Us
      </h3>

      <div className="space-y-6">

        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-5
              p-5
              rounded-2xl
              bg-slate-50
              hover:bg-blue-50
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                text-lg
                shrink-0
              "
            >
              {icons[index]}
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-1 leading-7">
                {item.value}
              </p>
            </div>
          </div>
        ))}

        {/* Working Hours */}

        <div
          className="
            flex
            items-start
            gap-5
            p-5
            rounded-2xl
            bg-slate-50
            hover:bg-blue-50
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              text-lg
            "
          >
            <FaClock />
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Working Hours
            </h4>

            <p className="text-gray-600 mt-1">
              Mon - Sat
            </p>

            <p className="text-gray-600">
              9:00 AM – 7:00 PM
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FooterContact;