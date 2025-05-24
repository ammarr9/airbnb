import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryItem from './CategoryItem';

// Define filter categories
const categories = [
  { id: 1, name: 'Amazing views', icon: '🏞️' },
  { id: 2, name: 'Trending', icon: '🔥' },
  { id: 3, name: 'Beachfront', icon: '🏖️' },
  { id: 4, name: 'Cabins', icon: '🏡' },
  { id: 5, name: 'Tiny homes', icon: '🏠' },
  { id: 6, name: 'Design', icon: '🎨' },
  { id: 7, name: 'Countryside', icon: '🌄' },
  { id: 8, name: 'Mansions', icon: '🏰' },
  { id: 9, name: 'Luxe', icon: '✨' },
  { id: 10, name: 'Treehouses', icon: '🌳' },
  { id: 11, name: 'Amazing pools', icon: '🏊' },
  { id: 12, name: 'Surfing', icon: '🏄' },
  { id: 13, name: 'Lakefront', icon: '🏞️' },
  { id: 14, name: 'Skiing', icon: '⛷️' },
  { id: 15, name: 'Desert', icon: '🏜️' },
  { id: 16, name: 'Tropical', icon: '🌴' },
  { id: 17, name: 'Historical homes', icon: '🏛️' },
  { id: 18, name: 'Islands', icon: '🏝️' },
];

const FilterBar: React.FC = () => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Check if scroll buttons should be shown
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      // Initial check
      checkScrollButtons();
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
      };
    }
  }, []);
  
  // Scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  // Scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-24 md:pt-28 pb-5">
      <div className="container mx-auto px-4 relative">
        {/* Left scroll button */}
        {showLeftButton && (
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:shadow-lg transition-shadow"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
        )}
        
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-8 py-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <CategoryItem 
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id === activeCategory ? null : category.id)}
            />
          ))}
        </div>
        
        {/* Right scroll button */}
        {showRightButton && (
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:shadow-lg transition-shadow"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;