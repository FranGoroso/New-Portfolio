import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Imagen */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Developer workspace"
              className="rounded-2xl shadow-xl object-cover w-full max-w-md"
            />
          </div>

          {/* Contenido */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <User className="text-blue-600" size={32} />
              Sobre mí
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Desarrollador frontend apasionado por crear aplicaciones web modernas, intuitivas y funcionales. Disfruto combinando diseño y tecnología para ofrecer experiencias de usuario óptimas. Siempre en constante aprendizaje y abierto a nuevos desafíos.
            </p>
            <p className="text-lg text-gray-600">
              Actualmente en Andorra, pero con interés en oportunidades en Argentina.
            </p>
            
            {/* Habilidades */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              {[
                { title: "Frontend", skills: "React, JavaScript, CSS, Tailwind, Bootstrap" },
                { title: "Backend", skills: "Node.js, Express, MySQL" },
                { title: "Herramientas", skills: "Git, Linux Docker, CI/CD" },
                { title: "Cloud", skills: "AWS, Firebase, Vercel, Supabase" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <h3 className="font-semibold text-gray-900 text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.skills}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
