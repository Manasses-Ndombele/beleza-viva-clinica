import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { beforeAfter } from '../data/beforeAfter';

const BeforeAfterPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  React.useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % beforeAfter.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfter.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfter.length) % beforeAfter.length);
  };

  const currentItem = beforeAfter[currentIndex];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-champagne via-snow to-rosaquartz/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-champagne/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="animate-slide-up">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-grayrose mb-4">
              Antes e <span className="text-gold">Depois</span>
            </h1>
            <p className="font-garamond text-xl text-grayrose max-w-2xl">
              Veja as transformações reais de nossas clientes e inspire-se com os resultados 
              excepcionais alcançados em nossa clínica.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-20 bg-snow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-champagne rounded-2xl shadow-xl overflow-hidden">
            {/* Gallery Header */}
            <div className="p-6 bg-gradient-to-r from-rosaquartz to-gold text-snow">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-playfair text-2xl font-bold mb-2">
                    {currentItem.title}
                  </h2>
                  <p className="font-garamond text-snow/90">
                    {currentItem.treatment}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-garamond text-sm">
                    {currentIndex + 1} de {beforeAfter.length}
                  </span>
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    {isAutoPlay ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Images Comparison */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-grayrose text-center">
                    Antes
                  </h3>
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={currentItem.before}
                      alt="Antes do tratamento"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-grayrose/80 text-snow px-3 py-1 rounded-full text-sm font-garamond">
                      Antes
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-gold text-center">
                    Depois
                  </h3>
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={currentItem.after}
                      alt="Depois do tratamento"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gold text-snow px-3 py-1 rounded-full text-sm font-garamond">
                      Depois
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevSlide}
                  className="bg-snow p-3 rounded-full shadow-md hover:bg-rosaquartz hover:text-snow transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex space-x-2">
                  {beforeAfter.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-gold scale-125' 
                          : 'bg-snow hover:bg-rosaquartz'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="bg-snow p-3 rounded-full shadow-md hover:bg-rosaquartz hover:text-snow transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnails Grid */}
      <section className="py-12 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-playfair text-2xl font-bold text-grayrose mb-8 text-center">
            Todas as Transformações
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfter.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  index === currentIndex ? 'ring-4 ring-gold' : ''
                }`}
              >
                <div className="bg-snow p-4">
                  <h4 className="font-playfair font-semibold text-grayrose mb-2 text-center">
                    {item.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative h-24 rounded-lg overflow-hidden">
                      <img
                        src={item.before}
                        alt="Antes"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 left-1 bg-grayrose/80 text-snow px-2 py-1 rounded text-xs font-garamond">
                        Antes
                      </div>
                    </div>
                    <div className="relative h-24 rounded-lg overflow-hidden">
                      <img
                        src={item.after}
                        alt="Depois"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 left-1 bg-gold text-snow px-2 py-1 rounded text-xs font-garamond">
                        Depois
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-20 bg-snow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-grayrose mb-8">
            Resultados que <span className="text-gold">Inspiram</span>
          </h2>
          
          <div className="bg-champagne p-8 rounded-2xl shadow-lg">
            <p className="font-garamond text-lg text-grayrose leading-relaxed mb-6">
              Cada transformação que você vê aqui representa não apenas uma mudança estética, mas uma 
              jornada de autoconfiança e bem-estar. Nossos tratamentos são cuidadosamente planejados 
              e executados por profissionais especializadas, sempre priorizando a segurança e 
              naturalidade dos resultados.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-gold mb-2">100%</div>
                <div className="font-garamond text-grayrose">Segurança nos procedimentos</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-gold mb-2">500+</div>
                <div className="font-garamond text-grayrose">Transformações realizadas</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-gold mb-2">98%</div>
                <div className="font-garamond text-grayrose">Clientes satisfeitas</div>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-rosaquartz to-gold text-snow px-8 py-4 rounded-full font-garamond font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Comece sua transformação
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeforeAfterPage;