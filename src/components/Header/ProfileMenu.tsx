import React, { useState, useRef, useEffect } from 'react';
import { Menu, User } from 'lucide-react';

const ProfileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button 
        className="flex items-center border border-gray-300 rounded-full p-1 pl-3 pr-1 hover:shadow-md transition-shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={16} className="mr-2" />
        <div className="bg-gray-500 text-white rounded-full p-1">
          <User size={18} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
          <div className="py-2">
            <button className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-100">
              Sign up
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Log in
            </button>
          </div>
          <div className="border-t border-gray-200 py-2">
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Airbnb your home
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Host an experience
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Help
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;