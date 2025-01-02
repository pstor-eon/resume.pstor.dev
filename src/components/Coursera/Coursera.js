import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import './Coursera.css';

const Coursera = () => {
  const { isDark, lang } = useTheme();
  const [showCourses, setShowCourses] = useState(false);
  
  const content = {
    ko: {
      title: "Coursera 교육 이수",
      viewMore: "더 보기",
      viewLess: "접기",
      period: "2021 - 2022",
      summary: "저의 부족한 부분을 온라인 교육을 통해 채웠습니다.",
      specializations: [
        {
          title: "Healthcare IT Support - Johns Hopkins University",
          courses: [
            "The Critical Role of IT Support Staff in Healthcare (91.66%)",
            "Health Information Technology Fundamentals (80.76%)",
            "Operations and Patient Safety for Healthcare IT Staff (82.14%)",
            "Healthcare Data Security, Privacy, and Compliance (80.76%)"
          ]
        },
        {
          title: "Cyber Incident Response - Infosec",
          courses: [
            "Cyber Incident Response (100%)",
            "Stages of Incident Response (100%)",
            "Technical Deep Dive with Incident Response Tools (80%)",
            "Computer Forensics (100%)"
          ]
        },
        {
          title: "Computer Forensics - Infosec",
          courses: [
            "Digital Forensics Concepts (86.20%)",
            "Windows OS Forensics (100%)",
            "Windows Registry Forensics (94.44%)"
          ]
        }
      ],
      individualCourses: {
        "2022": [
          {
            university: "Johns Hopkins University",
            courses: [
              "Operations and Patient Safety for Healthcare IT Staff (82.14%)",
              "Health Information Technology Fundamentals (80.76%)",
              "Healthcare Data Security, Privacy, and Compliance (80.76%)"
            ]
          },
          {
            university: "University of Maryland, College Park",
            courses: ["Usable Security (86.60%)"]
          },
          {
            university: "University of Michigan",
            courses: ["Introduction to HTML5 (86.16%)"]
          }
        ],
        "2021": [
          {
            university: "Erasmus University Rotterdam",
            courses: ["Cybersecurity in Healthcare (Hospitals & Care Centres) (86.28%)"]
          },
          {
            university: "University of Michigan",
            courses: ["Programming for Everybody (Getting Started with Python) (93.30%)"]
          },
          {
            university: "Infosec",
            courses: [
              "Digital Forensics Concepts (86.20%)",
              "Windows Registry Forensics (94.44%)"
            ]
          }
        ]
      }
    },
    en: {
      title: "Coursera Certifications",
      viewMore: "View More",
      viewLess: "View Less",
      period: "2021 - 2022",
      summary: "Completed multiple specializations in Healthcare IT, Cybersecurity, and Computer Forensics",
      specializations: [
        {
          title: "Healthcare IT Support - Johns Hopkins University",
          courses: [
            "The Critical Role of IT Support Staff in Healthcare (91.66%)",
            "Health Information Technology Fundamentals (80.76%)",
            "Operations and Patient Safety for Healthcare IT Staff (82.14%)",
            "Healthcare Data Security, Privacy, and Compliance (80.76%)"
          ]
        },
        {
          title: "Cyber Incident Response - Infosec",
          courses: [
            "Cyber Incident Response (100%)",
            "Stages of Incident Response (100%)",
            "Technical Deep Dive with Incident Response Tools (80%)",
            "Computer Forensics (100%)"
          ]
        },
        {
          title: "Computer Forensics - Infosec",
          courses: [
            "Digital Forensics Concepts (86.20%)",
            "Windows OS Forensics (100%)",
            "Windows Registry Forensics (94.44%)"
          ]
        }
      ],
      individualCourses: {
        "2022": [
          {
            university: "Johns Hopkins University",
            courses: [
              "Operations and Patient Safety for Healthcare IT Staff (82.14%)",
              "Health Information Technology Fundamentals (80.76%)",
              "Healthcare Data Security, Privacy, and Compliance (80.76%)"
            ]
          },
          {
            university: "University of Maryland, College Park",
            courses: ["Usable Security (86.60%)"]
          },
          {
            university: "University of Michigan",
            courses: ["Introduction to HTML5 (86.16%)"]
          }
        ],
        "2021": [
          {
            university: "Erasmus University Rotterdam",
            courses: ["Cybersecurity in Healthcare (Hospitals & Care Centres) (86.28%)"]
          },
          {
            university: "University of Michigan",
            courses: ["Programming for Everybody (Getting Started with Python) (93.30%)"]
          },
          {
            university: "Infosec",
            courses: [
              "Digital Forensics Concepts (86.20%)",
              "Windows Registry Forensics (94.44%)"
            ]
          }
        ]
      }
    }
  };

  const text = content[lang];

  return (
    <section className={`coursera ${isDark ? 'dark' : ''}`}>
      <h2>
        <BookOpen size={20} />
        {text.title}
      </h2>
      <div className="coursera-content">
        <div className="coursera-header">
          <span className="period">{text.period}</span>
        </div>
        <p className="coursera-summary">{text.summary}</p>
        <div className="courses-section">
          <button 
            className="view-more-btn"
            onClick={() => setShowCourses(!showCourses)}
          >
            {showCourses ? (
              <>
                {text.viewLess}
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                {text.viewMore}
                <ChevronDown size={16} />
              </>
            )}
          </button>
          {showCourses && (
            <div className="courses-details">
              <div className="specializations">
                <h3>Specialization Programs</h3>
                {text.specializations.map((spec, i) => (
                  <div key={i} className="specialization-item">
                    <h4>{spec.title}</h4>
                    <ul className="courses-list">
                      {spec.courses.map((course, j) => (
                        <li key={j}>{course}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="individual-courses">
                <h3>Individual Courses</h3>
                {Object.entries(text.individualCourses).map(([year, universities]) => (
                  <div key={year} className="year-section">
                    <h4>Completed in {year}</h4>
                    {universities.map((uni, i) => (
                      <div key={i} className="university-section">
                        <h5>{uni.university}</h5>
                        <ul className="courses-list">
                          {uni.courses.map((course, j) => (
                            <li key={j}>{course}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Coursera; 