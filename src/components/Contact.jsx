import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Want to collaborate or discuss data analytics? I'm always open to new opportunities and connections.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
            <a 
              href="https://www.linkedin.com/in/-megan-e-smith/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
            >
              <div className="bg-gray-700 p-3 rounded-lg mr-4 group-hover:bg-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-bold">LinkedIn</h4>
                <p className="text-sm text-gray-400">Connect professionally</p>
              </div>
            </a>

            <a 
              href="https://github.com/megan-es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
            >
              <div className="bg-gray-700 p-3 rounded-lg mr-4 group-hover:bg-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold">GitHub</h4>
                <p className="text-sm text-gray-400">View my repositories</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;