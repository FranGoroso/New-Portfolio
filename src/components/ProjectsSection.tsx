import { Code, ExternalLink } from "lucide-react";
import ecommerceImage from "../assets/captura-inicio-react-ecommerce.png";
import quizImage from "../assets/cuestionario_js.png";
import llauretumImage from "../assets/llauretum.png";
import tuIntencionImage from "../assets/tuintencionpositiva.png";
import mozaikImage from "../assets/mozaik.png";

const projects = [
  {
    title: "E-commerce React",
    description:
      "Desarrollado en React, este proyecto es una tienda en línea de prueba con funciones como navegación, filtros y flujo de compra. Aunque no está disponible en el mercado, me ayudó a mejorar mis habilidades en React y frontend.",
    technologies: ["React", "Firebase", "Bootstrap", "HTML", "CSS"],
    link: "https://proyect-react-cm-65120.vercel.app/",
    image: ecommerceImage,
  },
  {
    title: "Cuestionario Interactivo JS",
    description:
      "Un desafío práctico donde aprendí y apliqué JavaScript, manejando eventos y estructuras de programación. Fue clave para consolidar mis habilidades y entender cómo funcionan las aplicaciones dinámicas.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://frangoroso.github.io/curso-js-coderhouse-CM-64775/",
    image: quizImage,
  },
  {
    title: "Tu Intención Positiva",
    description:
      "Desarrollado en WordPress, creé un sitio web funcional y visualmente atractivo con diseño responsivo y personalización de plantillas. Este proyecto me permitió profundizar en el manejo de CMS y mejorar la accesibilidad.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
    link: "https://tuintencionpositiva.com/",
    image: tuIntencionImage,
  },
  {
    title: "Llauretum",
    description:
      "Es un sitio web que gestiono y mantengo actualmente, asegurando su correcto funcionamiento y actualizaciones periódicas. Aunque no fue completamente desarrollado por mí, me encargo de su administración, optimización y personalización, garantizando que siga alineado con las necesidades del cliente.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
    link: "https://llauretum.es/",
    image: llauretumImage,
  },
  {
    title: "Mozaik Bakery",
    description:
      "Un sitio web moderno y dinámico desarrollado en React, con integración de Google Sheets para la gestión del menú en tiempo real. La API de Google Sheets permite a los propietarios actualizar los productos fácilmente sin necesidad de conocimientos técnicos. Diseñado con un enfoque visual atractivo y una experiencia de usuario fluida.",
    technologies: ["React", "Google Sheets API", "Tailwind CSS", "JavaScript"],
    link: "https://mozaikbakery.com",
    image: mozaikImage,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
          <Code className="text-blue-600" size={32} />
          Proyectos Destacados
        </h2>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Imagen del proyecto */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 my-4">{project.description}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlace */}
                <a href={project.link} className="inline-flex items-center text-blue-600 hover:underline">
                  Ver Proyecto <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;