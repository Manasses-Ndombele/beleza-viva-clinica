import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ZayaChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <div 
        className={`bg-gradient-to-r from-rosaquartz to-gold p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 animate-float ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6 text-snow" />
      </div>

      {/* Chat Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-snow p-3 rounded-lg shadow-lg border border-champagne animate-fade-in">
          <p className="font-garamond text-sm text-grayrose whitespace-nowrap">
            Precisa de ajuda? Fale com a Zaya!
          </p>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-snow"></div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-0 right-0 w-80 h-96 bg-snow rounded-lg shadow-xl border border-champagne animate-slide-up overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-rosaquartz to-gold p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-snow rounded-full flex items-center justify-center overflow-hidden">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="Zaya" />
              </div>
              <div>
                <h4 className="font-playfair font-semibold text-snow">Zaya</h4>
                <p className="font-garamond text-xs text-snow/80">Assistente Virtual</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-snow hover:bg-white/10 p-1 rounded-full transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-champagne p-3 rounded-lg max-w-xs">
                <p className="font-garamond text-sm text-grayrose">
                  Olá! Sou a Zaya, sua assistente virtual da Beleza Viva. Como posso ajudá-la hoje?
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button className="bg-rosaquartz/20 text-grayrose px-3 py-2 rounded-full text-xs font-garamond hover:bg-rosaquartz hover:text-snow transition-colors duration-300">
                  Agendar consulta
                </button>
                <button className="bg-rosaquartz/20 text-grayrose px-3 py-2 rounded-full text-xs font-garamond hover:bg-rosaquartz hover:text-snow transition-colors duration-300">
                  Ver preços
                </button>
                <button className="bg-rosaquartz/20 text-grayrose px-3 py-2 rounded-full text-xs font-garamond hover:bg-rosaquartz hover:text-snow transition-colors duration-300">
                  Localização
                </button>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-champagne">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 border border-champagne rounded-full font-garamond text-sm focus:outline-none focus:border-rosaquartz"
              />
              <button className="bg-gradient-to-r from-rosaquartz to-gold text-snow px-4 py-2 rounded-full font-garamond text-sm hover:shadow-lg transition-all duration-300">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZayaChat;