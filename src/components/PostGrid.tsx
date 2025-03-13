
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PostCard, { Post } from './PostCard';

// Sample posts data
export const samplePosts: Post[] = [
  {
    id: '1',
    title: 'The Ethical Implications of AI Development',
    excerpt: 'Exploring the moral questions that arise as artificial intelligence becomes more advanced and autonomous.',
    date: 'March 15, 2023',
    category: 'Technology',
    author: {
      name: 'Alex Johnson',
      avatar: '/placeholder.svg'
    },
    coverImage: '/placeholder.svg',
    readTime: '8 min read',
    slug: 'ethical-implications-ai-development'
  },
  {
    id: '2',
    title: 'Economic Models in a Post-Pandemic World',
    excerpt: 'Analyzing how traditional economic frameworks are evolving in response to global disruptions.',
    date: 'February 28, 2023',
    category: 'Economics',
    author: {
      name: 'Maya Patel',
      avatar: '/placeholder.svg'
    },
    coverImage: '/placeholder.svg',
    readTime: '6 min read',
    slug: 'economic-models-post-pandemic'
  },
  {
    id: '3',
    title: 'The Philosophy of Digital Consciousness',
    excerpt: 'Examining the metaphysical questions surrounding artificial consciousness and digital beings.',
    date: 'January 22, 2023',
    category: 'Philosophy',
    author: {
      name: 'Thomas Wu',
      avatar: '/placeholder.svg'
    },
    coverImage: '/placeholder.svg',
    readTime: '10 min read',
    slug: 'philosophy-digital-consciousness'
  },
  {
    id: '4',
    title: 'Sustainable Living in Urban Environments',
    excerpt: 'Practical approaches to environmentally conscious living within modern city landscapes.',
    date: 'December 10, 2022',
    category: 'Wellness',
    author: {
      name: 'Sarah Miller',
      avatar: '/placeholder.svg'
    },
    coverImage: '/placeholder.svg',
    readTime: '7 min read',
    slug: 'sustainable-living-urban-environments'
  },
  {
    id: '5',
    title: 'The Future of Work: Beyond the Office',
    excerpt: 'How remote work is reshaping career trajectories, company structures, and personal fulfillment.',
    date: 'November 5, 2022',
    category: 'Future',
    author: {
      name: 'David Chen',
      avatar: '/placeholder.svg'
    },
    coverImage: '/placeholder.svg',
    readTime: '9 min read',
    slug: 'future-work-beyond-office'
  },
  {
    id: '6',
    title: 'Reimagining Education Systems',
    excerpt: 'Critical analysis of current educational paradigms and visions for more effective learning models.',
    date: 'October 18, 2022',
    category: 'Philosophy',
    author: {
      name: 'Elena Rodriguez',
      avatar: '/placeholder.svg'
    },
    coverImage: '/placeholder.svg',
    readTime: '11 min read',
    slug: 'reimagining-education-systems'
  }
];

interface PostGridProps {
  title?: string;
  description?: string;
  featured?: boolean;
  posts?: Post[];
  viewAllLink?: string;
}

const PostGrid: React.FC<PostGridProps> = ({ 
  title, 
  description, 
  featured = false, 
  posts,
  viewAllLink = "/category/all"
}) => {
  // For featured view, show only the first 3 posts
  // Use provided posts or fall back to the sample posts
  const displayPosts = posts || (featured ? samplePosts.slice(0, 3) : samplePosts);
  
  return (
    <section className="py-20">
      <div className="container-content">
        {title && (
          <div className="flex items-end justify-between mb-10 border-b pb-4">
            <div>
              <h2 className="headline text-2xl md:text-3xl">{title}</h2>
              {description && (
                <p className="text-muted-foreground max-w-2xl mt-2">
                  {description}
                </p>
              )}
            </div>
            
            {featured && viewAllLink && (
              <Link 
                to={viewAllLink} 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                View All
                <ArrowRight size={16} className="ml-1" />
              </Link>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayPosts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        {featured && !title && (
          <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Link 
              to="/category/all" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              View All Articles
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostGrid;
