import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  showDetails?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, showDetails = false }) => {
  return (
    <div className="bg-snow rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      {service.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-2xl">{service.icon}</span>
          <h3 className="font-playfair text-xl font-semibold text-grayrose group-hover:text-gold transition-colors duration-300">
            {service.name}
          </h3>
        </div>
        
        <p className="font-garamond text-grayrose mb-4 leading-relaxed">
          {service.description}
        </p>
        
        {showDetails && (
          <button className="w-full bg-gradient-to-r from-rosaquartz to-gold text-snow py-2 px-4 rounded-full font-garamond font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
            Quero saber mais
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;