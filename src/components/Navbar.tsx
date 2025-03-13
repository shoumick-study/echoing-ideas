
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-content h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-tight">
          Thoughts
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-primary/80 transition-colors">
            Home
          </Link>
          <Link to="/category/all" className="font-medium hover:text-primary/80 transition-colors">
            All Posts
          </Link>
          <Link to="/about" className="font-medium hover:text-primary/80 transition-colors">
            About
          </Link>
          <button 
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </div>
        
        <button 
          className="p-2 rounded-full hover:bg-muted transition-colors md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-60 shadow-md' : 'max-h-0'
        }`}
      >
        <div className="container-content py-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="font-medium py-2 hover:text-primary/80 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/category/all" 
            className="font-medium py-2 hover:text-primary/80 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            All Posts
          </Link>
          <Link 
            to="/about" 
            className="font-medium py-2 hover:text-primary/80 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <div className="py-2 flex items-center border rounded-full px-4">
            <Search size={18} className="text-muted-foreground mr-2" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
