import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Droplets, 
  Home, 
  CloudRain, 
  Recycle,
  TrendingUp,
  Target,
  Award,
  Info
} from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CalculationResults {
  rainwaterHarvest: number;
  greyWaterReuse: number;
  totalSavings: number;
  householdCoverage: number;
  tankSizeNeeded: number;
  costSavings: number;
}

const CalculatorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    roofArea: '',
    annualRainfall: '',
    householdSize: '',
    dailyWaterUsage: '',
    greyWaterSources: [] as string[],
    currentWaterCost: ''
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const greyWaterSourceOptions = [
    { id: 'bathroom_sink', label: 'Bathroom Sink', avgLiters: 30 },
    { id: 'shower', label: 'Shower/Bath', avgLiters: 80 },
    { id: 'washing_machine', label: 'Washing Machine', avgLiters: 100 },
    { id: 'kitchen_safe', label: 'Kitchen (Pre-rinse only)', avgLiters: 20 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGreyWaterSourceChange = (sourceId: string) => {
    setFormData(prev => ({
      ...prev,
      greyWaterSources: prev.greyWaterSources.includes(sourceId)
        ? prev.greyWaterSources.filter(id => id !== sourceId)
        : [...prev.greyWaterSources, sourceId]
    }));
  };

  const calculateWaterSavings = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const roofArea = parseFloat(formData.roofArea) || 0;
      const rainfall = parseFloat(formData.annualRainfall) || 0;
      const householdSize = parseInt(formData.householdSize) || 1;
      const dailyUsage = parseFloat(formData.dailyWaterUsage) || 150;
      const waterCost = parseFloat(formData.currentWaterCost) || 20;

      // Rainwater harvesting calculation
      // Formula: Roof Area (m²) × Rainfall (mm) × 0.8 (efficiency factor)
      const rainwaterHarvest = roofArea * rainfall * 0.8;

      // Greywater reuse calculation
      const selectedSources = formData.greyWaterSources.map(id => 
        greyWaterSourceOptions.find(source => source.id === id)
      ).filter(Boolean);
      
      const dailyGreyWater = selectedSources.reduce((total, source) => 
        total + (source?.avgLiters || 0), 0
      ) * householdSize;
      
      const annualGreyWater = dailyGreyWater * 365;

      // Total calculations
      const totalSavings = rainwaterHarvest + annualGreyWater;
      const annualDemand = dailyUsage * householdSize * 365;
      const householdCoverage = Math.min((totalSavings / annualDemand) * 100, 100);
      
      // Tank size recommendation (3 months of rainwater storage)
      const tankSizeNeeded = Math.ceil(rainwaterHarvest / 4 / 1000) * 1000; // Round to nearest 1000L
      
      // Cost savings calculation
      const costSavings = (totalSavings / 1000) * waterCost;

      setResults({
        rainwaterHarvest: Math.round(rainwaterHarvest),
        greyWaterReuse: Math.round(annualGreyWater),
        totalSavings: Math.round(totalSavings),
        householdCoverage: Math.round(householdCoverage * 10) / 10,
        tankSizeNeeded,
        costSavings: Math.round(costSavings)
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  const getPieChartData = () => {
    if (!results) return [];
    
    return [
      { name: 'Rainwater Harvest', value: results.rainwaterHarvest, fill: '#0EA5E9' },
      { name: 'Greywater Reuse', value: results.greyWaterReuse, fill: '#14B8A6' },
    ];
  };

  const getBarChartData = () => {
    if (!results) return [];
    
    const monthlyData = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 0; i < 12; i++) {
      monthlyData.push({
        month: months[i],
        rainwater: Math.round(results.rainwaterHarvest / 12),
        greywater: Math.round(results.greyWaterReuse / 12),
      });
    }
    
    return monthlyData;
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Calculator className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Water Savings Calculator
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              Calculate your potential water savings from rainwater harvesting and greywater reuse systems.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Home className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Enter Your Details
                </h2>
              </div>

              <div className="space-y-6">
                {/* Roof Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <CloudRain className="inline h-4 w-4 mr-2" />
                    Roof Area (Square Meters)
                  </label>
                  <input
                    type="number"
                    name="roofArea"
                    value={formData.roofArea}
                    onChange={handleInputChange}
                    placeholder="e.g., 100"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">Typical home: 80-150 sq.m</p>
                </div>

                {/* Annual Rainfall */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Droplets className="inline h-4 w-4 mr-2" />
                    Annual Rainfall (Millimeters)
                  </label>
                  <input
                    type="number"
                    name="annualRainfall"
                    value={formData.annualRainfall}
                    onChange={handleInputChange}
                    placeholder="e.g., 1200"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">India average: 1000-2000mm</p>
                </div>

                {/* Household Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Household Size (Number of People)
                  </label>
                  <input
                    type="number"
                    name="householdSize"
                    value={formData.householdSize}
                    onChange={handleInputChange}
                    placeholder="e.g., 4"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  />
                </div>

                {/* Daily Water Usage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Daily Water Usage per Person (Liters)
                  </label>
                  <input
                    type="number"
                    name="dailyWaterUsage"
                    value={formData.dailyWaterUsage}
                    onChange={handleInputChange}
                    placeholder="e.g., 150"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">Urban India average: 135-200L</p>
                </div>

                {/* Greywater Sources */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    <Recycle className="inline h-4 w-4 mr-2" />
                    Available Greywater Sources
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {greyWaterSourceOptions.map((source) => (
                      <div key={source.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={source.id}
                          checked={formData.greyWaterSources.includes(source.id)}
                          onChange={() => handleGreyWaterSourceChange(source.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={source.id} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                          {source.label}
                          <span className="text-xs text-gray-500 block">
                            ~{source.avgLiters}L/day/person
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Water Cost */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Water Cost (₹ per 1000L)
                  </label>
                  <input
                    type="number"
                    name="currentWaterCost"
                    value={formData.currentWaterCost}
                    onChange={handleInputChange}
                    placeholder="e.g., 20"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">Municipal rates: ₹15-40 per 1000L</p>
                </div>

                {/* Calculate Button */}
                <motion.button
                  onClick={calculateWaterSavings}
                  disabled={isCalculating || !formData.roofArea || !formData.annualRainfall}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center"
                >
                  {isCalculating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Calculating...
                    </>
                  ) : (
                    <>
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculate Water Savings
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {results ? (
              <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6">
                    <Droplets className="h-8 w-8 mb-2" />
                    <h3 className="text-lg font-semibold mb-1">Rainwater Harvest</h3>
                    <p className="text-2xl font-bold">{results.rainwaterHarvest.toLocaleString()}L</p>
                    <p className="text-sm text-blue-100">per year</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl p-6">
                    <Recycle className="h-8 w-8 mb-2" />
                    <h3 className="text-lg font-semibold mb-1">Greywater Reuse</h3>
                    <p className="text-2xl font-bold">{results.greyWaterReuse.toLocaleString()}L</p>
                    <p className="text-sm text-teal-100">per year</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6">
                    <TrendingUp className="h-8 w-8 mb-2" />
                    <h3 className="text-lg font-semibold mb-1">Total Savings</h3>
                    <p className="text-2xl font-bold">{results.totalSavings.toLocaleString()}L</p>
                    <p className="text-sm text-green-100">per year</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6">
                    <Target className="h-8 w-8 mb-2" />
                    <h3 className="text-lg font-semibold mb-1">Coverage</h3>
                    <p className="text-2xl font-bold">{results.householdCoverage}%</p>
                    <p className="text-sm text-purple-100">of household need</p>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Water Savings Breakdown
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={getPieChartData()}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {getPieChartData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value.toLocaleString()}L`, 'Liters']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Monthly Water Savings Projection
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={getBarChartData()}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value}L`, 'Liters']} />
                        <Legend />
                        <Bar dataKey="rainwater" fill="#0EA5E9" name="Rainwater" />
                        <Bar dataKey="greywater" fill="#14B8A6" name="Greywater" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-start">
                    <Award className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Recommendations
                      </h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Install a <strong>{results.tankSizeNeeded}L storage tank</strong> for optimal rainwater collection</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>You could save approximately <strong>₹{results.costSavings}</strong> annually on water bills</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            {results.householdCoverage >= 80 
                              ? 'Excellent! Your system can cover most of your water needs.'
                              : results.householdCoverage >= 50
                              ? 'Good coverage! Consider additional water saving measures.'
                              : 'Consider increasing roof area or adding more greywater sources for better coverage.'
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 text-center">
                <Info className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Ready to Calculate?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill in your details on the left to see your personalized water savings potential, 
                  cost benefits, and system recommendations.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;