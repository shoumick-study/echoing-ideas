
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
    <section className="py-16 bg-white border-t">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline text-3xl md:text-4xl mb-4">
            Stay In The Loop
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get weekly tips and strategies delivered straight to your inbox. 
            No spam, just actionable content to help your business grow.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow py-3 px-4 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="btn-subscribe flex items-center justify-center"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
              <Send size={16} className={`ml-2 ${isLoading ? 'animate-pulse' : ''}`} />
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
