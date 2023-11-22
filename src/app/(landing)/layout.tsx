import React from 'react';
import { Footer } from './sections/Footer';
import { getSocialNetworks } from '@/services/cms-api';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialNetworks = await getSocialNetworks();

  return (
    <React.Fragment>
      {children}
      <Footer socialNetworks={socialNetworks} />
    </React.Fragment>
  );
}
