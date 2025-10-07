import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-grayrose text-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Localização */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-gold">Localização</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rosaquartz mt-1 flex-shrink-0" />
                <div>
                  <p className="font-garamond">Rua das Flores, 123</p>
                  <p className="font-garamond">Jardins - São Paulo/SP</p>
                  <p className="font-garamond">CEP: 01234-567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-gold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rosaquartz" />
                <span className="font-garamond">(11) 9999-8888</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rosaquartz" />
                <span className="font-garamond">contato@belezaviva.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-rosaquartz mt-1" />
                <div>
                  <p className="font-garamond">Segunda a Sexta: 8h às 18h</p>
                  <p className="font-garamond">Sábado: 8h às 14h</p>
                  <p className="font-garamond">Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-gold">Links Úteis</h3>
            <div className="space-y-2">
              <a href="#" className="block font-garamond hover:text-rosaquartz transition-colors duration-300">Política de Privacidade</a>
              <a href="#" className="block font-garamond hover:text-rosaquartz transition-colors duration-300">Termos de Uso</a>
              <a href="#" className="block font-garamond hover:text-rosaquartz transition-colors duration-300">FAQ</a>
              <a href="#" className="block font-garamond hover:text-rosaquartz transition-colors duration-300">Blog</a>
              <a href="#" className="block font-garamond hover:text-rosaquartz transition-colors duration-300">Depoimentos</a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-gold">Redes Sociais</h3>
            <div className="space-y-4">
              <p className="font-garamond text-sm">Siga-nos e acompanhe nossas novidades e dicas de beleza.</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-rosaquartz p-3 rounded-full hover:bg-gold transition-colors duration-300 group">
                  <Instagram className="h-5 w-5 text-snow group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="bg-rosaquartz p-3 rounded-full hover:bg-gold transition-colors duration-300 group">
                  <Facebook className="h-5 w-5 text-snow group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="bg-rosaquartz p-3 rounded-full hover:bg-gold transition-colors duration-300 group">
                  <Youtube className="h-5 w-5 text-snow group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-snow/20 mt-12 pt-8 text-center">
          <p className="font-garamond text-sm">
            © 2024 <a href="https:///manassesndombele.com">Manassés Ndombele</a>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
