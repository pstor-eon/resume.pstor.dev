import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { GraduationCap } from 'lucide-react';
import './Training.css';

const Training = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      title: "추가 교육 및 포럼",
      trainings: [
        {
          title: "서울 ICT 이노베이션 스퀘어 AI 기술 활용 (시각 심화 과정)",
          period: "2021.05.03 - 2021.07.02",
          details: ["160시간 시각 심화 과정 수료"]
        },
        {
          title: "K-Shield Junior 13기",
          period: "2024.08.12 - 2024.10.16",
          details: ["200시간 교육 이수"]
        }
      ]
    },
    en: {
      title: "Additional Training and Forums",
      trainings: [
        {
          title: "Seoul ICT Innovation Square AI Technology Utilization (Advanced Visual Course)",
          period: "May 3 - July 2, 2021",
          details: ["Completed a 160-hour advanced visual course"]
        },
        {
          title: "K-Shield Junior, 13th Cohort",
          period: "August 12 - October 16, 2024",
          details: ["Completed 200 hours of training"]
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <section className={`training ${isDark ? 'dark' : ''}`}>
      <h2>
        <GraduationCap size={20} />
        {text.title}
      </h2>
      <div className="training-content">
        {text.trainings.map((training, index) => (
          <div key={index} className="training-item">
            <div className="training-header">
              <h3>{training.title}</h3>
              <span className="period">{training.period}</span>
            </div>
            <ul className="training-details">
              {training.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Training; 