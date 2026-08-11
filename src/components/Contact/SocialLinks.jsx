import { socialLinks } from "./contactData";

function SocialLinks() {
  return (
    <div>
      <h3 className="mb-5 text-lg font-bold text-white">
        Follow Us
      </h3>

      <div className="flex flex-wrap gap-4">
        {socialLinks.map((item) => {
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
                h-14
                w-14
                cursor-pointer
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-110
                hover:shadow-[0_12px_30px_rgba(34,211,238,0.35)]
              "
            >
              <Icon
                size={22}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-6
                "
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SocialLinks;