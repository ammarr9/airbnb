import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface PropertyProps {
  id: number;
  title: string;
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
  images: string[];
}

const PropertyCard: React.FC<PropertyProps> = ({
  id,
  title,
  location,
  distance,
  dates,
  price,
  rating,
  images
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="group cursor-pointer">
      {/* Image Carousel */}
      <div className="relative aspect-square overflow-hidden rounded-xl mb-2">
        <div className="relative h-full">
          <img 
            src={images[currentImageIndex]} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Image Navigation Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
              {images.map((_, index) => (
                <button 
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  aria-label={`View image ${index + 1} of ${images.length}`}
                />
              ))}
            </div>
          )}
          
          {/* Navigation Arrows (only visible on hover) */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-90 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-90 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
          
          {/* Favorite Button */}
          <button
            className="absolute top-3 right-3 z-10"
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart 
              size={24} 
              className={`${isFavorite ? 'fill-[#FF385C] text-[#FF385C]' : 'text-white stroke-2'}`} 
            />
          </button>
        </div>
      </div>
      
      {/* Property Details */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{location}</h3>
          <p className="text-gray-500 text-sm">{distance}</p>
          <p className="text-gray-500 text-sm">{dates}</p>
          <p className="mt-1">
            <span className="font-semibold">${price}</span>
            <span className="text-gray-900"> night</span>
          </p>
        </div>
        <div className="flex items-center mt-1">
          <svg viewBox="0 0 32 32" aria-hidden="true" className="h-4 w-4 fill-current">
            <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path>
          </svg>
          <span className="ml-1 text-sm">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;