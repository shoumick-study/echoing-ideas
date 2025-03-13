
# Thoughts Pursuits - A Static Blog for Online Business

This is a static blog website built with React, Vite, and Tailwind CSS. It's designed to be easy to use and deploy to any static hosting service.

## How to Use This Blog

### Local Development

1. Clone this repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Visit `http://localhost:8080` to view the blog

## Publishing Posts

Since this is a static site, there are a few ways to manage content:

### Option 1: Using the Create Post Interface (For Admin Only)

1. Navigate to `/create` in the UI
2. Fill out the form and submit your post
3. **Important:** This is just a demo interface. In a real implementation, you would need to:
   - Implement authentication for admin users only
   - Add a backend to save the posts permanently or use a static site generation process

### Option 2: Directly in Code (Recommended for Production)

1. Edit the `samplePosts` array in `src/components/PostGrid.tsx`
2. Add your new post object with all the required fields:
   ```javascript
   {
     id: '7', // Unique identifier
     title: 'Your Post Title',
     excerpt: 'A brief summary of your post (140-160 characters recommended)',
     date: 'June 15, 2023',
     category: 'Marketing', // Choose from existing categories or create a new one
     author: {
       name: 'Your Name',
       avatar: '/path/to/avatar.jpg' // Add your image to the public folder
     },
     coverImage: '/path/to/cover.jpg', // Add your image to the public folder
     readTime: '5 min read',
     slug: 'your-post-title' // URL-friendly version of the title
   }
   ```
3. Rebuild and redeploy the site

### Option 3: Use a Headless CMS (Best for Production)

For a more maintainable approach:

1. Connect the blog to a headless CMS like:
   - [Contentful](https://www.contentful.com/)
   - [Sanity.io](https://www.sanity.io/)
   - [Strapi](https://strapi.io/)
   - Or use markdown files with a Git-based CMS like [Netlify CMS](https://www.netlifycms.org/)

2. Implement API calls to fetch content at build time or runtime
3. Set up a CI/CD pipeline to automatically rebuild and deploy the site when content changes

## Deploying Your Blog

This static site can be deployed to any static hosting service:

1. Build the project with `npm run build`
2. Deploy the contents of the `dist` folder to:
   - [Netlify](https://www.netlify.com/)
   - [Vercel](https://vercel.com/)
   - [GitHub Pages](https://pages.github.com/)
   - [Cloudflare Pages](https://pages.cloudflare.com/)
   - [AWS S3 + CloudFront](https://aws.amazon.com/s3/)

### Example: Deploying to Netlify

1. Push your repository to GitHub
2. Log in to Netlify and click "New site from Git"
3. Select your repository
4. Set build command to: `npm run build`
5. Set publish directory to: `dist`
6. Click "Deploy site"

## Customization

- Edit colors and styles in `src/index.css` and `tailwind.config.ts`
- Modify the layout in `src/components/` folder

## License

Feel free to use this project as a starting point for your own blog!
