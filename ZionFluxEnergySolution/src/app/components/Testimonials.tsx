import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Kimani",
    role: "Hotel Owner",
    location: "Nairobi, Kenya",
    image:
      "https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBvd25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTg2MjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "ZionFlux transformed our hotel operations. We cut our energy costs by 60% and now run entirely on solar during the day. The installation was professional and the support has been exceptional.",
    rating: 5,
  },
  {
    name: "Grace Mwangi",
    role: "School Director",
    location: "Kisumu, Kenya",
    image:
      "https://images.unsplash.com/photo-1710778044102-56a3a6b69a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YW4lMjB3b21hbiUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NzE4NjI0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Thanks to ZionFlux, our school now has reliable electricity for the first time. Our students can study after dark, and we can power computers for digital learning. This has truly changed lives.",
    rating: 5,
  },
  {
    name: "David Omondi",
    role: "Manufacturing Director",
    location: "Mombasa, Kenya",
    image:
      "https://images.unsplash.com/photo-1668752600261-e56e7f3780b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxODA1Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Our factory needed a reliable power solution to reduce downtime. ZionFlux designed a hybrid system that keeps us running 24/7. The ROI was faster than projected, and we are now planning to expand.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who have transformed their energy
            future with ZionFlux
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-amber-200">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-amber-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-500 fill-amber-500"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 font-bold text-lg">UNEP</div>
            <div className="text-gray-400 font-bold text-lg">World Bank</div>
            <div className="text-gray-400 font-bold text-lg">USAID</div>
            <div className="text-gray-400 font-bold text-lg">AfDB</div>
            <div className="text-gray-400 font-bold text-lg">GIZ</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
