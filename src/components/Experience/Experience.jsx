import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "ABC 자동차 보안 연구소",
      position: "보안 연구원",
      period: "2020 - 현재",
      description: [
        "차량 침입 탐지 시스템 개발",
        "자율주행 차량 보안 취약점 분석",
        "차량 네트워크 보안 프로토콜 연구"
      ]
    },
    // 더 많은 경력 추가 가능
  ];

  return (
    <section className="experience">
      <h2>경력사항</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.company}</h3>
          <p className="position">{exp.position}</p>
          <p className="period">{exp.period}</p>
          <ul>
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience; 