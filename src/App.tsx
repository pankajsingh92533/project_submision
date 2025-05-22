import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Layout from './components/Layout';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Context
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const location = useLocation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="app min-h-screen bg-white dark:bg-primary-900 text-primary-900 dark:text-white transition-colors duration-300">
        <CustomCursor position={cursorPosition} isHovering={isHovering} />
        <Layout setIsHovering={setIsHovering}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home setIsHovering={setIsHovering} />} />
              <Route path="/projects" element={<Projects setIsHovering={setIsHovering} />} />
              <Route path="/about" element={<About setIsHovering={setIsHovering} />} />
              <Route path="/contact" element={<Contact setIsHovering={setIsHovering} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;