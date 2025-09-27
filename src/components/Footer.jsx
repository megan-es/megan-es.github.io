import { motion } from "framer-motion";

const Footer = () => {
  // Google Analytics event tracking function
  const trackEvent = (action, category = 'Footer', label = '') => {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  };

  return (
    <footer className="bg-dark text-white py-4 border-t border-gray-800">
      <motion.div 
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-400 flex items-center justify-center space-x-2">
          <span>✨</span>
          <span>
            PS, I built this site from scratch. 
            <a 
              href="https://github.com/megan-es/megan-es.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent('click', 'Footer Link', 'GitHub Repository')}
              className="text-accent hover:underline ml-1"
            >
              Check out the GitHub repo
            </a>
          </span>
          <span>✨</span>
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            <strong>Privacy Notice:</strong> This site uses Google Analytics to collect anonymous information about visitor traffic and interactions (such as pages visited and clicks). The data is used only to improve the website and is not shared or sold. Learn more about how Google uses data{" "}
            <a 
              href="https://policies.google.com/technologies/partner-sites" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              here
            </a>.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;