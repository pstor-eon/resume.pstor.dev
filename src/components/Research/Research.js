import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Research.css';

const Research = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      title: "연구",
      description: "연구방향",
      subDescription: "제가 앞으로 진행 해보고 싶은 연구 방향입니다.",
      moreButton: "연구 내용 보기"
    },
    en: {
      "title": "Research",
      "description": "Research Direction",
      "subDescription": "This is the research direction I would like to pursue in the future.",
      "moreButton": "View Research Details"
    }
  };

  const text = content[lang];

  return (
    <section className={`research ${isDark ? 'dark' : ''}`}>
      <h2>
        <Search size={20} />
        {text.title}
      </h2>
      <div className="research-content">
        <p className="description">{text.description}</p>
        <p className="sub-description">{text.subDescription}</p>
        <Link to="/research" className="more-link">
          {text.moreButton}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default Research; 