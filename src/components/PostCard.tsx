
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

  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      ref={cardRef}
      className={`opacity-0 group hover-card-animation ${
        featured ? 'col-span-2 row-span-2' : ''
      }`}
      style={{ animationDelay }}
    >
      <Link to={`/post/${post.slug}`} className="block h-full">
        <div className="bg-white border rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-md">
          <div className="aspect-video overflow-hidden relative">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-3 left-3">
              <span className="tag-pill bg-black/70 text-white backdrop-blur-sm">
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
            
            <h3 className={`font-display font-bold tracking-tight mb-3 transition-colors group-hover:text-primary/80 ${
              featured ? 'text-2xl' : 'text-xl'
            }`}>
              {post.title}
            </h3>
            
            <p className="text-muted-foreground line-clamp-2 mb-4">
              {post.excerpt}
            </p>
            
            <div className="flex items-center text-primary font-medium">
              Read article
              <ArrowUpRight size={18} className="ml-1 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
