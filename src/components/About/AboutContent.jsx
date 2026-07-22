import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span className="text-blue-600 font-semibold">
        ABOUT ORBITIX
      </span>

      <h2 className="text-5xl font-bold mt-4 leading-tight">
        We Build
        <span className="text-blue-600">
          {" "}Modern Digital Solutions
        </span>
      </h2>

      <p className="mt-8 text-gray-600 leading-8">
        Orbitix Technology provides Website Development,
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
    rounded-full
    bg-blue-600
    text-white
    font-semibold
    cursor-pointer
    transition-all
    duration-300
    hover:bg-blue-700
    hover:scale-105
    hover:shadow-lg
  "
>
  Explore More
</Link>
    </motion.div>
  );
}

export default AboutContent;