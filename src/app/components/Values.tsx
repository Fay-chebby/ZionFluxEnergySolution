import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Leaf, Sparkles, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Engineering Excellence",
    description:
      "Precision in design. Compliance in execution. Safety without compromise.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Advancing clean energy while optimizing efficiency and reducing environmental impact.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "Strategic adoption of evolving energy technologies including hybrid systems, storage solutions, and smart monitoring.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparent system sizing. Honest projections. Accountable execution.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "Solutions driven by real needs, real load data, and long-term growth plans.",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
];

export function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide every decision and action we take
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${value.bgColor} p-8 rounded-2xl shadow-lg border ${value.borderColor} hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}

          {/* Additional decorative card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: values.length * 0.1 }}
            className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-2xl shadow-lg text-white flex items-center justify-center text-center"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Together, We Build</h3>
              <p className="text-lg opacity-90">
                A future where clean energy powers every community across Africa
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
