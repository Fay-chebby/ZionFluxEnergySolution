import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import {
  Sun,
  Zap,
  Shield,
  Wrench,
  Building2,
  Video,
  Battery,
  Settings,
  CheckCircle,
  ArrowRight,
  Cpu,
  FlaskConical,
} from "lucide-react";

const serviceCategories = [
  {
    id: 1,
    icon: Sun,
    title: "Solar & Renewable Energy Systems",
    description: "Comprehensive solar solutions from design to deployment",
    image:
      "https://images.unsplash.com/photo-1572182556191-7035e81ef95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGFmcmljYSUyMHN1bnNldHxlbnwxfHx8fDE3NzE4NTg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    systems: [
      "Grid-tied solar systems",
      "Hybrid solar + battery systems",
      "Fully off-grid systems",
      "Mini-grid installations",
      "Solar water pumping systems",
      "Solar water heating systems",
      "Heat pump systems",
      "Solar crop and food dryers",
      "Solar pool heating systems",
    ],
    components: [
      "Solar PV panels",
      "Lithium-ion and deep-cycle batteries",
      "Hybrid and off-grid inverters",
      "Charge controllers",
      "Mounting structures (roof & ground)",
      "DC and AC protection systems",
      "Solar cabling and accessories",
    ],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    icon: Zap,
    title: "Electrical Engineering Services",
    description: "Professional electrical solutions for all sectors",
    image:
      "https://images.unsplash.com/photo-1751486289947-4f5f5961b3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzc0OTcyMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    systems: [
      "Residential wiring and installations",
      "Commercial and industrial electrical installations",
      "Distribution board installation and upgrades",
      "Switchgear installations",
      "Lighting systems (indoor & outdoor)",
      "Solar floodlights",
      "Garden lighting",
      "Solar and grid-powered street lighting",
      "Electrical accessories supply and installation",
      "Electrical system upgrades and retrofits",
    ],
    components: [],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    icon: Battery,
    title: "Backup & Power Reliability Solutions",
    description: "Ensure uninterrupted power with our backup systems",
    image:
      "https://images.unsplash.com/photo-1759692071712-adc78a8516c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0b3IlMjBiYWNrdXAlMjBwb3dlcnxlbnwxfHx8fDE3NzQ5NzQ5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    systems: [
      "Generator supply & installation",
      "Generator hiring services",
      "Generator servicing & maintenance",
      "Solar-generator hybrid integration",
      "Battery retrofitting",
      "Critical load backup systems",
      "Energy optimization and load balancing",
    ],
    components: [],
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    icon: Building2,
    title: "Infrastructure & Specialized Systems",
    description: "Mission-critical infrastructure for telecom and utilities",
    image:
      "https://images.unsplash.com/photo-1606707724632-eff3d909ab7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdhdGVyJTIwcHVtcCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3NDk3NDkxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    systems: [
      "Telecom power systems",
      "Borehole electrical systems",
      "Water pumping infrastructure",
      "Energy distribution systems",
      "Institutional electrification projects",
    ],
    components: [],
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    icon: Video,
    title: "CCTV & Security Systems",
    description: "Advanced surveillance for grid and off-grid locations",
    image:
      "https://images.unsplash.com/photo-1658248709441-7012c89a933f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzc0OTc0OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    systems: [
      "Solar-powered CCTV systems",
      "Grid-powered (wired) CCTV systems",
      "Hybrid surveillance systems",
      "Commercial and institutional security monitoring solutions",
    ],
    components: [],
    color: "from-red-500 to-rose-600",
  },
  {
    id: 6,
    icon: Wrench,
    title: "Maintenance & Technical Support",
    description: "Keep your systems running at peak performance",
    image:
      "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    systems: [
      "Preventive maintenance programs",
      "System diagnostics and fault tracing",
      "Battery health analysis",
      "Performance optimization",
      "Inverter firmware updates",
      "Electrical system inspection and correction",
    ],
    components: [],
    color: "from-teal-500 to-cyan-600",
  },
];

const coreServices = [
  {
    icon: FlaskConical,
    title: "System Design & Engineering",
    description: "Custom solutions tailored to your needs",
  },
  {
    icon: Settings,
    title: "Equipment Supply",
    description: "Premium quality components from trusted brands",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Certified technicians, quality workmanship",
  },
  {
    icon: CheckCircle,
    title: "Testing & Commissioning",
    description: "Rigorous quality assurance protocols",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Proactive care for optimal performance",
  },
  {
    icon: Cpu,
    title: "System Upgrades",
    description: "Future-proof your energy infrastructure",
  },
];

export function ServicesOverviewPage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Comprehensive end-to-end energy solutions designed, delivered, and
              maintained by experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              End-to-End Service Delivery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial design to long-term maintenance, we handle every
              aspect of your energy project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our six core service areas, each backed by technical
              expertise and proven results
            </p>
          </div>

          <div className="space-y-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = selectedCategory === category.id;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                  {/* Card Header */}
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      setSelectedCategory(isExpanded ? null : category.id)
                    }
                  >
                    <div className="grid md:grid-cols-5 gap-6 p-8 items-center">
                      <div className="md:col-span-2">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="text-white" size={32} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {category.title}
                            </h3>
                            <p className="text-gray-600">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-40 object-cover rounded-xl"
                        />
                      </div>

                      <div className="md:col-span-1 text-center md:text-right">
                        <button
                          className={`px-6 py-3 bg-gradient-to-r ${category.color} text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2 mx-auto md:ml-auto`}
                        >
                          {isExpanded ? "See Less" : "Learn More"}
                          <ArrowRight
                            className={`transform transition-transform ${isExpanded ? "rotate-90" : ""}`}
                            size={20}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 bg-gray-50"
                    >
                      <div className="p-8 grid md:grid-cols-2 gap-8">
                        {/* Systems We Deploy */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Settings size={20} className="text-amber-500" />
                            Systems We Deploy
                          </h4>
                          <ul className="space-y-2">
                            {category.systems.map((system) => (
                              <li
                                key={system}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle
                                  size={18}
                                  className="text-green-500 flex-shrink-0 mt-0.5"
                                />
                                <span className="text-gray-700">{system}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Components (if any) */}
                        {category.components.length > 0 && (
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                              <Cpu size={20} className="text-amber-500" />
                              Components Supplied & Installed
                            </h4>
                            <ul className="space-y-2">
                              {category.components.map((component) => (
                                <li
                                  key={component}
                                  className="flex items-start gap-2"
                                >
                                  <CheckCircle
                                    size={18}
                                    className="text-green-500 flex-shrink-0 mt-0.5"
                                  />
                                  <span className="text-gray-700">
                                    {component}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Power Your Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your energy needs and design the perfect solution for
            your requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Request a Consultation
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
