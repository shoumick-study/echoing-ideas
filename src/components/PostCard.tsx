
import React from 'react';
import { Link } from 'react-router-dom';

export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author?: Author;
  coverImage: string;
  readTime: string;
  slug: string;
}

interface PostCardProps {
  post: Post;
  index?: number;
}

const PostCard = ({ post, index = 0 }: PostCardProps) => {
  const delay = index * 100;
  
  return (
    <Link 
      to={`/post/${post.slug}`}
      className="block group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="tag-pill bg-primary/90 text-primary-foreground text-xs">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="font-display font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {post.author && (
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                    <img 
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {post.author.name}
                  </span>
                </div>
              )}
              {!post.author && (
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>
              )}
            </div>
            
            <span className="text-xs text-primary font-medium">
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
