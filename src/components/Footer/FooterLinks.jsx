import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold text-white">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `
                group
                inline-flex
                items-center
                gap-2
                text-sm
                transition-all
                duration-300
                ${
                  isActive
                    ? "font-semibold text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }
                `
              }
            >
              <FaArrowRight
                className="
                  text-[10px]
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