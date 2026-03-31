import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  FileCheck,
  Wrench,
  Shield,
  TrendingUp,
  Heart,
  Globe,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: FileCheck,
    title: "Full-Cycle Delivery",
    description:
      "From design to commissioning — we handle every step of your energy solution",
  },
  {
    icon: Wrench,
    title: "Engineering-Driven",
    description:
      "Precise system sizing and comprehensive technical documentation",
  },
  {
    icon: Shield,
    title: "Standards-Compliant",
    description:
      "All installations meet international quality and safety standards",
  },
  {
    icon: TrendingUp,
    title: "Transparent Pricing",
    description: "Clear costs with measurable performance and verified results",
  },
  {
    icon: Heart,
    title: "Integrity-Centered",
    description: "We deliver what we promise — no shortcuts, no compromises",
  },
  {
    icon: Globe,
    title: "Built for Africa",
    description: "Systems designed for African climatic and grid conditions",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description: "Technical collaboration across engineering disciplines",
  },
];

export function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            WHY ZIONFLUX?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Engineering excellence, integrity-driven operations, and systems
            built for Africa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: reasons.length * 0.1 }}
            className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-2xl shadow-lg flex items-center justify-center text-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/90 mb-6">
                Join the renewable energy revolution today
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-[#056d4c] to-[#038153] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Impact
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Systems Installed" },
              { value: "5+", label: "Communities Powered" },
              { value: "1000+", label: "Tons CO₂ Reduced" },
              { value: "100%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
