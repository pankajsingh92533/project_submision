import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

interface CustomCursorProps {
  position: { x: number; y: number };
  isHovering: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ position, isHovering }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          backgroundColor: isHovering 
            ? (isDarkMode ? 'rgba(249, 115, 22, 0.2)' : 'rgba(249, 115, 22, 0.2)') 
            : 'transparent',
          border: isHovering 
            ? 'none' 
            : `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(15, 23, 42, 0.3)'}`,
          mixBlendMode: 'difference',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          x: -16,
          y: -16,
        }}
        transition={{
          type: 'spring',
          mass: 0.3,
          stiffness: 200,
          damping: 20,
        }}
      />
      <motion.div
        className="fixed w-2 h-2 bg-accent-600 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          x: -1,
          y: -1,
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  );
};

export default CustomCursor;