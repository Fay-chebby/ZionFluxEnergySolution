import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Sun,
  Battery,
  Zap,
  BarChart3,
  FileCheck,
  Lightbulb,
} from "lucide-react";

const solutions = [
  {
    icon: Sun,
    title: "Solar PV Systems",
    description:
      "Comprehensive solar panel installations for homes, institutions, and industrial use",
    image:
      "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Zap,
    title: "Mini-Grids & Hybrid Systems",
    description:
      "Empowering rural, off-grid areas with reliable and sustainable power solutions",
    image:
      "https://images.unsplash.com/photo-1675130277336-23cb686f01c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZSUyMHN1c3RhaW5hYmxlJTIwZW5lcmd5fGVufDF8fHx8MTc3MTg1ODUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Battery,
    title: "Battery Storage Solutions",
    description:
      "Advanced energy storage for reliability, autonomy, and optimal performance",
    image:
      "https://images.unsplash.com/photo-1670322196746-e8c6ea72ab90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwZW5lcmd5JTIwc3RvcmFnZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzE4MjA3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: BarChart3,
    title: "Smart Energy Monitoring",
    description:
      "Real-time monitoring and automation for maximum efficiency and control",
    image:
      "https://images.unsplash.com/photo-1741012254499-fd90b2015605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdmlsbGFnZSUyMGVsZWN0cmljaXR5JTIwbGlnaHRzfGVufDF8fHx8MTc3MTg1ODUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: FileCheck,
    title: "Energy Audit Services",
    description:
      "Professional training and advisory services for optimal energy management",
    image:
      "https://images.unsplash.com/photo-1572182556191-7035e81ef95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGFmcmljYSUyMHN1bnNldHxlbnwxfHx8fDE3NzE4NTg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Lightbulb,
    title: "Community Electrification",
    description: "Impact projects that bring power to underserved communities",
    image:
      "https://images.unsplash.com/photo-1766853107796-9d79ce6bb5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcxODQxNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="solutions"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive renewable energy solutions designed for Africa's
            unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Icon className="text-orange-600" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                  <button className="mt-4 text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center gap-2 group/btn">
                    Learn more
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Who We Serve Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Who We Serve
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Urban & Rural Households",
              "Commercial & Industrial Enterprises",
              "Government & Health Centers",
              "NGOs & Faith-Based Organizations",
              "Agribusinesses & Water Projects",
              "Development Partners & Investors",
            ].map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
              >
                <p className="text-center font-medium">{client}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
