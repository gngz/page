import React from 'react';

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
      {children}
      {blog}
      {contact}
    </React.Fragment>
  );
}
