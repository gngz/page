import React from 'react';

export default async function Layout({
  children,
  skills,
  blog,
  contact,
  experience,
}: Readonly<{
  children: React.ReactNode;
  skills: React.ReactNode;
  blog: React.ReactNode;
  contact: React.ReactNode;
  experience: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      {children}
      {experience}
      {skills}
      {contact}
    </React.Fragment>
  );
}
