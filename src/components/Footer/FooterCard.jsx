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
      

      <div className="grid lg:grid-cols-5 gap-12">

      

        <div className="lg:col-span-2">
          <FooterLogo />
        </div>

      

        <FooterLinks
          title="Quick Links"
          links={quickLinks}
        />

    

        <FooterLinks
          title="Services"
          links={services}
        />

    

        <FooterLinks
          title="Programs"
          links={programs}
        />

      </div>

     

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