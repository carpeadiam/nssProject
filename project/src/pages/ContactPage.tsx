import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Users, 
  Clock,
  MessageCircle,
  CheckCircle,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  GraduationCap,
  Globe
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'nss@rvce.edu.in',
      description: 'Get in touch for project inquiries and support',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 80 6721 1000',
      description: 'Available Monday to Friday, 9 AM - 6 PM',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'RV College of Engineering',
      description: 'Mysore Road, RV Vidyaniketan Post, Bangalore - 560059',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Fri: 9 AM - 6 PM',
      description: 'Saturday: 10 AM - 2 PM',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Priya Sharma',
      role: 'NSS Program Officer',
      department: 'RV College of Engineering',
      email: 'priya.sharma@rvce.edu.in',
      phone: '+91 80 6721 1001',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Rahul Patel',
      role: 'Student Project Lead',
      department: 'Computer Science & Engineering',
      email: 'rahul.patel@rvce.edu.in',
      phone: '+91 9876543211',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Anjali Verma',
      role: 'Technical Coordinator',
      department: 'Environmental Engineering',
      email: 'anjali.verma@rvce.edu.in',
      phone: '+91 9876543212',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Vikram Singh',
      role: 'Community Outreach Lead',
      department: 'Civil Engineering',
      email: 'vikram.singh@rvce.edu.in',
      phone: '+91 9876543213',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const categories = [
    'General Inquiry',
    'Technical Support',
    'Partnership Opportunity',
    'Media & Press',
    'Student Collaboration',
    'Community Project',
    'Feedback & Suggestions'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setIsSubmitted(true);
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.subject && formData.message && formData.category;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Thank you for reaching out to the NSS team at RV College of Engineering. We'll get back to you within 24 hours.
          </p>
          <motion.button
            onClick={() => setIsSubmitted(false)}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center items-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="h-8 w-8 text-cyan-200" />
                  <div className="text-left">
                    <div className="text-lg font-bold text-white">NSS - RV College of Engineering</div>
                    <div className="text-sm text-cyan-200">National Service Scheme</div>
                  </div>
                </div>
              </div>
            </div>
            <MessageCircle className="h-16 w-16 mx-auto mb-6 text-cyan-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 leading-relaxed">
              Have questions about water conservation? Want to collaborate? We're here to help and support your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Multiple ways to reach our NSS team at RV College of Engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 dark:text-white font-medium mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Send className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send us a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                      >
                        <option value="">Select category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                        placeholder="Brief subject line"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={!isFormValid()}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center"
                  >
                    <Send className="mr-2 h-6 w-6" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* College Info */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <GraduationCap className="h-6 w-6 text-blue-500 mr-2" />
                  About RV College of Engineering
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Established:</strong> 1963
                  </p>
                  <p>
                    <strong>Affiliation:</strong> Visvesvaraya Technological University (VTU)
                  </p>
                  <p>
                    <strong>Location:</strong> Mysore Road, RV Vidyaniketan Post, Bangalore - 560059
                  </p>
                  <p>
                    <strong>NSS Unit:</strong> Active since 1969, promoting community service and social awareness
                  </p>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Our NSS Vision:</strong> To develop social consciousness and leadership qualities among students through community service and nation-building activities.
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-red-500 mr-2" />
                  Our Location
                </h3>
                <div className="aspect-video bg-gray-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Interactive Map
                    </p>
                    <p className="text-sm text-gray-500">
                      RV College of Engineering Campus
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Address:</strong> RV College of Engineering, Mysore Road, RV Vidyaniketan Post, Bangalore, Karnataka - 560059
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Our Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Stay updated with our latest water conservation initiatives and community impact.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: 'hover:text-blue-600', label: 'Facebook' },
                    { icon: Twitter, color: 'hover:text-blue-400', label: 'Twitter' },
                    { icon: Instagram, color: 'hover:text-pink-600', label: 'Instagram' },
                    { icon: Youtube, color: 'hover:text-red-600', label: 'YouTube' },
                    { icon: Globe, color: 'hover:text-green-600', label: 'Website' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className={`p-3 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                      title={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our NSS Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The dedicated individuals behind JalRaksha water conservation initiative at RV College of Engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {member.department}
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-blue-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quick answers to common questions about our NSS water conservation initiative
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How can I get involved in NSS water conservation projects at RVCE?',
                answer: 'You can start by taking our pledge, attending our workshops, or volunteering for community projects. Contact our NSS unit for current opportunities and enrollment details.'
              },
              {
                question: 'Do you provide technical support for rainwater harvesting implementation?',
                answer: 'Yes, our engineering students and faculty provide consultation, design assistance, and implementation guidance for both residential and community RWH projects.'
              },
              {
                question: 'Can other colleges and schools partner with our NSS unit?',
                answer: 'Absolutely! We welcome partnerships with educational institutions for awareness programs, student exchange projects, and collaborative water conservation initiatives.'
              },
              {
                question: 'How do I access government schemes for water conservation through RVCE?',
                answer: 'Our NSS team provides guidance on available government schemes and helps with application processes. We also facilitate connections with local authorities and NGOs.'
              },
              {
                question: 'Is this project part of the academic curriculum at RVCE?',
                answer: 'Yes, JalRaksha is part of our Activity-Enriched Course (AEC) for 4th semester students, combining academic learning with practical community service through NSS.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;