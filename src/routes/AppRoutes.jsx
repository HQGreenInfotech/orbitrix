import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";
import AboutMore from "../pages/AboutMore";
import ProgramPage from "../pages/ProgramPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/about-more" element={<AboutMore />} />

        <Route path="/services" element={<Services />} />

        <Route path="/program" element={<ProgramPage />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;