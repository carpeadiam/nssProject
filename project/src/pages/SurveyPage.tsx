import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  BarChart3, 
  Users, 
  TrendingUp,
  CheckCircle,
  AlertCircle,
  PieChart
} from 'lucide-react';
import { PieChart as RechartsPieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SurveyData {
  currentPractices: string;
  interestedInRWH: string;
  barriers: string[];
  waterUsageAwareness: string;
  willingnessToInvest: string;
  communitySupport: string;
}

const SurveyPage: React.FC = () => {
  const [formData, setFormData] = useState<SurveyData>({
    currentPractices: '',
    interestedInRWH: '',
    barriers: [],
    waterUsageAwareness: '',
    willingnessToInvest: '',
    communitySupport: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Mock survey results data
  const surveyResults = {
    currentPractices: [
      { name: 'Basic water saving', value: 45, fill: '#0EA5E9' },
      { name: 'Rainwater harvesting', value: 25, fill: '#14B8A6' },
      { name: 'Greywater reuse', value: 15, fill: '#22C55E' },
      { name: 'No specific practices', value: 15, fill: '#F59E0B' }
    ],
    interestedInRWH: [
      { name: 'Very interested', value: 40, fill: '#10B981' },
      { name: 'Somewhat interested', value: 35, fill: '#3B82F6' },
      { name: 'Not sure', value: 15, fill: '#F59E0B' },
      { name: 'Not interested', value: 10, fill: '#EF4444' }
    ],
    barriers: [
      { barrier: 'High initial cost', count: 120 },
      { barrier: 'Lack of knowledge', count: 95 },
      { barrier: 'Space constraints', count: 80 },
      { barrier: 'Maintenance concerns', count: 65 },
      { barrier: 'No government support', count: 55 },
      { barrier: 'Landlord restrictions', count: 40 }
    ],
    totalResponses: 287
  };

  const questions = [
    {
      id: 'currentPractices',
      question: 'Do you currently follow any water-saving techniques?',
      type: 'radio',
      options: [
        'Yes, I practice basic water conservation (shorter showers, fixing leaks)',
        'Yes, I have rainwater harvesting system',
        'Yes, I reuse greywater for gardening',
        'No, I don\'t follow any specific water-saving practices'
      ]
    },
    {
      id: 'interestedInRWH',
      question: 'Would you like to implement rainwater harvesting in your home?',
      type: 'radio',
      options: [
        'Very interested - I want to start immediately',
        'Somewhat interested - I need more information',
        'Not sure - depends on cost and complexity',
        'Not interested - I don\'t see the need'
      ]
    },
    {
      id: 'barriers',
      question: 'What stops you from implementing water conservation systems? (Select all that apply)',
      type: 'checkbox',
      options: [
        'High initial investment cost',
        'Lack of technical knowledge',
        'Limited space in my property',
        'Concerns about maintenance',
        'No government incentives or support',
        'Rental property restrictions'
      ]
    },
    {
      id: 'waterUsageAwareness',
      question: 'How aware are you of your daily water consumption?',
      type: 'radio',
      options: [
        'Very aware - I track my usage regularly',
        'Somewhat aware - I have a general idea',
        'Not very aware - I don\'t pay much attention',
        'Not aware at all - I never think about it'
      ]
    },
    {
      id: 'willingnessToInvest',
      question: 'How much would you be willing to invest in a water conservation system?',
      type: 'radio',
      options: [
        'Less than ₹10,000',
        '₹10,000 - ₹25,000',
        '₹25,000 - ₹50,000',
        'More than ₹50,000'
      ]
    },
    {
      id: 'communitySupport',
      question: 'Would you support community-wide water conservation initiatives?',
      type: 'radio',
      options: [
        'Yes, I would actively participate and contribute',
        'Yes, I would participate if others do too',
        'Maybe, depends on the specific initiative',
        'No, I prefer individual solutions'
      ]
    }
  ];

  const handleInputChange = (questionId: string, value: string, isCheckbox = false) => {
    if (isCheckbox) {
      setFormData(prev => ({
        ...prev,
        [questionId]: prev.barriers.includes(value)
          ? prev.barriers.filter(item => item !== value)
          : [...prev.barriers, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [questionId]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setIsSubmitted(true);
    setTimeout(() => setShowResults(true), 1000);
  };

  const isFormValid = () => {
    return formData.currentPractices && 
           formData.interestedInRWH && 
           formData.waterUsageAwareness && 
           formData.willingnessToInvest && 
           formData.communitySupport;
  };

  if (showResults) {
    return (
      <div className="min-h-screen pt-8">
        {/* Results Header */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <BarChart3 className="h-16 w-16 mx-auto mb-6 text-green-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Survey Results & Insights
              </h1>
              <p className="text-xl text-green-100">
                Thank you for participating! Here's what our community thinks about water conservation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Results Dashboard */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Summary Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center"
              >
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {surveyResults.totalResponses}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Total Responses</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center"
              >
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">75%</h3>
                <p className="text-gray-600 dark:text-gray-300">Interested in RWH</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 text-center"
              >
                <AlertCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">42%</h3>
                <p className="text-gray-600 dark:text-gray-300">Cite Cost as Barrier</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center"
              >
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">85%</h3>
                <p className="text-gray-600 dark:text-gray-300">Support Community Initiatives</p>
              </motion.div>
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Current Practices Pie Chart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Current Water Conservation Practices
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={surveyResults.currentPractices}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {surveyResults.currentPractices.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Interest in RWH Pie Chart */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Interest in Rainwater Harvesting
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={surveyResults.interestedInRWH}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {surveyResults.interestedInRWH.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>

            {/* Barriers Bar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Main Barriers to Water Conservation Implementation
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={surveyResults.barriers}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="barrier" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      fontSize={12}
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#0EA5E9" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="py-16 bg-blue-50 dark:bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <PieChart className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Key Insights & Recommendations
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  High Interest Level
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  75% of respondents show interest in rainwater harvesting, indicating strong community readiness for water conservation initiatives.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cost Concerns
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Initial cost is the primary barrier. Need for affordable solutions and government subsidies to increase adoption rates.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Knowledge Gap
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  33% cite lack of knowledge as a barrier. Educational programs and awareness campaigns are crucial for success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Thank You for Your Response!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Your input helps us understand community needs better.
          </p>
          <div className="animate-pulse text-blue-600">
            Loading survey results...
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <ClipboardList className="h-16 w-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Conservation Survey
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed">
              Help us understand your water usage patterns and conservation preferences to build better solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Survey Form */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 shadow-lg"
            >
              <div className="text-center mb-8">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Share Your Water Conservation Experience
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Your responses will help us create better water conservation programs and resources
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {questions.map((question, index) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {index + 1}. {question.question}
                    </h3>

                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-start space-x-3">
                          <input
                            type={question.type}
                            id={`${question.id}-${optionIndex}`}
                            name={question.id}
                            value={option}
                            checked={
                              question.type === 'checkbox'
                                ? formData.barriers.includes(option)
                                : formData[question.id as keyof SurveyData] === option
                            }
                            onChange={(e) => handleInputChange(
                              question.id, 
                              option, 
                              question.type === 'checkbox'
                            )}
                            className="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label 
                            htmlFor={`${question.id}-${optionIndex}`}
                            className="text-gray-700 dark:text-gray-300 cursor-pointer flex-1"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={!isFormValid()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                >
                  <ClipboardList className="mr-2 h-6 w-6" />
                  Submit Survey
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurveyPage;