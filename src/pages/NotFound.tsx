
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Thoughts</title>
        <meta name="description" content="The page you were looking for doesn't exist." />
      </Helmet>
      
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="container-content text-center max-w-xl">
          <h1 className="headline text-6xl md:text-7xl mb-6">404</h1>
          <p className="text-xl md:text-2xl mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
