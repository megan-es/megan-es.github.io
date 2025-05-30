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
import animalCrossingImage from "../assets/animal-crossing.png"; // You'll need to add this image to your assets folder
import capstoneImage from "../assets/capstone-poster.png"; // You'll need to add this image to your assets folder

const projects = [
  {
    title: "Order Management Database",
    image: erdDiagram,
    description: "Order Management Database utilizing SQL to streamline order tracking and improve data organization. Worked with database normalization, indexing, and complex queries to optimize performance and ensure efficient data retrieval.",
    skills: ["SQL", "Database Design", "ERD Modeling"],
    codeLink: "https://github.com/megan-es/OrderManagementDatabase"
  },
  {
    title: "Retail Insights Dashboard",
    image: retailDashboardImage,
    description: "Comprehensive retail analytics dashboard providing actionable insights on sales trends, customer behavior, and inventory optimization.",
    skills: ["Tableau", "Business Intelligence", "Retail Analytics"],
    liveLink: "https://public.tableau.com/views/RetailDashboard_17314641855110/Dashboard2"
  },
  {
    title: "Pet Classification Model",
    image: catImage,
    description: "Developed a pet breed classification model using TensorFlow, trained on the Oxford-IIIT Pet Dataset to accurately identify 37 cat and dog breeds. Employed OpenCV for image preprocessing, implemented data augmentation and dropout layers to prevent overfitting, and achieved approximately 90% validation accuracy.",
    skills: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
    codeLink: "https://github.com/megan-es/PetClassificationProject"
  },
  {
    title: "Congress Aging Dashboard",
    image: congressDashboardImage,
    description: "Interactive visualization of congressional age demographics over time, revealing trends and shifts in representation. Utilized Python pandas library for data enhancement and standardization, as well as matplotlib for exploratory data visualization.",
    skills: ["Tableau", "Data Visualization", "Political Analysis", "Python", "matplotlib", "pandas"],
    liveLink: "https://public.tableau.com/views/congreesaging/Dashboard2"
  },
  {
      title: "Animal Crossing: New Horizons Analysis",
      image: animalCrossingImage,
      description: "Analyzed Animal Crossing: New Horizons gameplay data to uncover patterns in villager demographics and in-game item preferences. Developed interactive visualizations to present insights on player behavior, villager popularity trends, and game economy dynamics.",
      skills: ["Python", "pandas", "Data Analysis", "Matplotlib", "Statistical Modeling"],
      codeLink: "https://github.com/megan-es/animal-crossing-new-horizons-project"
    },
  {
    title: "Sound Credit Union Fraud Detection Model",
    image: capstoneImage,
    description: "Developed a machine learning model to detect and prevent fraudulent transactions for Sound Credit Union. Created a comprehensive fraud detection system that analyzes transaction patterns and customer behavior to identify potential fraud in real-time.",
    skills: ["Machine Learning", "Python", "Data Analysis", "Financial Analytics", "Fraud Detection"],
    posterLink: "https://bpb-us-e1.wpmucdn.com/sites.uw.edu/dist/3/652/files/2025/05/projectteam6_4474475_135433727_Showcase-2025_Poster_Team6_Sound-Credit-Union-1.pdf",
    videoLink: "https://youtu.be/zb2ljPz6heM?si=L6uh9NQgYoPGTCIG"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-secondary text-white">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-2">Projects</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-3"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
          className="project-swiper relative rounded-xl shadow-2xl max-w-5xl mx-auto"
        >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="h-full bg-gray-800 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="p-3 md:p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-3 text-sm md:text-base">{project.description}</p>
              
              <div className="mb-3">
                <h4 className="text-xs uppercase text-gray-400 mb-1">Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills?.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs bg-gray-700 rounded-full">
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
                        className="inline-block py-2 px-4 text-sm bg-accent hover:bg-accent/80 rounded-lg transition-colors duration-300"
                      >
                        View Code
                      </a>
                    )}
                    
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2 px-4 text-sm bg-accent hover:bg-accent/80 rounded-lg transition-colors duration-300"
                      >
                        View Interactive Dashboard
                      </a>
                    )}

                    {project.posterLink && (
                      <a 
                        href={project.posterLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2 px-4 text-sm bg-accent hover:bg-accent/80 rounded-lg transition-colors duration-300"
                      >
                        View Project Poster
                      </a>
                    )}

                    {project.videoLink && (
                      <a 
                        href={project.videoLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2 px-4 text-sm bg-accent hover:bg-accent/80 rounded-lg transition-colors duration-300"
                      >
                        Watch Project Video
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="project-image-container flex items-center justify-center h-full bg-white/5 backdrop-blur-sm p-4">
                  <div className="w-full flex items-center justify-center">
                    <a 
                      href={project.codeLink || project.liveLink} 
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