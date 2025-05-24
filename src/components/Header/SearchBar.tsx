import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  isScrolled: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ isScrolled }) => {
  const [activeTab, setActiveTab] = useState('stays');
  
  return (
    <div className={`border border-gray-200 rounded-full shadow-sm ${
      isScrolled ? 'bg-white' : 'bg-white'
    } hover:shadow-md transition-shadow flex items-center h-12`}>
      <div className="flex flex-1 h-full divide-x divide-gray-200">
        <button 
          className={`px-5 text-sm font-medium h-full rounded-l-full ${
            activeTab === 'stays' ? 'text-gray-800' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('stays')}
        >
          Stays
        </button>
        <button 
          className={`px-5 text-sm font-medium h-full ${
            activeTab === 'experiences' ? 'text-gray-800' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button 
          className={`px-5 text-sm font-medium h-full rounded-r-full ${
            activeTab === 'online' ? 'text-gray-800' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('online')}
        >
          Online Experiences
        </button>
      </div>
      <div className="flex pr-2">
        <button className="bg-[#FF385C] rounded-full p-2 text-white hover:bg-[#D90B63] transition-colors">
          <Search size={16} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;