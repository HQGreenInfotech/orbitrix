import { socials } from "./footerData";

function FooterLogo() {
  return (
    <div className="relative">
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-cyan-500/[0.06]
          blur-[100px]
        "
      />

      <div className="relative z-10">
        {/* Logo */}
        <img
          src="/orbitix.png"
          alt="Orbitix Technology"
          className="
            h-auto
            w-44
            object-contain
            sm:w-48
          "
        />

        {/* Description */}
        <p
          className="
            mt-7
            max-w-sm
            text-sm
            leading-8
            text-slate-300
          "
        >
          Orbitix Technology empowers students, startups and businesses
          through modern software development, AI solutions, robotics,
          digital marketing and career-oriented training.
        </p>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          {socials.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-slate-100
                  text-slate-700
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                  hover:bg-cyan-400
                  hover:text-white
                  hover:shadow-[0_10px_30px_rgba(34,211,238,0.25)]
                "
              >
                <Icon
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FooterLogo;