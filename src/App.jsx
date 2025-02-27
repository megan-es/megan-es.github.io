import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import DarkModeToggle from "./components/DarkModeToggle";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css"; // Import Tailwind CSS

// ScrollToTop Component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 p-3 bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg z-50 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Main App Component
const App = () => {
  const { isDarkMode, toggleDarkMode } = DarkModeToggle();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Add event listener for Tableau API loading
  useEffect(() => {
    // Check if the script already exists
    const existingScript = document.getElementById('tableau-api');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js';
      script.id = 'tableau-api';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Clean up the script when the component unmounts
        document.body.removeChild(script);
      };
    }
  }, []);

  // Loading screen
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-light dark:bg-dark z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
          <h2 className="text-2xl font-bold text-primary dark:text-white">Loading</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-light dark:bg-dark text-primary dark:text-white transition-colors duration-300">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;