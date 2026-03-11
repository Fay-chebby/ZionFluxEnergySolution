import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, MapPin, Building2, Calendar, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Grand Regency Hotel Solar Installation",
    location: "Nairobi, Kenya",
    type: "Commercial",
    category: "Solar PV",
    capacity: "500 kW",
    date: "2025",
    savings: "60% energy cost reduction",
    image:
      "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Complete rooftop solar installation with battery backup for uninterrupted hotel operations.",
  },
  {
    id: 2,
    title: "Kisumu Community Mini-Grid",
    location: "Kisumu, Kenya",
    type: "Community",
    category: "Mini-Grid",
    capacity: "200 kW",
    date: "2025",
    savings: "Powering 500+ households",
    image:
      "https://images.unsplash.com/photo-1766853107796-9d79ce6bb5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcxODQxNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Hybrid solar-diesel mini-grid bringing reliable electricity to off-grid rural community.",
  },
  {
    id: 3,
    title: "Mombasa Manufacturing Plant",
    location: "Mombasa, Kenya",
    type: "Industrial",
    category: "Hybrid System",
    capacity: "1.2 MW",
    date: "2024",
    savings: "₤2M annual savings",
    image:
      "https://images.unsplash.com/photo-1670322196746-e8c6ea72ab90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwZW5lcmd5JTIwc3RvcmFnZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzE4MjA3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Large-scale solar installation with advanced battery storage for 24/7 manufacturing operations.",
  },
  {
    id: 4,
    title: "St. Mary's School Electrification",
    location: "Nakuru, Kenya",
    type: "Institution",
    category: "Solar PV",
    capacity: "75 kW",
    date: "2024",
    savings: "100% renewable energy",
    image:
      "https://images.unsplash.com/photo-1741012254499-fd90b2015605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdmlsbGFnZSUyMGVsZWN0cmljaXR5JTIwbGlnaHRzfGVufDF8fHx8MTc3MTg1ODUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Complete solar solution powering classrooms, computer labs, and administrative facilities.",
  },
  {
    id: 5,
    title: "Agricultural Processing Plant",
    location: "Eldoret, Kenya",
    type: "Industrial",
    category: "Solar PV",
    capacity: "350 kW",
    date: "2024",
    savings: "45% cost reduction",
    image:
      "https://images.unsplash.com/photo-1572182556191-7035e81ef95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGFmcmljYSUyMHN1bnNldHxlbnwxfHx8fDE3NzE4NTg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Solar system designed for agri-business with smart monitoring for optimal performance.",
  },
  {
    id: 6,
    title: "Nairobi Residential Complex",
    location: "Nairobi, Kenya",
    type: "Residential",
    category: "Solar PV",
    capacity: "180 kW",
    date: "2025",
    savings: "40+ apartments powered",
    image:
      "https://images.unsplash.com/photo-1675130277336-23cb686f01c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZSUyMHN1c3RhaW5hYmxlJTIwZW5lcmd5fGVufDF8fHx8MTc3MTg1ODUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Multi-family housing complex with shared solar installation and individual metering.",
  },
];

export function ProjectsPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const types = [
    "All",
    "Commercial",
    "Industrial",
    "Residential",
    "Institution",
    "Community",
  ];
  const categories = [
    "All",
    "Solar PV",
    "Mini-Grid",
    "Hybrid System",
    "Battery Storage",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesType = selectedType === "All" || project.type === selectedType;
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover how we are transforming Africa's energy landscape, one
              installation at a time
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-amber-400 font-bold">1000+</span>{" "}
                Installations
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-amber-400 font-bold">50+</span>{" "}
                Communities
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-amber-400 font-bold">10 MW+</span>{" "}
                Capacity
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Type Filters */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Project Type:
            </p>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedType === type
                      ? "bg-amber-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Solution Type:
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} className="text-amber-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building2 size={16} className="text-amber-500" />
                      {project.type} • {project.capacity}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} className="text-amber-500" />
                      {project.date}
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-sm font-semibold text-green-700">
                      {project.savings}
                    </p>
                  </div>

                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center gap-2 group/btn">
                    View Case Study
                    <ArrowRight
                      className="group-hover/btn:translate-x-1 transition-transform"
                      size={16}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedType("All");
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who have transformed their energy
            future
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
