import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      title: "경력사항",
      experiences: [
        {
          title: "자동차 보안 연구원",
          company: "ABC 자동차",
          period: "2022 - 현재",
          achievements: [
            "차량 침입 탐지 시스템 개발",
            "자율주행 차량 보안 취약점 분석",
            "차량 네트워크 보안 프로토콜 연구"
          ]
        },
        {
          title: "보안 연구원 인턴",
          company: "XYZ 연구소",
          period: "2021 - 2022",
          achievements: [
            "ECU 펌웨어 분석 및 취약점 진단",
            "보안 테스트 자동화 도구 개발"
          ]
        }
      ]
    },
    en: {
      title: "Experience",
      experiences: [
        {
          title: "Automotive Security Researcher",
          company: "ABC Motors",
          period: "2022 - Present",
          description: "Research on vehicle network security vulnerabilities",
          achievements: [
            "Developed vehicle intrusion detection system",
            "Analyzed autonomous vehicle security vulnerabilities",
            "Researched vehicle network security protocols"
          ]
        },
        {
          title: "Security Research Intern",
          company: "XYZ Laboratory",
          period: "2021 - 2022",
          description: "Automotive ECU security testing and analysis",
          achievements: [
            "Analyzed ECU firmware and diagnosed vulnerabilities",
            "Developed security testing automation tools"
          ]
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <section className={`experience ${isDark ? 'dark' : ''}`}>
      <h2>
        <Briefcase size={20} />
        {text.title}
      </h2>
      <div className="experience-items">
        {text.experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <p className="company">{exp.company}</p>
            <ul>
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 