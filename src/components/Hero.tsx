
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "You've successfully subscribed to the newsletter.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="relative diagonal-bg py-20 lg:py-32 overflow-hidden">
      <div className="container-content">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="headline text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight md:leading-tight text-foreground">
              READY TO BUILD A<br />
              REAL ONLINE<br />
              BUSINESS?
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Subscribe to the Thoughts Pursuits Newsletter to learn
              strategies and tactics from successful Internet
              Entrepreneurs 3X a week. Plus, get online side hustle ideas
              that actually work.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow py-3 px-4 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="btn-subscribe"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              We do not sell or share your information with anyone.
            </p>
          </div>
          
          <div className="lg:w-5/12 lg:pl-12 relative">
            <div className="success-stories-container">
              <h2 className="success-stories-heading">
                SUCCESS STORIES
              </h2>
              
              <div className="flex overflow-x-auto pb-6 space-x-4 -mx-4 px-4">
                <div className="card-success-story min-w-[280px] max-w-[280px] flex-shrink-0">
                  <div className="p-5">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                        <img src="/placeholder.svg" alt="Author" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg leading-tight mb-1">HOW ROB ATKINSON BUILT AND SOLD HIS WEBSITES FOR 5 TO 7-FIGURE EXITS</h3>
                        <p className="text-xs text-muted-foreground">By Samara Kamenecka</p>
                      </div>
                    </div>
                    <Link to="/post/rob-atkinson-success" className="text-primary font-medium text-sm hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
                
                <div className="card-success-story min-w-[280px] max-w-[280px] flex-shrink-0">
                  <div className="p-5">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                        <img src="/placeholder.svg" alt="Author" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg leading-tight mb-1">HOW ANWESHA'S WEBSITE PIVOTED AND NOW EARNS $5K+/MO WITH SEO</h3>
                        <p className="text-xs text-muted-foreground">By Samara Kamenecka</p>
                      </div>
                    </div>
                    <Link to="/post/anwesha-success" className="text-primary font-medium text-sm hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2 mt-2">
                <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
                  <ArrowRight size={16} className="transform rotate-180" />
                </button>
                <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
