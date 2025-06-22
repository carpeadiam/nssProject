import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Droplets, 
  AlertTriangle, 
  Users, 
  TrendingDown,
  MapPin,
  BarChart3,
  Heart,
  GraduationCap,
  Award
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const globalStats = [
    {
      icon: Globe,
      value: '2.2 Billion',
      label: 'People lack access to safely managed drinking water',
      color: 'text-red-600'
    },
    {
      icon: Users,
      value: '4.2 Billion',
      label: 'People lack access to safely managed sanitation',
      color: 'text-orange-600'
    },
    {
      icon: TrendingDown,
      value: '80%',
      label: 'Of wastewater flows back to ecosystem without treatment',
      color: 'text-blue-600'
    },
    {
      icon: AlertTriangle,
      value: '50%',
      label: 'Of global population could face water scarcity by 2050',
      color: 'text-purple-600'
    }
  ];

  const indiaStats = [
    {
      title: 'Water Availability',
      value: '1,545 m³',
      description: 'Per capita per year (water-stressed threshold)',
      trend: 'decreasing'
    },
    {
      title: 'Groundwater Depletion',
      value: '60%',
      description: 'Of all districts face groundwater issues',
      trend: 'critical'
    },
    {
      title: 'Urban Water Crisis',
      value: '21 Cities',
      description: 'Expected to run out of groundwater by 2030',
      trend: 'critical'
    },
    {
      title: 'Agricultural Impact',
      value: '80%',
      description: 'Of water used for agriculture and irrigation',
      trend: 'stable'
    }
  ];

  const caseStudies = [
    {
      title: 'Chennai Water Crisis - 2019',
      location: 'Tamil Nadu, India',
      description: 'Fourth largest city in India faced Day Zero - complete depletion of water reserves.',
      impact: '9 million people affected',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Cape Town Day Zero',
      location: 'South Africa',
      description: 'City almost became first major city to run out of water due to severe drought.',
      impact: '4 million residents at risk',
      image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Rural Water Scarcity',
      location: 'Rajasthan, India',
      description: 'Women walk miles daily to fetch water for their families.',
      impact: 'Millions of rural households affected',
      image: 'https://images.pexels.com/photos/6994314/pexels-photo-6994314.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* NSS RVCE Branding */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center mb-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="h-8 w-8 text-red-200" />
                  <div className="text-left">
                    <div className="text-lg font-bold text-white">NSS - RV College of Engineering</div>
                    <div className="text-sm text-red-200">Water Crisis Awareness Initiative</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Global Water Crisis
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              Understanding the urgency of water conservation and why every action matters in securing our future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Statistics */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Global Water Crisis by Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The scope of the global water challenge according to UN Water and WHO reports
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-full">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* India Specific Stats */}
      <section className="py-16 bg-blue-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Water Crisis in India
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              India faces one of the world's most severe water crises
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indiaStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {stat.title}
                  </h3>
                  <div className={`w-3 h-3 rounded-full ${
                    stat.trend === 'critical' ? 'bg-red-500' :
                    stat.trend === 'decreasing' ? 'bg-orange-500' : 'bg-blue-500'
                  }`}></div>
                </div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <BarChart3 className="h-12 w-12 mx-auto mb-4 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real-World Impact Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Understanding the human cost of water scarcity through documented case studies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {study.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-orange-500 mr-2" />
                    <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                      {study.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NSS RVCE Initiative */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center items-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="h-12 w-12 text-green-200" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">NSS - RVCE Initiative</div>
                    <div className="text-green-200">Student-Led Water Conservation</div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Response to the Crisis
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              As engineering students at RV College of Engineering, we recognize our responsibility to address this crisis through innovation, education, and community action. Our NSS unit has developed JalRaksha as a comprehensive platform to promote water conservation awareness and provide practical solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <Award className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <h3 className="font-semibold mb-2">Student Innovation</h3>
                <p className="text-sm text-green-100">Engineering solutions developed by students for real-world problems</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Users className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <h3 className="font-semibold mb-2">Community Outreach</h3>
                <p className="text-sm text-green-100">Engaging local communities through awareness campaigns and workshops</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Droplets className="h-8 w-8 mx-auto mb-2 text-teal-300" />
                <h3 className="font-semibold mb-2">Practical Implementation</h3>
                <p className="text-sm text-green-100">Hands-on projects demonstrating water conservation techniques</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Heart className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Time to Act is Now
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Every statistic represents real people, real communities, and real consequences. 
              But with awareness, education, and collective action, we can turn the tide. 
              Learn about proven water conservation techniques that are making a difference worldwide.
            </p>
            <motion.a
              href="/techniques"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-200 shadow-lg"
            >
              <Droplets className="mr-2 h-5 w-5" />
              Explore Conservation Techniques
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;