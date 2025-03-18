import { Github, Linkedin, Mail, Download } from "lucide-react";
import fotoPerfil from "../assets/foto_perfil_fran.jpg";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
        
        {/* Foto Redonda */}
        <div className="mb-8 md:mb-0 md:mr-12">
          <img
            src={fotoPerfil}
            alt="Francisco Goroso"
            className="w-48 h-48 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ¡Hola, soy Francisco!
          </h1>
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">
            Desarrollador Full Stack MERN
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl">
            Me especializo en <strong>MongoDB, Express, React y Node.js</strong>, creando aplicaciones modernas y eficientes.  
            Mi enfoque está en desarrollar soluciones dinámicas y escalables, siempre priorizando la experiencia del usuario.
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Cada proyecto es una oportunidad para combinar <strong>creatividad y funcionalidad</strong>, asegurando un diseño intuitivo y orientado a las necesidades del usuario.
          </p>

          {/* Iconos Sociales */}
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            <a 
              href="https://github.com/FranGoroso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/francisco-goroso-609796266/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="mailto:contacto@frangoroso.com"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <Mail size={32} />
            </a>
          </div>

          {/* Botón Descargar CV */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/docs/cv.pdf"
              download="Francisco_Goroso_CV.pdf"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Download size={20} />
              Descargar CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
