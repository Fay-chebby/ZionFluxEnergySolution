import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import minigrid from "../../assets/minigrid.png";
import battery from "../../assets/The Best Wall-Mounted Battery Solution for Modern Energy Needs_ Why RICHYE Stands Out - RICHYE.jpg";
import solar from "../../assets/MachineQ Launches IoT Power Monitoring Solution to Revolutionize Energy Management.jpg";
import training from "../../assets/training.jpg";
import {
  Sun,
  Battery,
  Zap,
  BarChart3,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Sun,
    title: "Solar PV Systems",
    description:
      "Comprehensive solar panel installations for homes, institutions, and industrial use",
    image:
      "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/solar",
  },
  {
    icon: Zap,
    title: "Mini-Grids & Hybrid Systems",
    description:
      "Empowering rural, off-grid areas with reliable and sustainable power solutions",
    image: minigrid,

    link: "/services/mini-grids",
  },
  {
    icon: Battery,
    title: "Battery Storage Solutions",
    description:
      "Advanced energy storage for reliability, autonomy, and optimal performance",
    image: battery,

    link: "/services/battery",
  },
  {
    icon: BarChart3,
    title: "Smart Energy Monitoring",
    description:
      "Real-time monitoring and automation for maximum efficiency and control",
    image: solar,

    link: "/services/monitoring",
  },
  {
    icon: FileCheck,
    title: "Energy Audit Services",
    description:
      "Professional training and advisory services for optimal energy management",
    image: training,

    link: "/services/audits",
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
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <Link
                    to={solution.link}
                    className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center gap-2 group/btn"
                  >
                    Learn more
                    <ArrowRight
                      className="group-hover/btn:translate-x-1 transition-transform"
                      size={16}
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#056d4c] to-[#044f38] text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
