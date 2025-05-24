import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ProfileMenu from './ProfileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setShowSearch(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo color={!isScrolled && !isMobile ? 'white' : '#FF385C'} />
        </div>

        {/* Search Bar - Only visible on desktop by default */}
        {showSearch && (
          <div className="hidden md:flex flex-grow justify-center mx-24">
            <SearchBar isScrolled={isScrolled} />
          </div>
        )}

        {/* Right Section: Globe, Profile */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center text-sm font-medium rounded-full px-4 py-3 hover:bg-gray-100 transition-colors">
            <span>Airbnb your home</span>
          </button>
          
          <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
            <Globe size={18} />
          </button>
          
          <ProfileMenu />
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      {isMobile && (
        <div className="px-4 pt-2 pb-4 bg-white">
          <div className="relative w-full">
            <div className="flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow">
              <Search size={16} className="text-gray-500" />
              <input 
                type="text" 
                placeholder="Where to?" 
                className="w-full pl-2 pr-4 text-gray-700 bg-transparent border-none focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;