import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Languages as LanguagesIcon, Calendar, Clock } from 'lucide-react';
import './Languages.css';

const Languages = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      title: "언어",
      languages: [
        {
          name: "한국어",
          level: "모국어"
        },
        {
          name: "영어",
          level: "일상 대화 가능",
          certifications: [
            {
              name: "OPIc",
              rating: "IM2 (Intermediate MID 2)",
              testDate: "2024.12.22",
              expirationDate: "2026.12.21"
            }
          ]
        }
      ]
    },
    en: {
      title: "Languages",
      languages: [
        {
          name: "Korean",
          level: "Native"
        },
        {
          name: "English",
          level: "Conversational",
          certifications: [
            {
              name: "OPIc",
              rating: "IM2 (Intermediate MID 2)",
              testDate: "Dec 22, 2024",
              expirationDate: "Dec 21, 2026"
            }
          ]
        }
      ]
    }
  };

  const text = content[lang];

  const dateLabels = {
    ko: {
      testDate: "시험일",
      expirationDate: "만료일"
    },
    en: {
      testDate: "Test Date",
      expirationDate: "Expiration Date"
    }
  };

  return (
    <section className={`languages ${isDark ? 'dark' : ''}`}>
      <h2>
        <LanguagesIcon size={20} />
        {text.title}
      </h2>
      <div className="languages-content">
        <ul className="languages-list">
          {text.languages.map((language, index) => (
            <li key={index} className="language-item">
              <div className="language-header">
                <span className="language-name">{language.name}</span>
                <span className="language-level">({language.level})</span>
              </div>
              {language.certifications && (
                <ul className="certification-list">
                  {language.certifications.map((cert, i) => (
                    <li key={i} className="certification-item">
                      <div className="certification-header">
                        <span className="certification-name">{cert.name}</span>
                        <span className="certification-rating">{cert.rating}</span>
                      </div>
                      <div className="certification-dates">
                        <span className="test-date">
                          <Calendar size={14} />
                          {dateLabels[lang].testDate}: {cert.testDate}
                        </span>
                        <span className="expiration-date">
                          <Clock size={14} />
                          {dateLabels[lang].expirationDate}: {cert.expirationDate}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Languages; 