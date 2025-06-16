import React from "react";

const TestColors = () => {
  return (
    <div className="fixed top-20 right-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl z-50 space-y-4 border-2 border-gray-300">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">Test de Colores</h3>
      
      <div className="space-y-2">
        <p className="text-gray-600 dark:text-gray-400">
          Texto normal sin color
        </p>
        
        <p className="text-gray-600 dark:text-gray-400">
          Me especializo en <span className="font-semibold text-primary-600 dark:text-primary-400">MongoDB, Express, React y Node.js</span>, creando aplicaciones modernas
        </p>
        
        <p className="text-gray-600 dark:text-gray-400">
          También ayudo a empresas a <span className="font-semibold text-accent-600 dark:text-accent-400">automatizar procesos con IA</span>, implementando soluciones
        </p>
      </div>
      
      <div className="space-y-2 border-t pt-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary-600"></div>
          <span className="text-sm">primary-600: #e5671a</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary-400"></div>
          <span className="text-sm">primary-400: #f7a34e</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent-600"></div>
          <span className="text-sm">accent-600: #f08517</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent-400"></div>
          <span className="text-sm">accent-400: #ffbb5c</span>
        </div>
      </div>
    </div>
  );
};

export default TestColors;