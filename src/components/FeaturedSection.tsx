
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { samplePosts } from './PostGrid';

const FeaturedSection = () => {
  // Get the first post for main feature
  const mainFeature = samplePosts[0];
  // Get next two posts for secondary features
  const secondaryFeatures = samplePosts.slice(1, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container-content">
        <h2 className="headline text-2xl md:text-3xl mb-8">Featured Content</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-64 md:h-80">
              <img 
                src="/placeholder.svg" 
                alt={mainFeature.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="tag-pill bg-primary text-primary-foreground mb-3">
                  {mainFeature.category}
                </span>
                <h3 className="text-white font-display font-bold text-2xl md:text-3xl mb-2">
                  {mainFeature.title}
                </h3>
                <Link 
                  to={`/post/${mainFeature.slug}`}
                  className="inline-flex items-center text-white hover:text-primary transition-colors font-medium"
                >
                  Read Article
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {secondaryFeatures.map(post => (
              <div key={post.id} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all h-[calc(50%-0.75rem)]">
                <div className="relative h-full">
                  <img 
                    src="/placeholder.svg" 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="tag-pill bg-primary text-primary-foreground mb-2 text-xs">
                      {post.category}
                    </span>
                    <h3 className="text-white font-display font-bold text-lg mb-1">
                      {post.title}
                    </h3>
                    <Link 
                      to={`/post/${post.slug}`}
                      className="inline-flex items-center text-white hover:text-primary transition-colors text-sm font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
