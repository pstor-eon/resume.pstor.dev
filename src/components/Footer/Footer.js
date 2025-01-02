import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      copyright: "© 2024 PSTOR. All rights reserved."
    },
    en: {
      copyright: "© 2024 PSTOR. All rights reserved."
    }
  };

  const text = content[lang];

  return (
    <footer className={`footer ${isDark ? 'dark' : ''}`}>
      <div className="footer-content">
        <p className="copyright">{text.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer; 