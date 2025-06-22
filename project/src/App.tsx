import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TechniquesPage from './pages/TechniquesPage';
import CalculatorPage from './pages/CalculatorPage';
import SurveyPage from './pages/SurveyPage';
import PledgePage from './pages/PledgePage';
import ResourcesPage from './pages/ResourcesPage';
import StoriesPage from './pages/StoriesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/Common/ScrollToTop';
import WaterDropAnimation from './components/Animations/WaterDropAnimation';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
          <ScrollToTop />
          <WaterDropAnimation />
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/techniques" element={<TechniquesPage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/survey" element={<SurveyPage />} />
              <Route path="/pledge" element={<PledgePage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;