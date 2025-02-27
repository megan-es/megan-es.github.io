import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import images from assets folder
import retailDashboardImage from "../assets/retail-dashboard.png";
import congressDashboardImage from "../assets/congress-dashboard.png";
import erdDiagram from "../assets/erd-diagram.png";
import catImage from "../assets/cat-image.png";

const projects = [
  {
    title: "Order Management Database",
    image: erdDiagram,
    description: "Designed and implemented a comprehensive database system for order tracking and management, optimizing query performance and data integrity.",
    technologies: ["SQL", "Database Design", "ERD Modeling"],
    codeLink: "https://github.com/megan-es/OrderManagementDatabase"
  },
  {
    title: "Retail Insights Dashboard",
    image: retailDashboardImage,
    description: "Comprehensive retail analytics dashboard providing actionable insights on sales trends, customer behavior, and inventory optimization.",
    technologies: ["Tableau", "Business Intelligence", "Retail Analytics"],
    liveLink: "https://public.tableau.com/views/RetailDashboard_17314641855110/Dashboard2"
  },
  {
    title: "Pet Classification AI",
    image: catImage,
    description: "Deep learning model that accurately classifies pet breeds from images with 95% accuracy, using transfer learning and convolutional neural networks.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
    codeLink: "https://github.com/megan-es/PetClassificationProject"
  },
  {
    title: "Congress Aging Dashboard",
    image: congressDashboardImage,
    description: "Interactive visualization of congressional age demographics over time, revealing trends and shifts in representation.",
    technologies: ["Tableau", "Data Visualization", "Political Analysis"],
    liveLink: "https://public.tableau.com/views/congreesaging/Dashboard2"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary text-white">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my analytics work, featuring interactive dashboards and data-driven solutions.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          effect="fade"
          speed={800}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className="project-swiper relative rounded-xl shadow-2xl"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="h-full bg-gray-800 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="p-6 md:p-12 flex flex-col justify-center">
                  <span className="text-accent text-sm font-bold tracking-wider uppercase mb-2">
                    Project {index + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-gray-700 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {project.codeLink && (
                      <a 
                        href={project.codeLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-3 px-6 bg-accent hover:bg-accent/80 rounded-lg transition-colors duration-300"
                      >
                        View Code
                      </a>
                    )}
                    
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-3 px-6 bg-accent hover:bg-accent/80 rounded-lg transition-colors duration-300"
                      >
                        View Interactive Dashboard
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="project-image-container flex items-center justify-center h-full bg-white/5 backdrop-blur-sm p-4">
                  <div className="w-full flex items-center justify-center">
                    <a 
                      href={project.liveLink || project.codeLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dashboard-screenshot-link"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="dashboard-screenshot max-h-full rounded-lg shadow-lg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex justify-center mt-8 space-x-6">
          <button className="swiper-button-prev-custom w-12 h-12 bg-accent/80 hover:bg-accent rounded-full flex items-center justify-center cursor-pointer text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom w-12 h-12 bg-accent/80 hover:bg-accent rounded-full flex items-center justify-center cursor-pointer text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;