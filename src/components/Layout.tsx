import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen bg-canvas text-white selection:bg-white/10">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout; 