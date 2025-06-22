import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Download, 
  Users, 
  CheckCircle, 
  Award,
  Droplets,
  Star,
  Share2
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PledgeData {
  name: string;
  email: string;
  commitments: string[];
}

const PledgePage: React.FC = () => {
  const [formData, setFormData] = useState<PledgeData>({
    name: '',
    email: '',
    commitments: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGeneratingCertificate, setIsGeneratingCertificate] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const pledgeCommitments = [
    {
      id: 'fix_leaks',
      text: 'I will fix water leaks immediately and check for leaks regularly',
      icon: Droplets
    },
    {
      id: 'rainwater_harvest',
      text: 'I will implement rainwater harvesting in my home/community',
      icon: CheckCircle
    },
    {
      id: 'greywater_reuse',
      text: 'I will reuse greywater for irrigation and non-potable uses',
      icon: Users
    },
    {
      id: 'water_conscious',
      text: 'I will be mindful of water usage in daily activities',
      icon: Heart
    },
    {
      id: 'spread_awareness',
      text: 'I will educate others about water conservation importance',
      icon: Share2
    }
  ];

  const pledgeWall = [
    { name: 'Priya Sharma', commitment: 'Installed RWH system', date: '2024-01-15' },
    { name: 'Rahul Patel', commitment: 'Fixed all household leaks', date: '2024-01-14' },
    { name: 'Anjali Verma', commitment: 'Started greywater reuse', date: '2024-01-13' },
    { name: 'Vikram Singh', commitment: 'Teaching water conservation', date: '2024-01-12' },
    { name: 'Meera Gupta', commitment: 'Community awareness campaign', date: '2024-01-11' },
    { name: 'Arjun Kumar', commitment: 'Reduced daily water usage', date: '2024-01-10' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCommitmentChange = (commitmentId: string) => {
    setFormData(prev => ({
      ...prev,
      commitments: prev.commitments.includes(commitmentId)
        ? prev.commitments.filter(id => id !== commitmentId)
        : [...prev.commitments, commitmentId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.commitments.length > 0) {
      // In a real app, this would send data to a backend
      setIsSubmitted(true);
    }
  };

  const generateCertificate = async () => {
    if (!certificateRef.current) return;

    setIsGeneratingCertificate(true);

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`JalRaksha-Certificate-${formData.name.replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating certificate:', error);
    } finally {
      setIsGeneratingCertificate(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-8">
        {/* Success Message */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Award className="h-20 w-20 mx-auto mb-6" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Thank You, {formData.name}!
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Your pledge has been recorded. You are now part of the JalRaksha water conservation community!
              </p>
              <motion.button
                onClick={generateCertificate}
                disabled={isGeneratingCertificate}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-all duration-200 shadow-lg disabled:opacity-50"
              >
                {isGeneratingCertificate ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-700 mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Download Certificate
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Certificate (Hidden) */}
        <div className="fixed -left-[9999px] -top-[9999px]">
          <div 
            ref={certificateRef}
            className="w-[800px] h-[600px] bg-gradient-to-br from-blue-50 to-teal-50 p-12 relative"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            {/* Certificate Border */}
            <div className="absolute inset-4 border-4 border-blue-300 rounded-lg"></div>
            <div className="absolute inset-6 border-2 border-teal-300 rounded-lg"></div>
            
            {/* Certificate Content */}
            <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
              <div className="mb-6">
                <Droplets className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h1 className="text-4xl font-bold text-blue-800 mb-2">Certificate of Commitment</h1>
                <h2 className="text-2xl font-semibold text-teal-700">JalRaksha Water Conservation Pledge</h2>
              </div>
              
              <div className="mb-8">
                <p className="text-lg text-gray-700 mb-4">This certifies that</p>
                <h3 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">
                  {formData.name}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  has pledged to contribute to water conservation efforts and committed to:
                </p>
                
                <div className="text-left max-w-md">
                  {formData.commitments.map((commitmentId, index) => {
                    const commitment = pledgeCommitments.find(c => c.id === commitmentId);
                    return (
                      <div key={index} className="flex items-start mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{commitment?.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="flex justify-between w-full max-w-md">
                <div className="text-center">
                  <div className="border-t-2 border-gray-400 pt-2">
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-t-2 border-gray-400 pt-2">
                    <p className="text-sm text-gray-600">JalRaksha Initiative</p>
                    <p className="font-semibold">NSS Water Conservation Project</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-8 left-8 opacity-20">
              <Droplets className="h-8 w-8 text-blue-400" />
            </div>
            <div className="absolute top-8 right-8 opacity-20">
              <Droplets className="h-8 w-8 text-teal-400" />
            </div>
            <div className="absolute bottom-8 left-8 opacity-20">
              <Star className="h-8 w-8 text-blue-400" />
            </div>
            <div className="absolute bottom-8 right-8 opacity-20">
              <Star className="h-8 w-8 text-teal-400" />
            </div>
          </div>
        </div>

        {/* Pledge Wall */}
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
                Digital Pledge Wall
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Join these water conservation champions who have made their commitment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* User's pledge first */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-xl p-6 border-2 border-green-300 dark:border-green-700"
              >
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    NEW PLEDGE
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {formData.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Committed to {formData.commitments.length} water conservation actions
                </p>
                <p className="text-xs text-gray-500">
                  {new Date().toLocaleDateString()}
                </p>
              </motion.div>

              {/* Existing pledges */}
              {pledgeWall.map((pledge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-600">
                      PLEDGE KEEPER
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {pledge.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {pledge.commitment}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(pledge.date).toLocaleDateString()}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pink-600 via-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <Heart className="h-16 w-16 mx-auto mb-6 text-pink-200" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Take the Water Conservation Pledge
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 leading-relaxed">
              Join thousands of others in committing to protect our most precious resource. Every promise counts!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pledge Form */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-xl p-8 shadow-lg"
            >
              <div className="text-center mb-8">
                <Droplets className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Make Your Commitment
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose your water conservation commitments and join our community of change-makers
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
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
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                {/* Pledge Commitments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    I pledge to (select at least one) *:
                  </label>
                  <div className="space-y-4">
                    {pledgeCommitments.map((commitment) => (
                      <motion.div
                        key={commitment.id}
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          formData.commitments.includes(commitment.id)
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                            : 'border-gray-200 dark:border-slate-600 hover:border-blue-300'
                        }`}
                        onClick={() => handleCommitmentChange(commitment.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            checked={formData.commitments.includes(commitment.id)}
                            onChange={() => handleCommitmentChange(commitment.id)}
                            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <commitment.icon className="h-5 w-5 text-blue-600 mr-2" />
                              <span className="font-medium text-gray-900 dark:text-white">
                                Water Conservation Commitment
                              </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {commitment.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={!formData.name || !formData.email || formData.commitments.length === 0}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 px-8 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-red-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center"
                >
                  <Heart className="mr-2 h-6 w-6" />
                  Make My Pledge
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Pledge Wall Preview */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Pledge Takers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Be inspired by these water conservation champions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pledgeWall.slice(0, 6).map((pledge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-600">
                    PLEDGE KEEPER
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {pledge.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {pledge.commitment}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(pledge.date).toLocaleDateString()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PledgePage;