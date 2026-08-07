import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import ServiceBackground from "../components/Services/ServiceBackground";
import BackgroundEffects from "../components/BackgroundEffects";

function MainLayout() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081B4B]">
      {/* Background */}
      <BackgroundEffects />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </main>
  );
}

export default MainLayout;