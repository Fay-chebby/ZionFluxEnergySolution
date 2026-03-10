import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Solar Energy in East Africa: Trends to Watch in 2026",
    excerpt:
      "Discover the latest innovations and policy changes shaping the renewable energy landscape across East Africa.",
    category: "Industry News",
    author: "Dr. Sarah Kamau",
    date: "February 15, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1572182556191-7035e81ef95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGFmcmljYSUyMHN1bnNldHxlbnwxfHx8fDE3NzE4NTg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 2,
    title: "5 Ways Solar Power Can Transform Your Business Operations",
    excerpt:
      "Learn how commercial solar installations can reduce costs, increase reliability, and improve your bottom line.",
    category: "Business Solutions",
    author: "James Omondi",
    date: "February 12, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 3,
    title: "Understanding Battery Storage: A Complete Guide for Homeowners",
    excerpt:
      "Everything you need to know about battery storage systems, from capacity to costs.",
    category: "Technical Guide",
    author: "Engineer Mary Wanjiku",
    date: "February 10, 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1670322196746-e8c6ea72ab90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwZW5lcmd5JTIwc3RvcmFnZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzE4MjA3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 4,
    title: "Case Study: How We Powered 500 Homes in Rural Kisumu",
    excerpt:
      "A behind-the-scenes look at our largest community electrification project to date.",
    category: "Case Study",
    author: "David Kimani",
    date: "February 8, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1766853107796-9d79ce6bb5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcxODQxNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 5,
    title: "Solar Panel Maintenance: Essential Tips for Maximum Efficiency",
    excerpt:
      "Keep your solar panels performing at their best with these simple maintenance practices.",
    category: "Maintenance Tips",
    author: "Grace Mwangi",
    date: "February 5, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1675130277336-23cb686f01c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZSUyMHN1c3RhaW5hYmxlJTIwZW5lcmd5fGVufDF8fHx8MTc3MTg1ODUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 6,
    title: "The Economics of Solar: Why Now is the Best Time to Invest",
    excerpt:
      "Explore the financial benefits and incentives making solar more affordable than ever.",
    category: "Investment",
    author: "Dr. Sarah Kamau",
    date: "February 1, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1741012254499-fd90b2015605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdmlsbGFnZSUyMGVsZWN0cmljaXR5JTIwbGlnaHRzfGVufDF8fHx8MTc3MTg1ODUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
];

const categories = [
  "All Posts",
  "Industry News",
  "Business Solutions",
  "Technical Guide",
  "Case Study",
  "Maintenance Tips",
  "Investment",
];

export function BlogPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Energy Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert articles, guides, and updates on renewable energy solutions
              across Africa
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <TrendingUp size={16} className="inline mr-2" />
                <span className="text-sm">Latest Updates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-8">
                <div className="relative h-80 md:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {featuredPost.date}
                    </div>
                    <div>{featuredPost.readTime}</div>
                  </div>
                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center gap-2 group">
                    Read Full Article
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-amber-500 hover:text-white transition-all whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                    <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center gap-1 group/btn">
                      Read more
                      <ArrowRight
                        className="group-hover/btn:translate-x-1 transition-transform"
                        size={16}
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Informed
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest energy insights and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder=" zionfluxenergy@gmail.com"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Join 5,000+ subscribers. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
