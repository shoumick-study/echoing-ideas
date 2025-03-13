
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  author?: {
    name: string;
    avatar: string;
  };
}

interface PostCardProps {
  post: Post;
  index: number;
  featured?: boolean;
}

const PostCard = ({ post, index, featured = false }: PostCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const animationDelay = `${index * 150}ms`;

  return (
    <div 
      ref={cardRef}
      className={`opacity-0 group hover-card-animation ${
        featured ? 'col-span-2 row-span-2' : ''
      }`}
      style={{ animationDelay }}
    >
      <Link to={`/post/${post.slug}`} className="block h-full">
        <div className="bg-card backdrop-blur-sm border rounded-2xl overflow-hidden h-full transition-all duration-500 ease-out group-hover:shadow-xl group-hover:shadow-primary/10">
          <div className="aspect-video overflow-hidden relative">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
            <div className="absolute top-3 left-3 transform transition-transform duration-500 group-hover:translate-y-1">
              <span className="tag-pill glass-effect text-foreground font-medium backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />
                {post.readTime}
              </span>
            </div>
            
            <h3 className={`font-display font-bold tracking-tight mb-3 transition-all duration-300 group-hover:gradient-text ${
              featured ? 'text-2xl' : 'text-xl'
            }`}>
              {post.title}
            </h3>
            
            <p className="text-muted-foreground line-clamp-2 mb-4">
              {post.excerpt}
            </p>
            
            <div className="flex items-center text-primary font-medium">
              <span className="relative inline-flex items-center">
                Read article
                <ArrowUpRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/60 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
