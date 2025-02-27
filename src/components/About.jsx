const About = () => (
  <section id="about" className="p-20 bg-light text-primary text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">A Quick Background</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-secondary text-white rounded-lg shadow-md">
          <h3 className="font-bold text-xl">Recent Experience</h3>
          <p>Data Analyst @ Funko</p>
          <p>Analytics Consultant @ Sound Credit Union</p>
        </div>
        <div className="p-6 bg-secondary text-white rounded-lg shadow-md">
          <h3 className="font-bold text-xl">Core Skills</h3>
          <p>Python, SQL, Data Visualization, Machine Learning, Data Engineering</p>
        </div>
        <div className="p-6 bg-secondary text-white rounded-lg shadow-md">
          <h3 className="font-bold text-xl">Education</h3>
          <p>MS in Business Analytics - University of Washington</p>
          <p>Master of Education - University of Puget Sound</p>
          <p>Bachelor of Science - University of Oregon</p>
        </div>
        <div className="p-6 bg-secondary text-white rounded-lg shadow-md">
          <h3 className="font-bold text-xl">Areas of Interest</h3>
          <p>Artificial Intelligence, Fraud Analytics, E-Commerce</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
