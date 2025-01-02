import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Activity } from 'lucide-react';
import './Activities.css';

const Activities = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      title: "활동",
      activities: [
        {
          title: "Level Up Thon",
          role: "STAFF",
          period: "2019.11.30 - 2019.12.01",
          details: ["이벤트 운영 및 지원"]
        },
        {
          title: "k-ctf 운영",
          details: [
            "k-ctf 운영을 위한 서버 구축 (2019.03, 이후 중단)",
            "k-ctf 운영팀 포렌식 문제 제작 리더 (2021.03 - 2021.10)"
          ]
        }
      ]
    },
    en: {
      title: "Activities",
      activities: [
        {
          title: "Level Up Thon",
          role: "STAFF",
          period: "Nov 30 - Dec 1, 2019",
          details: ["Event operation and support"]
        },
        {
          title: "k-ctf Management",
          details: [
            "Established a server for k-ctf management (Mar 2019, later discontinued)",
            "Led the k-ctf management team in creating forensics problems (Mar 2021 - Oct 2021)"
          ]
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <section className={`activities ${isDark ? 'dark' : ''}`}>
      <h2>
        <Activity size={20} />
        {text.title}
      </h2>
      <div className="activities-content">
        {text.activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-header">
              <h3>{activity.title}</h3>
              {activity.role && activity.period && (
                <p className="activity-meta">
                  <span className="role">{activity.role}</span>
                  <span className="period">{activity.period}</span>
                </p>
              )}
            </div>
            <ul className="activity-details">
              {activity.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities; 