
import React from 'react';
import { Link } from 'react-router-dom';
import { PenSquare } from 'lucide-react';

const NavbarActions = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/create"
        className="hidden md:inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors font-medium text-sm"
      >
        <PenSquare size={16} className="mr-2" />
        Write
      </Link>
    </div>
  );
};

export default NavbarActions;
