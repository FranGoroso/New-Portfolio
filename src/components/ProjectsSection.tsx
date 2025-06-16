import { Code, ExternalLink, Github, Sparkles, ArrowUpRight, Folder } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import ecommerceImage from "../assets/captura-inicio-react-ecommerce.png";
import electroclauImage from "../assets/electroclau.png";
import llauretumImage from "../assets/llauretum.png";
import majdigitalImage from "../assets/majdigitalstrategies.png";
import mozaikImage from "../assets/mozaik.png";
import { useScrollAnimation, fadeIn, slideUp } from "../hooks/useScrollAnimation";

const projects = [
  {
    title: "Mozaik Bakery",
    description:
      "Un sitio web moderno y dinámico desarrollado en React, con integración de Google Sheets para la gestión del menú en tiempo real. La API de Google Sheets permite a los propietarios actualizar los productos fácilmente sin necesidad de conocimientos técnicos.",
    technologies: ["React", "Google Sheets API", "Tailwind CSS", "JavaScript"],
    link: "https://mozaikbakery.com",
    image: mozaikImage,
    featured: true,
    category: "Full Stack"
  },
  {
    title: "MAJ Digital Strategies",
    description:
      "Sitio web corporativo desarrollado con React y backend personalizado. Incluye integración con Google Analytics, píxeles de seguimiento y dashboard de métricas para análisis de rendimiento y visualización de datos en tiempo real.",
    technologies: ["React", "Node.js", "Analytics", "Píxeles", "Charts.js"],
    link: "https://majdigitalstrategies.com/",
    image: majdigitalImage,
    featured: true,
    category: "Full Stack"
  },
  {
    title: "ElectroClau",
    description:
      "Sitio web corporativo desarrollado desde cero para empresa del sector eléctrico. Diseño moderno y responsive que presenta servicios, información de contacto y portafolio de trabajos realizados de forma clara y profesional.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    link: "https://electroclau.com/",
    image: electroclauImage,
    category: "Frontend"
  },
  {
    title: "E-commerce React",
    description:
      "Desarrollado en React, este proyecto es una tienda en línea de prueba con funciones como navegación, filtros y flujo de compra. Me ayudó a mejorar mis habilidades en React y frontend.",
    technologies: ["React", "Firebase", "Bootstrap", "HTML", "CSS"],
    link: "https://proyect-react-cm-65120.vercel.app/",
    image: ecommerceImage,
    category: "Frontend"
  },
  {
    title: "Llauretum",
    description:
      "Es un sitio web que gestiono y mantengo actualmente, asegurando su correcto funcionamiento y actualizaciones periódicas. Me encargo de su administración, optimización y personalización.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
    link: "https://llauretum.es/",
    image: llauretumImage,
    category: "CMS"
  },
];

const categories = ["Todos", "Frontend", "Full Stack", "CMS"];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (event.clientX - rect.left - width / 2) / width;
    const y = (event.clientY - rect.top - height / 2) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-sm font-semibold rounded-full flex items-center gap-1">
          <Sparkles className="w-4 h-4" />
          Destacado
        </div>
      )}
      
      {/* Image container with overlay */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/90 dark:bg-dark-900/90 rounded-full hover:bg-white dark:hover:bg-dark-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </motion.a>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4" style={{ transform: "translateZ(60px)" }}>
        {/* Category badge */}
        <div className="flex items-center gap-2">
          <Folder className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Link */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold group/link"
          whileHover={{ x: 5 }}
        >
          Ver Proyecto
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-200 to-accent-200 dark:from-primary-900/20 dark:to-accent-900/20 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div {...fadeIn} initial="initial" animate={isInView ? "animate" : "initial"} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <Code className="text-primary-600 dark:text-primary-400" size={40} />
              <span className="gradient-text">Proyectos Destacados</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes y desafiantes
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            {...slideUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg"
                    : "bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 shadow-md hover:shadow-lg"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            {...slideUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="text-center pt-8"
          >
            <a
              href="https://github.com/FranGoroso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 group"
            >
              <Github className="w-5 h-5" />
              Ver más en GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
