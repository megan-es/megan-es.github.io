import { motion } from "framer-motion";

// Categorized Skills
const skillCategories = [
  {
    category: "Data Science & Analytics",
    skills: ["Machine Learning", "Statistical Analysis", "Predictive Modeling", "Data Modeling"]
  },
  {
    category: "Programming & Tools",
    skills: ["Python", "R", "SQL", "Jupyter Notebooks", "Git"]
  },
  {
    category: "Business Intelligence",
    skills: ["Tableau", "Power BI", "Dashboard Design", "Data Visualization"]
  },
  {
    category: "Database & Infrastructure",
    skills: ["Database Design", "ETL Processes", "Data Engineering", "Cloud Platforms"]
  }
];

// Experience timeline
const experiences = [
  {
    role: "Data Analyst",
    company: "Funko",
    description: "Leveraged advanced analytics to optimize e-commerce operations, developing predictive models that enhanced conversion rates and customer insights."
  },
  {
    role: "Analytics Consultant",
    company: "Sound Credit Union",
    description: "Designed and implemented comprehensive data solutions, creating sophisticated dashboards and analytical frameworks to drive strategic decision-making."
  }
];

// Education details
const education = [
  {
    degree: "Master of Science",
    major: "Business Analytics",
    school: "University of Washington"
  },
  {
    degree: "Master of Education",
    major: "Learning, Teaching & Leadership",
    school: "University of Puget Sound"
  },
  {
    degree: "Bachelor of Science",
    major: "Dual Degrees in Music and Political Science",
    school: "University of Oregon"
  }
];

const SkillTag = ({ skill }) => (
  <motion.div
    className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
  >
    {skill}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seattle-based data science professional dedicated to transforming complex data into strategic insights, 
            bridging technical expertise with business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section with Categorized Tags */}
          <motion.div
            className="bg-white rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="mb-6">
                  <h4 className="text-lg font-semibold text-primary/80 mb-4">{category.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillTag key={skillIndex} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="bg-white rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-xl font-bold text-primary">{exp.role}</h4>
                  <div className="text-sm text-gray-500 mb-2">{exp.company}</div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="bg-white rounded-xl shadow-xl p-8 lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-primary mb-1">
                    {edu.degree}
                    {edu.major && <span className="block text-sm text-primary/80 font-medium">{edu.major}</span>}
                  </h4>
                  <div className="text-gray-600">{edu.school}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            className="bg-secondary text-white rounded-xl shadow-xl p-8 lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Areas of Interest</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-accent/20 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Artificial Intelligence</h4>
                <p>Exploring machine learning models for predictive analytics and process automation</p>
              </div>
              <div className="bg-accent/20 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Fraud Analytics</h4>
                <p>Developing pattern recognition systems to identify and prevent fraudulent activities</p>
              </div>
              <div className="bg-accent/20 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">E-Commerce</h4>
                <p>Optimizing customer journeys and conversion funnels through behavioral data analysis</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;