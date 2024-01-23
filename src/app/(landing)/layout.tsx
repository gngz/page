import { Footer } from './sections/footer';
import { Navbar } from './sections/navbar';
import { getSocialNetworks } from '@/services/cms-api';
import React from 'react';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}
