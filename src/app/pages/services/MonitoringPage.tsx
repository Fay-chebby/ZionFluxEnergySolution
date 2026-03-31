import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import {
  BarChart3,
  Smartphone,
  Bell,
  TrendingUp,
  Shield,
  CheckCircle,
  Activity,
  DollarSign,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Remote Access",
    description:
      "Monitor your energy systems from anywhere using mobile or web apps",
  },
  {
    icon: Activity,
    title: "Real-Time Data",
    description:
      "Live tracking of energy production, consumption, and battery status",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Instant notifications for system issues, maintenance needs, or anomalies",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Detailed insights into system efficiency and energy patterns",
  },
  {
    icon: DollarSign,
    title: "Cost Tracking",
    description: "Track savings, ROI, and energy costs in real-time",
  },
  {
    icon: Shield,
    title: "Predictive Maintenance",
    description:
      "AI-powered predictions to prevent failures before they happen",
  },
];

const monitoringLevels = [
  {
    title: "Basic Monitoring",
    description:
      "Essential system visibility for homeowners and small businesses",
    price: "Included",
    features: [
      "Real-time power generation display",
      "Daily/monthly energy reports",
      "Mobile app access",
      "Basic fault notifications",
      "Historical data (30 days)",
      "Single-user access",
    ],
    icon: Activity,
    color: " from-[#056d4c] to-[#044f38]",
    image:
      "https://images.unsplash.com/photo-1766853107796-9d79ce6bb5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NDk3NjkyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Advanced Monitoring",
    description:
      "Comprehensive analytics for commercial and industrial installations",
    price: "Premium",
    features: [
      "All Basic features included",
      "Load profiling and analysis",
      "Battery health monitoring",
      "Weather correlation data",
      "Custom report generation",
      "Multi-user access with roles",
      "Historical data (unlimited)",
      "API access for integration",
    ],
    icon: BarChart3,
    color: "from-amber-500 to-orange-600",
    image:
      "https://images.unsplash.com/photo-1590464374951-ea2a0920337f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG1ldGVyJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3NDk3NjkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Enterprise Monitoring",
    description:
      "Full-scale energy management for large facilities and portfolios",
    price: "Enterprise",
    features: [
      "All Advanced features included",
      "Multi-site portfolio management",
      "AI-powered predictive analytics",
      "Automated optimization control",
      "Carbon footprint tracking",
      "Integration with BMS/SCADA",
      "Dedicated support engineer",
      "Custom dashboard development",
      "White-label options",
    ],
    icon: Cpu,
    color: " from-[#056d4c] to-[#044f38]",
    image:
      "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const dataPoints = [
  {
    category: "Generation",
    metrics: [
      "Solar power output (kW)",
      "Daily energy production (kWh)",
      "Panel efficiency (%)",
      "Irradiance levels",
    ],
  },
  {
    category: "Consumption",
    metrics: [
      "Total load (kW)",
      "Peak demand periods",
      "Load breakdown by circuit",
      "Power factor",
    ],
  },
  {
    category: "Battery",
    metrics: [
      "State of charge (%)",
      "Charge/discharge rates",
      "Battery health status",
      "Cycle count",
    ],
  },
  {
    category: "Grid",
    metrics: [
      "Grid import/export (kWh)",
      "Frequency & voltage",
      "Grid availability (%)",
      "Tariff tracking",
    ],
  },
  {
    category: "Performance",
    metrics: [
      "System efficiency",
      "CO₂ offset (tons)",
      "Financial savings (₹)",
      "ROI progress",
    ],
  },
  {
    category: "Maintenance",
    metrics: [
      "Component health scores",
      "Fault diagnostics",
      "Service reminders",
      "Warranty tracking",
    ],
  },
];

export function MonitoringPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1766853107796-9d79ce6bb5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NDk3NjkyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Smart Energy Monitoring"
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
              <BarChart3 className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Smart Energy Monitoring
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Real-time monitoring and automation for maximum efficiency and
              control
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#056d4c] to-[#044f38] text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Get Started
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
              >
                View Case Studies
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
              Why Smart Monitoring?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Know exactly what's happening with your energy system, anytime,
              anywhere
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

      {/* Monitoring Levels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Monitoring Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right level of monitoring for your installation
            </p>
          </div>

          <div className="space-y-12">
            {monitoringLevels.map((level, index) => {
              const Icon = level.icon;
              return (
                <motion.div
                  key={level.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                  <div className={`grid md:grid-cols-5 gap-0`}>
                    <div className="md:col-span-2 relative h-80 md:h-auto">
                      <img
                        src={level.image}
                        alt={level.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div
                          className={`bg-gradient-to-r ${level.color} text-white px-4 py-2 rounded-full inline-block font-bold text-lg`}
                        >
                          {level.price}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-3 p-8 md:p-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className="text-white" size={32} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {level.title}
                          </h3>
                          <p className="text-gray-600 text-lg">
                            {level.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                          Features Included:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {level.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle
                                size={18}
                                className="text-green-500 flex-shrink-0 mt-0.5"
                              />
                              <span className="text-gray-700 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Points Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Monitor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive data collection across all critical parameters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataPoints.map((point, index) => (
              <motion.div
                key={point.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  {point.category}
                </h3>
                <ul className="space-y-2">
                  {point.metrics.map((metric) => (
                    <li
                      key={metric}
                      className="text-gray-600 text-sm flex items-center gap-2"
                    >
                      <Activity
                        size={14}
                        className="text-amber-500 flex-shrink-0"
                      />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600 ">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Take Control of Your Energy
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start monitoring your energy system with intelligent, real-time
            insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-amber-500 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Request Demo
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
