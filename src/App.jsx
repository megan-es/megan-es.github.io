import "./styles.css"; // <- This must be here to load Tailwind styles
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
