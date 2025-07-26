import React from 'react';
import { Heart, Eye, Target, Award, Users, Shield } from 'lucide-react';
import { team } from '../data/team';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Missão',
      description: 'Proporcionar experiências únicas em cuidados estéticos, realçando a beleza natural de cada cliente com técnicas avançadas e atendimento personalizado.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em excelência estética, reconhecida pela qualidade dos serviços, inovação constante e satisfação completa de nossos clientes.'
    },
    {
      icon: Target,
      title: 'Valores',
      description: 'Ética, qualidade, inovação, respeito e compromisso com o bem-estar e autoestima de cada pessoa que confia em nossos cuidados.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-champagne via-snow to-rosaquartz/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-champagne/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="animate-slide-up">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-grayrose mb-4">
              Quem <span className="text-gold">Somos</span>
            </h1>
            <p className="font-garamond text-xl text-grayrose max-w-2xl">
              Conheça nossa história, nossos valores e a equipe especializada que torna possível 
              cada transformação na Beleza Viva.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-snow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-playfair text-4xl font-bold text-grayrose">
                Nossa <span className="text-gold">História</span>
              </h2>
              <div className="space-y-4 font-garamond text-lg text-grayrose leading-relaxed">
                <p>
                  A Beleza Viva nasceu do sonho de transformar a vida das pessoas através da beleza e do bem-estar. 
                  Fundada em 2019, nossa clínica começou como um pequeno espaço dedicado a cuidados estéticos 
                  personalizados e cresceu para se tornar uma referência em excelência.
                </p>
                <p>
                  Ao longo dos anos, investimos constantemente em tecnologia de ponta, capacitação profissional 
                  e um ambiente acolhedor que transmite confiança e tranquilidade. Cada detalhe foi pensado para 
                  proporcionar uma experiência única e transformadora.
                </p>
                <p>
                  Hoje, com mais de 1000 clientes atendidas e inúmeras transformações realizadas, continuamos firmes 
                  em nosso propósito: despertar a beleza natural que existe em cada pessoa, sempre com segurança, 
                  qualidade e muito carinho.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-gold">1000+</div>
                  <div className="font-garamond text-grayrose">Clientes atendidas</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-gold">5+</div>
                  <div className="font-garamond text-grayrose">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-gold">15+</div>
                  <div className="font-garamond text-grayrose">Tratamentos oferecidos</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg"
                alt="Ambiente da clínica"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-3 bg-gradient-to-br from-gold to-rosaquartz p-6 rounded-2xl shadow-lg">
                <Award className="h-12 w-12 text-snow mx-auto mb-2" />
                <div className="text-center">
                  <div className="font-playfair text-sm font-semibold text-snow">Excelência</div>
                  <div className="font-garamond text-xs text-snow">Comprovada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-grayrose mb-4">
              Nossos <span className="text-gold">Princípios</span>
            </h2>
            <p className="font-garamond text-lg text-grayrose max-w-2xl mx-auto">
              Os valores que nos guiam em cada atendimento e definem nossa essência como clínica de estética
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-snow p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <div className="bg-gradient-to-br from-rosaquartz to-gold p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-10 w-10 text-snow" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-grayrose mb-4">
                  {value.title}
                </h3>
                <p className="font-garamond text-grayrose leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-snow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-grayrose mb-4">
              Nossa <span className="text-gold">Equipe</span>
            </h2>
            <p className="font-garamond text-lg text-grayrose max-w-2xl mx-auto">
              Profissionais qualificadas e apaixonadas por transformar vidas através da beleza e bem-estar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-champagne rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-playfair text-xl font-semibold text-grayrose mb-2">
                    {member.name}
                  </h3>
                  <p className="font-garamond text-gold font-medium mb-3">
                    {member.specialty}
                  </p>
                  <p className="font-garamond text-grayrose text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-rosaquartz/10 to-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-playfair text-4xl font-bold text-grayrose mb-8">
              Por que escolher a <span className="text-gold">Beleza Viva</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <Shield className="h-16 w-16 text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-grayrose mb-2">Segurança</h3>
                <p className="font-garamond text-grayrose">Protocolos rigorosos e produtos certificados</p>
              </div>
              
              <div className="text-center">
                <Award className="h-16 w-16 text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-grayrose mb-2">Qualidade</h3>
                <p className="font-garamond text-grayrose">Tecnologia de ponta e técnicas avançadas</p>
              </div>
              
              <div className="text-center">
                <Users className="h-16 w-16 text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-grayrose mb-2">Experiência</h3>
                <p className="font-garamond text-grayrose">Equipe especializada e experiente</p>
              </div>
              
              <div className="text-center">
                <Heart className="h-16 w-16 text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-grayrose mb-2">Cuidado</h3>
                <p className="font-garamond text-grayrose">Atendimento humanizado e personalizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;