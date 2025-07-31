'use client';
import '@/styles/globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <div className="app-container">
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
