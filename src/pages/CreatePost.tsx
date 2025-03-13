
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Image, Save } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from '../hooks/use-toast';

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [coverImage, setCoverImage] = useState('/placeholder.svg');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ['Philosophy', 'Technology', 'Economics', 'Future', 'Wellness', 'Other'];

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real implementation, this would save the post to a static site generator
    // or a CMS backend. For now, we'll simulate success with a timeout.
    setTimeout(() => {
      const postData = {
        id: Date.now().toString(),
        title,
        excerpt,
        content,
        category,
        coverImage,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        readTime: `${Math.max(1, Math.ceil(content.split(' ').length / 200))} min read`,
        slug: generateSlug(title),
      };

      // In a real implementation, this would trigger a static site rebuild
      // For now, we'll just show a success message
      console.log('Post created:', postData);
      
      toast({
        title: 'Post created successfully',
        description: 'Your post has been created and is ready for publishing.',
      });
      
      setIsSubmitting(false);
      navigate('/');
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Create New Post | Thoughts</title>
        <meta name="description" content="Create a new blog post for your static site." />
      </Helmet>
      
      <Navbar />
      <main>
        <div className="pt-32 pb-20">
          <div className="container-content">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back
            </button>
            
            <div className="max-w-3xl mx-auto">
              <h1 className="headline text-3xl md:text-4xl mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
                Create New Post
              </h1>

              <div className="bg-card border rounded-2xl p-8 shadow-sm animate-fade-up" style={{ animationDelay: '200ms' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="title" className="block text-foreground font-medium">
                      Post Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="Enter post title"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="excerpt" className="block text-foreground font-medium">
                      Excerpt
                    </label>
                    <input
                      id="excerpt"
                      type="text"
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      required
                      className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="Brief description of your post"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="category" className="block text-foreground font-medium">
                      Category
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                      className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    >
                      <option value="" disabled>Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="coverImage" className="block text-foreground font-medium">
                      Cover Image URL
                    </label>
                    <div className="flex space-x-3">
                      <input
                        id="coverImage"
                        type="text"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                        className="flex-1 p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                        placeholder="Image URL"
                      />
                      <button 
                        type="button"
                        className="flex items-center justify-center bg-secondary text-secondary-foreground p-3 rounded-lg hover:bg-secondary/80 transition-colors"
                        title="Choose image"
                      >
                        <Image size={20} />
                      </button>
                    </div>
                    {coverImage && (
                      <div className="mt-3 aspect-video overflow-hidden rounded-lg border">
                        <img 
                          src={coverImage} 
                          alt="Cover preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="content" className="block text-foreground font-medium">
                      Content
                    </label>
                    <textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                      rows={12}
                      className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-y"
                      placeholder="Write your post content here..."
                    ></textarea>
                    <p className="text-xs text-muted-foreground mt-1">
                      Tip: You can use Markdown formatting for your content.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white/80 rounded-full animate-spin mr-2"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save size={18} className="mr-2" />
                          Save Post
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-8 bg-secondary/60 backdrop-blur-sm border rounded-2xl p-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <h3 className="font-display font-semibold text-lg mb-2">How to publish your posts</h3>
                <p className="text-muted-foreground">
                  Since this is a static website, after creating your post, you'll need to:
                </p>
                <ol className="list-decimal list-inside mt-3 space-y-2 text-muted-foreground">
                  <li>Export the post data from the console or implement a more robust storage solution</li>
                  <li>Add the post to your content management system or static site generator</li>
                  <li>Rebuild and redeploy your site with the new content</li>
                </ol>
                <p className="mt-4 text-sm text-muted-foreground">
                  For a production site, consider using a headless CMS like Sanity, Contentful, or Strapi, 
                  which can be integrated with your static site generator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CreatePost;
