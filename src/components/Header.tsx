import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Quem Somos' },
    { id: 'services', label: 'Serviços' },
    { id: 'before-after', label: 'Antes e Depois' }
  ];

  return (
    <header className="fixed top-0 w-full bg-snow/95 backdrop-blur-sm shadow-sm z-50 border-b border-champagne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <Sparkles className="h-8 w-8 text-gold group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-playfair text-2xl font-bold text-grayrose">
              Beleza <span className="text-gold">Viva</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-garamond text-lg font-medium transition-colors duration-300 hover:text-gold ${
                  currentPage === item.id ? 'text-gold' : 'text-grayrose'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="hidden md:block bg-gradient-to-r from-rosaquartz to-gold text-snow px-6 py-2 rounded-full font-garamond font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
            Agende sua consulta
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-grayrose" /> : <Menu className="h-6 w-6 text-grayrose" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-snow border-t border-champagne animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 font-garamond font-medium transition-colors duration-300 hover:text-gold ${
                    currentPage === item.id ? 'text-gold' : 'text-grayrose'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-rosaquartz to-gold text-snow px-6 py-2 rounded-full font-garamond font-medium mt-4">
                Agende sua consulta
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;