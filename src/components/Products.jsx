import React from 'react';
import { Zap, Settings, Wrench, Gauge, Filter, Cog, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      name: 'Mangueras Hidráulicas',
      description: 'Mangueras de alta presión para aplicaciones industriales y comerciales',
      icon: Zap,
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Alta presión', 'Resistentes', 'Duraderas'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Conectores',
      description: 'Conectores de precisión para sistemas hidráulicos avanzados',
      icon: Settings,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Precisión', 'Calidad', 'Variedad'],
      gradient: 'from-blue-600 to-blue-500'
    },
    {
      name: 'Adaptadores',
      description: 'Adaptadores universales para múltiples aplicaciones industriales',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Universales', 'Versátiles', 'Compatibles'],
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Bridas',
      description: 'Bridas resistentes para conexiones seguras y duraderas',
      icon: Gauge,
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Seguras', 'Resistentes', 'Confiables'],
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Férulas',
      description: 'Férulas de alta calidad para prensado y conexiones',
      icon: Filter,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Calidad', 'Precisión', 'Eficiencia'],
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Válvulas',
      description: 'Válvulas de control y seguridad hidráulica especializadas',
      icon: Cog,
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Control', 'Seguridad', 'Eficacia'],
      gradient: 'from-blue-700 to-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            Nuestros Productos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Ofrecemos una amplia gama de productos hidráulicos de las mejores marcas del mercado, 
            garantizando calidad y rendimiento excepcional.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                
                {/* Icon */}
                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${product.gradient} shadow-lg`}>
                  <product.icon className="h-6 w-6 text-white" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 rounded-full p-3 cursor-pointer"
                  >
                    <ArrowRight className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Conocer más</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;