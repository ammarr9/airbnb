import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="h-[500px] md:h-[600px] w-full">
        <img 
          src="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Beautiful vacation destination" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Find your next adventure
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Discover unique stays and experiences around the world
        </p>
        
        {/* Search Form */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <label className="block text-xs font-bold text-gray-700 mb-1">Where</label>
              <input 
                type="text" 
                placeholder="Search destinations" 
                className="w-full text-sm focus:outline-none"
              />
            </div>
            
            <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <label className="block text-xs font-bold text-gray-700 mb-1">Check in</label>
              <input 
                type="text" 
                placeholder="Add dates" 
                className="w-full text-sm focus:outline-none"
              />
            </div>
            
            <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <label className="block text-xs font-bold text-gray-700 mb-1">Check out</label>
              <input 
                type="text" 
                placeholder="Add dates" 
                className="w-full text-sm focus:outline-none"
              />
            </div>
            
            <div className="flex-1 p-4 md:pr-2 flex items-center">
              <div className="flex-grow">
                <label className="block text-xs font-bold text-gray-700 mb-1">Who</label>
                <span className="text-sm text-gray-500">Add guests</span>
              </div>
              <button className="bg-[#FF385C] text-white rounded-full p-3 hover:bg-[#D90B63] transition-colors">
                <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current">
                  <path d="M13 24a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-24C5.82 0 0 5.82 0 13c0 7.18 5.82 13 13 13 3.424 0 6.539-1.318 8.86-3.474l7.435 7.437a1 1 0 0 0 1.414-1.414l-7.441-7.442A12.945 12.945 0 0 0 26 13c0-7.18-5.82-13-13-13zm0 24C6.925 24 2 19.075 2 13S6.925 2 13 2s11 4.925 11 11-4.925 11-11 11z" fillRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;