import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mapa de secciones: texto -> id
  const sectionMap = {
    Inicio: "hero",
    Productos: "products",
    Nosotros: "about",
    Servicios: "services",
    Galería: "gallery",
    Contacto: "contact",
  };

  const scrollToSection = (sectionName) => {
    const targetId = sectionMap[sectionName] || sectionName.toLowerCase();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => scrollToSection("Inicio")}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-md opacity-75"></div>
            <div className="relative rounded-full p-1 bg-white shadow-lg">
              <img
                src="assets/logo.png"
                alt="Hydraulic Market Logo"
                className="h-16 w-16 object-contain rounded-full relative z-10"
              />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <h1
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Hydraulic Market
            </h1>
            <p
              className={`text-xs uppercase tracking-wider font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-600" : "text-gray-300"
              }`}
            >
              S.A.C.
            </p>
          </div>
        </motion.div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          {["Inicio", "Productos", "Nosotros", "Servicios", "Galería", "Contacto"].map(
            (item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => scrollToSection(item)}
                className={`relative font-medium transition-all duration-300 group ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-gray-200 hover:text-blue-400"
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`md:hidden p-2 transition-colors duration-300 ${
            isScrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-200 hover:text-blue-400"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 overflow-hidden"
      >
        {["Inicio", "Productos", "Nosotros", "Servicios", "Galería", "Contacto"].map(
          (item) => (
            <motion.button
              key={item}
              whileHover={{ x: 10 }}
              onClick={() => scrollToSection(item)}
              className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-blue-600 w-full text-left transition-all duration-300 border-b border-gray-100 last:border-b-0"
            >
              {item}
            </motion.button>
          )
        )}
      </motion.div>
    </motion.header>
  );
};

export default Header;
