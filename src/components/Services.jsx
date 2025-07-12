import React from 'react';
import { Zap, Search, HelpCircle, ShoppingCart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Prensado de Mangueras',
      description: 'Servicio profesional de prensado de mangueras hidráulicas con equipos de última generación.',
      features: ['Prensado de alta presión', 'Pruebas de calidad', 'Entrega inmediata']
    },
    {
      icon: Search,
      title: 'Diagnóstico de Conexiones',
      description: 'Análisis técnico especializado para identificar problemas en sistemas hidráulicos.',
      features: ['Evaluación completa', 'Reporte detallado', 'Recomendaciones técnicas']
    },
    {
      icon: HelpCircle,
      title: 'Asesoría Técnica',
      description: 'Consultoría especializada para la selección e instalación de productos hidráulicos.',
      features: ['Consulta gratuita', 'Soporte 24/7', 'Seguimiento personalizado']
    },
    {
      icon: ShoppingCart,
      title: 'Venta Minorista',
      description: 'Amplio stock de productos hidráulicos disponibles para entrega inmediata.',
      features: ['Stock permanente', 'Precios competitivos', 'Entrega rápida']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-blue-600 bg-clip-text text-transparent mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ofrecemos servicios especializados que complementan nuestra oferta de productos hidráulicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <service.icon className="h-6 w-6 text-blue-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas un servicio personalizado?</h3>
          <p className="text-blue-100 mb-6">
            Nuestro equipo técnico está listo para brindarte soluciones adaptadas a tus necesidades específicas
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;