import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        justify-between
        items-center
        gap-6
      "
    >
      {/* Copyright */}

      <p className="text-gray-600 text-center lg:text-left">
        © {year}{" "}
        <span className="font-semibold text-slate-900">
          Orbitix Technology
        </span>
        . All Rights Reserved.
      </p>

      {/* Footer Links */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-6
          text-gray-600
        "
      >
        <NavLink
          to="/privacy-policy"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Privacy Policy
        </NavLink>

        <NavLink
          to="/terms"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Terms & Conditions
        </NavLink>

        <NavLink
          to="/cookies"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Cookie Policy
        </NavLink>
      </div>

      {/* Made With */}

      <div
        className="
          flex
          items-center
          gap-2
          text-gray-600
        "
      >
        <span>Made with</span>


        <span>care in Durgapur, West Bengal</span>
      </div>
    </div>
  );
}

export default FooterBottom;