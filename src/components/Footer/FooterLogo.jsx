import { socials } from "./footerData";

function FooterLogo() {
  return (
    <div>
      {/* Logo */}

      <img
        src="/logo.png"
        alt="Orbitix Technology"
        className="w-56"
      />

      {/* Description */}

      <p
        className="
          mt-8
          text-gray-600
          leading-8
          max-w-md
        "
      >
        Orbitix Technology empowers students,
        startups and businesses through
        modern software development,
        AI solutions, robotics,
        digital marketing and
        career-oriented training.
      </p>

      {/* Social Icons */}

      <div className="flex gap-4 mt-10">

        {socials.map((item, index) => {

          const Icon = item.icon;

          return (

            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="
                w-12
                h-12
                rounded-full
                bg-slate-100
                text-slate-700
                flex
                items-center
                justify-center
                shadow-md
                transition-all
                duration-300
                hover:bg-blue-600
                hover:text-white
                hover:-translate-y-2
              "
            >
              <Icon size={18} />
            </a>

          );

        })}

      </div>

    </div>
  );
}

export default FooterLogo;