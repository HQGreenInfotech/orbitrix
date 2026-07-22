import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      <button
        className="
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-8
        py-4
        rounded-full
        font-semibold
        flex
        items-center
        gap-3
        transition
      "
      >
        Get Started

        <FaArrowRight />
      </button>

      <button
        className="
        border
        border-gray-300
        hover:border-blue-600
        hover:text-blue-600
        px-8
        py-4
        rounded-full
        font-semibold
        transition
      "
      >
        Explore Services
      </button>
    </div>
  )
}

export default HeroButtons