
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
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
    <section className="py-16 bg-secondary/50">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline text-3xl md:text-4xl mb-4">
            Join the Conversation
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get weekly insights delivered straight to your inbox. 
            No spam, just thoughtful content that matters.
          </p>
          
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 pr-14 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-1.5 top-1/2 transform -translate-y-1/2 p-2 bg-primary text-white rounded-md transition-colors hover:bg-primary/90 disabled:opacity-70"
              aria-label="Subscribe"
            >
              <Send size={16} className={isLoading ? 'animate-pulse' : ''} />
            </button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            By subscribing, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
