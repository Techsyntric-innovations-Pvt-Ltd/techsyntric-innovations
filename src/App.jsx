import Chatbot from './components/Chatbot';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Watermark from './components/Watermark';
import ScrollToTop from './components/ScrollToTop';

// Service pages
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import AppDevelopmentPage from './pages/services/AppDevelopmentPage';
import AISolutionsPage from './pages/services/AISolutionsPage';
import CloudServicesPage from './pages/services/CloudServicesPage';
import UIUXDesignPage from './pages/services/UIUXDesignPage';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage';
import JobApplyPage from './pages/JobApplyPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/app-development" element={<AppDevelopmentPage />} />
            <Route path="/services/ai-solutions" element={<AISolutionsPage />} />
            <Route path="/services/cloud-services" element={<CloudServicesPage />} />
            <Route path="/services/uiux-design" element={<UIUXDesignPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/careers/apply" element={<JobApplyPage />} />
          </Routes>
        </main>
        <Watermark />
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

