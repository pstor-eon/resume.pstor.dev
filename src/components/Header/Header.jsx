import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, MapPin } from 'lucide-react';
import './Header.css';

const Header = () => {
  const { isDark, lang } = useTheme();

  const content = {
    ko: {
      name: "김철언",
      title: "차량 보안 전문가",
      email: "email@example.com",
      location: "서울특별시"
    },
    en: {
      name: "Cheoleon Kim",
      title: "Automotive Security Expert",
      email: "email@example.com",
      location: "Seoul, Korea"
    }
  };

  const text = content[lang];

  return (
    <header className={`header ${isDark ? 'dark' : ''}`}>
      <h1>{text.name}</h1>
      <h2>{text.title}</h2>
      <div className="contact-info">
        <p>
          <Mail size={18} />
          <span>{text.email}</span>
        </p>
        <p>
          <MapPin size={18} />
          <span>{text.location}</span>
        </p>
      </div>
    </header>
  );
};

export default Header; 