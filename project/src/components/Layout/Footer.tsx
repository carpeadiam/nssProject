import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, GraduationCap, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { path: '/about', label: 'Water Crisis' },
    { path: '/techniques', label: 'Techniques' },
    { path: '/calculator', label: 'Calculator' },
    { path: '/pledge', label: 'Take Pledge' },
  ];

  const resources = [
    { path: '/resources', label: 'Download Resources' },
    { path: '/stories', label: 'Success Stories' },
    { path: '/survey', label: 'Survey' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-white/10 rounded-full"
              >
                <Droplets className="h-6 w-6" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">JalRaksha</h3>
                <p className="text-sm text-blue-200">Every Drop Counts</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              A smart water conservation platform promoting sustainable water management through education, awareness, and community action.
            </p>
            <div className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg">
              <GraduationCap className="h-5 w-5 text-blue-300" />
              <div>
                <p className="text-sm font-semibold">NSS Initiative</p>
                <p className="text-xs text-blue-200">RV College of Engineering</p>
              </div>
            </div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">nss@rvce.edu.in</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">+91 80 6721 1000</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">RV College of Engineering, Mysore Road, Bangalore</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">NSS Unit - RVCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © 2024 JalRaksha - NSS Water Conservation Project, RV College of Engineering. All rights reserved.
          </p>
          <p className="text-blue-200 text-sm mt-2 md:mt-0">
            Made with 💙 for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;