import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import erdDiagram from "../assets/erd-diagram.png";
import catImage from "../assets/cat-image.png";
import { useEffect } from "react";

const projects = [
  {
    title: "Order Management Database",
    image: erdDiagram,
    description: "Designed an optimized database for order tracking.",
    link: "https://github.com/megan-es/OrderManagementDatabase",
  },
  {
    title: "Congress Aging Dashboard",
    tableauUrl: "https://public.tableau.com/views/congreesaging/Dashboard2",
    id: "tableauViz1",
  },
  {
    title: "Pet Classification",
    image: catImage,
    description: "Built a deep learning model to classify pet breeds.",
    link: "https://github.com/megan-es/PetClassificationProject",
  },
  {
    title: "Retail Insights Dashboard",
    tableauUrl: "https://public.tableau.com/views/RetailDashboard_17314641855110/Dashboard2",
    id: "tableauViz2",
  },
];

const Projects = () => {
  useEffect(() => {
    projects.forEach((project) => {
      if (project.tableauUrl) {
        setTimeout(() => {
          const container = document.getElementById(project.id);
          if (container && !container.dataset.loaded) {
            container.dataset.loaded = "true"; // Prevent multiple reloads

            // Load Tableau Dashboard dynamically
            new window.tableau.Viz(container, project.tableauUrl, {
              width: "100%",
              height: "100%",
              hideTabs: true,
              hideToolbar: true,
            });
          }
        }, 500);
      }
    });
  }, []);

  return (
    <section id="projects" className="py-20 bg-secondary text-white text-center w-screen">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="max-w-full mx-auto h-[85vh]"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="h-full flex flex-col items-center justify-center">
            <div className="tableau-container">
              {project.tableauUrl ? (
                <div id={project.id} className="tableau-wrapper" />
              ) : (
                <img src={project.image} alt={project.title} className="max-h-full max-w-full object-contain" />
              )}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            {project.link && <a href={project.link} className="text-blue-400 hover:text-blue-600">View Project</a>}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Navigation Arrows Below */}
      <div className="flex justify-center mt-4 space-x-6">
        <div className="swiper-button-prev-custom w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer">
          ❮
        </div>
        <div className="swiper-button-next-custom w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer">
          ❯
        </div>
      </div>
    </section>
  );
};

export default Projects;
