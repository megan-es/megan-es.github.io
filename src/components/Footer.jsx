import { motion } from "framer-motion";

const Footer = () => {
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
              className="text-accent hover:underline ml-1"
            >
              Check out the GitHub repo
            </a>
          </span>
          <span>✨</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;