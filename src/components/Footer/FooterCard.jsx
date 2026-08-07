import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

import {
  quickLinks,
  services,
} from "./footerData";

function FooterCard() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      lg:p-12
      shadow-[0_20px_60px_rgba(0,0,0,.35)]
    "
    >
      <div className="grid gap-10 lg:grid-cols-4">

        <div>
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

        <FooterContact />

      </div>

      <div className="mt-10 border-t border-white/10 pt-6">
        <FooterBottom />
      </div>
    </div>
  );
}

export default FooterCard;