import { Briefcase, Calendar, MapPin, CheckCircle, TrendingUp, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeIn, slideUp, slideLeft, slideRight } from "../hooks/useScrollAnimation";

// Función para calcular la duración
const calculateDuration = (startDate: string, endDate: string | null = null) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years > 0 && remainingMonths > 0) {
    return `${years} año${years > 1 ? 's' : ''} ${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}`;
  } else if (years > 0) {
    return `${years} año${years > 1 ? 's' : ''}`;
  } else {
    return `${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}`;
  }
};

const experiences = [
  {
    title: "Full Stack MERN Developer",
    company: "Profesional independiente",
    location: "Remoto",
    startDate: "2024-10-01",
    endDate: null, // null significa "actualidad"
    responsibilities: [
      "Desarrollo de aplicaciones web modernas utilizando MongoDB, Express, React y Node.js.",
      "Implementación de API RESTful y optimización del rendimiento del backend.",
      "Colaboración con clientes para diseñar y desarrollar soluciones a medida.",
      "Integración de servicios externos y APIs de terceros para ampliar funcionalidades."
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "API REST", "JavaScript"],
    achievements: [
      "Reducción del tiempo de carga en un 40% mediante optimizaciones",
      "Implementación exitosa de 5+ proyectos completos",
      "Satisfacción del cliente del 100%"
    ]
  },
  {
    title: "Consultor en Inteligencia Artificial",
    company: "Profesional independiente",
    location: "Remoto",
    startDate: "2024-07-01",
    endDate: null,
    responsibilities: [
      "Asesoramiento a empresas en la implementación de soluciones de IA para optimizar procesos.",
      "Desarrollo de automatizaciones complejas utilizando n8n para flujos de trabajo empresariales.",
      "Creación de chatbots inteligentes y agentes de IA personalizados para atención al cliente.",
      "Integración de modelos de IA (GPT, Claude, etc.) en aplicaciones existentes."
    ],
    skills: ["n8n", "ChatGPT API", "Claude API", "Python", "Automatización", "Prompt Engineering"],
    achievements: [
      "Automatización de procesos ahorrando 20+ horas semanales",
      "Implementación de 10+ bots y agentes de IA",
      "Mejora del 35% en eficiencia operativa"
    ]
  },
  {
    title: "Desarrollador de WordPress",
    company: "Profesional independiente",
    location: "Remoto",
    startDate: "2023-11-01",
    endDate: null,
    responsibilities: [
      "Creación y personalización de sitios web en WordPress con Elementor y otros plugins.",
      "Optimización de velocidad y SEO para mejorar el rendimiento web.",
      "Mantenimiento y soporte técnico para clientes.",
      "Migración y actualización de sitios web existentes."
    ],
    skills: ["WordPress", "Elementor", "SEO", "HTML/CSS", "JavaScript", "PHP"],
    achievements: [
      "Gestión de 10+ sitios web activos",
      "Mejora del SEO resultando en +60% de tráfico orgánico",
      "Tiempo de respuesta de soporte < 24 horas"
    ]
  },
];

const TimelineItem = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const isEven = index % 2 === 0;
  
  // Formatear fechas
  const startDate = new Date(experience.startDate);
  const formattedStartDate = startDate.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
  const period = `${formattedStartDate} - ${experience.endDate ? new Date(experience.endDate).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' }) : 'actualidad'}`;
  const duration = calculateDuration(experience.startDate, experience.endDate);
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} relative`}
    >
      {/* Content */}
      <motion.div
        variants={isEven ? slideRight : slideLeft}
        className="flex-1"
      >
        <div className="group relative bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-700">
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-t-2xl" />
          
          {/* Header */}
          <div className="space-y-2 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {experience.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {experience.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {period}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
              <TrendingUp className="w-3 h-3" />
              {duration}
            </span>
          </div>
          
          {/* Responsibilities */}
          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Responsabilidades:</h4>
            <ul className="space-y-2">
              {experience.responsibilities.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Skills */}
          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Tecnologías utilizadas:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Logros destacados:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {experience.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-3 rounded-lg text-center"
                >
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative z-10"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
          <Code2 className="w-8 h-8 text-white" />
        </div>
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full animate-ping opacity-20" />
      </motion.div>
      
      {/* Empty space for timeline alignment - Hidden on mobile */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
};

const ExperienceSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200 dark:bg-accent-900/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div {...fadeIn} initial="initial" animate={isInView ? "animate" : "initial"} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <Briefcase className="text-primary-600 dark:text-primary-400" size={40} />
              <span className="gradient-text">Experiencia Laboral</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Mi trayectoria profesional desarrollando soluciones web innovadoras
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-accent-500 -translate-x-1/2 hidden lg:block" />
            
            {/* Experience items */}
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <TimelineItem key={index} experience={experience} index={index} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            {...slideUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="text-center pt-8"
          >
            <a
              href="/docs/cv.pdf"
              download="Francisco_Goroso_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Descargar CV Completo
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
