import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import './Courses.css';

const Courses = () => {
  const { isDark, lang } = useTheme();

  const content = {
    ko: {
      title: "이수 과목",
      backButton: "돌아가기",
      totalCredits: "지금까지 총취득 학점: ",
      credits: "136",
      creditsUnit: "학점",
      university: {
        title: "학부",
        details: [
          "학부: 사이버보안공학과",
          "주전공: 사이버보안공학",
          "복수(연계) 전공: 의료공과계열 (과학기술 • 행정융복합 융합전공)"
        ]
      },
      categories: [
        {
          name: "전공",
          courses: [
            "전공 몰입",
            "컴퓨터 기초와 이해",
            "웹 프로그래밍 언어",
            "정보보호 개론과 윤리",
            "네트워크 일반",
            "정보 수학",
            "프로그래밍 언어",
            "한국사",
            "리버스 엔지니어링",
            "컴퓨터 구조 및 디지털 저장 매체",
            "유닉스 / 리눅스 (Linux - Unix)",
            "데이터 베이스 서버 보안",
            "객체지향 프로그래밍",
            "실전 시스템 해킹과 대응",
            "실전 네트워크 해킹과 대응",
            "암호학",
            "운영체제 보안 (캡스톤 디자인)",
            "통신소켓 프로그래밍",
            "사이버 포렌식",
            "모바일 프로그래밍",
            "실전 웹 서버 해킹과 대응 (캡스톤 디자인)",
            "침입 탐지 및 차단",
            "악성코드 제작 및 분석 실무",
            "실전 사물 인터넷 (IOT) 보안 실무",
            "디지털 포렌식과 법규",
            "개인정보 침해대응",
            "모의해킹 실무"
          ]
        },
        {
          name: "복수(연계) 전공",
          courses: [
            "인허가",
            "NCS 실무 기초",
            "의료기기 소프트웨어 엔지니어",
            "발명과 특허",
            "공직윤리",
            "공공기관의 이해"
          ]
        },
        {
          name: "교양 필수",
          courses: [
            "동기유발",
            "영어 Ⅰ",
            "비판적 사고와 글쓰기",
            "파트너십트레이닝 Ⅰ",
            "파트너십 트레이닝 Ⅱ",
            "영어 Ⅱ",
            "영어 Ⅲ",
            "기업가 정신과 리더십",
            "영어 Ⅳ",
            "파이썬으로 보는 데이터 세상",
            "현대생활과 재테크"
          ]
        },
        {
          name: "교양 선택",
          courses: [
            "컴퓨팅 사고와 문제 해결",
            "과학과 인간",
            "스쿼시",
            "환경과 인간",
            "빅데이터가 만드는 세상",
            "오픽 (OPIc)",
            "중국어 회화 Ⅰ",
            "미래의 환경과 에너지",
            "정치와 사회"
          ]
        },
        {
          name: "교양자유학예",
          courses: [
            "창업실무",
            "생활속의디자인",
            "산업재산권"
          ]
        }
      ]
    },
    en: {
      title: "Courses",
      backButton: "Go Back",
      totalCredits: "Total credits earned: ",
      credits: "136",
      creditsUnit: "credits",
      university: {
        title: "University",
        details: [
          "Undergraduate: Department of Cybersecurity Engineering",
          "Major: Cybersecurity Engineering",
          "Double (Linked) Major: Medical Engineering Department (Science and Technology • Administration Complex Convergence Major)"
        ]
      },
      categories: [
        {
          name: "Major",
          courses: [
            "Immersion in major",
            "Basic understanding of computers",
            "Web programming languages",
            "Introduction to information security and ethics",
            "General network",
            "Information mathematics",
            "Programming languages",
            "Korean history",
            "Reverse engineering",
            "Computer structure and digital storage media",
            "Unix / Linux (Linux - Unix)",
            "Database server security",
            "Object-oriented programming",
            "Practical system hacking and response",
            "Practical network hacking and response",
            "Cryptography",
            "Operating system security (capstone design)",
            "Communication socket programming",
            "Cyber forensics",
            "Mobile programming",
            "Practical web server hacking and response (capstone design)",
            "Intrusion detection and prevention",
            "Malware creation and analysis practice",
            "Practical Internet of Things (IoT) security practice",
            "Digital forensics and regulations",
            "Personal information breach response",
            "Penetration testing practice"
          ]
        },
        {
          name: "Double (Linked) Major",
          courses: [
            "Licensing",
            "NCS Practical Basics",
            "Medical device software engineer",
            "Invention and patent",
            "Public service ethics",
            "Understanding of public institutions"
          ]
        },
        {
          name: "General Education Required",
          courses: [
            "Motivation induction",
            "English Ⅰ",
            "Critical thinking and writing",
            "Partnership training Ⅰ",
            "Partnership training Ⅱ",
            "English Ⅱ",
            "English Ⅲ",
            "Entrepreneurship and leadership",
            "English Ⅳ",
            "Exploring the data world with Python",
            "Modern life and personal finance"
          ]
        },
        {
          name: "General Education Electives",
          courses: [
            "Computing thinking and problem-solving",
            "Science and human",
            "Squash",
            "Environment and human",
            "The world created by big data",
            "OPIc (Oral Proficiency Interview - computer)",
            "Chinese conversation Ⅰ",
            "Future environment and energy",
            "Politics and society"
          ]
        },
        {
          name: "General Education Liberal Arts",
          courses: [
            "Entrepreneurship Practice",
            "Design in Everyday Life",
            "Industrial Property Rights"
          ]
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <>
      <Helmet>
        <title>PSTOR CV - Courses</title>
      </Helmet>
      <div className="page">
        <Header />
        <main className={`courses ${isDark ? 'dark' : ''}`}>
          <div className="courses-content">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              {text.backButton}
            </Link>
            <h1>{text.title}</h1>
            <section className="university-info">
              <h2>{text.university.title}</h2>
              <ul className="details-list">
                {text.university.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </section>
            {text.categories.map((category, index) => (
              <section key={index} className="course-category">
                <h2>{category.name}</h2>
                <ul className="course-list">
                  {category.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </section>
            ))}
            <p className="total-credits">
              {text.totalCredits}
              <strong>{text.credits}</strong>
              {text.creditsUnit}
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Courses; 