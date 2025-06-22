import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CloudRain, 
  Recycle, 
  Wrench, 
  DollarSign, 
  CheckCircle, 
  AlertCircle,
  Play,
  Book,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const TechniquesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rainwater' | 'greywater'>('rainwater');

  const rainwaterSteps = [
    {
      step: 1,
      title: 'Catchment Area',
      description: 'Install gutters and downspouts on your roof to collect rainwater',
      icon: CloudRain
    },
    {
      step: 2,
      title: 'First Flush Diverter',
      description: 'Divert the first flow of rainwater to remove debris and contaminants',
      icon: AlertCircle
    },
    {
      step: 3,
      title: 'Storage Tank',
      description: 'Store collected water in tanks or underground reservoirs',
      icon: Recycle
    },
    {
      step: 4,
      title: 'Filtration System',
      description: 'Filter water before use for drinking or irrigation purposes',
      icon: CheckCircle
    }
  ];

  const rainwaterMaterials = [
    { item: 'PVC Gutters (per meter)', cost: '₹150-250', quantity: '20-30m' },
    { item: 'Downspout Pipes', cost: '₹100-200', quantity: '4-6 pieces' },
    { item: 'Storage Tank (1000L)', cost: '₹8,000-15,000', quantity: '1-2 tanks' },
    { item: 'First Flush Diverter', cost: '₹2,000-4,000', quantity: '1 unit' },
    { item: 'Filtration System', cost: '₹5,000-10,000', quantity: '1 set' },
    { item: 'Installation & Misc.', cost: '₹3,000-5,000', quantity: 'Complete setup' }
  ];

  const greyWaterSteps = [
    {
      step: 1,
      title: 'Source Identification',
      description: 'Identify safe sources: bathroom sinks, showers, washing machines',
      icon: Recycle
    },
    {
      step: 2,
      title: 'Diversion System',
      description: 'Install pipes to divert greywater away from sewage system',
      icon: Wrench
    },
    {
      step: 3,
      title: 'Basic Filtration',
      description: 'Remove soap, hair, and debris through simple filtration',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Distribution',
      description: 'Use treated greywater for irrigation and toilet flushing',
      icon: ArrowRight
    }
  ];

  const greyWaterDos = [
    'Use biodegradable soaps and detergents',
    'Install lint filters for washing machine water',
    'Use greywater within 24 hours of collection',
    'Apply greywater to soil, not directly on plants',
    'Rotate irrigation areas to prevent salt buildup'
  ];

  const greyWaterDonts = [
    'Never use water from toilets or kitchen sinks',
    'Avoid using on root vegetables or leafy greens',
    'Don\'t store greywater for more than 24 hours',
    'Never use greywater containing bleach or harsh chemicals',
    'Don\'t apply to edible parts of plants directly'
  ];

  const benefits = {
    rainwater: [
      'Reduces dependency on municipal water supply',
      'Lowers water bills significantly',
      'Provides soft water free from chemicals',
      'Reduces urban flooding and runoff',
      'Sustainable and environmentally friendly'
    ],
    greywater: [
      'Reduces freshwater consumption by 30-50%',
      'Decreases wastewater generation',
      'Provides nutrients for plants and gardens',
      'Cost-effective water recycling solution',
      'Reduces strain on sewage treatment systems'
    ]
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Lightbulb className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Conservation Techniques
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Learn practical, proven methods to conserve water through rainwater harvesting and greywater reuse systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white dark:bg-slate-900 sticky top-16 z-40 border-b border-gray-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 dark:bg-slate-800 rounded-full p-1">
              <button
                onClick={() => setActiveTab('rainwater')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === 'rainwater'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                <CloudRain className="inline-block w-5 h-5 mr-2" />
                Rainwater Harvesting
              </button>
              <button
                onClick={() => setActiveTab('greywater')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === 'greywater'
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-teal-600'
                }`}
              >
                <Recycle className="inline-block w-5 h-5 mr-2" />
                Greywater Reuse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rainwater Harvesting Content */}
      {activeTab === 'rainwater' && (
        <div>
          {/* How It Works */}
          <section className="py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  How Rainwater Harvesting Works
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  A step-by-step guide to setting up your rainwater collection system
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {rainwaterSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="absolute -top-4 left-6">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                          <step.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < rainwaterSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-blue-400" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Materials & Cost */}
          <section className="py-16 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Materials & Cost Breakdown
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Estimated costs for a typical home rainwater harvesting system
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-blue-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold">Item</th>
                          <th className="px-6 py-4 text-left font-semibold">Cost Range</th>
                          <th className="px-6 py-4 text-left font-semibold">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rainwaterMaterials.map((material, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                          >
                            <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">
                              {material.item}
                            </td>
                            <td className="px-6 py-4 text-green-600 font-semibold">
                              {material.cost}
                            </td>
                            <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                              {material.quantity}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-green-50 dark:bg-green-900/20">
                        <tr>
                          <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">
                            Total Estimated Cost
                          </td>
                          <td className="px-6 py-4 font-bold text-green-600 text-lg">
                            ₹18,000 - ₹39,000
                          </td>
                          <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                            Complete System
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-blue-50 dark:bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Benefits of Rainwater Harvesting
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.rainwater.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3 bg-white dark:bg-slate-900 p-4 rounded-lg shadow"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Greywater Reuse Content */}
      {activeTab === 'greywater' && (
        <div>
          {/* How It Works */}
          <section className="py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  How Greywater Reuse Works
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Transform your household wastewater into a valuable resource
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {greyWaterSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="absolute -top-4 left-6">
                        <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                          <step.icon className="h-6 w-6 text-teal-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < greyWaterSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-teal-400" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Dos and Don'ts */}
          <section className="py-16 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Greywater Safety Guidelines
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Essential dos and don'ts for safe greywater implementation
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Dos */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6"
                >
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">
                      Do's
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {greyWaterDos.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Don'ts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6"
                >
                  <div className="flex items-center mb-6">
                    <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">
                      Don'ts
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {greyWaterDonts.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-teal-50 dark:bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-teal-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Benefits of Greywater Reuse
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.greywater.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3 bg-white dark:bg-slate-900 p-4 rounded-lg shadow"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Educational Videos Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Play className="h-12 w-12 mx-auto mb-4 text-purple-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn Through Videos
            </h2>
            <p className="text-xl text-purple-100">
              Watch detailed tutorials and real-world implementations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-12 w-12 mx-auto mb-2 text-white" />
                  <p className="text-white">Rainwater Harvesting Tutorial</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete RWH Setup Guide</h3>
              <p className="text-purple-100">
                Step-by-step installation process for home rainwater harvesting systems
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-12 w-12 mx-auto mb-2 text-white" />
                  <p className="text-white">Greywater System Demo</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Greywater Reuse</h3>
              <p className="text-purple-100">
                Learn how to safely implement greywater systems in your home
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Book className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Calculate Your Savings?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Use our smart calculator to estimate how much water you can save and harvest with these techniques.
            </p>
            <motion.a
              href="/calculator"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Calculate Water Savings
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechniquesPage;