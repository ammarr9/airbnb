import React, { useState } from 'react';
import { ArrowLeft, Heart, Share, Star, Award, Shield, Calendar } from 'lucide-react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { properties } from '../data/properties';

const PropertyDetail: React.FC = () => {
  // Using the first property from our data for demo purposes
  const property = properties[0];
  const [isFavorite, setIsFavorite] = useState(false);
  
  const amenities = [
    'Mountain view', 'Beach access', 'Kitchen', 'Wifi', 
    'Free parking', 'Pool', 'Hot tub', 'BBQ grill',
    'Air conditioning', 'Washing machine', 'TV', 'Fire pit'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <button className="flex items-center text-sm font-medium mb-4 hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Back to search results
          </button>
          
          {/* Property Title */}
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
            <div className="flex space-x-4">
              <button className="flex items-center text-sm font-medium hover:underline">
                <Share size={16} className="mr-2" />
                Share
              </button>
              <button 
                className="flex items-center text-sm font-medium hover:underline"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart 
                  size={16} 
                  className={`mr-2 ${isFavorite ? 'fill-[#FF385C] text-[#FF385C]' : ''}`} 
                />
                {isFavorite ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>
          
          {/* Property Images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden">
            <div className="md:col-span-2 md:row-span-2">
              <img 
                src={property.images[0]} 
                alt={property.title} 
                className="w-full h-full object-cover aspect-square md:aspect-auto"
              />
            </div>
            <div>
              <img 
                src={property.images[1]} 
                alt={property.title} 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div>
              <img 
                src={property.images[2]} 
                alt={property.title} 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div>
              <img 
                src={property.images[3]} 
                alt={property.title} 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div>
              <img 
                src={property.images[0]} 
                alt={property.title} 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Property Information */}
            <div className="flex-grow md:pr-24">
              {/* Host Info */}
              <div className="flex justify-between items-start border-b border-gray-200 pb-6 mb-6">
                <div>
                  <h2 className="text-xl font-bold mb-2">Entire villa hosted by John</h2>
                  <p className="text-gray-600">8 guests · 4 bedrooms · 5 beds · 3 baths</p>
                </div>
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Host" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-start">
                  <Award size={24} className="mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Experienced host</h3>
                    <p className="text-gray-600 text-sm">John has 324 reviews for other places.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield size={24} className="mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Great location</h3>
                    <p className="text-gray-600 text-sm">95% of recent guests gave the location a 5-star rating.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar size={24} className="mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Free cancellation before Nov 10</h3>
                    <p className="text-gray-600 text-sm"></p>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h2 className="text-xl font-bold mb-4">About this place</h2>
                <p className="text-gray-700 mb-4">
                  Nestled along the stunning coastline of Malibu, this luxurious beach villa offers the perfect escape for those seeking both relaxation and adventure. Wake up to breathtaking ocean views and fall asleep to the soothing sound of waves crashing on the shore.
                </p>
                <p className="text-gray-700 mb-4">
                  The spacious interior features high-end finishes, an open concept living area, and floor-to-ceiling windows that frame the Pacific Ocean. Step outside onto your private deck and enjoy al fresco dining with a sunset backdrop.
                </p>
                <button className="font-bold underline">Show more</button>
              </div>
              
              {/* Amenities */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h2 className="text-xl font-bold mb-4">What this place offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-4 text-lg">✓</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 border border-gray-900 rounded-lg px-6 py-3 font-medium hover:bg-gray-100 transition-colors">
                  Show all 30 amenities
                </button>
              </div>
            </div>
            
            {/* Reservation Widget */}
            <div className="w-full md:w-[368px] mt-8 md:mt-0">
              <div className="sticky top-28 border border-gray-300 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-xl font-bold">${property.price}</span>
                    <span className="text-gray-700"> night</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="fill-current" />
                    <span className="ml-1">{property.rating}</span>
                    <span className="mx-1 text-gray-500">·</span>
                    <span className="text-gray-500 underline">23 reviews</span>
                  </div>
                </div>
                
                <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
                  <div className="grid grid-cols-2 divide-x divide-gray-300">
                    <div className="p-3">
                      <label className="block text-xs font-bold">CHECK-IN</label>
                      <input 
                        type="text" 
                        placeholder="Add date" 
                        className="w-full focus:outline-none"
                      />
                    </div>
                    <div className="p-3">
                      <label className="block text-xs font-bold">CHECKOUT</label>
                      <input 
                        type="text" 
                        placeholder="Add date" 
                        className="w-full focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="border-t border-gray-300 p-3">
                    <label className="block text-xs font-bold">GUESTS</label>
                    <select className="w-full focus:outline-none bg-transparent">
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                      <option>5 guests</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full bg-[#FF385C] text-white rounded-lg py-3 font-medium hover:bg-[#D90B63] transition-colors mb-4">
                  Reserve
                </button>
                
                <p className="text-center text-gray-500 mb-6">You won't be charged yet</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="underline">${property.price} x 5 nights</span>
                    <span>${property.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Cleaning fee</span>
                    <span>$150</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Service fee</span>
                    <span>$125</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total before taxes</span>
                    <span>${property.price * 5 + 150 + 125}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;