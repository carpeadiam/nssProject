import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Calculator, 
  Heart, 
  BookOpen, 
  Users, 
  Award,
  TrendingUp,
  Waves,
  Leaf,
  Shield,
  GraduationCap
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [counters, setCounters] = useState({
    pledges: 0,
    waterSaved: 0,
    campaigns: 0,
    awareness: 0
  });

  // Animate counters on mount
  useEffect(() => {
    const targets = {
      pledges: 1247,
      waterSaved: 85420,
      campaigns: 23,
      awareness: 5678
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        pledges: Math.floor(targets.pledges * progress),
        waterSaved: Math.floor(targets.waterSaved * progress),
        campaigns: Math.floor(targets.campaigns * progress),
        awareness: Math.floor(targets.awareness * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: 'Educational Content',
      description: 'Learn about water conservation techniques and sustainable practices',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calculator,
      title: 'Smart Calculator',
      description: 'Calculate your potential water savings and harvesting capacity',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Heart,
      title: 'Take the Pledge',
      description: 'Join thousands in committing to water conservation practices',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Community Stories',
      description: 'Read inspiring success stories from water conservation champions',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: counters.pledges.toLocaleString(),
      label: 'Pledges Taken',
      color: 'text-blue-600'
    },
    {
      icon: Droplets,
      value: `${counters.waterSaved.toLocaleString()}L`,
      label: 'Water Saved (Est.)',
      color: 'text-teal-600'
    },
    {
      icon: Award,
      value: counters.campaigns,
      label: 'Campaigns Conducted',
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      value: counters.awareness.toLocaleString(),
      label: 'People Reached',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* College Branding */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center items-center mb-6"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-8 w-8 text-blue-200" />
                      <div className="text-left">
                        <div className="text-lg font-bold text-white">NSS</div>
                        <div className="text-sm text-blue-200">National Service Scheme</div>
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/30"></div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-white">RV College of Engineering</div>
                      <div className="text-sm text-blue-200">Water Conservation Initiative</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="p-4 bg-white/10 rounded-full backdrop-blur-sm"
                >
                  <Waves className="h-16 w-16" />
                </motion.div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
                  JalRaksha
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-blue-100 font-medium">
                Every Drop Counts – Let's Save Water Together
              </p>
              
              <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto leading-relaxed">
                Join our NSS mission at RV College of Engineering to promote water conservation through education, innovation, and community action. Together, we can make a difference in preserving our most precious resource.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/techniques"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Techniques
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/calculator"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition-all duration-200"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Use Calculator
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/pledge"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Take the Pledge
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Droplets className="h-8 w-8" />
          </motion.div>
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <Leaf className="h-12 w-12" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-full">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <motion.h3 
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  key={stat.value}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Water Conservation Platform
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover tools, resources, and community initiatives designed to make water conservation accessible and impactful for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <Shield className="h-16 w-16 text-teal-200" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission: Water for All, Forever
            </h2>
            <p className="text-xl leading-relaxed mb-8 text-blue-100">
              As part of the National Service Scheme (NSS) at RV College of Engineering, JalRaksha represents our commitment to creating sustainable water management solutions. We believe that every student, every community member, and every citizen has the power to contribute to water conservation efforts that will benefit generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn About Water Crisis
              </Link>
              <Link
                to="/stories"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition-all duration-200"
              >
                Read Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;