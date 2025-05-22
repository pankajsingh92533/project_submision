import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  setIsHovering: (isHovering: boolean) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, setIsHovering }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setIsHovering={setIsHovering} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer setIsHovering={setIsHovering} />
    </div>
  );
};

export default Layout;