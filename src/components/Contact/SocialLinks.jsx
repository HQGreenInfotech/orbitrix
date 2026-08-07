import { socialLinks } from "./contactData";

function SocialLinks() {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold text-white mb-5">
        Follow Us
      </h3>

      <div className="flex flex-wrap gap-4">
        {socialLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
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
                hover:-translate-y-1
                hover:scale-110
                hover:shadow-[0_12px_30px_rgba(34,211,238,.35)]
              "
            >
              <Icon
                size={22}
                className="transition-transform duration-300 group-hover:rotate-6"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SocialLinks;