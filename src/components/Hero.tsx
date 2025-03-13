
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-white opacity-90"></div>
        <div className="absolute top-0 left-0 right-0 h-[70%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-transparent opacity-60"></div>
      </div>
      
      <div className="container-content relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={headlineRef}
            className="headline opacity-0 text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight md:leading-tight"
          >
            Exploring Ideas, <br className="hidden sm:block" />
            One Thought at a Time
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-slide-up animation-delay-200">
            Welcome to my personal space where I analyze concepts, share insights, 
            and explore the depths of ideas that shape our world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up animation-delay-300">
            <Link 
              to="/category/all" 
              className="button-effect bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium w-full sm:w-auto"
            >
              Explore Articles
            </Link>
            <Link 
              to="/about" 
              className="group button-effect text-primary hover:text-primary/80 flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto"
            >
              About Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
