import React from 'react';
import { Footer } from './sections/footer';
import { Navbar } from './sections/navbar';

export default async function Layout({
  children,
  blog,
  contact,
}: Readonly<{
  children: React.ReactNode;
  blog: React.ReactNode;
  contact: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      {blog}
      {contact}
      <Footer />
    </React.Fragment>
  );
}
