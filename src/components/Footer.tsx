import { Github, Linkedin, Mail, Heart, ArrowUp, Code2, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/FranGoroso",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/francisco-goroso-609796266/",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contacto@frangoroso.com",
      color: "hover:text-red-600 dark:hover:text-red-400"
    }
  ];

  const footerLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" }
  ];

  return (
    <footer className="relative bg-white dark:bg-dark-950 border-t border-gray-200 dark:border-dark-800 transition-colors duration-300">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600" />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold gradient-text">Fran Goroso</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Desarrollador Full Stack MERN creando experiencias web excepcionales
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <Coffee className="w-4 h-4" />
              <span>Hecho con café y pasión</span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Conectemos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-100 dark:bg-dark-800 rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Respuesta en menos de 24 horas
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Fran Goroso. Hecho con 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              <Heart className="w-4 h-4 inline" />
            </motion.span>
            en Andorra
          </p>
          
          <motion.p
            className="text-gray-500 dark:text-gray-500 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {new Date().toLocaleDateString('es-ES', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-primary-600 to-secondary-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 z-40 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
