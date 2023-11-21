import React from 'react';
import { Footer } from './sections/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
}
