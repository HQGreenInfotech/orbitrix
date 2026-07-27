import { socialLinks } from "./contactData";

function SocialLinks() {
  return (
    <div className="flex gap-4 mt-8">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12
              h-12
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              hover:scale-110
              hover:bg-blue-700
              transition-all
              duration-300
            "
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;