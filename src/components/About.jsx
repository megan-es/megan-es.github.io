import { motion } from "framer-motion";

// Categorized Skills
const skillCategories = [
  {
    category: "Data Analysis & Visualization",
    skills: ["Tableau", "Power BI", "Advanced Excel", "Data Storytelling"]
  },
  {
    category: "Programming & Tools",
    skills: ["Python", "SQL", "R", "Jupyter Notebooks"]
  },
  {
    category: "Machine Learning & Analytics",
    skills: ["Predictive Modeling", "Statistical Analysis", "Machine Learning", "A/B Testing"]
  },
  {
    category: "Business Intelligence",
    skills: ["Dashboard Design", "Reporting", "KPI Development", "Operational Analytics"]
  }
];

// Experience timeline
const experiences = [
  {
    role: "Data Analyst",
    company: "Funko",
    description: "Leading data analysis for e-commerce operations, driving insights that increased conversion rates by 18%."
  },
  {
    role: "Analytics Consultant",
    company: "Sound Credit Union",
    description: "Developed custom dashboards and analytical solutions to optimize financial operations and customer insights."
  }
];

// Education details
const education = [
  {
    degree: "Master of Science in Business Analytics",
    school: "University of Washington"
  },
  {
    degree: "Master of Education",
    school: "University of Puget Sound"
  },
  {
    degree: "Bachelor of Science",
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
            I'm a data analytics professional who combines technical expertise with business acumen to deliver
            actionable insights that drive decision-making.
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
            <h3 className="text-2xl font-bold text-primary mb-6">Recent Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-accent">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                  <h4 className="text-xl font-bold text-primary">{exp.role}</h4>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{exp.company}</span>
                  </div>
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
                  <h4 className="text-lg font-bold text-primary mb-1">{edu.degree}</h4>
                  <div className="text-gray-600 mb-2">{edu.school}</div>
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

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-block py-4 px-8 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;