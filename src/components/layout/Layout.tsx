
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageTransition>
        <main className="flex-grow pt-16">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Layout;
