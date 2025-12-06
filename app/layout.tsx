import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Recep Sefa Aktaş | AI Video Portfolio',
  description: 'Portfolio of Recep Sefa Aktaş, specializing in AI-driven advertising videos and creative direction.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans flex flex-col min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}