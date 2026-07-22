import { FaPaperPlane } from "react-icons/fa";

function FooterNewsletter() {
  return (
    <div>
      {/* Heading */}

      <h3 className="text-2xl font-bold text-slate-900">
        Stay Updated
      </h3>

      <p className="mt-4 text-gray-600 leading-7 max-w-md">
        Subscribe to our newsletter and receive the latest updates
        about new courses, technology trends, AI innovations,
        workshops and exclusive offers from Orbitix Technology.
      </p>

      {/* Newsletter Form */}

      <form className="mt-8">
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >
          {/* Email Input */}

          <input
            type="email"
            placeholder="Enter your email address"
            className="
              flex-1
              h-14
              px-6
              rounded-full
              border
              border-gray-300
              outline-none
              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
              transition-all
              duration-300
            "
          />

          {/* Button */}

          <button
            type="submit"
            className="
              h-14
              px-8
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              font-semibold
              flex
              items-center
              justify-center
              gap-3
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
            "
          >
            Subscribe

            <FaPaperPlane />
          </button>
        </div>
      </form>

      {/* Bottom Text */}

      <div
        className="
          mt-6
          flex
          items-center
          gap-2
          text-sm
          text-gray-500
        "
      >
        <span className="w-2 h-2 rounded-full bg-green-500"></span>

        <p>
          Join <span className="font-semibold">1000+</span> learners and
          professionals already subscribed.
        </p>
      </div>
    </div>
  );
}

export default FooterNewsletter;