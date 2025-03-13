
import React from 'react';
import PostCard, { Post } from './PostCard';

// Sample post data
export const samplePosts: Post[] = [
  {
    id: '1',
    title: 'The Evolution of Human Consciousness',
    excerpt: 'Exploring how human consciousness evolved and what it means for our understanding of reality and perception.',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    category: 'Philosophy',
    date: 'Apr 12, 2023',
    readTime: '8 min read',
    slug: 'evolution-of-human-consciousness',
  },
  {
    id: '2',
    title: 'Artificial Intelligence: Promise or Peril?',
    excerpt: 'A nuanced look at the potential benefits and risks of advanced AI systems in society.',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    category: 'Technology',
    date: 'Mar 28, 2023',
    readTime: '6 min read',
    slug: 'ai-promise-or-peril',
  },
  {
    id: '3',
    title: 'The Future of Remote Work',
    excerpt: 'How distributed work models are reshaping organizational structures and work-life balance.',
    coverImage: 'https://images.unsplash.com/photo-1591382696684-38c427c7547a',
    category: 'Future',
    date: 'Mar 15, 2023',
    readTime: '5 min read',
    slug: 'future-of-remote-work',
  },
  {
    id: '4',
    title: 'Understanding Modern Monetary Theory',
    excerpt: 'A deep dive into the controversial economic framework reshaping policy debates.',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    category: 'Economics',
    date: 'Feb 18, 2023',
    readTime: '10 min read',
    slug: 'understanding-modern-monetary-theory',
  },
  {
    id: '5',
    title: 'The Science of Mindfulness',
    excerpt: 'How mindfulness practices affect our brains and why they're increasingly important in digital age.',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
    category: 'Wellness',
    date: 'Jan 30, 2023',
    readTime: '7 min read',
    slug: 'science-of-mindfulness',
  },
  {
    id: '6',
    title: 'Digital Privacy in the Surveillance Age',
    excerpt: 'Examining the erosion of privacy and what it means for individual autonomy.',
    coverImage: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb',
    category: 'Technology',
    date: 'Jan 12, 2023',
    readTime: '9 min read',
    slug: 'digital-privacy-surveillance-age',
  },
];

interface PostGridProps {
  posts?: Post[];
  title?: string;
  description?: string;
  featured?: boolean;
}

const PostGrid = ({ 
  posts = samplePosts,
  title = "Latest Articles", 
  description,
  featured = false
}: PostGridProps) => {
  return (
    <section className="py-16 relative">
      <div className="container-content">
        <div className="mb-12">
          <h2 className="headline text-3xl md:text-4xl mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <PostCard 
              key={post.id} 
              post={post} 
              index={index} 
              featured={index === 0 && featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostGrid;
