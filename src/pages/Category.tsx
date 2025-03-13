
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PostCard, { Post } from '../components/PostCard';
import { samplePosts } from '../components/PostGrid';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet';

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  
  const categories = ['All', 'Philosophy', 'Technology', 'Economics', 'Future', 'Wellness'];
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (category) {
      setSelectedCategory(category.toLowerCase());
    }
    
    if (category === 'all') {
      setFilteredPosts(samplePosts);
    } else {
      setFilteredPosts(
        samplePosts.filter(post => 
          post.category.toLowerCase() === category?.toLowerCase()
        )
      );
    }
  }, [category]);
  
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat.toLowerCase());
    
    if (cat.toLowerCase() === 'all') {
      setFilteredPosts(samplePosts);
    } else {
      setFilteredPosts(
        samplePosts.filter(post => 
          post.category.toLowerCase() === cat.toLowerCase()
        )
      );
    }
  };

  const title = category === 'all' ? 'All Articles' : `${category} Articles`;
  
  return (
    <>
      <Helmet>
        <title>{title} | Thoughts</title>
        <meta name="description" content={`Browse articles about ${category === 'all' ? 'various topics' : category}`} />
        <meta property="og:title" content={`${title} | Thoughts`} />
        <meta property="og:description" content={`Browse articles about ${category === 'all' ? 'various topics' : category}`} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="container-content">
            <h1 className="headline text-3xl md:text-4xl mb-10">
              {title}
            </h1>
            
            <div className="mb-12 overflow-x-auto scrollbar-none">
              <div className="flex space-x-2 min-w-max">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === cat.toLowerCase()
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredPosts.map((post, index) => (
                  <PostCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-xl font-medium mb-4">No posts found</h2>
                <p className="text-muted-foreground">
                  There are no posts in this category yet.
                </p>
              </div>
            )}
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Category;
