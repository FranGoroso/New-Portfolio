import { Github, Linkedin, Mail, Download, Code, Sparkles, Terminal } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import fotoPerfil from "../assets/foto_perfil_fran.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <section 
      ref={ref}
      className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/20 dark:bg-primary-400/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-50 dark:opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='gray' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
          }}
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Foto con efectos elegantes */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Elegant ring effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Double border effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-75" />
            <div className="absolute -inset-1 bg-white dark:bg-dark-900 rounded-full" />
            
            {/* Image container */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
              <img
                src={fotoPerfil}
                alt="Francisco Goroso"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-dark-900">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
            </div>
          </motion.div>

          {/* Contenido mejorado */}
          <div className="text-center md:text-left max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold"
                custom={0}
                variants={textVariants}
              >
                <span className="text-gray-900 dark:text-white">¡Hola, soy </span>
                <span className="gradient-text">Francisco!</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                custom={1}
                variants={textVariants}
              >
                Desarrollador Full Stack MERN & Consultor IA
              </motion.h2>
              
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2"
                custom={2}
                variants={textVariants}
              >
                <span className="text-2xl">🎓</span>
                Estudiante de Tecnicatura Universitaria en Programación - UTN
              </motion.p>
              
              <motion.div
                custom={3}
                variants={textVariants}
                className="space-y-4"
              >
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Me especializo en <span className="font-semibold text-primary-600 dark:text-primary-400">MongoDB, Express, React y Node.js</span>, 
                  creando aplicaciones modernas y eficientes que marcan la diferencia.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  También ayudo a empresas a <span className="font-semibold text-accent-600 dark:text-accent-400">automatizar procesos con IA</span>, 
                  implementando soluciones inteligentes con n8n, chatbots y agentes personalizados.
                </p>
              </motion.div>

              {/* Iconos Sociales mejorados */}
              <motion.div 
              className="flex justify-center md:justify-start gap-6 py-6"
              initial="hidden"
              animate="visible"
              >
              {[
              { 
                Icon: Github, 
                href: "https://github.com/FranGoroso", 
                  label: "GitHub",
                gradient: "from-neutral-600 to-neutral-800",
              hoverGradient: "hover:from-neutral-700 hover:to-neutral-900"
              },
              { 
              Icon: Linkedin, 
              href: "https://www.linkedin.com/in/francisco-goroso-609796266/", 
              label: "LinkedIn",
              gradient: "from-secondary-500 to-secondary-700",
              hoverGradient: "hover:from-secondary-600 hover:to-secondary-800"
              },
              { 
              Icon: Mail, 
              href: "mailto:contacto@frangoroso.com", 
              label: "Email",
              gradient: "from-primary-500 to-primary-700",
              hoverGradient: "hover:from-primary-600 hover:to-primary-800"
              }
              ].map((social, index) => (
                <motion.a
                    key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative`}
                  custom={index}
                  variants={iconVariants}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`relative p-4 bg-gradient-to-br ${social.gradient} ${social.hoverGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}>
                    <social.Icon className="w-7 h-7 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Elegant label */}
                  <motion.span 
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>

              {/* Botones de acción */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                custom={4}
                variants={textVariants}
              >
                <motion.a
                  href="/docs/cv.pdf"
                  download="Francisco_Goroso_CV.pdf"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl shadow-lg overflow-hidden transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Download className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Descargar CV</span>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:text-white dark:hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <Mail className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Contactar</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
