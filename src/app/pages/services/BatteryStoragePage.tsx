import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import {
  Battery,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  Activity,
  DollarSign,
  Cpu,
} from "lucide-react";
import battery from "../../../assets/The Best Wall-Mounted Battery Solution for Modern Energy Needs_ Why RICHYE Stands Out - RICHYE.jpg";
import lithium from "../../../assets/ExpertPower 12V 10Ah Lithium LiFePO4 Deep Cycle Rechargeable Battery _ 2500-7000 Life Cycles & 10-Year lifetime _ Built-in BMS.jpg";

const features = [
  {
    icon: Clock,
    title: "Energy Independence",
    description:
      "Store excess solar energy for use during nights and cloudy days",
  },
  {
    icon: Shield,
    title: "Backup Power",
    description: "Seamless transition during power outages with instant backup",
  },
  {
    icon: DollarSign,
    title: "Peak Shaving",
    description:
      "Reduce electricity costs by avoiding expensive peak-hour rates",
  },
  {
    icon: Activity,
    title: "Load Shifting",
    description:
      "Use stored energy during high-demand periods to optimize costs",
  },
  {
    icon: Cpu,
    title: "Smart Management",
    description:
      "Intelligent battery management systems for maximum efficiency",
  },
  {
    icon: TrendingUp,
    title: "Scalable Capacity",
    description: "Modular design allows easy expansion as your needs grow",
  },
];

const batteryTypes = [
  {
    title: "Lithium-Ion (LiFePO4)",
    description: "Premium performance with long lifespan and high efficiency",
    specs: {
      lifespan: "10-15 years",
      cycles: "6,000-10,000 cycles",
      efficiency: "95-98%",
      dod: "80-100% DoD",
    },
    pros: [
      "Longest lifespan",
      "Fastest charging",
      "Maintenance-free",
      "Compact & lightweight",
    ],
    bestFor: [
      "Commercial installations",
      "High-end residential",
      "Critical applications",
    ],
    image: lithium,

    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Deep-Cycle Lead-Acid",
    description: "Proven technology with excellent value for off-grid systems",
    specs: {
      lifespan: "3-7 years",
      cycles: "1,500-3,000 cycles",
      efficiency: "80-85%",
      dod: "50-80% DoD",
    },
    pros: [
      "Cost-effective",
      "Proven reliability",
      "Wide availability",
      "Recyclable",
    ],
    bestFor: ["Budget-conscious projects", "Off-grid homes", "Backup systems"],
    image: battery,

    color: "from-amber-500 to-orange-600",
  },
  // {
  //   title: "Gel & AGM Batteries",
  //   description: "Sealed, maintenance-free batteries for reliable performance",
  //   specs: {
  //     lifespan: "5-8 years",
  //     cycles: "2,000-3,500 cycles",
  //     efficiency: "85-90%",
  //     dod: "70-80% DoD",
  //   },
  //   pros: [
  //     "Maintenance-free",
  //     "Spill-proof design",
  //     "Deep discharge tolerance",
  //     "Good temperature range",
  //   ],
  //   bestFor: ["Marine applications", "Remote locations", "Telecom towers"],
  //   image:
  //     "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  //   color: "from-amber-500 to-orange-600",
  // },
];

const applications = [
  {
    title: "Residential Energy Storage",
    description: "Store solar energy for evening use and emergency backup",
    capacity: "5-20 kWh",
    icon: "🏠",
  },
  {
    title: "Commercial Backup",
    description: "Protect business operations from power interruptions",
    capacity: "20-100 kWh",
    icon: "🏢",
  },
  {
    title: "Industrial Load Management",
    description: "Optimize energy costs and ensure production continuity",
    capacity: "100+ kWh",
    icon: "🏭",
  },
  {
    title: "Off-Grid Systems",
    description: "Complete energy independence for remote locations",
    capacity: "10-50 kWh",
    icon: "🌍",
  },
  {
    title: "Telecom & Infrastructure",
    description: "Reliable power for critical communication systems",
    capacity: "5-30 kWh",
    icon: "📡",
  },
  {
    title: "Electric Vehicle Charging",
    description: "Smart charging solutions with battery buffering",
    capacity: "50-200 kWh",
    icon: "🚗",
  },
];

export function BatteryStoragePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="src\assets\The Best Wall-Mounted Battery Solution for Modern Energy Needs_ Why RICHYE Stands Out - RICHYE.jpg"
            alt="Battery Storage Solutions"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#056d4c] to-[#044f38] rounded-full mb-6">
              <Battery className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Battery Storage Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Advanced energy storage for reliability, autonomy, and optimal
              performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#056d4c] to-[#044f38] text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Request a Quote
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
              >
                Calculate Storage
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
              Why Battery Storage?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Store energy when it's abundant, use it when you need it most
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

      {/* Battery Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Battery Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right battery technology for your needs and budget
            </p>
          </div>

          <div className="space-y-12">
            {batteryTypes.map((battery, index) => (
              <motion.div
                key={battery.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                      src={battery.image}
                      alt={battery.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-8 md:p-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {battery.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {battery.description}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(battery.specs).map(([key, value]) => (
                        <div
                          key={key}
                          className={`bg-gradient-to-br ${battery.color} p-3 rounded-lg text-white`}
                        >
                          <p className="text-xs opacity-90 uppercase tracking-wide">
                            {key}
                          </p>
                          <p className="text-lg font-bold">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Pros */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                        Key Benefits:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {battery.pros.map((pro) => (
                          <div key={pro} className="flex items-center gap-2">
                            <CheckCircle
                              size={16}
                              className="text-green-500 flex-shrink-0"
                            />
                            <span className="text-sm text-gray-700">{pro}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best For */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Best For:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {battery.bestFor.map((use) => (
                          <span
                            key={use}
                            className={`bg-gradient-to-r ${battery.color} text-white px-3 py-1 rounded-full text-sm`}
                          >
                            {use}
                          </span>
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

      {/* Applications */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Battery Storage Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Versatile solutions for every sector and scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-600 mb-3">{app.description}</p>
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {app.capacity}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Store Your Energy?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's design the perfect battery storage solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Free Assessment
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
