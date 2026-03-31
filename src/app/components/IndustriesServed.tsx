import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  Factory,
  Hotel,
  Sprout,
  GraduationCap,
  Radio,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Home,
    title: "Residential",
    description: "Homes & communities",
    stats: "5+ installations",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Offices & retail",
    stats: "60% avg. savings",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Manufacturing & plants",
    stats: "5+ MW deployed",
    color: "from-red-500 to-rose-600",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Hotels & resorts",
    stats: "7+ properties",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Farms & irrigation",
    stats: "3+ pumps",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: GraduationCap,
    title: "Institutional",
    description: "Schools & hospitals",
    stats: "3+ facilities",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Radio,
    title: "Telecom",
    description: "Towers & infrastructure",
    stats: "3+ sites",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Briefcase,
    title: "Engineering",
    description: "Partners & consultants",
    stats: "4+ partners",
    color: "from-gray-700 to-gray-900",
  },
];

export function IndustriesServed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering tailored energy solutions across 8 key sectors throughout
            Africa
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all group border border-gray-100"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {industry.description}
                </p>
                <div
                  className={`inline-block px-3 py-1 bg-gradient-to-r ${industry.color} text-white text-xs font-semibold rounded-full`}
                >
                  {industry.stats}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Whatever your industry, we have the expertise to power your future
          </p>
          <Link
            to="/who-we-serve"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#056d4c] to-[#044f38] text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Explore All Industries
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
