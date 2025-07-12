import React, { useEffect, useState } from 'react';
import { Award, Users, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Clock, value: 15, label: 'Años de experiencia', color: 'from-blue-500 to-blue-600', suffix: '+' },
    { icon: Users, value: 500, label: 'Clientes satisfechos', color: 'from-blue-600 to-blue-500', suffix: '+' },
    { icon: Award, value: 1000, label: 'Productos vendidos', color: 'from-blue-400 to-blue-600', suffix: '+' },
    { icon: MapPin, value: 24, label: 'Soporte técnico', color: 'from-blue-700 to-blue-500', suffix: '/7' },
  ];

  const AnimatedNumber = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = value;
      if (start === end) return;
      let totalMs = 1500;
      let incrementTime = 30;
      let steps = Math.ceil(totalMs / incrementTime);
      let increment = end / steps;

      let timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, incrementTime);

      return () => clearInterval(timer);
    }, [value]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-white relative overflow-hidden">
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
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-blue-600 bg-clip-text text-transparent mb-6">
              Sobre Hydraulic Market SAC
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Somos una empresa peruana especializada en la venta de productos hidráulicos 
                de alta calidad. Con más de 15 años en el mercado, nos hemos consolidado como 
                un referente en el sector.
              </p>
              <p>
                Atendemos talleres, constructoras, industrias y técnicos independientes, 
                ofreciendo soluciones completas y confiables.
              </p>
              <p>
                Nuestro compromiso es brindar productos de confianza, asesoría técnica especializada 
                y un servicio de calidad que supere tus expectativas.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-600 font-semibold">Calidad Garantizada</span>
              </div>
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-semibold">Atención Personalizada</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700 font-semibold">Entrega Rápida</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo de trabajo"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} shadow-lg mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;