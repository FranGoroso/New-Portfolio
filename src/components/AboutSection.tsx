import { User, Code2, Database, Wrench, Cloud, Sparkles, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useScrollAnimation, fadeIn, slideUp, scaleIn } from "../hooks/useScrollAnimation";
import HighlightedText from "./HighlightedText";
import perfilEditado from "../assets/perfil-editado.jpg";

const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const { t } = useTranslation();

  const skills = [
    { 
      title: t('about.skills.frontend.title'), 
      skills: t('about.skills.frontend.skills'),
      icon: Code2,
      color: "from-primary-400 to-primary-600"
    },
    { 
      title: t('about.skills.backend.title'), 
      skills: t('about.skills.backend.skills'),
      icon: Database,
      color: "from-secondary-400 to-secondary-600"
    },
    { 
      title: t('about.skills.ai.title'), 
      skills: t('about.skills.ai.skills'),
      icon: Sparkles,
      color: "from-accent-400 to-accent-600"
    },
    { 
      title: t('about.skills.tools.title'), 
      skills: t('about.skills.tools.skills'),
      icon: Wrench,
      color: "from-neutral-400 to-neutral-600"
    }
  ];

  const stats = [
    { number: "2+", label: t('about.stats.experience') },
    { number: "27+", label: t('about.stats.projects') },
    { number: "15+", label: t('about.stats.clients') },
    { number: "∞", label: t('about.stats.learning') }
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
              <span className="gradient-text">{t('about.title')}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
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
                    src={perfilEditado}
                    alt="Francisco Goroso - Developer workspace"
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
                    {t('about.role')}
                  </span>{" "}
                  {t('about.description1')}
                </p>
                <HighlightedText 
                  textKey="about.description2"
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                />
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-4 inline-flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{t('about.location')}</span>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{t('about.locationValue')}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">{t('about.availability')}</span>
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
                      {t('about.education.degree')}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{t('about.education.university')}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('about.education.status')}</p>
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
                    {t('about.cta.viewProjects')}
                    <span>→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <a
                  href="#experience"
                  className="px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  {t('about.cta.viewExperience')}
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