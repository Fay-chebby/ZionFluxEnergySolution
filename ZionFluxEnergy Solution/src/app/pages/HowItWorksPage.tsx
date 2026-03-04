import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Phone,
  Home,
  FileText,
  Hammer,
  CheckCircle,
  Headphones,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Phone,
    title: "Initial Consultation",
    description:
      "Contact us for a free consultation. We discuss your energy needs, goals, and budget.",
    duration: "30 minutes",
    deliverables: [
      "Energy needs assessment",
      "Preliminary cost estimate",
      "Financing options discussion",
    ],
  },
  {
    number: 2,
    icon: Home,
    title: "Site Assessment",
    description:
      "Our technical team visits your location to evaluate the site and gather precise measurements.",
    duration: "1-2 days",
    deliverables: [
      "Roof/ground analysis",
      "Shading study",
      "Electrical system review",
      "Site photos",
    ],
  },
  {
    number: 3,
    icon: FileText,
    title: "Custom Design & Proposal",
    description:
      "We create a tailored system design with detailed specifications and transparent pricing.",
    duration: "3-5 days",
    deliverables: [
      "System design drawings",
      "Equipment specifications",
      "Detailed quotation",
      "ROI analysis",
    ],
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Contract & Permitting",
    description:
      "Once approved, we handle all paperwork, permits, and regulatory approvals.",
    duration: "1-2 weeks",
    deliverables: [
      "Signed contract",
      "Building permits",
      "Utility approvals",
      "Insurance documents",
    ],
  },
  {
    number: 5,
    icon: Hammer,
    title: "Professional Installation",
    description:
      "Our certified installers complete the installation with minimal disruption to your operations.",
    duration: "1-5 days",
    deliverables: [
      "Panel installation",
      "Electrical connections",
      "Inverter setup",
      "System testing",
    ],
  },
  {
    number: 6,
    icon: Headphones,
    title: "Training & Ongoing Support",
    description:
      "We provide comprehensive training and 24/7 support for the lifetime of your system.",
    duration: "Ongoing",
    deliverables: [
      "System operation training",
      "Monitoring app setup",
      "Maintenance schedule",
      "24/7 support",
    ],
  },
];

const faqs = [
  {
    question: "How long does the entire process take?",
    answer:
      "From initial consultation to final installation, the typical timeline is 4-8 weeks. This varies based on system size, permitting requirements, and project complexity.",
  },
  {
    question: "Do I need to be home during installation?",
    answer:
      "While not required for the entire duration, we recommend being available for the initial setup and final walkthrough. Our team will coordinate with you to minimize disruption.",
  },
  {
    question: "What happens if it rains during installation?",
    answer:
      "We monitor weather conditions closely and will reschedule if necessary. Safety is our top priority, and we ensure all work is completed under optimal conditions.",
  },
  {
    question: "Will my power be shut off during installation?",
    answer:
      "There may be brief interruptions during electrical connections, typically lasting 2-4 hours. We schedule these at convenient times and provide advance notice.",
  },
];

export function HowItWorksPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From initial consultation to final installation, we make the
              journey to solar simple and stress-free
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={ref}
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-orange-500 -mb-12" />
                  )}

                  <div className="flex gap-6 items-start">
                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-amber-500 flex items-center justify-center font-bold text-sm text-amber-600">
                        {step.number}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <div className="bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
                          <p className="text-sm font-semibold text-amber-700">
                            {step.duration}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          What You'll Get:
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {step.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle
                                size={16}
                                className="text-green-500 flex-shrink-0 mt-0.5"
                              />
                              <span className="text-sm text-gray-600">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Total Timeline */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Total Timeline
          </h2>
          <p className="text-5xl font-bold mb-2">4-8 Weeks</p>
          <p className="text-xl opacity-90">
            From consultation to clean energy
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about the process
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule your free consultation today and take the first step
              toward energy independence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2">
                Schedule Consultation
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30">
                Download Process Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
