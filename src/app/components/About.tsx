import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Lightbulb, Zap } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
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
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ZionFlux Energy Solutions Ltd. is a professional renewable energy
            and electrical engineering company based in Kenya
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1766853107796-9d79ce6bb5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcxODQxNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community powered by renewable energy"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              We are dedicated to transforming lives and economies through
              sustainable power solutions. Born from the vision of a brighter,
              self-reliant Africa and an energy-secure future, ZionFlux stands
              at the intersection of innovation, impact, and integrity.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We exist to deliver real energy, not just electricity, but the
              kind of light that uplifts communities today, and the kind of
              power that transforms generations tomorrow.
            </p>

            {/* Philosophy Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="text-amber-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Our Philosophy</h3>
                <p className="text-gray-600">
                  We believe that energy is a human right, and clean energy is
                  the future.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-orange-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Our Name</h3>
                <p className="text-gray-600">
                  <span className="font-semibold">Zion</span>: A symbol of hope,
                  restoration, and higher purpose.
                  <p></p>
                  <span className="font-semibold"> Flux</span>: A state of
                  movement; dynamic, forward-driven, and adaptable.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
              <p className="text-lg font-semibold text-gray-900 italic">
                "ZionFlux means hope in motion, the flow of light and power
                toward a cleaner, more resilient, and equitable world."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-amber-500"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become a leading African integrator of intelligent renewable
              and electrical energy systems advancing reliable, scalable, and
              climate-aligned power infrastructure across the continent.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                To design and engineer high-performance solar and electrical
                systems aligned with modern energy demands.
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                To supply certified, high-quality equipment compliant with
                international standards.
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                To execute safe, efficient, and standards-compliant
                installations.
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                To provide lifecycle maintenance and system optimization for
                long-term reliability.
              </li>

              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                To strengthen energy independence through decentralized and
                hybrid power systems.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
