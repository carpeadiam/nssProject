import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Droplets,
  TrendingUp,
  Award,
  Heart,
  Plus,
  Send
} from 'lucide-react';

interface Story {
  id: number;
  title: string;
  author: string;
  location: string;
  date: string;
  category: 'rainwater' | 'greywater' | 'community' | 'innovation';
  image: string;
  excerpt: string;
  fullStory: string;
  impact: {
    waterSaved: string;
    costSavings: string;
    peopleHelped: string;
  };
  rating: number;
  featured: boolean;
}

const StoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [submissionData, setSubmissionData] = useState({
    title: '',
    author: '',
    location: '',
    category: '',
    story: '',
    email: ''
  });

  const stories: Story[] = [
    {
      id: 1,
      title: 'From Water Crisis to Water Abundance: A Village Transformation',
      author: 'Priya Sharma',
      location: 'Rajasthan, India',
      date: '2024-01-15',
      category: 'community',
      image: 'https://images.pexels.com/photos/6994314/pexels-photo-6994314.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'How our village of 500 families went from severe water scarcity to becoming a model for water conservation through community-driven rainwater harvesting.',
      fullStory: 'Our village in Rajasthan faced severe water crisis with wells drying up and women walking 5km daily for water. Through collective effort and implementing large-scale rainwater harvesting, we now have surplus water even in drought years. The project involved 50 rooftop systems and 3 community tanks.',
      impact: {
        waterSaved: '2.5 Million Liters',
        costSavings: '₹8,50,000',
        peopleHelped: '500 Families'
      },
      rating: 5,
      featured: true
    },
    {
      id: 2,
      title: 'Urban Apartment Complex Goes Green with Greywater',
      author: 'Rahul Patel',
      location: 'Mumbai, Maharashtra',
      date: '2024-01-10',
      category: 'greywater',
      image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'A 200-unit apartment complex reduces water bills by 40% through innovative greywater recycling system.',
      fullStory: 'Our apartment complex installed a centralized greywater treatment system that processes water from all bathrooms and washing machines. The treated water is used for gardening, car washing, and toilet flushing. Initial investment of ₹15 lakhs paid back in 18 months.',
      impact: {
        waterSaved: '1.8 Million Liters',
        costSavings: '₹6,20,000',
        peopleHelped: '200 Families'
      },
      rating: 5,
      featured: true
    },
    {
      id: 3,
      title: 'Student Innovation: Smart Rainwater Harvesting System',
      author: 'Anjali Verma',
      location: 'Bangalore, Karnataka',
      date: '2024-01-05',
      category: 'innovation',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Engineering student develops IoT-enabled rainwater harvesting system that optimizes water collection and storage.',
      fullStory: 'As part of my final year project, I developed a smart RWH system with sensors that monitor rainfall, water quality, and tank levels. The system automatically diverts first flush and sends alerts to users. Now implemented in 25 homes with 95% efficiency.',
      impact: {
        waterSaved: '500,000 Liters',
        costSavings: '₹2,50,000',
        peopleHelped: '25 Families'
      },
      rating: 4,
      featured: false
    },
    {
      id: 4,
      title: 'School Becomes Water Conservation Champion',
      author: 'Vikram Singh',
      location: 'Delhi, India',
      date: '2023-12-28',
      category: 'community',
      image: 'https://images.pexels.com/photos/6994314/pexels-photo-6994314.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Government school implements comprehensive water conservation program, inspiring 500 students and their families.',
      fullStory: 'Our school started with a simple rainwater harvesting project but expanded to include greywater gardens, water-efficient fixtures, and student education programs. Students take the knowledge home, creating a ripple effect in the community.',
      impact: {
        waterSaved: '800,000 Liters',
        costSavings: '₹3,20,000',
        peopleHelped: '500 Students + Families'
      },
      rating: 5,
      featured: false
    },
    {
      id: 5,
      title: 'Rooftop Farming with Harvested Rainwater',
      author: 'Meera Gupta',
      location: 'Chennai, Tamil Nadu',
      date: '2023-12-20',
      category: 'rainwater',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Urban farmer creates sustainable rooftop garden using only harvested rainwater, producing food for 20 families.',
      fullStory: 'Started with a 1000L tank for rainwater harvesting on my terrace. Now I have a thriving organic garden that supplies vegetables to my building. The system includes drip irrigation and composting, creating a complete sustainable cycle.',
      impact: {
        waterSaved: '300,000 Liters',
        costSavings: '₹1,80,000',
        peopleHelped: '20 Families'
      },
      rating: 4,
      featured: false
    },
    {
      id: 6,
      title: 'Industrial Water Recycling Success Story',
      author: 'Arjun Kumar',
      location: 'Pune, Maharashtra',
      date: '2023-12-15',
      category: 'innovation',
      image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Manufacturing unit achieves 80% water recycling through advanced treatment and rainwater integration.',
      fullStory: 'Our textile manufacturing unit was facing water shortage and high costs. We implemented a comprehensive water management system combining rainwater harvesting, wastewater treatment, and process optimization. Now we are water-positive even during dry seasons.',
      impact: {
        waterSaved: '5 Million Liters',
        costSavings: '₹25,00,000',
        peopleHelped: '1000 Employees'
      },
      rating: 5,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Stories', icon: Star },
    { id: 'rainwater', label: 'Rainwater Harvesting', icon: Droplets },
    { id: 'greywater', label: 'Greywater Reuse', icon: TrendingUp },
    { id: 'community', label: 'Community Projects', icon: Users },
    { id: 'innovation', label: 'Innovation', icon: Award }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  const featuredStories = stories.filter(story => story.featured);

  const handleSubmissionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSubmissionData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Thank you for sharing your story! We will review it and get back to you.');
    setShowSubmissionForm(false);
    setSubmissionData({
      title: '',
      author: '',
      location: '',
      category: '',
      story: '',
      email: ''
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      rainwater: 'from-blue-500 to-blue-600',
      greywater: 'from-teal-500 to-teal-600',
      community: 'from-green-500 to-green-600',
      innovation: 'from-purple-500 to-purple-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Star className="h-16 w-16 mx-auto mb-6 text-amber-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 leading-relaxed">
              Real people, real impact. Discover inspiring stories of water conservation champions making a difference in their communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Award className="h-12 w-12 mx-auto mb-4 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Exceptional achievements in water conservation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-orange-200 dark:border-orange-800"
              >
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(story.category)} text-white text-xs font-medium rounded-full mb-3`}>
                    {story.category.charAt(0).toUpperCase() + story.category.slice(1)}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {story.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {story.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(story.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Water Saved</p>
                      <p className="font-semibold text-blue-600 text-xs">{story.impact.waterSaved}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Cost Savings</p>
                      <p className="font-semibold text-green-600 text-xs">{story.impact.costSavings}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">People Helped</p>
                      <p className="font-semibold text-purple-600 text-xs">{story.impact.peopleHelped}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      By {story.author}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                    >
                      Read Full Story →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-slate-800 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-600'
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* All Stories */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedCategory === 'all' ? 'All Stories' : categories.find(c => c.id === selectedCategory)?.label}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {filteredStories.length} inspiring stories of water conservation
              </p>
            </div>
            
            <motion.button
              onClick={() => setShowSubmissionForm(true)}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center hover:from-green-700 hover:to-teal-700 transition-all duration-200"
            >
              <Plus className="h-5 w-5 mr-2" />
              Share Your Story
            </motion.button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(story.category)} text-white text-xs font-medium rounded-full mb-3`}>
                    {story.category.charAt(0).toUpperCase() + story.category.slice(1)}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {story.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {story.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(story.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      By {story.author}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Submission Modal */}
      {showSubmissionForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Share Your Success Story
              </h3>
              <button
                onClick={() => setShowSubmissionForm(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmissionSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Story Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={submissionData.title}
                    onChange={handleSubmissionChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                    placeholder="Give your story a compelling title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={submissionData.author}
                    onChange={handleSubmissionChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={submissionData.location}
                    onChange={handleSubmissionChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                    placeholder="City, State"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={submissionData.category}
                    onChange={handleSubmissionChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  >
                    <option value="">Select category</option>
                    <option value="rainwater">Rainwater Harvesting</option>
                    <option value="greywater">Greywater Reuse</option>
                    <option value="community">Community Project</option>
                    <option value="innovation">Innovation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={submissionData.email}
                  onChange={handleSubmissionChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Story * (minimum 200 words)
                </label>
                <textarea
                  name="story"
                  value={submissionData.story}
                  onChange={handleSubmissionChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  placeholder="Tell us about your water conservation journey, challenges faced, solutions implemented, and the impact achieved..."
                />
              </div>

              <div className="flex gap-4">
                <motion.button
                  type="button"
                  onClick={() => setShowSubmissionForm(false)}
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-gray-300 dark:bg-slate-700 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-slate-600 transition-colors"
                >
                  Cancel
                </motion.button>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Story
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Heart className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Story Could Inspire Thousands
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Every water conservation effort, no matter how small, has the potential to create ripple effects. Share your journey and inspire others to take action.
            </p>
            <motion.button
              onClick={() => setShowSubmissionForm(true)}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-full hover:bg-purple-50 transition-all duration-200 shadow-lg"
            >
              <Plus className="mr-2 h-6 w-6" />
              Share Your Success Story
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;