import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

interface FooterProps {
  setIsHovering: (isHovering: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ setIsHovering }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com' },
  ];

  return (
    <footer className="bg-primary-50 dark:bg-primary-800 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-display font-bold tracking-tight">
              <span className="text-accent-600">Creative</span>Studio
            </Link>
            <p className="mt-2 text-sm text-primary-600 dark:text-primary-300 max-w-md">
              We create digital experiences that delight and inspire. Let's build something amazing together.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-primary-200 dark:border-primary-700 hover:bg-white dark:hover:bg-primary-700 transition-colors duration-300"
                  aria-label={link.name}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-600 transition-colors duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Back to top <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-200 dark:border-primary-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-600 dark:text-primary-300">
            © {new Date().getFullYear()} CreativeStudio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link 
              to="/about"
              className="text-sm text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-600 transition-colors duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              About
            </Link>
            <Link 
              to="/projects"
              className="text-sm text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-600 transition-colors duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact"
              className="text-sm text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-600 transition-colors duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;