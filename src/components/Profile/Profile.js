import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      title: "PSTOR Info",
      description: "안녕하세요, 정보보안 새싹입니다.",
      subDescription: "사이버보안공학과 과정을 마치며 포렌식을 공부하다 이제는 차량 보안 혹은 이동수단 정보보안에 많은 관심이 있습니다.",
      moreButton: "더 보기"
    },
    en: {
      title: "PSTOR Info",
      description: "Hello, I'm a cybersecurity beginner.",
      subDescription: "After completing my studies in Cybersecurity Engineering, I developed an interest in digital forensics. Now, my focus has shifted to vehicle security and information security for transportation systems.",
      moreButton: "Read More"
    }
  };

  const text = content[lang];

  return (
    <section className={`profile ${isDark ? 'dark' : ''}`}>
      <h2>
        <User size={20} />
        {text.title}
      </h2>
      <div className="profile-content">
        <p className="description">{text.description}</p>
        <p className="sub-description">{text.subDescription}</p>
        <Link to="/about" className="more-link">
          {text.moreButton}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default Profile; 