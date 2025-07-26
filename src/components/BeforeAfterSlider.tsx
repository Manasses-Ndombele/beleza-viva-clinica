import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BeforeAfter } from '../types';

interface BeforeAfterSliderProps {
  items: BeforeAfter[];
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative bg-snow rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="font-playfair text-2xl font-semibold text-grayrose mb-2 text-center">
          {currentItem.title}
        </h3>
        <p className="font-garamond text-grayrose text-center mb-6">
          {currentItem.treatment}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="text-center">
            <h4 className="font-playfair text-lg font-semibold text-grayrose mb-3">Antes</h4>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={currentItem.before}
                alt="Antes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-playfair text-lg font-semibold text-gold mb-3">Depois</h4>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={currentItem.after}
                alt="Depois"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="bg-champagne p-2 rounded-full hover:bg-rosaquartz hover:text-snow transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold' : 'bg-champagne'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-champagne p-2 rounded-full hover:bg-rosaquartz hover:text-snow transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;