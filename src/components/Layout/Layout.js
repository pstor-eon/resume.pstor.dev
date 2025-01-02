import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavControls from '../NavControls/NavControls';
import { useTheme } from '../../context/ThemeContext';

const Layout = ({ children }) => {
  const { isDark } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`page-wrapper ${isDark ? 'dark' : ''}`}>
      <div className="app">
        <NavControls />
        {isHomePage ? (
          <>
            <Header />
            <main className="main-content">
              {children}
            </main>
            <Footer />
          </>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};

export default Layout; 