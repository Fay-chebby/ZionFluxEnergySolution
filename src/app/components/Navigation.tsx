import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const services = [
    { name: "Solar PV Systems", path: "/services/solar" },
    { name: "Mini-Grids & Hybrid", path: "/services/mini-grids" },
    { name: "Battery Storage", path: "/services/battery" },
    { name: "Smart Monitoring", path: "/services/monitoring" },
    { name: "Energy Audits", path: "/services/audits" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <h1
                className={`font-bold text-lg ${isScrolled || location.pathname !== "/" ? "text-gray-900" : "text-white"}`}
              >
                ZionFlux Energy
              </h1>
              <p
                className={`text-xs ${
                  isScrolled || location.pathname !== "/"
                    ? "text-gray-500"
                    : "text-white"
                }`}
              >
                Light for Today, Power for Generations
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#056d4c] ${
                isScrolled || location.pathname !== "/"
                  ? "text-gray-700"
                  : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-[#056d4c] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-[#056d4c] flex items-center gap-1 ${
                  isScrolled || location.pathname !== "/"
                    ? "text-gray-700"
                    : "text-white"
                }`}
              >
                Solutions <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50  hover:text-[#056d4c]transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors hover:text-[#056d4c] ${
                isScrolled || location.pathname !== "/"
                  ? "text-gray-700"
                  : "text-white"
              }`}
            >
              Projects
            </Link>

            <Link
              to="/how-it-works"
              className={`text-sm font-medium transition-colors hover:text-[#056d4c] ${
                isScrolled || location.pathname !== "/"
                  ? "text-gray-700"
                  : "text-white"
              }`}
            >
              How It Works
            </Link>

            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors hover:text-[#056d4c] ${
                isScrolled || location.pathname !== "/"
                  ? "text-gray-700"
                  : "text-white"
              }`}
            >
              Pricing
            </Link>

            {/* <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-[#056d4c] ${
                isScrolled || location.pathname !== "/"
                  ? "text-gray-700"
                  : "text-white"
              }`}
            >
              Blog
            </Link> */}

            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-[#056d4c] to-[#044f38] text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled || location.pathname !== "/" ? "text-gray-900" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors"
              >
                About
              </Link>
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "mobile-services"
                        ? null
                        : "mobile-services",
                    )
                  }
                  className="w-full text-left text-gray-700 font-medium hover:text-amber-600 transition-colors flex items-center justify-between"
                >
                  Solutions <ChevronDown size={16} />
                </button>
                {activeDropdown === "mobile-services" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block text-gray-600 hover:text-amber-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/projects"
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors"
              >
                How It Works
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors"
              >
                Pricing
              </Link>
              {/* <Link
                to="/blog"
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors"
              >
                Blog
              </Link> */}
              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-medium text-center"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
