import React from 'react';

export default async function Layout({
  children,
  skills,
  blog,
  contact,
}: Readonly<{
  children: React.ReactNode;
  skills: React.ReactNode;
  blog: React.ReactNode;
  contact: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      {children}
      {skills}
      {blog}
      {contact}
    </React.Fragment>
  );
}
