import React from 'react';

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface CategoryItemProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, isActive, onClick }) => {
  return (
    <button
      className={`flex flex-col items-center justify-center min-w-[80px] pb-2 transition-all duration-200 border-b-2 ${
        isActive ? 'border-black text-black' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-800'
      }`}
      onClick={onClick}
    >
      <span className="text-lg mb-1">{category.icon}</span>
      <span className="text-xs whitespace-nowrap">{category.name}</span>
    </button>
  );
};

export default CategoryItem;