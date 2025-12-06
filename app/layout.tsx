import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// This component mimics the Next.js RootLayout (app/layout.tsx)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}