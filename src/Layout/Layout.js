import React from 'react';
import Navbar from 'components/NavBar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      { children }
    </>
  );
};
