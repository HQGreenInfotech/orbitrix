import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const socials = [
  {
    icon: FaFacebook,
    url: "#",
  },
  {
    icon: FaGithub,
    url: "#",
  },
  {
    icon: FaLinkedin,
    url: "#",
  },
  {
    icon: FaInstagram,
    url: "#",
  },
];

function SocialIcons() {
  return (
    <div className="flex gap-4">
      {socials.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.url}
            className="
            w-11
            h-11
            rounded-xl
            bg-slate-800
            hover:bg-blue-600
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:-translate-y-1
          "
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;