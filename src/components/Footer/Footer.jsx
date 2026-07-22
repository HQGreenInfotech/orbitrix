import FooterCard from "./FooterCard";
import FooterTopCTA from "./FooterTopCTA";

function Footer() {
  return (
    <footer className="relative bg-slate-950 pt-28 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div
        className="
          absolute
          -top-52
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-500/20
          blur-[180px]
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* CTA */}
        <FooterTopCTA />

        {/* Footer Card */}
        <div className="mt-16">
          <FooterCard />
        </div>
      </div>
    </footer>
  );
}

export default Footer;