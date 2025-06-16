import { Briefcase, Calendar, MapPin, CheckCircle, TrendingUp, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useScrollAnimation, fadeIn, slideUp, slideLeft, slideRight } from "../hooks/useScrollAnimation";

// Función para calcular la duración
const calculateDuration = (startDate: string, endDate: string | null = null, t: any) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  const yearText = years === 1 ? t('experience.duration.year') : t('experience.duration.year_plural');
  const monthText = remainingMonths === 1 ? t('experience.duration.month') : t('experience.duration.month_plural');
  
  if (years > 0 && remainingMonths > 0) {
    return `${years} ${yearText} ${remainingMonths} ${monthText}`;
  } else if (years > 0) {
    return `${years} ${yearText}`;
  } else {
    return `${remainingMonths} ${monthText}`;
  }
};

const getExperiences = (t: any) => [
  {
    title: t('experience.roles.fullstack.title'),
    company: t('experience.roles.fullstack.company'),
    location: t('experience.roles.location.remote'),
    startDate: "2024-10-01",
    endDate: null,
    responsibilities: [
      t('experience.roles.fullstack.responsibilities.0'),
      t('experience.roles.fullstack.responsibilities.1'),
      t('experience.roles.fullstack.responsibilities.2'),
      t('experience.roles.fullstack.responsibilities.3')
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "API REST", "JavaScript"],
    achievements: [
      t('experience.roles.fullstack.achievements.0'),
      t('experience.roles.fullstack.achievements.1'),
      t('experience.roles.fullstack.achievements.2')
    ]
  },
  {
    title: t('experience.roles.aiConsultant.title'),
    company: t('experience.roles.aiConsultant.company'),
    location: t('experience.roles.location.remote'),
    startDate: "2024-07-01",
    endDate: null,
    responsibilities: [
      t('experience.roles.aiConsultant.responsibilities.0'),
      t('experience.roles.aiConsultant.responsibilities.1'),
      t('experience.roles.aiConsultant.responsibilities.2'),
      t('experience.roles.aiConsultant.responsibilities.3')
    ],
    skills: ["n8n", "ChatGPT API", "Claude API", "Python", t('experience.roles.aiConsultant.skills.automation'), "Prompt Engineering"],
    achievements: [
      t('experience.roles.aiConsultant.achievements.0'),
      t('experience.roles.aiConsultant.achievements.1'),
      t('experience.roles.aiConsultant.achievements.2')
    ]
  },
  {
    title: t('experience.roles.wordpress.title'),
    company: t('experience.roles.wordpress.company'),
    location: t('experience.roles.location.remote'),
    startDate: "2023-11-01",
    endDate: null,
    responsibilities: [
      t('experience.roles.wordpress.responsibilities.0'),
      t('experience.roles.wordpress.responsibilities.1'),
      t('experience.roles.wordpress.responsibilities.2'),
      t('experience.roles.wordpress.responsibilities.3')
    ],
    skills: ["WordPress", "Elementor", "SEO", "HTML/CSS", "JavaScript", "PHP"],
    achievements: [
      t('experience.roles.wordpress.achievements.0'),
      t('experience.roles.wordpress.achievements.1'),
      t('experience.roles.wordpress.achievements.2')
    ]
  },
];

const TimelineItem = ({ experience, index, t, i18n }: { experience: any, index: number, t: any, i18n: any }) => {
  const isEven = index % 2 === 0;
  
  // Formatear fechas
  const startDate = new Date(experience.startDate);
  const locale = i18n.language === 'ca' ? 'ca-ES' : i18n.language === 'en' ? 'en-US' : 'es-ES';
  const formattedStartDate = startDate.toLocaleDateString(locale, { month: 'short', year: 'numeric' });
  const period = `${formattedStartDate} - ${experience.endDate ? new Date(experience.endDate).toLocaleDateString(locale, { month: 'short', year: 'numeric' }) : t('experience.present')}`;
  const duration = calculateDuration(experience.startDate, experience.endDate, t);
  
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
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('experience.responsibilities')}:</h4>
            <ul className="space-y-2">
              {experience.responsibilities.map((item: string, i: number) => (
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
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('experience.technologies')}:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill: string, i: number) => (
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
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('experience.achievements')}:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {experience.achievements.map((achievement: string, i: number) => (
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
  const { t, i18n } = useTranslation();
  const experiences = getExperiences(t);

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
              <span className="gradient-text">{t('experience.title')}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-accent-500 -translate-x-1/2 hidden lg:block" />
            
            {/* Experience items */}
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <TimelineItem key={index} experience={experience} index={index} t={t} i18n={i18n} />
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
              {t('navbar.downloadCV')}
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