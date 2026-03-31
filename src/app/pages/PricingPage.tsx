import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, Calculator, TrendingUp, DollarSign, Zap } from "lucide-react";

const packages = [
  {
    name: "Residential Basic",
    price: "$1,500",
    capacity: "3-5 kW",
    description: "Perfect for small homes and apartments",
    features: [
      "10-15 Solar Panels",
      "5 kW Inverter",
      "Mounting Hardware",
      "Basic Monitoring",
      "5 Year Warranty",
      "Installation Included",
      "Grid-Tie System",
    ],
    popular: false,
  },
  {
    name: "Residential Premium",
    price: "$4,500",
    capacity: "8-12 kW",
    description: "Ideal for larger homes with high energy needs",
    features: [
      "25-35 Solar Panels",
      "10 kW Inverter",
      "Battery Storage (10 kWh)",
      "Smart Monitoring System",
      "10 Year Warranty",
      "Installation & Training",
      "Hybrid System",
      "Net Metering Setup",
    ],
    popular: true,
  },
  {
    name: "Commercial",
    price: "Custom",
    capacity: "50+ kW",
    description: "Tailored solutions for businesses",
    features: [
      "Custom System Design",
      "High-Efficiency Panels",
      "Advanced Battery Storage",
      "Real-Time Monitoring",
      "15 Year Warranty",
      "Dedicated Support",
      "Financing Options",
      "Maintenance Package",
    ],
    popular: false,
  },
];

export function PricingPage() {
  // Dollar-based state
  const [monthlyBill, setMonthlyBill] = useState(150); // $150
  const [systemSize, setSystemSize] = useState(5); // kW
  const [electricityRate, setElectricityRate] = useState(0.25); // $0.25 per kWh

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // ROI Calculations
  const systemCost = systemSize * 2000; // $2,000 per kW
  const annualProduction = systemSize * 1400; // kWh per year
  const annualSavings = annualProduction * electricityRate; // $ per year
  const paybackPeriod = (systemCost / annualSavings).toFixed(1);
  const twentyYearSavings = (annualSavings * 20 - systemCost).toLocaleString();
  const roi = (((annualSavings * 20) / systemCost - 1) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-100 to-orange-200 text-gray-900 py-20 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Affordable solar solutions with flexible financing options.
              Calculate your savings and ROI below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section
        ref={ref}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Calculator className="text-amber-600" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                ROI Calculator
              </h2>
              <p className="text-xl text-gray-600">
                See how much you can save with solar energy
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Input Controls */}
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Current Monthly Electricity Bill ($)
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="500"
                      step="10"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="mt-2 text-3xl font-bold text-amber-600">
                      ${monthlyBill.toLocaleString()}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Solar System Size (kW)
                    </label>
                    <input
                      type="range"
                      min="3"
                      max="20"
                      step="1"
                      value={systemSize}
                      onChange={(e) => setSystemSize(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="mt-2 text-3xl font-bold text-amber-600">
                      {systemSize} kW
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Electricity Rate ($/kWh)
                    </label>
                    <input
                      type="range"
                      min="0.1"
                      max="0.5"
                      step="0.01"
                      value={electricityRate}
                      onChange={(e) =>
                        setElectricityRate(Number(e.target.value))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="mt-2 text-3xl font-bold text-amber-600">
                      ${electricityRate.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="text-amber-600" size={24} />
                      <h3 className="font-semibold text-gray-700">
                        System Cost
                      </h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">
                      ${systemCost.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="text-green-600" size={24} />
                      <h3 className="font-semibold text-gray-700">
                        Annual Savings
                      </h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">
                      ${annualSavings.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="text-blue-600" size={24} />
                      <h3 className="font-semibold text-gray-700">
                        Payback Period
                      </h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">
                      {paybackPeriod} years
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="font-semibold text-gray-700 mb-2">
                      20-Year Savings
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 mb-2">
                      ${twentyYearSavings}
                    </p>
                    <p className="text-sm text-gray-600">
                      ROI:{" "}
                      <span className="font-bold text-purple-600">{roi}%</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Calculations are estimates. Actual
                  savings may vary based on location, consumption, and system
                  efficiency.
                </p>
              </div>

              <div className="mt-8 text-center">
                <button className="px-8 py-4 bg-gradient-to-r from-[#056d4c] to-[#044f38] text-white rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all">
                  Get Custom Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600">
              Flexible packages designed for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-2xl scale-105"
                    : "bg-white border border-gray-200 shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-gray-900"}`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${pkg.popular ? "text-white/90" : "text-gray-600"}`}
                  >
                    {pkg.description}
                  </p>
                  <div
                    className={`text-4xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-gray-900"}`}
                  >
                    {pkg.price}
                  </div>
                  <p
                    className={`text-sm ${pkg.popular ? "text-white/80" : "text-gray-600"}`}
                  >
                    {pkg.capacity}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={`flex-shrink-0 mt-0.5 ${pkg.popular ? "text-white" : "text-green-500"}`}
                      />
                      <span
                        className={`text-sm ${pkg.popular ? "text-white" : "text-gray-700"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? "bg-white text-orange-600 hover:bg-gray-100"
                      : "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg"
                  }`}
                >
                  {pkg.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
