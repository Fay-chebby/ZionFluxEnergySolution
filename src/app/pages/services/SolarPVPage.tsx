import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import {
  Sun,
  Check,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  Calculator,
} from "lucide-react";

export function SolarPVPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const benefits = [
    "Reduce electricity bills by up to 80%",
    "Protect against rising energy costs",
    "Increase property value",
    "Low maintenance requirements",
    "Government incentives available",
    "25+ year system lifespan",
  ];

  const applications = [
    {
      title: "Residential Solar",
      description: "Power your home with clean energy",
      features: [
        "3-15 kW systems",
        "Grid-tie or off-grid",
        "Battery backup options",
        "Smart monitoring",
      ],
    },
    {
      title: "Commercial Solar",
      description: "Reduce business operating costs",
      features: [
        "20-500 kW systems",
        "Rooftop & ground-mount",
        "Tax benefits",
        "Energy management",
      ],
    },
    {
      title: "Industrial Solar",
      description: "Large-scale power solutions",
      features: [
        "500 kW - 10 MW+",
        "Custom engineering",
        "Hybrid systems",
        "Performance guarantees",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1572182556191-7035e81ef95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGFmcmljYSUyMHN1bnNldHxlbnwxfHx8fDE3NzE4NTg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Solar PV Systems"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500 rounded-full mb-6">
              <Sun className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Solar PV Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Harness the power of the sun with our industry-leading solar
              photovoltaic solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Calculator size={20} />
                Calculate Savings
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Solar PV?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-gray-50 p-6 rounded-xl hover:bg-amber-50 transition-colors"
              >
                <Check
                  className="text-green-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solar Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From homes to large industries, we have the perfect solar solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 mb-6">{app.description}</p>
                <ul className="space-y-3">
                  {app.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <Zap size={16} className="text-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How Solar PV Works
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Solar installation"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Solar Panels Capture Sunlight",
                    description:
                      "Photovoltaic cells convert sunlight into direct current (DC) electricity",
                  },
                  {
                    step: "2",
                    title: "Inverter Converts Power",
                    description:
                      "DC electricity is converted to alternating current (AC) for your home or business",
                  },
                  {
                    step: "3",
                    title: "Power Your Property",
                    description:
                      "Clean electricity powers your appliances and equipment",
                  },
                  {
                    step: "4",
                    title: "Export Excess Energy",
                    description:
                      "Surplus power can be stored in batteries or exported to the grid",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <Shield size={48} className="mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-bold mb-2">25-Year Warranty</h3>
              <p className="text-gray-300">
                Performance guarantee on all panels
              </p>
            </div>
            <div>
              <TrendingUp size={48} className="mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-bold mb-2">80% Output at Year 25</h3>
              <p className="text-gray-300">
                Industry-leading degradation rates
              </p>
            </div>
            <div>
              <Check size={48} className="mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
              <p className="text-gray-300">Guaranteed quality installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Go Solar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free site assessment and custom proposal for your property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Schedule Free Assessment
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
