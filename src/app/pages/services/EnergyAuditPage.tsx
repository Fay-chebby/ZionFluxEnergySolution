import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import {
  FileCheck,
  Search,
  Lightbulb,
  TrendingDown,
  DollarSign,
  Shield,
  CheckCircle,
  ClipboardList,
  BarChart3,
  Settings,
  Award,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Comprehensive Assessment",
    description:
      "Detailed analysis of your current energy consumption patterns and costs",
  },
  {
    icon: Lightbulb,
    title: "Custom Recommendations",
    description: "Tailored solutions based on your specific needs and budget",
  },
  {
    icon: TrendingDown,
    title: "Waste Identification",
    description: "Pinpoint energy losses and inefficiencies in your systems",
  },
  {
    icon: DollarSign,
    title: "ROI Analysis",
    description:
      "Clear financial projections showing payback periods and savings",
  },
  {
    icon: Settings,
    title: "Implementation Support",
    description: "Guidance on executing recommended efficiency improvements",
  },
  {
    icon: Award,
    title: "Compliance Support",
    description: "Ensure compliance with energy regulations and standards",
  },
];

const auditTypes = [
  {
    title: "Walk-Through Audit",
    description:
      "Quick visual inspection to identify obvious energy saving opportunities",
    duration: "2-4 hours",
    price: "Entry Level",
    includes: [
      "Visual inspection of facilities",
      "Review of utility bills (6 months)",
      "Identification of quick wins",
      "Basic recommendations report",
      "Estimated savings potential",
    ],
    bestFor: [
      "Small businesses",
      "Residential properties",
      "Initial assessments",
    ],
    image:
      "https://images.unsplash.com/photo-1732660513320-a6b489f3fece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBhdWRpdCUyMGluc3BlY3Rpb258ZW58MXx8fHwxNzc0OTc2OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "  from-[#056d4c] to-[#044f38]",
  },
  {
    title: "Standard Energy Audit",
    description: "Detailed analysis with measurements and energy modeling",
    duration: "1-2 weeks",
    price: "Professional",
    includes: [
      "All Walk-Through features",
      "Power quality measurements",
      "Load profiling and data logging",
      "Equipment efficiency testing",
      "Energy modeling and simulation",
      "Detailed cost-benefit analysis",
      "Implementation roadmap",
      "Financing options guidance",
    ],
    bestFor: [
      "Commercial buildings",
      "Medium-sized facilities",
      "Retrofit projects",
    ],
    image:
      "https://images.unsplash.com/photo-1590464374951-ea2a0920337f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG1ldGVyJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3NDk3NjkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    color: " from-[#056d4c] to-[#044f38]",
  },
  {
    title: "Investment-Grade Audit",
    description: "Comprehensive analysis meeting ASHRAE Level II/III standards",
    duration: "3-6 weeks",
    price: "Enterprise",
    includes: [
      "All Standard Audit features",
      "Detailed engineering calculations",
      "Multiple scenario modeling",
      "Life-cycle cost analysis",
      "Risk assessment",
      "Measurement & verification plan",
      "Tender document preparation",
      "Project management support",
      "Post-implementation review",
    ],
    bestFor: [
      "Large industrial facilities",
      "ESCO projects",
      "Major investments",
    ],
    image:
      "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: " from-[#056d4c] to-[#044f38]",
  },
];

const auditProcess = [
  {
    step: "01",
    title: "Pre-Audit Preparation",
    description:
      "Review utility bills, facility drawings, and operational data",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Site Inspection",
    description: "Comprehensive walk-through and equipment assessment",
    icon: Search,
  },
  {
    step: "03",
    title: "Data Collection",
    description: "Measurements, monitoring, and energy use profiling",
    icon: BarChart3,
  },
  {
    step: "04",
    title: "Analysis & Modeling",
    description: "Energy modeling, benchmarking, and scenario analysis",
    icon: Settings,
  },
  {
    step: "05",
    title: "Report Delivery",
    description: "Detailed findings, recommendations, and financial analysis",
    icon: FileCheck,
  },
  {
    step: "06",
    title: "Implementation Support",
    description: "Ongoing guidance and progress monitoring",
    icon: Users,
  },
];

const benefits = [
  {
    title: "Cost Savings",
    description:
      "Reduce energy bills by 15-40% through identified improvements",
    stat: "15-40%",
    icon: DollarSign,
  },
  {
    title: "Carbon Reduction",
    description:
      "Lower your environmental footprint and meet sustainability goals",
    stat: "30%+",
    icon: TrendingDown,
  },
  {
    title: "System Reliability",
    description: "Improve equipment performance and reduce downtime",
    stat: "99%",
    icon: Shield,
  },
  {
    title: "Quick Payback",
    description: "Most recommendations pay for themselves within 2-3 years",
    stat: "2-3 yrs",
    icon: Award,
  },
];

export function EnergyAuditPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1732660513320-a6b489f3fece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBhdWRpdCUyMGluc3BlY3Rpb258ZW58MXx8fHwxNzc0OTc2OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Energy Audit Services"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600  rounded-full mb-6">
              <FileCheck className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Energy Audit Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Professional energy assessments to optimize efficiency and reduce
              costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600  text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Schedule Audit
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
              Why Get an Energy Audit?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover hidden savings and optimize your energy systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600  rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

          {/* Benefits Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 text-white text-center"
                >
                  <Icon className="mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold mb-2">{benefit.stat}</div>
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-sm opacity-90">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audit Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Audit Service Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From quick assessments to comprehensive investment-grade audits
            </p>
          </div>

          <div className="space-y-12">
            {auditTypes.map((audit, index) => (
              <motion.div
                key={audit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className={`grid md:grid-cols-5 gap-0`}>
                  <div className="md:col-span-2 relative h-80 md:h-auto">
                    <img
                      src={audit.image}
                      alt={audit.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div
                        className={`bg-gradient-to-r ${audit.color} text-white px-4 py-2 rounded-full inline-block font-bold`}
                      >
                        {audit.price}
                      </div>
                      <p className="text-white text-sm mt-2">
                        Duration: {audit.duration}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8 md:p-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {audit.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {audit.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                        What's Included:
                      </h4>
                      <div className="space-y-2">
                        {audit.includes.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle
                              size={18}
                              className="text-green-500 flex-shrink-0 mt-0.5"
                            />
                            <span className="text-gray-700 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Best For:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {audit.bestFor.map((use) => (
                          <span
                            key={use}
                            className={`bg-gradient-to-r ${audit.color} text-white px-3 py-1 rounded-full text-sm`}
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

      {/* Audit Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Audit Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to uncover energy savings opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600  rounded-full flex items-center justify-center text-white font-bold">
                    {process.step}
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 ml-8">
                    <Icon className="text-teal-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600 ">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Energy Use?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a professional energy audit and start saving today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-teal-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Schedule Your Audit
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
