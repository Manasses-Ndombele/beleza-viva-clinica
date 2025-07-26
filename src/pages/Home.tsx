import React, { useState } from 'react';
import { Star, Shield, Award, Users, Calendar, Mail, Phone, User, ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { beforeAfter } from '../data/beforeAfter';

const Home: React.FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: ''
  });

  const featuredServices = services.slice(0, 3);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Agendamento solicitado! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', service: '', date: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-champagne via-snow to-rosaquartz/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-champagne/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8 animate-slide-up pt-24">
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-grayrose leading-tight">
                Desperte sua
                <span className="text-gold block">Beleza Natural</span>
              </h1>
              <p className="font-garamond text-xl text-grayrose leading-relaxed">
                Na Beleza Viva, transformamos sonhos em realidade através de tratamentos personalizados 
                e cuidados excepcionais que realçam sua beleza única.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-to-r from-rosaquartz to-gold text-snow px-8 py-4 rounded-full font-garamond font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Agende sua consulta
                </button>
                <button className="border-2 border-gold text-gold px-8 py-4 rounded-full font-garamond font-semibold text-lg hover:bg-gold hover:text-snow transition-all duration-300">
                  Conheça nossos serviços
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg"
                  alt="Tratamento de beleza"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-gold to-rosaquartz rounded-2xl -z-10 opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-gradient-to-br from-rosaquartz to-champagne rounded-full -z-10 opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-snow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg"
                alt="Sobre a Beleza Viva"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-3 bg-gradient-to-br from-gold to-rosaquartz p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-snow">5+</div>
                  <div className="font-garamond text-snow">Anos de experiência</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair text-4xl font-bold text-grayrose mb-4">
                  Excelência em <span className="text-gold">Estética</span>
                </h2>
                <p className="font-garamond text-lg text-grayrose leading-relaxed">
                  Há mais de 5 anos, a Beleza Viva se dedica a proporcionar experiências únicas 
                  em cuidados estéticos. Nossa equipe especializada combina técnicas avançadas 
                  com atendimento humanizado para garantir resultados excepcionais.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-champagne rounded-lg">
                  <Shield className="h-8 w-8 text-gold mx-auto mb-2" />
                  <h3 className="font-playfair font-semibold text-grayrose">Segurança</h3>
                  <p className="font-garamond text-sm text-grayrose">Protocolos rigorosos</p>
                </div>
                <div className="text-center p-4 bg-champagne rounded-lg">
                  <Award className="h-8 w-8 text-gold mx-auto mb-2" />
                  <h3 className="font-playfair font-semibold text-grayrose">Qualidade</h3>
                  <p className="font-garamond text-sm text-grayrose">Produtos premium</p>
                </div>
                <div className="text-center p-4 bg-champagne rounded-lg">
                  <Users className="h-8 w-8 text-gold mx-auto mb-2" />
                  <h3 className="font-playfair font-semibold text-grayrose">Especialistas</h3>
                  <p className="font-garamond text-sm text-grayrose">Equipe qualificada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-grayrose mb-4">
              Serviços em <span className="text-gold">Destaque</span>
            </h2>
            <p className="font-garamond text-lg text-grayrose max-w-2xl mx-auto">
              Conheça nossos tratamentos mais procurados, desenvolvidos para realçar sua beleza 
              natural com técnicas modernas e seguras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-rosaquartz to-gold text-snow px-8 py-4 rounded-full font-garamond font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Ver todos os serviços
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-snow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-grayrose mb-4">
              O que dizem nossas <span className="text-gold">Clientes</span>
            </h2>
            <p className="font-garamond text-lg text-grayrose">
              A satisfação de nossas clientes é nossa maior recompensa
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 ease-in-out">
                <TestimonialCard testimonial={testimonials[testimonialIndex]} />
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-champagne p-3 rounded-full hover:bg-rosaquartz hover:text-snow transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === testimonialIndex ? 'bg-gold' : 'bg-champagne'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="bg-champagne p-3 rounded-full hover:bg-rosaquartz hover:text-snow transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After */}
      <section className="py-20 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-grayrose mb-4">
              Transformações <span className="text-gold">Reais</span>
            </h2>
            <p className="font-garamond text-lg text-grayrose">
              Veja os resultados incríveis alcançados por nossas clientes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider items={beforeAfter} />
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-snow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-grayrose mb-4">
              Agende sua <span className="text-gold">Consulta</span>
            </h2>
            <p className="font-garamond text-lg text-grayrose">
              Preencha o formulário e entraremos em contato para confirmar seu horário
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-champagne p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-garamond font-medium text-grayrose mb-2">
                  <User className="inline h-4 w-4 mr-2" />
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-rosaquartz/30 focus:border-gold focus:outline-none transition-colors duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block font-garamond font-medium text-grayrose mb-2">
                  <Mail className="inline h-4 w-4 mr-2" />
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-rosaquartz/30 focus:border-gold focus:outline-none transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block font-garamond font-medium text-grayrose mb-2">
                  <Phone className="inline h-4 w-4 mr-2" />
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-rosaquartz/30 focus:border-gold focus:outline-none transition-colors duration-300"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block font-garamond font-medium text-grayrose mb-2">
                  Serviço de Interesse
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-rosaquartz/30 focus:border-gold focus:outline-none transition-colors duration-300"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block font-garamond font-medium text-grayrose mb-2">
                  <Calendar className="inline h-4 w-4 mr-2" />
                  Data Preferida
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-rosaquartz/30 focus:border-gold focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-rosaquartz to-gold text-snow px-12 py-4 rounded-full font-garamond font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Solicitar Agendamento
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;