
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';

const categories = [
  { name: 'E-Commerce', path: '/category/e-commerce' },
  { name: 'Marketing', path: '/category/marketing' },
  { name: 'Blogging', path: '/category/blogging' },
  { name: 'Make Money', path: '/category/make-money' },
  { name: 'Stories', path: '/category/stories' },
  { name: 'Help & Guides', path: '/category/help-guides' },
];

const MainNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {categories.map((category) => (
        <div key={category.path} className="relative group">
          <Link 
            to={category.path}
            className={`nav-link nav-dropdown ${isActive(category.path) ? 'nav-link-active' : ''}`}
          >
            {category.name}
            <ChevronDown size={16} />
          </Link>
          <div className="absolute left-0 top-full w-48 bg-white shadow-md rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="py-2">
              <Link to={`${category.path}/popular`} className="block px-4 py-2 hover:bg-muted text-sm">
                Popular
              </Link>
              <Link to={`${category.path}/recent`} className="block px-4 py-2 hover:bg-muted text-sm">
                Recent
              </Link>
              <Link to={`${category.path}/guides`} className="block px-4 py-2 hover:bg-muted text-sm">
                Guides
              </Link>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default MainNav;
