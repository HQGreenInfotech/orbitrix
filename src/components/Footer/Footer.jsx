import FooterLogo from "./FooterLogo";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Website Development",
    "Mobile App Development",
    "AI Solutions",
    "Robotics",
    "Digital Marketing",
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.08]
        bg-[#050A18]
        text-white
      "
    >
     

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/[0.035]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/[0.04]
          blur-[150px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          py-10
          sm:px-8
          lg:px-10
          lg:py-14
          xl:px-12
        "
      >
        

        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/[0.08]
            bg-[#0C1225]/95
            p-8
            shadow-[0_25px_80px_rgba(0,0,0,0.4)]
            backdrop-blur-xl
            sm:p-10
            lg:p-12
          "
        >
        

          <div
            className="
              pointer-events-none
              absolute
              left-10
              right-10
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-400/30
              to-transparent
            "
          />

         

          <div
            className="
              relative
              z-10
              grid
              gap-12
              lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr]
              lg:gap-10
            "
          >
           

            <FooterLogo />

          

            <div>
              <h3 className="text-lg font-bold text-white">Quick Links</h3>

              <div className="mt-7 space-y-5">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="
                      block
                      text-sm
                      text-slate-300
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-cyan-400
                    "
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

      

            <div>
              <h3 className="text-lg font-bold text-white">Services</h3>

              <div className="mt-7 space-y-5">
                {services.map((service) => (
                  <Link
                    key={service}
                    to="/services"
                    className="
                      block
                      text-sm
                      text-slate-300
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-cyan-400
                    "
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

          

            <div className="min-w-0">
              <h3 className="text-lg font-bold text-white">Contact</h3>

              <div className="mt-7 space-y-6">
              

                <a
                  href="tel:+918078611491"
                  className="
                    group
                    flex
                    items-start
                    gap-4
                  "
                >
                  <FaPhoneAlt
                    className="
                      mt-1
                      shrink-0
                      text-cyan-400
                    "
                  />

                  <span
                    className="
                      text-sm
                      text-slate-300
                      transition-colors
                      group-hover:text-cyan-400
                    "
                  >
                    +91 8078611491
                  </span>
                </a>

              

                <a
                  href="mailto:manager.orbitixtechnologies@gmail.com"
                  className="
                    group
                    flex
                    min-w-0
                    items-start
                    gap-4
                  "
                >
                  <FaEnvelope
                    className="
                      mt-1
                      shrink-0
                      text-cyan-400
                    "
                  />

                  <span
                    className="
                      min-w-0
                      break-all
                      text-sm
                      leading-6
                      text-slate-300
                      transition-colors
                      group-hover:text-cyan-400
                    "
                  >
                    manager.orbitixtechnologies@gmail.com
                  </span>
                </a>

                

                <a
                  href="mailto:admin.orbitixtechnologies@gmail.com"
                  className="
                    group
                    flex
                    min-w-0
                    items-start
                    gap-4
                  "
                >
                  <FaEnvelope
                    className="
                      mt-1
                      shrink-0
                      text-cyan-400
                    "
                  />

                  <span
                    className="
                      min-w-0
                      break-all
                      text-sm
                      leading-6
                      text-slate-300
                      transition-colors
                      group-hover:text-cyan-400
                    "
                  >
                    admin.orbitixtechnologies@gmail.com
                  </span>
                </a>

               

                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt
                    className="
                      mt-1
                      shrink-0
                      text-cyan-400
                    "
                  />

                  <span className="text-sm text-slate-300">
                    Udaipur, Rajasthan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          className="
            mt-8
            border-t
            border-white/[0.07]
            pt-6
            text-center
            text-sm
            text-slate-500
          "
        >
          © {new Date().getFullYear()} Orbitix Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
