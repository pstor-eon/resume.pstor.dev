import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Education.css';

const Education = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      title: "학력",
      education: [
        {
          school: "건양대학교",
          degree: "사이버보안공학과 학사",
          period: "2019.02 - 2025.02",
          details: [
            "주전공: 사이버보안공학",
            "복수전공: 의료공과계열 (과학기술•행정융복합 융합전공)",
            "학점: 2.92/4.5"
          ]
        }
      ],
      viewCourses: "이수 과목 보기"
    },
    en: {
      title: "Education",
      education: [
        {
          school: "Konyang University",
          degree: "B.S. in Cyber Security Engineering",
          period: "Feb 2019 - Feb 2025",
          details: [
            "Major: Cyber Security Engineering",
            "Double Major: Medical Engineering (Science Technology & Administration Convergence)",
            "GPA: 2.92/4.5"
          ]
        }
      ],
      viewCourses: "View Courses"
    }
  };

  const text = content[lang];

  return (
    <section className={`education ${isDark ? 'dark' : ''}`}>
      <h2>
        <GraduationCap size={20} />
        {text.title}
      </h2>
      <div className="education-items">
        {text.education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="period">{edu.period}</span>
            </div>
            <p className="school">{edu.school}</p>
            <ul className="details-list">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <Link to="/courses" className="view-courses">
              {text.viewCourses}
              <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 