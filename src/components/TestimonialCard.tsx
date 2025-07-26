import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-snow p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-playfair text-lg font-semibold text-grayrose">
            {testimonial.name}
          </h4>
          <div className="flex space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
        </div>
      </div>
      
      <p className="font-garamond text-grayrose italic leading-relaxed">
        "{testimonial.text}"
      </p>
    </div>
  );
};

export default TestimonialCard;