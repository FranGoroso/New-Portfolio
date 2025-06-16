import { useState, useEffect } from "react";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const { t } = useTranslation();
  
  const navbarBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  
  const navbarBackgroundDark = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 15, 15, 0)", "rgba(15, 15, 15, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: t('navbar.about'), href: "#about" },
    { name: t('navbar.experience'), href: "#experience" },
    { name: t('navbar.projects'), href: "#projects" },
    { name: t('navbar.contact'), href: "#contact" }
  ];

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "py-2 backdrop-blur-md shadow-sm" : "py-4"
        }`}
        style={{
          backgroundColor: theme === 'dark' ? navbarBackgroundDark : navbarBackground,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.h1 
                className="text-2xl md:text-3xl font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  Fran
                </span>
                <span className="text-neutral-800 dark:text-neutral-100">
                  Goroso
                </span>
              </motion.h1>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="relative text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300 font-medium group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="relative">
                      {item.name}
                      <motion.span
                        className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3"
              >
                {/* Language Selector */}
                <LanguageSelector />
                
                {/* Theme Switcher */}
                <motion.button
                  onClick={toggleTheme}
                  className="relative p-2.5 rounded-xl bg-neutral-100 dark:bg-dark-800 hover:bg-neutral-200 dark:hover:bg-dark-700 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: 90, scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="w-5 h-5 text-accent-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: -90, scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="w-5 h-5 text-primary-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
                
                {/* Download CV Button */}
                <motion.a
                  href="/docs/cv.pdf"
                  download="Francisco_Goroso_CV.pdf"
                  className="relative px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Download className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">CV</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageSelector />
              
              <motion.button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-dark-800"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-accent-500" />
                ) : (
                  <Sun className="w-5 h-5 text-primary-500" />
                )}
              </motion.button>
              
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-dark-800"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="x"
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 180, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X size={24} className="text-neutral-700 dark:text-neutral-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -180, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu size={24} className="text-neutral-700 dark:text-neutral-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Full Screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/98 dark:bg-dark-950/98 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col justify-center items-center h-full px-8"
            >
              <div className="w-full max-w-sm space-y-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="block py-5 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative group">
                      {item.name}
                      <motion.span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="pt-8"
                >
                  <a
                    href="/docs/cv.pdf"
                    download="Francisco_Goroso_CV.pdf"
                    className="block w-full py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-center rounded-xl font-medium shadow-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('navbar.downloadCV') || 'Descargar CV'}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;