
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import PostGrid from '../components/PostGrid';
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Thoughts - A Personal Analysis Blog</title>
        <meta name="description" content="Exploring ideas across philosophy, technology, economics, and more." />
        <meta property="og:title" content="Thoughts - A Personal Analysis Blog" />
        <meta property="og:description" content="Exploring ideas across philosophy, technology, economics, and more." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thoughts - A Personal Analysis Blog" />
        <meta name="twitter:description" content="Exploring ideas across philosophy, technology, economics, and more." />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <PostGrid 
          title="Featured Articles" 
          description="A collection of my most insightful analyses and thought pieces."
          featured={true}
        />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Index;
