import React from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '../../data/properties';

const PropertiesGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard 
            key={property.id}
            {...property}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesGrid;