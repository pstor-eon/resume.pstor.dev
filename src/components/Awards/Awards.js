import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Trophy } from 'lucide-react';
import './Awards.css';

const Awards = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      title: "수상",
      awards: [
        {
          title: "KY대학교 사이버보안공학과: 제3회 보안 경진대회 [팀원] 1위",
          date: "2019.11"
        },
        {
          title: "그린로드 프로젝트: 셔틀버스 전기차 전환 프로젝트 장려상",
          date: "2022.02"
        }
      ]
    },
    en: {
      title: "Awards",
      awards: [
        {
          title: "Konyang University Cybersecurity Engineering Department: Awarded 1st place in the \"3rd Security Competition\" as a [Team Member]",
          date: "Nov 2019"
        },
        {
          title: "Green Road Project: Received the Encouragement Award for the Shuttle Bus Electric Vehicle Conversion project",
          date: "Feb 2022"
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <section className={`awards ${isDark ? 'dark' : ''}`}>
      <h2>
        <Trophy size={20} />
        {text.title}
      </h2>
      <div className="awards-content">
        {text.awards.map((award, index) => (
          <div key={index} className="award-item">
            <span className="award-date">{award.date}</span>
            <p className="award-title">{award.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards; 