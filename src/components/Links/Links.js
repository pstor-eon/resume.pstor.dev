import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Github, Globe, Link as LinkIcon } from 'lucide-react';
import './Links.css';

const Links = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      title: "링크",
      links: [
        {
          icon: <Mail size={20} />,
          label: "이메일",
          url: "mailto:contact@pstor.dev",
          text: "contact@pstor.dev"
        },
        {
          icon: <Github size={20} />,
          label: "깃허브",
          url: "https://github.com/pstor-eon",
          text: "pstor github"
        },
        {
          icon: <Globe size={20} />,
          label: "기술 블로그",
          url: "https://pstor.dev",
          text: "Github Blog"
        },
        {
          icon: <Globe size={20} />,
          label: "개인 블로그",
          url: "https://pstor-kr.tistory.com",
          text: "Tistory Blog"
        }
      ]
    },
    en: {
      title: "Links",
      links: [
        {
          icon: <Mail size={20} />,
          label: "Email",
          url: "mailto:contact@pstor.dev",
          text: "contact@pstor.dev"
        },
        {
          icon: <Github size={20} />,
          label: "GitHub",
          url: "https://github.com/yourusername",
          text: "github.com/yourusername"
        },
        {
          icon: <Globe size={20} />,
          label: "Tech Blog",
          url: "https://blog1.example.com",
          text: "Tech Blog"
        },
        {
          icon: <Globe size={20} />,
          label: "Personal Blog",
          url: "https://blog2.example.com",
          text: "Personal Blog"
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <section className={`links-section ${isDark ? 'dark' : ''}`}>
      <h2>
        <LinkIcon size={20} />
        {text.title}
      </h2>
      <div className="links-content">
        {text.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
            aria-label={link.label}
          >
            {link.icon}
            <span>{link.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Links; 