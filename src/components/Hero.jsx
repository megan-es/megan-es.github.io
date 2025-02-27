import headshot from "../assets/megan-headshot.png";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center bg-light text-primary text-center">
      <img 
        src={headshot} 
        alt="Megan Smith" 
        className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-gray-200"
      />
      <h1 className="text-5xl font-bold mt-6">Megan Smith</h1>
      <p className="text-xl mt-3 text-gray-600">Data Analyst | Business Intelligence | E-Commerce</p>
    </section>
  );
};

export default Hero;
