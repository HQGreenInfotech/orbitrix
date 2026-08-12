import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BackgroundEffects from "../components/BackgroundEffects";

function MainLayout() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081B4B]">
      
      <BackgroundEffects />

    
      <div className="relative z-10">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </main>
  );
}

export default MainLayout;