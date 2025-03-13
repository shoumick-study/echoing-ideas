
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PostGrid from '../components/PostGrid';
import { samplePosts } from '../components/PostGrid';
import { Helmet } from 'react-helmet';

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = samplePosts.find(post => post.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6">The article you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Thoughts</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.coverImage} />
      </Helmet>
      
      <Navbar />
      <main>
        <article className="pt-32 pb-16">
          <div className="container-content">
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <span className="tag-pill bg-secondary text-secondary-foreground mb-4">
                  {post.category}
                </span>
                <h1 className="headline text-3xl md:text-4xl lg:text-5xl mb-6">
                  {post.title}
                </h1>
                
                <div className="flex items-center text-muted-foreground mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video overflow-hidden rounded-xl mb-10">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  This is a sample article. In a real implementation, this would be the full content of the post,
                  formatted with proper typography, images, and other elements.
                </p>
                
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia,
                  nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia,
                  nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
                </p>
                
                <h2>A thoughtful section heading</h2>
                
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                  Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                  Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.
                </p>
                
                <blockquote>
                  "The greatest value of having good people around you is not what you get from them but the better person you become because of them."
                  <cite>— Some Thoughtful Person</cite>
                </blockquote>
                
                <p>
                  Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
                
                <h2>Another insightful heading</h2>
                
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
                  Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-semibold mb-2">Share this article</h3>
                    <div className="flex space-x-4">
                      <button 
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/category/${post.category.toLowerCase()}`}
                    className="tag-pill bg-secondary px-4 py-2 text-secondary-foreground hover:bg-secondary/80 transition-colors"
                  >
                    More in {post.category}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        <div className="border-t">
          <PostGrid 
            title="You might also like" 
            posts={samplePosts.filter(p => p.id !== post.id).slice(0, 3)}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Post;
