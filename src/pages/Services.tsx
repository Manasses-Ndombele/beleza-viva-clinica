import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos os Serviços' },
    { id: 'facial', name: 'Tratamentos Faciais' },
    { id: 'body', name: 'Tratamentos Corporais' },
    { id: 'harmony', name: 'Harmonização' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    // Simple category filtering based on service names
    const categoryMap: Record<string, string[]> = {
      facial: ['Limpeza de Pele', 'Microagulhamento', 'Peeling Químico'],
      body: ['Massagem Relaxante', 'Drenagem Linfática'],
      harmony: ['Harmonização Facial']
    };
    
    const matchesCategory = categoryMap[selectedCategory]?.includes(service.name) || false;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-champagne via-snow to-rosaquartz/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-champagne/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="animate-slide-up">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-grayrose mb-4">
              Nossos <span className="text-gold">Serviços</span>
            </h1>
            <p className="font-garamond text-xl text-grayrose max-w-2xl">
              Descubra nossa completa gama de tratamentos estéticos desenvolvidos para realçar 
              sua beleza natural com técnicas modernas e seguras.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-snow border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-grayrose/50" />
              <input
                type="text"
                placeholder="Buscar serviços..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-champagne focus:border-gold focus:outline-none transition-colors duration-300 font-garamond"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-garamond font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-rosaquartz to-gold text-snow shadow-lg'
                      : 'bg-champagne text-grayrose hover:bg-rosaquartz hover:text-snow'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} showDetails={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-snow p-12 rounded-2xl shadow-md max-w-md mx-auto">
                <p className="font-garamond text-lg text-grayrose mb-4">
                  Nenhum serviço encontrado para sua busca.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-rosaquartz to-gold text-snow px-6 py-3 rounded-full font-garamond font-medium hover:shadow-lg transition-all duration-300"
                >
                  Ver todos os serviços
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-snow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-grayrose mb-6">
            Pronta para sua <span className="text-gold">Transformação</span>?
          </h2>
          <p className="font-garamond text-lg text-grayrose mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada está preparada para criar um plano de tratamento 
            personalizado que atenda suas necessidades e objetivos únicos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-rosaquartz to-gold text-snow px-8 py-4 rounded-full font-garamond font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Agende sua consulta gratuita
            </button>
            <button className="border-2 border-gold text-gold px-8 py-4 rounded-full font-garamond font-semibold text-lg hover:bg-gold hover:text-snow transition-all duration-300">
              Entre em contato
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;