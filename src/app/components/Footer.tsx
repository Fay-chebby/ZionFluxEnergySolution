import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">ZionFlux Energy</h3>
                <p className="text-xs text-gray-400">Solutions Ltd.</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Light for Today, Power for Generations. Transforming Africa
              through sustainable energy.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-amber-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-amber-500 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-amber-500 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-amber-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/services/solar"
                  className="hover:text-amber-500 transition-colors"
                >
                  Solar PV Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mini-grids"
                  className="hover:text-amber-500 transition-colors"
                >
                  Mini-Grids
                </Link>
              </li>
              <li>
                <Link
                  to="/services/battery"
                  className="hover:text-amber-500 transition-colors"
                >
                  Battery Storage
                </Link>
              </li>
              <li>
                <Link
                  to="/services/audits"
                  className="hover:text-amber-500 transition-colors"
                >
                  Energy Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for energy tips and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg hover:shadow-lg transition-all">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} ZionFlux Energy Solutions Ltd. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
