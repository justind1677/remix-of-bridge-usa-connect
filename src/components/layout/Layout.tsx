import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
