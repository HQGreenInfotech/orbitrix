import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center">
  <img
    src="/orbitix.png"
    alt="Orbitix"
    className="
      h-16
      w-auto
      object-contain
    "
  />
</Link>
  );
}

export default Logo;