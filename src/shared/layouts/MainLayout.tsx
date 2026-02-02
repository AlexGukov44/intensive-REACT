import React from 'react';
import Header from '../../widgets/LayoutHeader/Header.tsx';
import Footer from '../../widgets/LayoutFooter/Footer.tsx';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;