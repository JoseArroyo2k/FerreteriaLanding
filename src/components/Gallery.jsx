import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Herramientas hidráulicas',
      title: 'Herramientas de Precisión'
    },
    {
      src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Mangueras hidráulicas',
      title: 'Mangueras de Alta Presión'
    },
    {
      src: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Conectores',
      title: 'Conectores Industriales'
    },
    {
      src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Válvulas',
      title: 'Válvulas de Control'
    },
    {
      src: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Adaptadores',
      title: 'Adaptadores Universales'
    },
    {
      src: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Bridas',
      title: 'Bridas Resistentes'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-blue-600 bg-clip-text text-transparent mb-4">
            Galería de Productos
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explora nuestra amplia selección de productos hidráulicos de alta calidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;