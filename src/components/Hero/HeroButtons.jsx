import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      <button
        className="
       px-8
py-4
rounded-full
bg-gradient-to-r
from-cyan-500
to-blue-600
hover:from-cyan-400
hover:to-blue-500
text-white
font-semibold
shadow-xl
shadow-cyan-500/20
transition-all
duration-300
hover:scale-105
flex
items-center
gap-3
cursor-pointer
        
      "
      >
        Get Free Consultation
        <FaArrowRight />
      </button>
      <Link to="/services">
        <button
          className="
       px-8
py-4
rounded-full
border
border-white/15
bg-white/5
backdrop-blur-xl
text-white
font-semibold
hover:bg-white/10
hover:border-cyan-400/30
transition-all
duration-300
cursor-pointer
      "
        >
          Explore Services
        </button>
      </Link>
    </div>
  );
}

export default HeroButtons;
