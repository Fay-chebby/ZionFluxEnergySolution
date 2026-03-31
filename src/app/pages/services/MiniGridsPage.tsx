import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import {
  Zap,
  Battery,
  Shield,
  TrendingUp,
  CheckCircle,
  Users,
  DollarSign,
} from "lucide-react";
import minigrid from "../../../assets/minigrid.png";
import battery from "../../../assets/The Best Wall-Mounted Battery Solution for Modern Energy Needs_ Why RICHYE Stands Out - RICHYE.jpg";
// import solar from "../../assets/MachineQ Launches IoT Power Monitoring Solution to Revolutionize Energy Management.jpg";

const features = [
  {
    icon: Zap,
    title: "Grid Independence",
    description:
      "Complete autonomy from unreliable grid power with self-sustaining systems",
  },
  {
    icon: Battery,
    title: "Hybrid Flexibility",
    description:
      "Seamlessly integrate solar, grid, and generator power for optimal reliability",
  },
  {
    icon: Shield,
    title: "Uninterrupted Power",
    description: "Automatic switching ensures continuous power supply 24/7",
  },
  {
    icon: TrendingUp,
    title: "Scalable Design",
    description: "Expand capacity as your energy needs grow over time",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Reduce diesel dependency and operational costs by up to 80%",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Power entire communities with sustainable, shared energy solutions",
  },
];

const systemTypes = [
  {
    title: "Solar-Grid Hybrid",
    description:
      "Smart integration with grid power, using solar first and grid as backup",
    applications: ["Commercial buildings", "Factories", "Residential estates"],
    savings: "Up to 60% grid cost reduction",
    image:
      "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Community Mini-Grids",
    description:
      "Standalone power networks serving multiple households and businesses",
    applications: [
      "Rural villages",
      "Island communities",
      "Off-grid settlements",
    ],
    savings: "Affordable electricity access",
    image: minigrid,
  },
  {
    title: "Battery-First Hybrid",
    description:
      "Advanced battery storage with intelligent power management and backup",
    applications: ["Data centers", "Hospitals", "Critical facilities"],
    savings: "Zero downtime guarantee",
    image: battery,
  },
];

const components = [
  "High-efficiency solar PV panels",
  "Lithium-ion or lead-acid battery banks",
  "Hybrid inverters with smart switching",
  "Charge controllers (MPPT technology)",
  "Generator integration modules",
  "Smart energy management systems",
  "Distribution network infrastructure",
  "Monitoring and control systems",
];

export function MiniGridsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1683616503522-778b50c2ad1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pJTIwZ3JpZCUyMHZpbGxhZ2V8ZW58MXx8fHwxNzc0OTc2OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mini-Grids & Hybrid Systems"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6">
              <Zap className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Mini-Grids & Hybrid Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Empowering rural and off-grid areas with reliable, sustainable
              hybrid energy solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#056d4c] to-[#044f38] text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Request a Quote
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hybrid Systems?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The perfect balance of renewable energy, reliability, and
              cost-effectiveness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hybrid System Types
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Custom-designed solutions for every application and location
            </p>
          </div>

          <div className="space-y-8">
            {systemTypes.map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div
                  className={`grid md:grid-cols-2 gap-0 ${index % 2 !== 0 ? "md:grid-flow-dense" : ""}`}
                >
                  <div
                    className={`relative h-80 md:h-auto ${index % 2 !== 0 ? "md:col-start-2" : ""}`}
                  >
                    <img
                      src={system.image}
                      alt={system.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-[#056d4c]  text-white px-4 py-2 rounded-full inline-block font-semibold">
                        {system.savings}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {system.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {system.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                        Ideal Applications:
                      </h4>
                      <div className="space-y-2">
                        {system.applications.map((app) => (
                          <div key={app} className="flex items-center gap-2">
                            <CheckCircle
                              size={18}
                              className="text-green-500 flex-shrink-0"
                            />
                            <span className="text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              System Components
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Premium quality components for reliable, long-lasting performance
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {components.map((component, index) => (
                <motion.div
                  key={component}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-lg shadow-md p-4 border border-gray-100"
                >
                  <CheckCircle
                    className="text-green-500 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-gray-700 font-medium">{component}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Go Off-Grid or Hybrid?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's design a custom hybrid or mini-grid solution for your location
            and needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
            >
              Calculate Savings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
