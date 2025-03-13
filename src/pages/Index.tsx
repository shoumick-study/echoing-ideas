
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import PostGrid from '../components/PostGrid';
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { samplePosts } from '../components/PostGrid';
import FeaturedSection from '../components/FeaturedSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter sample posts to get different categories
  const marketingPosts = samplePosts.filter(post => 
    post.category === 'Marketing' || post.category === 'Technology'
  ).slice(0, 3);
  
  const bloggingPosts = samplePosts.filter(post => 
    post.category === 'Philosophy' || post.category === 'Wellness'
  ).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Thoughts Pursuits - Build Your Online Business</title>
        <meta name="description" content="Learn strategies and tactics from successful Internet Entrepreneurs to build your online business." />
        <meta property="og:title" content="Thoughts Pursuits - Build Your Online Business" />
        <meta property="og:description" content="Learn strategies and tactics from successful Internet Entrepreneurs to build your online business." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thoughts Pursuits - Build Your Online Business" />
        <meta name="twitter:description" content="Learn strategies and tactics from successful Internet Entrepreneurs to build your online business." />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        
        <section className="py-16 bg-white">
          <div className="container-content">
            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
                {samplePosts.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <img src="/placeholder.svg" alt={post.title} className="w-full h-48 object-cover" />
                    <div className="p-5">
                      <div className="tag-pill bg-muted text-secondary mb-3">{post.category}</div>
                      <h3 className="font-display font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="text-xs text-primary font-medium">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedSection />
        
        <section className="py-16 bg-muted/30">
          <div className="container-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="headline text-2xl md:text-3xl mb-6">Marketing Strategies</h2>
                <div className="space-y-8">
                  {marketingPosts.map(post => (
                    <div key={post.id} className="flex gap-5">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/placeholder.svg" alt={post.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="headline text-2xl md:text-3xl mb-6">Blogging Insights</h2>
                <div className="space-y-8">
                  {bloggingPosts.map(post => (
                    <div key={post.id} className="flex gap-5">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/placeholder.svg" alt={post.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Index;
