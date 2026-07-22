import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

import {
  quickLinks,
  services,
  programs,
} from "./footerData";

function FooterCard() {
  return (
    <div
      className="
        bg-white
        rounded-[40px]
        shadow-[0_25px_80px_rgba(0,0,0,0.15)]
        px-8
        md:px-12
        py-12
      "
    >
      {/* Top Section */}

      <div className="grid lg:grid-cols-5 gap-12">

        {/* Logo */}

        <div className="lg:col-span-2">
          <FooterLogo />
        </div>

        {/* Quick Links */}

        <FooterLinks
          title="Quick Links"
          links={quickLinks}
        />

        {/* Services */}

        <FooterLinks
          title="Services"
          links={services}
        />

        {/* Programs */}

        <FooterLinks
          title="Programs"
          links={programs}
        />

      </div>

      {/* Newsletter */}

      <div
        className="
          mt-16
          pt-12
          border-t
          border-gray-200
        "
      >
        <FooterNewsletter />
      </div>

      {/* Bottom */}

      <div
        className="
          mt-12
          pt-8
          border-t
          border-gray-200
        "
      >
        <FooterBottom />
      </div>
    </div>
  );
}

export default FooterCard;