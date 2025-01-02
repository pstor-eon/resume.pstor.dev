import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Languages, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import './NavControls.css';

const NavControls = () => {
  const { isDark, toggleTheme, lang, toggleLang } = useTheme();

  return (
    <div className="nav-controls">
      <Link 
        to="/" 
        className={`nav-button ${isDark ? 'dark' : 'light'}`}
        aria-label="홈으로"
      >
        <Home size={20} />
      </Link>
      <button 
        className={`nav-button ${isDark ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        aria-label="테마 변경"
      >
        {isDark ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      <button 
        className="nav-button"
        onClick={toggleLang}
        aria-label="언어 변경"
      >
        <Languages size={20} />
      </button>
    </div>
  );
};

export default NavControls; 