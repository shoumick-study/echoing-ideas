
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-10 h-10 bg-secondary rounded-md transform rotate-6"></div>
        <div className="w-10 h-10 bg-primary rounded-md absolute top-1 -right-1 transform -rotate-6"></div>
      </div>
      <div className="font-display font-bold text-xl">
        <span className="text-foreground">THOUGHTS</span>
        <span className="text-primary"> PURSUITS</span>
      </div>
    </Link>
  );
};

export default Logo;
