import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Building2, Calendar } from "lucide-react";
import minigrid from "../../assets/minigrid.png";
import battery from "../../assets/The Best Wall-Mounted Battery Solution for Modern Energy Needs_ Why RICHYE Stands Out - RICHYE.jpg";
import solar from "../../assets/MachineQ Launches IoT Power Monitoring Solution to Revolutionize Energy Management.jpg";
import solar2 from "../../assets/solar.jpg";
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
    savings: "Powering 20+ households",
    image: minigrid,
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
    savings: "2M annual savings",
    image: battery,
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
    image: solar2,

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
    image: solar,

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
    savings: "10+ apartments powered",
    image:
      "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Multi-family housing complex with shared solar installation and individual metering.",
  },
];

export function ProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-100 to-orange-200   text-white py-20 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Our Projects
            </h1>

            <p className="text-xl text-black mb-8">
              Discover how we are transforming Africa's energy landscape, one
              installation at a time
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-black">
              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-amber-600 font-bold">20+</span>{" "}
                Installations
              </div>

              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-amber-600 font-bold">5+</span> Communities
              </div>

              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-amber-600 font-bold">10 MW+</span>{" "}
                Capacity
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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

                  {/* <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center gap-2 group/btn">
                    View Case Study
                    <ArrowRight
                      className="group-hover/btn:translate-x-1 transition-transform"
                      size={16}
                    />
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
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
