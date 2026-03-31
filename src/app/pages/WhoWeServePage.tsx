import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import {
  Home,
  Building2,
  Factory,
  Hotel,
  Sprout,
  GraduationCap,
  Radio,
  Users,
  Briefcase,
  ArrowRight,
  Target,
  TrendingUp,
} from "lucide-react";

const sectors = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Sector",
    tagline: "Powering homes, enriching lives",
    description: "Reliable energy solutions for modern living",
    image:
      "https://images.unsplash.com/photo-1675130277336-23cb686f01c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZSUyMHN1c3RhaW5hYmxlJTIwZW5lcmd5fGVufDF8fHx8MTc3MTg1ODUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    clients: [
      "Urban homeowners",
      "Gated communities",
      "High-end residences",
      "Off-grid households",
      "Real estate developers",
    ],
    stats: { installations: "500+", satisfaction: "98%" },
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial & Financial Sector",
    tagline: "Energy that means business",
    description:
      "Cost-effective power for enterprises and financial institutions",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGNpdHl8ZW58MXx8fHwxNzc0OTc0OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    clients: [
      "Commercial enterprises",
      "Office complexes",
      "Retail chains",
      "Banks",
      "Microfinance institutions",
      "SACCOs",
      "SMEs",
    ],
    stats: { installations: "200+", savings: "60%" },
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Sector",
    tagline: "Heavy-duty power for heavy industry",
    description:
      "Large-scale energy solutions for manufacturing and production",
    image:
      "https://images.unsplash.com/photo-1695603414685-af28aff0f9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMGZsb29yfGVufDF8fHx8MTc3NDkzNzI5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    clients: [
      "Manufacturing plants",
      "Processing facilities",
      "Warehousing and logistics centers",
      "Industrial parks",
    ],
    stats: { capacity: "5+ MW", uptime: "99.5%" },
    color: "from-red-500 to-rose-600",
  },
  {
    id: "hospitality",
    icon: Hotel,
    title: "Hospitality & Tourism Sector",
    tagline: "Uninterrupted service, unforgettable experiences",
    description: "Reliable energy for guest satisfaction",
    image:
      "https://images.unsplash.com/photo-1758805768368-0e75b108b9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3NDk3NDkxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    clients: [
      "Hotels",
      "Lodges",
      "Resorts",
      "Conference centers",
      "Eco-tourism facilities",
    ],
    stats: { installations: "75+", rating: "4.9/5" },
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "agriculture",
    icon: Sprout,
    title: "Agricultural & Water Sector",
    tagline: "Growing prosperity through clean energy",
    description: "Irrigation, processing, and water solutions",
    image:
      "https://images.unsplash.com/photo-1606707724632-eff3d909ab7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdhdGVyJTIwcHVtcCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3NDk3NDkxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    clients: [
      "Agribusinesses",
      "Irrigation schemes",
      "Dairy and poultry farms",
      "Fisheries",
      "Borehole and water projects",
    ],
    stats: { pumps: "300+", water: "50M L/day" },
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "public",
    icon: GraduationCap,
    title: "Public & Institutional Sector",
    tagline: "Empowering communities through energy access",
    description:
      "Sustainable solutions for schools, hospitals, and community centers",
    image:
      "https://images.unsplash.com/photo-1741012254499-fd90b2015605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdmlsbGFnZSUyMGVsZWN0cmljaXR5JTIwbGlnaHRzfGVufDF8fHx8MTc3MTg1ODUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    clients: [
      "Educational institutions",
      "Health facilities",
      "Religious institutions",
      "NGOs",
      "Development organizations",
      "Community electrification initiatives",
    ],
    stats: { schools: "100+", communities: "50+" },
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: "telecom",
    icon: Radio,
    title: "Telecom & Infrastructure Sector",
    tagline: "Keeping Africa connected 24/7",
    description: "Mission-critical power for telecommunications",
    image:
      "https://images.unsplash.com/photo-1670322196746-e8c6ea72ab90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwZW5lcmd5JTIwc3RvcmFnZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzE4MjA3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    clients: [
      "Telecom operators",
      "Tower infrastructure providers",
      "Infrastructure contractors",
    ],
    stats: { towers: "150+", uptime: "99.9%" },
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: "engineering",
    icon: Briefcase,
    title: "Engineering & Consulting Firms",
    tagline: "Partnership that delivers excellence",
    description: "Collaborative solutions with industry professionals",
    image:
      "https://images.unsplash.com/photo-1751486289947-4f5f5961b3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzc0OTcyMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    clients: [
      "Electrical engineering consulting firms",
      "Civil engineering consulting firms",
      "Mechanical engineering consulting firms",
      "Architectural firms",
      "EPC contractors",
    ],
    stats: { partners: "40+", projects: "200+" },
    color: "from-gray-700 to-gray-900",
  },
];

export function WhoWeServePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1766853107796-9d79ce6bb5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcxODQxNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Who We Serve"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500 rounded-full mb-6">
              <Users className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Who We Serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Delivering engineered energy solutions across multiple sectors
              throughout Africa
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-amber-400 font-bold">8</span> Key Sectors
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-amber-400 font-bold">1000+</span>{" "}
                Satisfied Clients
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-amber-400 font-bold">All</span> Industries
                Welcome
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted Across Industries
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8" />
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              From small homes to large industrial facilities, from rural
              communities to urban commercial centers— ZionFlux Energy Solutions
              delivers tailored renewable energy systems that meet the unique
              demands of every sector.
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <Target className="text-amber-500 mx-auto mb-3" size={32} />
                <p className="text-sm font-semibold text-gray-900">
                  Precision Engineering
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <TrendingUp className="text-green-500 mx-auto mb-3" size={32} />
                <p className="text-sm font-semibold text-gray-900">
                  Proven Results
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <Users className="text-blue-500 mx-auto mb-3" size={32} />
                <p className="text-sm font-semibold text-gray-900">
                  Expert Support
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                >
                  <div
                    className={`grid md:grid-cols-2 gap-0 ${!isEven ? "md:grid-flow-dense" : ""}`}
                  >
                    {/* Image Side */}
                    <div
                      className={`relative h-80 md:h-auto ${!isEven ? "md:col-start-2" : ""}`}
                    >
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Stats Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                        {Object.entries(sector.stats).map(([key, value]) => (
                          <div
                            key={key}
                            className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 flex-1"
                          >
                            <p className="text-2xl font-bold text-gray-900">
                              {value}
                            </p>
                            <p className="text-xs text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${sector.color} rounded-xl mb-6`}
                      >
                        <Icon className="text-white" size={32} />
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {sector.title}
                      </h3>
                      <p
                        className={`text-lg font-semibold bg-gradient-to-r ${sector.color} bg-clip-text text-transparent mb-4`}
                      >
                        {sector.tagline}
                      </p>
                      <p className="text-gray-600 mb-6 text-lg">
                        {sector.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                          We Serve:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {sector.clients.map((client) => (
                            <div
                              key={client}
                              className="flex items-center gap-2"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.color}`}
                              />
                              <span className="text-sm text-gray-700">
                                {client}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${sector.color} text-white rounded-full font-semibold hover:shadow-lg transition-all w-fit group`}
                      >
                        Get Started
                        <ArrowRight
                          className="group-hover:translate-x-1 transition-transform"
                          size={20}
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We work with diverse clients across all sectors. Whatever your
              energy challenge, we have the expertise to design a solution that
              works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Discuss Your Project
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
