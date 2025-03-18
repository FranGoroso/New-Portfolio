import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-900">Fran Goroso Dev</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {["About", "Experience", "Projects", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}
            <a
              href="/docs/cv.pdf"
              download="Francisco_Goroso_CV.pdf"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Download size={18} />
              Descargar CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {["About", "Experience", "Projects", "Contact"].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="/docs/cv.pdf"
                download="Francisco_Goroso_CV.pdf"
                className="block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-2 hover:scale-105 active:scale-95"
                whileHover={{ scale: 1.05 }}
              >
                <Download size={18} /> Descargar CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
