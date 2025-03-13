
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-display font-bold tracking-tight">
              Thoughts
            </Link>
            <p className="mt-4 text-muted-foreground">
              A personal website exploring ideas across philosophy, 
              technology, economics, and more.
            </p>
          </div>
          
          <div className="md:ml-auto md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display font-semibold mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/category/all" className="text-muted-foreground hover:text-foreground transition-colors">
                    All Posts
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display font-semibold mb-4">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/category/philosophy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link to="/category/technology" className="text-muted-foreground hover:text-foreground transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link to="/category/economics" className="text-muted-foreground hover:text-foreground transition-colors">
                    Economics
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Thoughts. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
