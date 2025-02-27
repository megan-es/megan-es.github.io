const Contact = () => (
  <section id="contact" className="p-20 bg-dark text-white text-center">
    <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
    <p className="text-lg mb-6">Reach out to me through any of these platforms:</p>
    <div className="flex justify-center space-x-10">
      <a href="https://github.com/megan-es" target="_blank" className="text-blue-400 hover:text-blue-600 text-xl">GitHub</a>
      <a href="https://www.linkedin.com/in/-megan-e-smith/" target="_blank" className="text-blue-400 hover:text-blue-600 text-xl">LinkedIn</a>
      <a href="https://public.tableau.com/app/profile/megan.es/vizzes" target="_blank" className="text-blue-400 hover:text-blue-600 text-xl">Tableau</a>
    </div>
  </section>
);

export default Contact;
