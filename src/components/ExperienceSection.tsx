import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack MERN Developer",
    company: "Profesional independiente",
    period: "oct. 2024 - actualidad · 6 meses",
    responsibilities: [
      "Desarrollo de aplicaciones web modernas utilizando MongoDB, Express, React y Node.js.",
      "Implementación de API RESTful y optimización del rendimiento del backend.",
      "Colaboración con clientes para diseñar y desarrollar soluciones a medida.",
    ],
  },
  {
    title: "Desarrollador de WordPress",
    company: "Profesional independiente",
    period: "nov. 2023 - actualidad · 1 año 5 meses",
    responsibilities: [
      "Creación y personalización de sitios web en WordPress con Elementor y otros plugins.",
      "Optimización de velocidad y SEO para mejorar el rendimiento web.",
      "Mantenimiento y soporte técnico para clientes.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
          <Briefcase className="text-blue-600" size={32} />
          Experiencia Laboral
        </h2>

        {/* Experiencia */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-gray-600 text-lg font-medium mb-4">
                {exp.company} • <span className="text-blue-600">{exp.period}</span>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
