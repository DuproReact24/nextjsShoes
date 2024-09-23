import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
