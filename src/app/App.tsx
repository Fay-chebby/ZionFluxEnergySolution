import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PricingPage } from "./pages/PricingPage";
// import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { SolarPVPage } from "./pages/services/SolarPVPage";
import { MiniGridsPage } from "./pages/services/MiniGridsPage";
import { BatteryStoragePage } from "./pages/services/BatteryStoragePage";
import { MonitoringPage } from "./pages/services/MonitoringPage";
import { EnergyAuditPage } from "./pages/services/EnergyAuditPage";
import { ServicesOverviewPage } from "./pages/ServicesOverviewPage";
import { WhoWeServePage } from "./pages/WhoWeServePage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesOverviewPage />} />
            <Route path="/who-we-serve" element={<WhoWeServePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            {/* <Route path="/blog" element={<BlogPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/services/solar" element={<SolarPVPage />} />
            <Route path="/services/mini-grids" element={<MiniGridsPage />} />
            <Route path="/services/battery" element={<BatteryStoragePage />} />
            <Route path="/services/monitoring" element={<MonitoringPage />} />
            <Route path="/services/audits" element={<EnergyAuditPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
