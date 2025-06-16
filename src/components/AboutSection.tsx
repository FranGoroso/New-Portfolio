import { User, Code2, Database, Wrench, Cloud, Sparkles, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeIn, slideUp, scaleIn } from "../hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const skills = [
    { 
      title: "Frontend", 
      skills: "React, JavaScript, TypeScript, Tailwind CSS, Framer Motion",
      icon: Code2,
      color: "from-primary-400 to-primary-600"
    },
    { 
      title: "Backend", 
      skills: "Node.js, Express, Python, MongoDB, MySQL, REST APIs",
      icon: Database,
      color: "from-secondary-400 to-secondary-600"
    },
    { 
      title: "IA & Automatización", 
      skills: "n8n, ChatGPT, Claude API, Bots, Agentes IA",
      icon: Sparkles,
      color: "from-accent-400 to-accent-600"
    },
    { 
      title: "Herramientas", 
      skills: "Git, Docker, Linux, WordPress, Vite",
      icon: Wrench,
      color: "from-neutral-400 to-neutral-600"
    }
  ];

  const stats = [
    { number: "2+", label: "Años de experiencia" },
    { number: "27+", label: "Proyectos completados" },
    { number: "15+", label: "Clientes satisfechos" },
    { number: "∞", label: "Ganas de aprender" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-200 dark:bg-accent-900/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="space-y-16">
          {/* Header */}
          <motion.div 
            {...fadeIn}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <User className="text-primary-600 dark:text-primary-400" size={40} />
              <span className="gradient-text">Sobre mí</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transformando ideas en experiencias digitales excepcionales
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Interactive Image */}
            <motion.div 
              {...scaleIn}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="lg:w-1/2 relative group"
            >
              <div className="relative overflow-hidden rounded-3xl">
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                
                <div className="relative bg-white dark:bg-dark-800 rounded-3xl p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    alt="Developer workspace"
                    className="rounded-3xl w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                          <div
                            key={index}
                            className="text-center"
                          >
                            <p className="text-3xl font-bold text-white">{stat.number}</p>
                            <p className="text-sm text-gray-300">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              {...slideUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="lg:w-1/2 space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    Desarrollador Full Stack & Consultor IA
                  </span>{" "}
                  apasionado por crear aplicaciones web que no solo funcionan perfectamente, 
                  sino que también integran soluciones inteligentes de automatización.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Mi enfoque combina <span className="font-semibold text-primary-600 dark:text-primary-400">
                  creatividad técnica</span> con <span className="font-semibold text-accent-600 dark:text-accent-400">
                  inteligencia artificial</span>, ayudando a empresas a optimizar sus procesos mediante automatizaciones inteligentes y bots personalizados.
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-4 inline-flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">Ubicación:</span>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Andorra</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">Disponible para trabajo remoto y presencial en Argentina</span>
                  </div>
                </div>
              </div>

              {/* Formación académica */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                className="p-6 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">
                      Tecnicatura Universitaria en Programación
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">Universidad Tecnológica Nacional (UTN)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">En curso - Formación continua en desarrollo de software</p>
                  </div>
                </div>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} text-white`}>
                          <skill.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                          {skill.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {skill.skills}
                      </p>
                    </div>
                    
                    {/* Hover effect line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="#projects"
                  className="group relative px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Ver mis proyectos
                    <span>→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <a
                  href="#experience"
                  className="px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  Mi experiencia
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
