
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import Logo from './Logo';
import MainNav from './MainNav';
import NavbarActions from './NavbarActions';
import { useMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="container-content">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          <MainNav />

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-muted/80 text-foreground transition-colors">
              <Search size={20} />
            </button>
            <NavbarActions />
            
            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 md:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden py-4 mt-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link to="/category/e-commerce" className="nav-link">E-Commerce</Link>
              <Link to="/category/marketing" className="nav-link">Marketing</Link>
              <Link to="/category/blogging" className="nav-link">Blogging</Link>
              <Link to="/category/make-money" className="nav-link">Make Money</Link>
              <Link to="/category/stories" className="nav-link">Stories</Link>
              <Link to="/category/help-guides" className="nav-link">Help & Guides</Link>
              <Link to="/create" className="nav-link text-primary font-medium">Create Post</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
