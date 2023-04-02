import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header
        style={{
          padding: '20px',
          backgroundColor: '#307848',
          color: 'white',
        }}
      >
        <nav
          style={{
            display: 'flex',
            gap: '20px',
            

          }}
        >
          <NavLink
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
           
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            style={{
              color: 'white',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
            
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{
          padding: '12px',
          textAlign: 'center',
          textTransform: 'uppercase',
          backgroundColor: '#307848',
          color: 'white',
        }}><p>&#169; 2023 Created by Yuliia Rudenko</p></footer>
    </>
  );
};

export default Layout;
