import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Github, MapPin } from 'lucide-react';
import './Header.css';

const Header = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      name: '김철언',
      role: 'Aspiring Cyber Security Researcher',
      email: 'contact@pstor.dev',
      github: 'github.com/pstor-eon',
      location: '서울특별시'
    },
    en: {
      name: 'Cheoleon Kim',
      role: 'Aspiring Cyber Security Researcher',
      email: 'contact@pstor.dev',
      github: 'github.com/pstor-eon',
      location: 'Seoul, Korea'
    }
  };

  const text = content[lang];

  return (
    <header className={`header ${isDark ? 'dark' : ''}`}>
      <h1>{text.name}</h1>
      <h2>{text.role}</h2>
      <div className="contact-info">
        <p>
          <Mail size={18} />
          <a href={`mailto:${text.email}`} className="contact-link">{text.email}</a>
        </p>
        <p>
          <Github size={18} />
          <a href={`https://${text.github}`} target="_blank" rel="noopener noreferrer" className="contact-link">
            {text.github}
          </a>
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