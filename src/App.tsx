import { ThemeProvider } from "./contexts/ThemeContext";
import Preloader from "./components/Preloader";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/AboutSection";
import Experience from "./components/ExperienceSection";
import Projects from "./components/ProjectsSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <Preloader />
      <div className="relative min-h-screen">
        {/* Particles Background - Fixed position */}
        <ParticlesBackground />
        
        {/* Main Content */}
        <div className="relative z-10 min-h-screen bg-white dark:bg-dark-950 transition-colors duration-300">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;