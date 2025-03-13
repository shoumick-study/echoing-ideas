
import React from 'react';
import { Link } from 'react-router-dom';
import { PenSquare } from 'lucide-react';

const NavbarActions = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/create"
        className="inline-flex items-center justify-center bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-lg transition-colors"
      >
        <PenSquare size={18} className="mr-2" />
        Create Post
      </Link>
    </div>
  );
};

export default NavbarActions;
