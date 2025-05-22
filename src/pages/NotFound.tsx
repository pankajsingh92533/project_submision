import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-display font-bold text-accent-600">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-6">Page Not Found</h2>
          <p className="text-primary-600 dark:text-primary-300 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              <Home size={18} className="mr-2" /> Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;