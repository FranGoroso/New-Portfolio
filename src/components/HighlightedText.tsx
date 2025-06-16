import React from "react";
import { useTranslation } from "react-i18next";

interface HighlightedTextProps {
  textKey: string;
  className?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ textKey, className = "" }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Contenido específico por idioma y clave
  const content: { [key: string]: { [lang: string]: JSX.Element } } = {
    "hero.description1": {
      es: (
        <>
          Me especializo en <span className="font-semibold text-highlight-primary">MongoDB, Express, React y Node.js</span>, creando aplicaciones modernas y eficientes que marcan la diferencia.
        </>
      ),
      en: (
        <>
          I specialize in <span className="font-semibold text-highlight-primary">MongoDB, Express, React, and Node.js</span>, creating modern and efficient applications that make a difference.
        </>
      ),
      ca: (
        <>
          M'especialitzo en <span className="font-semibold text-highlight-primary">MongoDB, Express, React i Node.js</span>, creant aplicacions modernes i eficients que marquen la diferència.
        </>
      )
    },
    "hero.description2": {
      es: (
        <>
          También ayudo a empresas a <span className="font-semibold text-highlight-accent">automatizar procesos con IA</span>, implementando soluciones inteligentes con n8n, chatbots y agentes personalizados.
        </>
      ),
      en: (
        <>
          I also help companies <span className="font-semibold text-highlight-accent">automate processes with AI</span>, implementing intelligent solutions with n8n, chatbots, and custom agents.
        </>
      ),
      ca: (
        <>
          També ajudo a empreses a <span className="font-semibold text-highlight-accent">automatitzar processos amb IA</span>, implementant solucions intel·ligents amb n8n, chatbots i agents personalitzats.
        </>
      )
    },
    "about.description2": {
      es: (
        <>
          Mi enfoque combina <span className="font-semibold text-highlight-primary">creatividad técnica</span> con <span className="font-semibold text-highlight-accent">inteligencia artificial</span>, ayudando a empresas a optimizar sus procesos mediante automatizaciones inteligentes y bots personalizados.
        </>
      ),
      en: (
        <>
          My approach combines <span className="font-semibold text-highlight-primary">technical creativity</span> with <span className="font-semibold text-highlight-accent">artificial intelligence</span>, helping companies optimize their processes through intelligent automations and custom bots.
        </>
      ),
      ca: (
        <>
          El meu enfocament combina <span className="font-semibold text-highlight-primary">creativitat tècnica</span> amb <span className="font-semibold text-highlight-accent">intel·ligència artificial</span>, ajudant a empreses a optimitzar els seus processos mitjançant automatitzacions intel·ligents i bots personalitzats.
        </>
      )
    }
  };
  
  // Si tenemos contenido específico para esta clave e idioma, lo usamos
  if (content[textKey] && content[textKey][currentLang]) {
    return (
      <div className={className}>
        {content[textKey][currentLang]}
      </div>
    );
  }
  
  // Si no, devolvemos el texto plano de la traducción
  return <div className={className}>{t(textKey)}</div>;
};

export default HighlightedText;