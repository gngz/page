import React from 'react';
import { Footer } from './sections/footer';
import { getSocialNetworks } from '@/services/cms-api';
import { Navbar } from './sections/navbar';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socialNetworks = await getSocialNetworks();

  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer socialNetworks={socialNetworks} />
    </React.Fragment>
  );
}
