import React from 'react';
import { Wrench, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-800 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hydraulic Market</h3>
                <p className="text-sm text-gray-400">SAC</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Más de 15 años brindando soluciones hidráulicas de calidad para tu negocio en Perú.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Mangueras Hidráulicas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conectores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Adaptadores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bridas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Férulas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Válvulas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Prensado de Mangueras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diagnóstico</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Asesoría Técnica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Venta Minorista</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Soporte 24/7</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+51 999 888 777</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>ventas@hydraulicmarket.pe</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>Av. Industrial 123, Lima, Perú</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-white">Ubicación</h4>
              <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.123456!2d-77.0363!3d-12.0432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzM2LjAiUyA3N8KwMDInMTAuOCJX!5e0!3m2!1sen!2spe!4v1623456789!5m2!1sen!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ubicación Hydraulic Market"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Hydraulic Market SAC. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </a>
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Ir arriba
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;