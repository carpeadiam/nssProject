import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Video, 
  ExternalLink, 
  BookOpen,
  Award,
  Globe,
  Users,
  Play,
  Image as ImageIcon
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const downloadableResources = [
    {
      title: 'Rainwater Harvesting Guide',
      description: 'Complete step-by-step guide for home RWH installation',
      type: 'PDF',
      size: '2.5 MB',
      downloads: 1247,
      icon: FileText,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Greywater Reuse Manual',
      description: 'Safe practices for household greywater systems',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 892,
      icon: FileText,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Water Conservation Poster Set',
      description: 'High-quality awareness posters for printing',
      type: 'ZIP',
      size: '15.2 MB',
      downloads: 634,
      icon: ImageIcon,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Cost Calculator Spreadsheet',
      description: 'Excel template for RWH cost estimation',
      type: 'XLSX',
      size: '0.8 MB',
      downloads: 445,
      icon: FileText,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const governmentSchemes = [
    {
      title: 'Jal Shakti Abhiyan',
      description: 'National water conservation campaign with focus on rainwater harvesting',
      agency: 'Ministry of Jal Shakti',
      benefits: 'Technical support, awareness programs',
      link: 'https://jalshakti-dowr.gov.in/',
      status: 'Active'
    },
    {
      title: 'MGNREGA Water Conservation',
      description: 'Employment guarantee scheme for water conservation works',
      agency: 'Ministry of Rural Development',
      benefits: 'Funding for community water projects',
      link: 'https://nrega.nic.in/',
      status: 'Active'
    },
    {
      title: 'Pradhan Mantri Krishi Sinchayee Yojana',
      description: 'Irrigation scheme promoting water use efficiency',
      agency: 'Ministry of Agriculture',
      benefits: 'Subsidies for micro-irrigation',
      link: 'https://pmksy.gov.in/',
      status: 'Active'
    },
    {
      title: 'Atal Bhujal Yojana',
      description: 'Groundwater management scheme for sustainable use',
      agency: 'Ministry of Jal Shakti',
      benefits: 'Community-based groundwater management',
      link: 'https://jalshakti-dowr.gov.in/',
      status: 'Active'
    }
  ];

  const educationalVideos = [
    {
      title: 'Rainwater Harvesting Basics',
      description: 'Introduction to RWH concepts and benefits',
      duration: '8:45',
      views: '125K',
      thumbnail: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'DIY Greywater System Setup',
      description: 'Step-by-step home greywater installation',
      duration: '12:30',
      views: '89K',
      thumbnail: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Water Crisis Documentary',
      description: 'Understanding global water challenges',
      duration: '25:15',
      views: '67K',
      thumbnail: 'https://images.pexels.com/photos/6994314/pexels-photo-6994314.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Community Success Stories',
      description: 'Real implementations across India',
      duration: '15:20',
      views: '45K',
      thumbnail: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const brochures = [
    {
      title: 'Water Conservation at Home',
      description: 'Simple tips for daily water saving',
      pages: 8,
      language: 'English, Hindi'
    },
    {
      title: 'Rainwater Harvesting Benefits',
      description: 'Economic and environmental advantages',
      pages: 6,
      language: 'English, Hindi, Regional'
    },
    {
      title: 'Community Water Management',
      description: 'Collective approaches to water conservation',
      pages: 12,
      language: 'English, Hindi'
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-emerald-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Awareness Resources
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Download guides, access government schemes, and explore educational content to advance your water conservation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Download className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Downloadable Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Free guides, manuals, and tools designed by our team for practical implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadableResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {resource.description}
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                  <span className="bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                  <span>{resource.size}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {resource.downloads.toLocaleString()} downloads
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes */}
      <section className="py-16 bg-blue-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Award className="h-12 w-12 mx-auto mb-4 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Government Schemes & Support
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore official programs and incentives for water conservation projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {governmentSchemes.map((scheme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {scheme.title}
                  </h3>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-medium">
                    {scheme.status}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {scheme.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Globe className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">{scheme.agency}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">{scheme.benefits}</span>
                  </div>
                </div>
                
                <motion.a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-1" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Videos */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Video className="h-12 w-12 mx-auto mb-4 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Educational Videos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Learn through visual demonstrations and real-world examples
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationalVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <Play className="h-6 w-6 text-white ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {video.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Users className="h-3 w-3 mr-1" />
                    {video.views} views
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informative Brochures */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FileText className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Informative Brochures
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Concise guides perfect for sharing and community awareness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {brochures.map((brochure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {brochure.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {brochure.description}
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                  <span>{brochure.pages} pages</span>
                  <span>{brochure.language}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Users className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Share Knowledge, Multiply Impact
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Use these resources to educate your community, implement water conservation projects, and create lasting change. Together, we can build a water-secure future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/stories"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Read Success Stories
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-200"
              >
                Get Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;