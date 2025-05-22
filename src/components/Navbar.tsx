import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

interface NavbarProps {
  setIsHovering: (isHovering: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsHovering }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-primary-900/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className="text-xl md:text-2xl font-display font-bold tracking-tight"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="text-accent-600">Creative</span>Studio
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `relative font-medium text-sm tracking-wide transition-colors duration-300 pb-1 
                  ${isActive ? 'text-accent-600' : 'hover:text-accent-600'}`
                }
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-600"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary-50 dark:bg-primary-800 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary-50 dark:bg-primary-800 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-white dark:bg-primary-900 pt-20">
            <nav className="container mx-auto px-4 py-6 flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-xl font-medium tracking-wide py-2 
                    ${isActive ? 'text-accent-600' : 'hover:text-accent-600'}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </motion.div>
    </motion.header>
  );
};

export default Navbar;