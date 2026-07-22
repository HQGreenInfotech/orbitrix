import { contactInfo } from "./contactData";
import SocialLinks from "./SocialLinks";

function ContactInfo() {
  return (
    <div>
      <span className="text-blue-600 font-bold uppercase">
        Contact Us
      </span>

      <h2 className="text-5xl font-black mt-4">
        Let's Build Something Amazing Together
      </h2>

      <p className="text-gray-500 mt-6 leading-8">
        Whether you're looking for website development,
        software solutions, AI integration, robotics training,
        or educational programs, we're here to help.
      </p>

      <div className="space-y-6 mt-10">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl">
                <Icon />
              </div>

              <div>
                <h4 className="font-bold">
                  {item.title}
                </h4>

                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-500 hover:text-blue-600"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-500">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <SocialLinks />
    </div>
  );
}

export default ContactInfo;