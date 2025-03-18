import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/AboutSection";
import Experience from "./components/ExperienceSection";
import Projects from "./components/ProjectsSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
