import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span className="text-cyan-400 font-semibold tracking-widest">
        ABOUT ORBITIX
      </span>

      <h2 className="text-5xl mt-5 font-bold leading-tight text-white">
        We Build
        <span className="text-cyan-400">
          {" "}Modern Digital Solutions
        </span>
      </h2>

      <p className="mt-8 text-slate-300 leading-8">
        Orbitix Technologies provides Website Development,
        Software Development, AI Solutions, Robotics,
        Educational Coding, Mobile Apps and Digital Marketing
        under one roof.
      </p>

     <Link
  to="/about-more"
  className="
inline-flex
items-center
justify-center
mt-10
px-8
py-4
rounded-xl
bg-cyan-500
hover:bg-cyan-600
text-white
font-semibold
transition
  "
>
  Explore More
</Link>
    </motion.div>
  );
}

export default AboutContent;