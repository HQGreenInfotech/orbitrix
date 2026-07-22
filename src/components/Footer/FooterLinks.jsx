import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function FooterLinks({ title, links }) {
  return (
    <div>
      {/* Heading */}

      <h3 className="text-xl font-bold text-slate-900 mb-8">
        {title}
      </h3>

      {/* Links */}

      <ul className="space-y-5">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `
                group
                flex
                items-center
                gap-3
                text-gray-600
                transition-all
                duration-300
                ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }
              `
              }
            >
              <FaArrowRight
                className="
                  text-xs
                  opacity-0
                  -translate-x-2
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all
                  duration-300
                "
              />

              <span>{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;